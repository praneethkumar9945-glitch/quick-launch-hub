<?php
declare(strict_types=1);

/**
 * Shared bootstrap: config, PDO connection, CORS, JSON helpers, validation,
 * rate limiting and admin auth. Included by every endpoint.
 */

date_default_timezone_set('Asia/Kolkata');
mb_internal_encoding('UTF-8');

$CONFIG = require __DIR__ . '/../config.php';

/* ------------------------------------------------------------------ CORS */

function apply_cors(array $config): void
{
    $origin  = $_SERVER['HTTP_ORIGIN'] ?? '';
    $allowed = $config['allowed_origins'] ?? [];

    if (in_array('*', $allowed, true)) {
        header('Access-Control-Allow-Origin: *');
    } elseif ($origin !== '' && in_array($origin, $allowed, true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Vary: Origin');
    }

    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, X-Admin-Key');
    header('Access-Control-Max-Age: 86400');

    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}

/* ------------------------------------------------------------- Responses */

function json_out($data, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function fail(string $message, int $status = 400, array $extra = []): void
{
    json_out(array_merge(['ok' => false, 'error' => $message], $extra), $status);
}

/* -------------------------------------------------------------- Database */

function db(array $config): PDO
{
    static $pdo = null;
    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $d   = $config['db'];
    $dsn = "mysql:host={$d['host']};dbname={$d['name']};charset={$d['charset']}";

    try {
        $pdo = new PDO($dsn, $d['user'], $d['password'], [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]);
    } catch (PDOException $e) {
        error_log('DB connect failed: ' . $e->getMessage());
        fail('Database unavailable. Please try again later.', 503);
    }

    return $pdo;
}

/* ----------------------------------------------------------------- Input */

function read_json_body(): array
{
    $raw = file_get_contents('php://input') ?: '';
    if (trim($raw) === '') {
        return $_POST; // allow classic form posts too
    }
    $data = json_decode($raw, true);
    if (!is_array($data)) {
        fail('Invalid JSON body.');
    }
    return $data;
}

function s(array $src, string $key, int $max = 255): ?string
{
    if (!isset($src[$key]) || !is_scalar($src[$key])) {
        return null;
    }
    $v = trim((string) $src[$key]);
    if ($v === '') {
        return null;
    }
    return mb_substr($v, 0, $max);
}

function require_str(array $src, string $key, int $max, string $label): string
{
    $v = s($src, $key, $max);
    if ($v === null) {
        fail("$label is required.", 422, ['field' => $key]);
    }
    return $v;
}

function require_email(array $src, string $key = 'email'): string
{
    $v = require_str($src, $key, 180, 'Email');
    if (!filter_var($v, FILTER_VALIDATE_EMAIL)) {
        fail('Please enter a valid email address.', 422, ['field' => $key]);
    }
    return strtolower($v);
}

function require_phone(array $src, string $key = 'phone'): string
{
    $v      = require_str($src, $key, 40, 'Phone number');
    $digits = preg_replace('/\D+/', '', $v) ?? '';
    if (strlen($digits) < 7 || strlen($digits) > 15) {
        fail('Please enter a valid phone number.', 422, ['field' => $key]);
    }
    return $v;
}

function client_ip(): string
{
    return substr((string) ($_SERVER['REMOTE_ADDR'] ?? ''), 0, 45);
}

function user_agent(): string
{
    return substr((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 255);
}

/* ----------------------------------------------------------- Rate limits */

function rate_limit(PDO $pdo, array $config, string $endpoint): void
{
    $max    = (int) ($config['rate_limit']['max_per_window'] ?? 10);
    $window = (int) ($config['rate_limit']['window_seconds'] ?? 600);
    $bucket = substr($endpoint . '|' . client_ip(), 0, 120);

    $pdo->prepare(
        'INSERT INTO rate_limits (bucket, hits, window_start)
         VALUES (:b, 1, NOW())
         ON DUPLICATE KEY UPDATE
           hits         = IF(window_start < (NOW() - INTERVAL :w SECOND), 1, hits + 1),
           window_start = IF(window_start < (NOW() - INTERVAL :w2 SECOND), NOW(), window_start)'
    )->execute([':b' => $bucket, ':w' => $window, ':w2' => $window]);

    $stmt = $pdo->prepare('SELECT hits FROM rate_limits WHERE bucket = :b');
    $stmt->execute([':b' => $bucket]);
    if ((int) ($stmt->fetchColumn() ?: 0) > $max) {
        fail('Too many submissions. Please try again later.', 429);
    }
}

/* ----------------------------------------------------------- Admin auth  */

function admin_key_from_request(): string
{
    return (string) ($_SERVER['HTTP_X_ADMIN_KEY'] ?? $_GET['key'] ?? $_POST['key'] ?? '');
}

function require_admin(array $config): void
{
    $expected = (string) ($config['admin_key'] ?? '');
    $given    = admin_key_from_request();
    if ($expected === '' || !hash_equals($expected, $given)) {
        fail('Unauthorized.', 401);
    }
}

/* ------------------------------------------------------------- Utilities */

function notify(array $config, string $subject, string $body): void
{
    $to = trim((string) ($config['notify_email'] ?? ''));
    if ($to === '' || !function_exists('mail')) {
        return;
    }
    @mail(
        $to,
        $subject,
        $body,
        "From: " . ($config['from_email'] ?? 'no-reply@localhost') . "\r\n" .
        "Content-Type: text/plain; charset=utf-8\r\n"
    );
}

function csv_download(string $filename, array $header, array $rows): void
{
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    $out = fopen('php://output', 'w');
    fwrite($out, "\xEF\xBB\xBF"); // BOM so Excel reads UTF-8
    fputcsv($out, $header);
    foreach ($rows as $row) {
        fputcsv($out, $row);
    }
    fclose($out);
    exit;
}

function e(?string $v): string
{
    return htmlspecialchars((string) $v, ENT_QUOTES, 'UTF-8');
}
