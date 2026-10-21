import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { RotateCcw } from "lucide-react";
import { profiles } from "@/data/profiles";
import { roadmaps } from "@/data/roadmaps";
import type { PlayerInfo, ScoreResult } from "@/lib/game";
import { ScoreChart } from "./ScoreChart";
import { ChipSection } from "./StrengthsSection";
import { CareerSection } from "./CareerSection";
import { Roadmap } from "./Roadmap";
import { Leaderboard } from "./Leaderboard";
import { ShareResult } from "./ShareResult";
import { InstitutionCTA } from "./InstitutionCTA";

interface Props {
  result: ScoreResult;
  player?: PlayerInfo | null;
  onRestart: () => void;
}

function useCountUp(target: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let frame = 0;
    const total = 45;
    const id = window.setInterval(() => {
      frame += 1;
      setValue(Math.round((target * frame) / total));
      if (frame >= total) window.clearInterval(id);
    }, 24);
    return () => window.clearInterval(id);
  }, [target]);
  return value;
}

export function ResultScreen({ result, player, onRestart }: Props) {
  const top = profiles[result.top];
  const topPercent = result.percentages[result.top];
  const animatedScore = useCountUp(result.futureScore);
  const others = result.ranked.filter((r) => r.id !== result.top);

  return (
    <section className="mx-auto w-full max-w-3xl px-5 py-14">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass glow-primary rounded-3xl p-8 text-center sm:p-12"
      >
        <p className="font-display text-xs uppercase tracking-[0.35em] text-muted-foreground">
          🚀 Your Future Score
        </p>
        <p className="mt-4 font-display text-7xl font-black text-gradient sm:text-8xl">
          {animatedScore}
        </p>
        <p className="text-sm text-muted-foreground">/ 100</p>

        <div className="mt-9 border-t border-border pt-8">
          <p className="font-display text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Your Strongest Profile
          </p>
          <p className="mt-4 font-display text-3xl font-black uppercase sm:text-5xl">
            {top.emoji} {top.name}
          </p>
          <p className="mt-3 font-display text-xl font-bold text-secondary">{topPercent}% Match</p>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">{top.description}</p>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          A fun career-discovery score based on your choices — not a scientifically validated
          aptitude test.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-12">
        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Other Matches
          </h3>
          <div className="mt-4">
            <ScoreChart ranked={others} />
          </div>
        </div>

        <ChipSection title="Your Strengths" items={top.strengths} />
        <ChipSection title="You May Enjoy" items={top.enjoy} />
        <Roadmap steps={roadmaps[result.top]} />
        <CareerSection careers={top.careers} />
        <Leaderboard score={result.futureScore} profile={result.top} player={player} />
        <ShareResult score={result.futureScore} profile={top} match={topPercent} />
        <InstitutionCTA />

        <div className="text-center">
          <p className="font-display text-lg uppercase tracking-[0.25em] text-muted-foreground">
            Next student?
          </p>
          <button
            onClick={onRestart}
            className="glow-secondary mt-4 inline-flex items-center gap-2 rounded-full border border-secondary/50 bg-secondary/10 px-8 py-4 font-display font-bold uppercase tracking-widest transition-colors hover:bg-secondary/20"
          >
            Play Again <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
