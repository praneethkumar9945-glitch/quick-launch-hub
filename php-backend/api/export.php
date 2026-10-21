<?php
declare(strict_types=1);

/**
 * CSV export (admin key required).
 *
 *  /api/export.php?what=applications&key=ADMIN_KEY
 *  /api/export.php?what=future-scores&key=ADMIN_KEY
 */

require __DIR__ . '/../lib/bootstrap.php';

apply_cors($CONFIG);
require_admin($CONFIG);

$pdo  = db($CONFIG);
$what = $_GET['what'] ?? 'applications';

if ($what === 'future-scores') {
    $rows = $pdo->query('SELECT * FROM future_scores ORDER BY score DESC, id ASC')->fetchAll();
    csv_download(
        'future-scores-' . date('Y-m-d') . '.csv',
        ['ID', 'Name', 'College', 'Contact', 'Future Score', 'Top Profile', 'Submitted At'],
        array_map(static fn(array $r): array => [
            $r['id'], $r['name'], $r['college'], $r['contact'],
            $r['score'], $r['profile'], $r['created_at'],
        ], $rows)
    );
}

if ($what === 'applications') {
    $rows = $pdo->query('SELECT * FROM applications ORDER BY created_at DESC')->fetchAll();
    csv_download(
        'applications-' . date('Y-m-d') . '.csv',
        ['ID', 'Form', 'Program', 'Name', 'Email', 'Phone', 'City', 'College',
         'Education', 'Role', 'Experience', 'Goal', 'Extra', 'Page', 'Submitted At'],
        array_map(static fn(array $r): array => [
            $r['id'], $r['form_type'], $r['program'], $r['name'], $r['email'], $r['phone'],
            $r['city'], $r['college'], $r['education'], $r['role'], $r['experience'],
            $r['goal'], $r['extra'], $r['source_page'], $r['created_at'],
        ], $rows)
    );
}

fail('Unknown export type. Use what=applications or what=future-scores.', 422);
