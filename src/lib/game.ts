import { questions, type ProfileId } from "@/data/questions";
import { profileOrder } from "@/data/profiles";

export interface ScoreResult {
  raw: Record<ProfileId, number>;
  percentages: Record<ProfileId, number>;
  ranked: { id: ProfileId; percent: number }[];
  top: ProfileId;
  futureScore: number;
}

export type Answers = Record<number, string>; // questionId -> option key

export function calculateResult(answers: Answers): ScoreResult {
  const raw = Object.fromEntries(profileOrder.map((p) => [p, 0])) as Record<ProfileId, number>;

  for (const q of questions) {
    const key = answers[q.id];
    if (!key) continue;
    const option = q.options.find((o) => o.key === key);
    if (option) raw[option.profile] += 10;
  }

  const max = Math.max(...profileOrder.map((p) => raw[p]), 10);

  const percentages = Object.fromEntries(
    profileOrder.map((p) => {
      const base = raw[p] / max; // 0..1
      // Map to a friendly 35 - 95 range so no profile reads as zero.
      const percent = Math.round(35 + base * 57);
      return [p, Math.min(95, percent)];
    }),
  ) as Record<ProfileId, number>;

  const ranked = profileOrder
    .map((id) => ({ id, percent: percentages[id], raw: raw[id] }))
    .sort((a, b) => b.raw - a.raw || b.percent - a.percent)
    .map(({ id, percent }) => ({ id, percent }));

  const top = ranked[0]!.id;
  percentages[top] = Math.max(percentages[top], 80);
  ranked[0]!.percent = percentages[top];

  const consistency = raw[top] / 100; // 0..1
  const futureScore = Math.min(99, Math.round(62 + consistency * 33));

  return { raw, percentages, ranked, top, futureScore };
}

export interface PlayerInfo {
  name: string;
  college: string;
  contact: string;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  college?: string;
  contact?: string;
  score: number;
  profile: ProfileId;
  timestamp: number;
}

const KEY = "fs_leaderboard_v1";

const seed: LeaderboardEntry[] = [
  { id: "s1", name: "Rahul", college: "", score: 96, profile: "ai-innovator", timestamp: 0 },
  { id: "s2", name: "Ananya", college: "", score: 94, profile: "data-explorer", timestamp: 0 },
  { id: "s3", name: "Arjun", college: "", score: 92, profile: "tech-builder", timestamp: 0 },
  { id: "s4", name: "Student 04", college: "", score: 90, profile: "cyber-guardian", timestamp: 0 },
  {
    id: "s5",
    name: "Student 05",
    college: "",
    score: 88,
    profile: "business-strategist",
    timestamp: 0,
  },
];

export function getLeaderboard(): LeaderboardEntry[] {
  if (typeof window === "undefined") return seed;
  try {
    const stored = window.localStorage.getItem(KEY);
    if (!stored) return seed;
    const parsed = JSON.parse(stored) as LeaderboardEntry[];
    if (!Array.isArray(parsed)) return seed;
    return parsed;
  } catch {
    return seed;
  }
}

export function saveLeaderboard(entries: LeaderboardEntry[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(entries));
  } catch {
    /* storage unavailable */
  }
}

export function addLeaderboardEntry(
  entry: Omit<LeaderboardEntry, "id" | "timestamp">,
): { entries: LeaderboardEntry[]; rank: number; id: string } {
  const id = `p_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  const full: LeaderboardEntry = { ...entry, id, timestamp: Date.now() };
  const entries = [...getLeaderboard(), full].sort(
    (a, b) => b.score - a.score || a.timestamp - b.timestamp,
  );
  saveLeaderboard(entries);
  return { entries, rank: entries.findIndex((e) => e.id === id) + 1, id };
}

export function resetLeaderboard() {
  saveLeaderboard(seed);
}

export function exportCsv(entries: LeaderboardEntry[]): string {
  const rows = [
    ["Name", "College", "Contact", "Future Score", "Top Profile", "Date", "Time"],
    ...entries.map((e) => {
      const d = e.timestamp ? new Date(e.timestamp) : null;
      return [
        e.name,
        e.college ?? "",
        e.contact ?? "",
        String(e.score),
        e.profile,
        d ? d.toLocaleDateString() : "—",
        d ? d.toLocaleTimeString() : "—",
      ];
    }),
  ];
  return rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
}
