import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Trophy } from "lucide-react";
import {
  addLeaderboardEntry,
  getLeaderboard,
  type LeaderboardEntry,
  type PlayerInfo,
} from "@/lib/game";
import { fetchLeaderboard, phpBackendEnabled, saveFutureScore } from "@/lib/php-api";
import type { ProfileId } from "@/data/questions";

interface Props {
  score: number;
  profile: ProfileId;
  player?: PlayerInfo | null;
  onClaimed?: (name: string, college: string) => void;
}

const MEDALS = ["🔥", "⚡", "🚀", "🤖", "📊"];

export function Leaderboard({ score, profile, player, onClaimed }: Props) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>(() =>
    [...getLeaderboard()].sort((a, b) => b.score - a.score).slice(0, 10),
  );
  const [name, setName] = useState(player?.name ?? "");
  const [college, setCollege] = useState(player?.college ?? "");
  const [rank, setRank] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  // Pull the live leaderboard from the PHP backend when it is configured.
  useEffect(() => {
    if (!phpBackendEnabled) return;
    let cancelled = false;
    void fetchLeaderboard(10).then((res) => {
      if (cancelled || !res.ok || !res.data) return;
      setEntries(
        res.data.leaderboard.map((r) => ({
          id: String(r.id),
          name: r.name,
          college: r.college ?? "",
          score: r.score,
          profile: r.profile as ProfileId,
          timestamp: new Date(r.created_at).getTime(),
        })),
      );
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const claim = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Please enter your first name.");
      return;
    }
    setError("");
    setSaving(true);

    if (phpBackendEnabled) {
      const res = await saveFutureScore({
        name: trimmed,
        college: college.trim(),
        contact: player?.contact,
        score,
        profile,
      });
      setSaving(false);
      if (res.ok && res.data) {
        setEntries(
          res.data.leaderboard.map((r) => ({
            id: String(r.id),
            name: r.name,
            college: r.college ?? "",
            score: r.score,
            profile: r.profile as ProfileId,
            timestamp: new Date(r.created_at).getTime(),
          })),
        );
        setRank(res.data.rank);
        onClaimed?.(trimmed, college.trim());
        return;
      }
      setError(res.error ?? "Could not save your score. Saved on this device instead.");
    }

    const result = addLeaderboardEntry({
      name: trimmed,
      college: college.trim(),
      contact: player?.contact,
      score,
      profile,
    });
    setSaving(false);
    setEntries([...result.entries].sort((a, b) => b.score - a.score).slice(0, 10));
    setRank(result.rank);
    onClaimed?.(trimmed, college.trim());
  };


  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      <h3 className="flex items-center gap-2 font-display text-lg font-bold uppercase tracking-widest">
        <Trophy className="h-5 w-5 text-primary" /> Future Score Leaderboard
      </h3>

      <ol className="mt-5 grid gap-2">
        {entries.map((entry, i) => (
          <li
            key={entry.id}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 ${
              rank !== null && i + 1 === rank ? "glow-secondary bg-secondary/10" : "bg-muted/40"
            }`}
          >
            <span className="w-6 text-lg">{MEDALS[i] ?? "•"}</span>
            <span className="flex-1 truncate font-medium">
              {entry.name}
              {entry.college ? (
                <span className="ml-2 text-xs text-muted-foreground">{entry.college}</span>
              ) : null}
            </span>
            <span className="font-display font-bold text-secondary">{entry.score}</span>
          </li>
        ))}
      </ol>

      {rank === null ? (
        <form onSubmit={claim} className="mt-6 grid gap-3">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Enter the leaderboard
          </p>
          <label className="sr-only" htmlFor="lb-name">
            First name
          </label>
          <input
            id="lb-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First name"
            maxLength={24}
            className="rounded-xl border border-input bg-background/60 px-4 py-3 outline-none placeholder:text-muted-foreground focus:border-secondary"
          />
          <label className="sr-only" htmlFor="lb-college">
            College (optional)
          </label>
          <input
            id="lb-college"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            placeholder="College (optional)"
            maxLength={40}
            className="rounded-xl border border-input bg-background/60 px-4 py-3 outline-none placeholder:text-muted-foreground focus:border-secondary"
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <button
            type="submit"
            disabled={saving}
            className="glow-primary rounded-xl bg-primary px-6 py-3 font-display font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
          >
            {saving ? "Saving…" : "Claim My Score 🚀"}
          </button>

        </form>
      ) : (
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 rounded-xl bg-secondary/10 px-4 py-4 text-center font-display font-bold"
        >
          You are ranked #{rank} with {score} points 🚀
        </motion.p>
      )}
    </div>
  );
}
