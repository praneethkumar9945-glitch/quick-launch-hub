<?php
/**
 * Edit these values on your hosting (cPanel / VPS), then never commit real
 * credentials to a public repo.
 */

return [
    // --- MySQL ---
    'db' => [
        'host'     => getenv('DB_HOST') ?: 'localhost',
        'port'     => (int) (getenv('DB_PORT') ?: 3306),
        'name'     => getenv('DB_NAME') ?: 'skillainew',
        'user'     => getenv('DB_USER') ?: 'praneeth',
        // Set DB_PASS in hosting environment, or enter it directly on GoDaddy.
        'password' => getenv('DB_PASS') ?: '',
        'charset'  => 'utf8mb4',
    ],

    // --- Which browser origins may call this API ---
    // Add your live site + preview domains. '*' disables the whitelist (not recommended).
    'allowed_origins' => [
        'http://localhost:8080',
        'https://skillaiindia.com',
        'https://www.skillaiindia.com',
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
