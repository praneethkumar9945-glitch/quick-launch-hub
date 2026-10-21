<?php
declare(strict_types=1);

/**
 * Application forms endpoint.
 *
 *  POST /api/applications.php   — submit an application (public)
 *  GET  /api/applications.php   — list applications (admin key required)
 *
 * POST body (JSON):
 * {
 *   "form_type": "workshop",           // required
 *   "program":   "AI Workshop",        // optional
 *   "name": "...", "email": "...", "phone": "...",   // required
 *   "city": "...", "college": "...", "education": "...",
 *   "role": "...", "experience": "...", "goal": "...",
 *   "extra": { "portfolio": "...", "tools": "..." }, // any extra fields
 *   "source_page": "/workshop"
 * }
 */

require __DIR__ . '/../lib/bootstrap.php';

apply_cors($CONFIG);
$pdo    = db($CONFIG);
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

/* ------------------------------------------------------------ SUBMIT --- */

if ($method === 'POST') {
    rate_limit($pdo, $CONFIG, 'applications');

    $in = read_json_body();

    // Honeypot: bots fill hidden fields, humans never do.
    if (s($in, 'website') !== null) {
        json_out(['ok' => true, 'id' => 0]); // pretend success
    }

    $formType = require_str($in, 'form_type', 60, 'Form type');
    $name     = require_str($in, 'name', 120, 'Full name');
    $email    = require_email($in);
    $phone    = require_phone($in);

    $extra = $in['extra'] ?? null;
    if ($extra !== null && !is_array($extra)) {
        $extra = null;
    }

    $stmt = $pdo->prepare(
        'INSERT INTO applications
           (form_type, program, name, email, phone, city, college, education,
            role, experience, goal, extra, source_page, ip_address, user_agent)
         VALUES
           (:form_type, :program, :name, :email, :phone, :city, :college, :education,
            :role, :experience, :goal, :extra, :source_page, :ip, :ua)'
    );

    $stmt->execute([
        ':form_type'   => $formType,
        ':program'     => s($in, 'program', 160),
        ':name'        => $name,
        ':email'       => $email,
        ':phone'       => $phone,
        ':city'        => s($in, 'city', 120),
        ':college'     => s($in, 'college', 160),
        ':education'   => s($in, 'education', 160),
        ':role'        => s($in, 'role', 120),
        ':experience'  => s($in, 'experience', 60),
        ':goal'        => s($in, 'goal', 4000),
        ':extra'       => $extra ? json_encode($extra, JSON_UNESCAPED_UNICODE) : null,
        ':source_page' => s($in, 'source_page', 255),
        ':ip'          => client_ip(),
        ':ua'          => user_agent(),
    ]);

    $id = (int) $pdo->lastInsertId();

    notify(
        $CONFIG,
        "New application: {$formType}",
        "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nForm: {$formType}\nProgram: " .
        (s($in, 'program', 160) ?? '-') . "\n"
    );

    json_out(['ok' => true, 'id' => $id, 'message' => 'Application received.'], 201);
}

/* -------------------------------------------------------------- LIST --- */

if ($method === 'GET') {
    require_admin($CONFIG);

    $limit  = min(max((int) ($_GET['limit'] ?? 200), 1), 1000);
    $offset = max((int) ($_GET['offset'] ?? 0), 0);
    $type   = s($_GET, 'form_type', 60);

    $where  = $type ? 'WHERE form_type = :t' : '';
    $sql    = "SELECT * FROM applications $where ORDER BY created_at DESC LIMIT :l OFFSET :o";
    $stmt   = $pdo->prepare($sql);
    if ($type) {
        $stmt->bindValue(':t', $type);
    }
    $stmt->bindValue(':l', $limit, PDO::PARAM_INT);
    $stmt->bindValue(':o', $offset, PDO::PARAM_INT);
    $stmt->execute();

    $total = (int) $pdo->query('SELECT COUNT(*) FROM applications')->fetchColumn();

    json_out(['ok' => true, 'total' => $total, 'items' => $stmt->fetchAll()]);
}

fail('Method not allowed.', 405);
