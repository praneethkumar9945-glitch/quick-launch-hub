#!/usr/bin/env bash
# Builds a static copy of the site for Apache shared hosting (GoDaddy/cPanel).
# Upload the contents of godaddy-build/ into public_html.
set -e
STATIC_BUILD=1 npx vite build
rm -rf godaddy-build && cp -r dist/client godaddy-build
mv godaddy-build/_shell.html godaddy-build/index.html
cat > godaddy-build/.htaccess <<'H'
DirectoryIndex index.html
Options -Indexes
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  RewriteRule ^ index.html [L]
</IfModule>
H
