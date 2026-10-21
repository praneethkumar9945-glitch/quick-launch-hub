<?php
/**
 * Edit these values on your hosting (cPanel / VPS), then never commit real
 * credentials to a public repo.
 */

return [
    // --- MySQL ---
    'db' => [
        'host'     => getenv('DB_HOST') ?: 'localhost',
        'name'     => getenv('DB_NAME') ?: 'skillai',
        'user'     => getenv('DB_USER') ?: 'skillai_user',
        'password' => getenv('DB_PASS') ?: 'change-me',
        'charset'  => 'utf8mb4',
    ],

    // --- Which browser origins may call this API ---
    // Add your live site + preview domains. '*' disables the whitelist (not recommended).
    'allowed_origins' => [
        'http://localhost:8080',
        'https://your-site.lovable.app',
        'https://www.your-domain.com',
    ],

    // --- Admin ---
    // Used by admin/ pages and the JSON/CSV export endpoints.
    // Change it. Long random string.
    'admin_key' => getenv('ADMIN_KEY') ?: 'change-this-to-a-long-random-string',

    // --- Notifications (optional). Leave empty to disable emails. ---
    'notify_email' => '',
    'from_email'   => 'no-reply@your-domain.com',

    // --- Anti-spam ---
    'rate_limit' => [
        'max_per_window' => 10,   // submissions
        'window_seconds' => 600,  // per 10 minutes, per IP+endpoint
    ],
];
