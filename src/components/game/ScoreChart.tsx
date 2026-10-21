import { motion } from "motion/react";
import { profiles } from "@/data/profiles";
import type { ProfileId } from "@/data/questions";

interface Props {
  ranked: { id: ProfileId; percent: number }[];
}

export function ScoreChart({ ranked }: Props) {
  return (
    <div className="grid gap-3">
      {ranked.map((entry, i) => {
        const profile = profiles[entry.id];
        return (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl px-4 py-4 sm:px-5"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 font-medium">
                <span className="text-xl">{profile.emoji}</span>
                {profile.name}
              </span>
              <span className="font-display font-bold text-secondary">{entry.percent}%</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "var(--gradient-hero)" }}
                initial={{ width: 0 }}
                whileInView={{ width: `${entry.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.15 + i * 0.08, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
