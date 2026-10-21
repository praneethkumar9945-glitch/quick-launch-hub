import { useEffect, useState } from "react";
import { motion } from "motion/react";

const STEPS = [
  "Analyzing your choices...",
  "Finding your strongest profile...",
  "Building your roadmap...",
];

interface Props {
  onDone: () => void;
}

export function CalculatingScreen({ onDone }: Props) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const started = Date.now();
    const total = 3600;
    const timer = window.setInterval(() => {
      const p = Math.min(100, Math.round(((Date.now() - started) / total) * 100));
      setPercent(p);
      if (p >= 100) {
        window.clearInterval(timer);
        window.setTimeout(onDone, 350);
      }
    }, 40);
    return () => window.clearInterval(timer);
  }, [onDone]);

  const stepIndex = Math.min(STEPS.length - 1, Math.floor((percent / 100) * STEPS.length));

  return (
    <section className="flex min-h-[100dvh] flex-col items-center justify-center px-5 text-center">
      <div className="relative flex h-56 w-56 items-center justify-center sm:h-72 sm:w-72">
        <div
          className="absolute inset-0 rounded-full border-2 border-primary/40 border-t-primary"
          style={{ animation: "spin-slow 2.2s linear infinite" }}
        />
        <div
          className="absolute inset-6 rounded-full border-2 border-secondary/30 border-b-secondary"
          style={{ animation: "spin-slow 3.4s linear infinite reverse" }}
        />
        <div className="absolute inset-14 rounded-full bg-primary/10 blur-xl" />
        <span className="font-display text-5xl font-black text-gradient sm:text-6xl">
          {percent}%
        </span>
      </div>

      <h2 className="mt-12 font-display text-2xl font-bold uppercase tracking-[0.2em] sm:text-3xl">
        Calculating your future...
      </h2>

      <div className="mt-6 h-6">
        <motion.p
          key={stepIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-muted-foreground"
        >
          {STEPS[stepIndex]}
        </motion.p>
      </div>

      <div className="mt-8 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full transition-[width] duration-100"
          style={{ width: `${percent}%`, background: "var(--gradient-hero)" }}
        />
      </div>
    </section>
  );
}
