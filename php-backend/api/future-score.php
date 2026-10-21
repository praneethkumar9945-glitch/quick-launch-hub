<?php
declare(strict_types=1);

/**
 * Future Score game endpoint.
 *
 *  POST /api/future-score.php   — save a player's result, returns their rank (public)
 *  GET  /api/future-score.php   — public leaderboard (top N, no contact details)
 *  GET  /api/future-score.php?admin=1  — full rows incl. contact (admin key required)
 *
 * POST body (JSON):
 * { "name": "Asha", "college": "SDM", "contact": "98xxxxxxx",
 *   "score": 87, "profile": "ai-innovator", "answers": { "1": "a" } }
 */

require __DIR__ . '/../lib/bootstrap.php';

apply_cors($CONFIG);
$pdo    = db($CONFIG);
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

const VALID_PROFILES = [
    'ai-innovator',
    'data-explorer',
    'tech-builder',
    'cyber-guardian',
    'business-strategist',
    'creative-technologist',
];

/* -------------------------------------------------------------- SAVE --- */

if ($method === 'POST') {
    rate_limit($pdo, $CONFIG, 'future-score');

    $in = read_json_body();

    if (s($in, 'website') !== null) {           // honeypot
        json_out(['ok' => true, 'rank' => null]);
    }

    $name    = require_str($in, 'name', 120, 'Name');
    $score   = isset($in['score']) ? (int) $in['score'] : -1;
    $profile = require_str($in, 'profile', 60, 'Profile');

    if ($score < 0 || $score > 100) {
        fail('Score must be between 0 and 100.', 422, ['field' => 'score']);
    }
    if (!in_array($profile, VALID_PROFILES, true)) {
        fail('Unknown career profile.', 422, ['field' => 'profile']);
    }

    $contact = s($in, 'contact', 40);
    if ($contact !== null) {
        $digits = preg_replace('/\D+/', '', $contact) ?? '';
        if (strlen($digits) < 7 || strlen($digits) > 15) {
            fail('Please enter a valid contact number.', 422, ['field' => 'contact']);
        }
    }

    $answers = $in['answers'] ?? null;
    if ($answers !== null && !is_array($answers)) {
        $answers = null;
    }

    $stmt = $pdo->prepare(
        'INSERT INTO future_scores (name, college, contact, score, profile, answers, ip_address)
         VALUES (:name, :college, :contact, :score, :profile, :answers, :ip)'
    );
    $stmt->execute([
        ':name'    => $name,
        ':college' => s($in, 'college', 160),
        ':contact' => $contact,
        ':score'   => $score,
        ':profile' => $profile,
        ':answers' => $answers ? json_encode($answers, JSON_UNESCAPED_UNICODE) : null,
        ':ip'      => client_ip(),
    ]);

    $id = (int) $pdo->lastInsertId();

    // Rank = how many strictly better scores exist, +1 (earlier entry wins ties)
    $rankStmt = $pdo->prepare(
        'SELECT COUNT(*) + 1 FROM future_scores
          WHERE score > :s OR (score = :s2 AND id < :id)'
    );
    $rankStmt->execute([':s' => $score, ':s2' => $score, ':id' => $id]);
    $rank = (int) $rankStmt->fetchColumn();

    $total = (int) $pdo->query('SELECT COUNT(*) FROM future_scores')->fetchColumn();

    json_out([
        'ok'          => true,
        'id'          => $id,
        'rank'        => $rank,
        'total'       => $total,
        'leaderboard' => public_leaderboard($pdo, 10),
    ], 201);
}

/* ------------------------------------------------------------- READ ---- */

if ($method === 'GET') {
    if (isset($_GET['admin'])) {
        require_admin($CONFIG);

        $rows  = $pdo->query('SELECT * FROM future_scores ORDER BY score DESC, id ASC')->fetchAll();
        $stats = $pdo->query(
            'SELECT COUNT(*) AS total,
                    COALESCE(ROUND(AVG(score)), 0) AS average,
                    SUM(DATE(created_at) = CURDATE()) AS today
             FROM future_scores'
        )->fetch();
        $byProfile = $pdo->query(
            'SELECT profile, COUNT(*) AS c FROM future_scores GROUP BY profile ORDER BY c DESC'
        )->fetchAll();

        json_out(['ok' => true, 'stats' => $stats, 'by_profile' => $byProfile, 'items' => $rows]);
    }

    $limit = min(max((int) ($_GET['limit'] ?? 10), 1), 100);
    json_out(['ok' => true, 'leaderboard' => public_leaderboard($pdo, $limit)]);
}

fail('Method not allowed.', 405);

/* ---------------------------------------------------------------------- */

function public_leaderboard(PDO $pdo, int $limit): array
{
    $stmt = $pdo->prepare(
        'SELECT id, name, college, score, profile, created_at
           FROM future_scores
          ORDER BY score DESC, id ASC
          LIMIT :l'
    );
    $stmt->bindValue(':l', $limit, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll();
}
