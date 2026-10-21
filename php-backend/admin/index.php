<?php
declare(strict_types=1);

/**
 * Minimal server-rendered admin panel.
 * Open:  https://your-domain.com/api/admin/    and enter the admin key.
 * The key is kept in a session cookie, never in the URL after login.
 */

require __DIR__ . '/../lib/bootstrap.php';

session_start();

if (($_POST['action'] ?? '') === 'logout') {
    session_destroy();
    header('Location: index.php');
    exit;
}

if (isset($_POST['key'])) {
    if (hash_equals((string) $CONFIG['admin_key'], (string) $_POST['key'])) {
        $_SESSION['admin'] = true;
    } else {
        $loginError = 'Wrong key.';
    }
}

$authed = !empty($_SESSION['admin']);
$tab    = $_GET['tab'] ?? 'applications';

if ($authed) {
    $pdo = db($CONFIG);

    if (($_POST['action'] ?? '') === 'delete' && isset($_POST['table'], $_POST['id'])) {
        $table = $_POST['table'] === 'future_scores' ? 'future_scores' : 'applications';
        $stmt  = $pdo->prepare("DELETE FROM $table WHERE id = :id");
        $stmt->execute([':id' => (int) $_POST['id']]);
        header('Location: index.php?tab=' . urlencode((string) $tab));
        exit;
    }

    $applications = $pdo->query('SELECT * FROM applications ORDER BY created_at DESC LIMIT 500')->fetchAll();
    $scores       = $pdo->query('SELECT * FROM future_scores ORDER BY score DESC, id ASC LIMIT 500')->fetchAll();
    $scoreStats   = $pdo->query(
        'SELECT COUNT(*) AS total, COALESCE(ROUND(AVG(score)),0) AS average,
                SUM(DATE(created_at)=CURDATE()) AS today FROM future_scores'
    )->fetch();
}
?>
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Admin — Skill AI India</title>
<style>
  :root { color-scheme: dark; --bg:#0b0f14; --card:#131a23; --line:#233040; --txt:#e6edf5; --mut:#8fa3b8; --acc:#8ef04a; }
  * { box-sizing: border-box; }
  body { margin:0; background:var(--bg); color:var(--txt); font:15px/1.5 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
  .wrap { max-width:1200px; margin:0 auto; padding:32px 20px 64px; }
  h1 { font-size:26px; margin:0 0 4px; }
  p.sub { color:var(--mut); margin:0 0 24px; }
  .card { background:var(--card); border:1px solid var(--line); border-radius:14px; padding:18px; }
  .grid { display:grid; gap:14px; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); margin-bottom:22px; }
  .grid .card b { display:block; font-size:28px; color:var(--acc); }
  .grid .card span { color:var(--mut); font-size:12px; text-transform:uppercase; letter-spacing:.12em; }
  nav { display:flex; gap:8px; margin-bottom:16px; flex-wrap:wrap; }
  nav a, .btn { display:inline-block; padding:8px 14px; border:1px solid var(--line); border-radius:10px;
                color:var(--txt); text-decoration:none; font-size:14px; background:transparent; cursor:pointer; }
  nav a.on { background:var(--acc); color:#06120a; border-color:var(--acc); font-weight:600; }
  table { width:100%; border-collapse:collapse; font-size:13px; }
  th, td { text-align:left; padding:9px 10px; border-bottom:1px solid var(--line); vertical-align:top; }
  th { color:var(--mut); font-weight:500; white-space:nowrap; }
  .scroll { overflow-x:auto; }
  form.inline { display:inline; }
  .login { max-width:360px; margin:12vh auto; }
  input[type=password] { width:100%; padding:11px 13px; border-radius:10px; border:1px solid var(--line);
                         background:#0e141c; color:var(--txt); margin-bottom:10px; }
  .err { color:#ff8080; font-size:13px; }
</style>
</head>
<body>
<div class="wrap">

<?php if (!$authed): ?>
  <div class="card login">
    <h1>Admin login</h1>
    <p class="sub">Enter the admin key from <code>config.php</code>.</p>
    <form method="post">
      <input type="password" name="key" placeholder="Admin key" autofocus>
      <?php if (!empty($loginError)): ?><p class="err"><?= e($loginError) ?></p><?php endif; ?>
      <button class="btn" type="submit">Sign in</button>
    </form>
  </div>
<?php else: ?>

  <h1>Admin Dashboard</h1>
  <p class="sub">Applications &amp; Future Score results</p>

  <nav>
    <a class="<?= $tab === 'applications' ? 'on' : '' ?>" href="?tab=applications">Applications (<?= count($applications) ?>)</a>
    <a class="<?= $tab === 'scores' ? 'on' : '' ?>" href="?tab=scores">Future Score (<?= count($scores) ?>)</a>
    <a href="../api/export.php?what=applications&key=<?= urlencode((string) $CONFIG['admin_key']) ?>">Export applications CSV</a>
    <a href="../api/export.php?what=future-scores&key=<?= urlencode((string) $CONFIG['admin_key']) ?>">Export scores CSV</a>
    <form class="inline" method="post"><button class="btn" name="action" value="logout">Log out</button></form>
  </nav>

  <?php if ($tab === 'scores'): ?>
    <div class="grid">
      <div class="card"><span>Total players</span><b><?= (int) $scoreStats['total'] ?></b></div>
      <div class="card"><span>Average score</span><b><?= (int) $scoreStats['average'] ?></b></div>
      <div class="card"><span>Today</span><b><?= (int) $scoreStats['today'] ?></b></div>
    </div>
    <div class="card scroll">
      <table>
        <tr><th>#</th><th>Name</th><th>College</th><th>Contact</th><th>Score</th><th>Profile</th><th>When</th><th></th></tr>
        <?php foreach ($scores as $i => $r): ?>
          <tr>
            <td><?= $i + 1 ?></td>
            <td><?= e($r['name']) ?></td>
            <td><?= e($r['college']) ?: '—' ?></td>
            <td><?= e($r['contact']) ?: '—' ?></td>
            <td><b style="color:var(--acc)"><?= (int) $r['score'] ?></b></td>
            <td><?= e($r['profile']) ?></td>
            <td><?= e($r['created_at']) ?></td>
            <td>
              <form class="inline" method="post" onsubmit="return confirm('Delete this entry?')">
                <input type="hidden" name="table" value="future_scores">
                <input type="hidden" name="id" value="<?= (int) $r['id'] ?>">
                <button class="btn" name="action" value="delete">Delete</button>
              </form>
            </td>
          </tr>
        <?php endforeach; ?>
        <?php if (!$scores): ?><tr><td colspan="8">No entries yet.</td></tr><?php endif; ?>
      </table>
    </div>
  <?php else: ?>
    <div class="card scroll">
      <table>
        <tr><th>ID</th><th>Form</th><th>Program</th><th>Name</th><th>Email</th><th>Phone</th>
            <th>City</th><th>Goal</th><th>When</th><th></th></tr>
        <?php foreach ($applications as $r): ?>
          <tr>
            <td><?= (int) $r['id'] ?></td>
            <td><?= e($r['form_type']) ?></td>
            <td><?= e($r['program']) ?: '—' ?></td>
            <td><?= e($r['name']) ?></td>
            <td><?= e($r['email']) ?></td>
            <td><?= e($r['phone']) ?></td>
            <td><?= e($r['city']) ?: '—' ?></td>
            <td style="max-width:280px"><?= e(mb_substr((string) $r['goal'], 0, 160)) ?></td>
            <td><?= e($r['created_at']) ?></td>
            <td>
              <form class="inline" method="post" onsubmit="return confirm('Delete this application?')">
                <input type="hidden" name="table" value="applications">
                <input type="hidden" name="id" value="<?= (int) $r['id'] ?>">
                <button class="btn" name="action" value="delete">Delete</button>
              </form>
            </td>
          </tr>
        <?php endforeach; ?>
        <?php if (!$applications): ?><tr><td colspan="10">No applications yet.</td></tr><?php endif; ?>
      </table>
    </div>
  <?php endif; ?>

<?php endif; ?>
</div>
</body>
</html>
