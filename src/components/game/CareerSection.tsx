import { motion } from "motion/react";

interface Props {
  careers: { emoji: string; label: string }[];
}

export function CareerSection({ careers }: Props) {
  return (
    <div>
      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
        Career Directions
      </h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {careers.map((career, i) => (
          <motion.div
            key={career.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="glass flex items-center gap-3 rounded-2xl px-4 py-4 transition-colors hover:border-secondary/50"
          >
            <span className="text-2xl">{career.emoji}</span>
            <span className="font-medium">{career.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
