<?php
declare(strict_types=1);

/** Quick check that PHP + MySQL + CORS are wired correctly. */

require __DIR__ . '/../lib/bootstrap.php';

apply_cors($CONFIG);

$pdo = db($CONFIG);
$pdo->query('SELECT 1');

json_out([
    'ok'      => true,
    'php'     => PHP_VERSION,
    'db'      => 'connected',
    'time'    => date('c'),
    'tables'  => [
        'applications'  => (int) $pdo->query('SELECT COUNT(*) FROM applications')->fetchColumn(),
        'future_scores' => (int) $pdo->query('SELECT COUNT(*) FROM future_scores')->fetchColumn(),
    ],
]);
