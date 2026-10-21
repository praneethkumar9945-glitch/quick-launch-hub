import { motion } from "motion/react";

interface Props {
  value: number; // 0..100
}

export function ProgressBar({ value }: Props) {
  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Game progress"
      className="h-2 w-full overflow-hidden rounded-full bg-muted"
    >
      <motion.div
        className="h-full rounded-full"
        style={{ background: "var(--gradient-hero)" }}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
      />
    </div>
  );
}
