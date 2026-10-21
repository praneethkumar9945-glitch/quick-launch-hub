import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Download, RotateCcw, Trash2 } from "lucide-react";
import { profiles, profileOrder } from "@/data/profiles";
import type { ProfileId } from "@/data/questions";
import {
  exportCsv,
  getLeaderboard,
  resetLeaderboard,
  saveLeaderboard,
  type LeaderboardEntry,
} from "@/lib/game";
import { FuturisticBackground } from "@/components/game/FuturisticBackground";

export const Route = createFileRoute("/future-score/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — What's Your Future Score?" },
      {
        name: "description",
        content:
          "Fest stall admin dashboard: participants, average future score, profile analytics and leaderboard exports.",
      },
      { property: "og:title", content: "Admin Dashboard — What's Your Future Score?" },
      {
        property: "og:description",
        content: "Participants, analytics and leaderboard management for the career discovery game.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminDashboard,
});

function AdminDashboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>(() => getLeaderboard());

  const stats = useMemo(() => {
    const total = entries.length;
    const avg = total ? Math.round(entries.reduce((s, e) => s + e.score, 0) / total) : 0;
    const counts = Object.fromEntries(profileOrder.map((p) => [p, 0])) as Record<string, number>;
    entries.forEach((e) => (counts[e.profile] = (counts[e.profile] ?? 0) + 1));
    const topProfile =
      profileOrder.slice().sort((a, b) => (counts[b] ?? 0) - (counts[a] ?? 0))[0] ?? "ai-innovator";
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const today = entries.filter((e) => e.timestamp >= startOfDay.getTime()).length;
    return { total, avg, counts, topProfile, today };
  }, [entries]);

  const update = (next: LeaderboardEntry[]) => {
    saveLeaderboard(next);
    setEntries(next);
  };

  const download = () => {
    const blob = new Blob([exportCsv(entries)], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "future-score-participants.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const sorted = [...entries].sort((a, b) => b.score - a.score);

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-12">
      <FuturisticBackground intensity="low" />

      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-black uppercase tracking-wide sm:text-4xl">
            Admin <span className="text-gradient">Dashboard</span>
          </h1>
          <p className="mt-2 text-muted-foreground">Future Score — college fest stall analytics</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={download}
            className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium hover:border-secondary/60"
          >
            <Download className="h-4 w-4" /> Export CSV
          </button>
          <button
            onClick={() => {
              resetLeaderboard();
              setEntries(getLeaderboard());
            }}
            className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium hover:border-primary/60"
          >
            <RotateCcw className="h-4 w-4" /> Reset Leaderboard
          </button>
        </div>
      </header>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Participants", value: stats.total },
          { label: "Average Future Score", value: stats.avg },
          { label: "Top Career Profile", value: profiles[stats.topProfile as ProfileId].name },
          { label: "Today's Participants", value: stats.today },
        ].map((card) => (
          <div key={card.label} className="glass rounded-2xl p-5">
            <p className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {card.label}
            </p>
            <p className="mt-3 font-display text-3xl font-black text-gradient">{card.value}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="glass overflow-hidden rounded-2xl">
          <h2 className="border-b border-border px-5 py-4 font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Participants
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead className="text-left text-muted-foreground">
                <tr className="border-b border-border">
                  {["Name", "College", "Score", "Top Profile", "Date", "Time", ""].map((h) => (
                    <th key={h} className="px-4 py-3 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sorted.map((e) => {
                  const d = e.timestamp ? new Date(e.timestamp) : null;
                  return (
                    <tr key={e.id} className="border-b border-border/60 last:border-0">
                      <td className="px-4 py-3 font-medium">{e.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{e.college || "—"}</td>
                      <td className="px-4 py-3 font-display font-bold text-secondary">{e.score}</td>
                      <td className="px-4 py-3">
                        {profiles[e.profile].emoji} {profiles[e.profile].name}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {d ? d.toLocaleDateString() : "—"}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {d ? d.toLocaleTimeString() : "—"}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          aria-label={`Delete ${e.name}`}
                          onClick={() => update(entries.filter((x) => x.id !== e.id))}
                          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-primary/15 hover:text-primary"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {sorted.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
                      No participants yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="glass rounded-2xl p-5">
            <h2 className="font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Profile Analytics
            </h2>
            <div className="mt-5 grid gap-4">
              {profileOrder.map((id) => {
                const pct = stats.total
                  ? Math.round(((stats.counts[id] ?? 0) / stats.total) * 100)
                  : 0;
                return (
                  <div key={id}>
                    <div className="flex justify-between text-sm">
                      <span>
                        {profiles[id].emoji} {profiles[id].name}
                      </span>
                      <span className="font-display font-bold text-secondary">{pct}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full transition-[width] duration-500"
                        style={{ width: `${pct}%`, background: "var(--gradient-hero)" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass rounded-2xl p-5">
            <h2 className="font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Leaderboard
            </h2>
            <ol className="mt-4 grid gap-2 text-sm">
              {sorted.slice(0, 10).map((e, i) => (
                <li key={e.id} className="flex items-center gap-3 rounded-lg bg-muted/40 px-3 py-2">
                  <span className="w-5 text-muted-foreground">{i + 1}</span>
                  <span className="flex-1 truncate">{e.name}</span>
                  <span className="font-display font-bold text-secondary">{e.score}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
