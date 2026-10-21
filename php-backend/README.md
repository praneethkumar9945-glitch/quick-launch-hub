# PHP + MySQL backend

Standalone backend for the Skill AI India site: **application forms** and the
**Future Score** game. Host it on any normal PHP hosting (cPanel, Hostinger,
VPS). PHP 8.0+ and MySQL 5.7+/MariaDB 10.3+.

## 1. Upload

Upload the whole `php-backend/` folder to your hosting so it is reachable at,
for example:

```
https://api.your-domain.com/          (document root = php-backend/)
or
https://www.your-domain.com/api/      (folder named "api" in public_html)
```

## 2. Create the database

In cPanel → MySQL Databases, create a database + user, then import
`schema.sql` via phpMyAdmin (SQL tab) or:

```bash
mysql -u USER -p DBNAME < schema.sql
```

## 3. Configure

Edit `config.php`:

- `db` — host, name, user, password
- `allowed_origins` — add your live site domain(s); this is the CORS whitelist
- `admin_key` — a long random string (used for admin panel + exports)
- `notify_email` — optional, get an email on every submission

## 4. Verify

Open `https://.../api/health.php` — you should see
`{"ok":true,"db":"connected", ...}`.

## 5. Point the website at it

In the site's `.env` (project root), set:

```
VITE_PHP_API_URL=https://www.your-domain.com/api
```

Then rebuild/redeploy the site. If the variable is empty, forms and the game
fall back to local-only behaviour, so nothing breaks before the backend is up.

## Endpoints

| Method | Path | Auth | Purpose |
|---|---|---|---|
| POST | `/api/applications.php` | public | Submit any application form |
| GET | `/api/applications.php?form_type=workshop` | admin key | List applications |
| POST | `/api/future-score.php` | public | Save a game result, returns rank + top 10 |
| GET | `/api/future-score.php?limit=10` | public | Public leaderboard (no contact numbers) |
| GET | `/api/future-score.php?admin=1` | admin key | Full rows + stats |
| GET | `/api/export.php?what=applications` | admin key | CSV download |
| GET | `/api/export.php?what=future-scores` | admin key | CSV download |
| GET | `/api/health.php` | public | Connection check |

Admin key is sent as the header `X-Admin-Key: ...` or `?key=...`.

Admin panel (server-rendered, no build step): `https://.../api/admin/`

## Example

```bash
curl -X POST https://www.your-domain.com/api/applications.php \
  -H 'Content-Type: application/json' \
  -d '{"form_type":"workshop","name":"Asha","email":"a@b.com","phone":"9876543210"}'
```

## Security notes

- All queries use PDO prepared statements (no SQL injection).
- CORS is a strict origin whitelist; update it when your domain changes.
- Public POST endpoints are rate limited per IP (see `config.php`).
- Hidden `website` honeypot field silently drops bot submissions.
- Contact numbers are never returned by the public leaderboard endpoint.
- Keep `config.php` outside version control once real credentials are in it;
  the bundled `.htaccess` blocks direct web access to it and to `lib/`.
