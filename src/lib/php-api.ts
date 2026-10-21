/**
 * Client for the standalone PHP + MySQL backend (see /php-backend).
 *
 * Set VITE_PHP_API_URL in .env to the folder that contains the PHP files,
 * e.g. https://www.your-domain.com/api
 *
 * When the variable is empty every call resolves to { ok: false, offline: true }
 * so the UI keeps working locally before the backend is deployed.
 */

export const PHP_API_URL: string = (import.meta.env['VITE_PHP_API_URL'] as string | undefined)
  ?.replace(/\/+$/, "") ?? "";

export const phpBackendEnabled = PHP_API_URL !== "";

export interface ApiResult<T = unknown> {
  ok: boolean;
  offline?: boolean;
  error?: string;
  data?: T;
}

async function post<T>(endpoint: string, body: unknown): Promise<ApiResult<T>> {
  if (!phpBackendEnabled) return { ok: false, offline: true };

  try {
    const res = await fetch(`${PHP_API_URL}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const json = (await res.json().catch(() => ({}))) as Record<string, unknown>;
    if (!res.ok || json['ok'] !== true) {
      return { ok: false, error: String(json['error'] ?? `Request failed (${res.status})`) };
    }
    return { ok: true, data: json as T };
  } catch {
    return { ok: false, error: "Network error. Please check your connection." };
  }
}

async function get<T>(endpoint: string): Promise<ApiResult<T>> {
  if (!phpBackendEnabled) return { ok: false, offline: true };
  try {
    const res = await fetch(`${PHP_API_URL}/${endpoint}`);
    const json = (await res.json().catch(() => ({}))) as Record<string, unknown>;
    if (!res.ok || json['ok'] !== true) {
      return { ok: false, error: String(json['error'] ?? `Request failed (${res.status})`) };
    }
    return { ok: true, data: json as T };
  } catch {
    return { ok: false, error: "Network error." };
  }
}

/* ----------------------------------------------------------- Applications */

export interface ApplicationPayload {
  form_type: string;
  program?: string;
  name: string;
  email: string;
  phone: string;
  city?: string;
  college?: string;
  education?: string;
  role?: string;
  experience?: string;
  goal?: string;
  extra?: Record<string, string>;
  source_page?: string;
}

export function submitApplication(payload: ApplicationPayload) {
  return post<{ id: number }>("applications.php", {
    ...payload,
    source_page:
      payload.source_page ?? (typeof window !== "undefined" ? window.location.pathname : ""),
  });
}

/* ---------------------------------------------------------- Future Score  */

export interface FutureScorePayload {
  name: string;
  college?: string;
  contact?: string;
  score: number;
  profile: string;
  answers?: Record<string, string>;
}

export interface RemoteLeaderboardRow {
  id: number;
  name: string;
  college: string | null;
  score: number;
  profile: string;
  created_at: string;
}

export function saveFutureScore(payload: FutureScorePayload) {
  return post<{ id: number; rank: number; total: number; leaderboard: RemoteLeaderboardRow[] }>(
    "future-score.php",
    payload,
  );
}

export function fetchLeaderboard(limit = 10) {
  return get<{ leaderboard: RemoteLeaderboardRow[] }>(`future-score.php?limit=${limit}`);
}
