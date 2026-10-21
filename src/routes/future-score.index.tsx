import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Maximize2, Minimize2, Volume2, VolumeX } from "lucide-react";
import { FuturisticBackground } from "@/components/game/FuturisticBackground";
import { LandingScreen } from "@/components/game/LandingScreen";
import { GameScreen } from "@/components/game/GameScreen";
import { CalculatingScreen } from "@/components/game/CalculatingScreen";
import { ResultScreen } from "@/components/game/ResultScreen";
import { useSound } from "@/hooks/useSound";
import { calculateResult, type Answers, type PlayerInfo, type ScoreResult } from "@/lib/game";

export const Route = createFileRoute("/future-score/")({
  head: () => ({
    meta: [
      { title: "What's Your Future Score? — Career Discovery Game" },
      {
        name: "description",
        content:
          "Play a 3-minute interactive career discovery game. Answer 10 questions and reveal your future profile, strengths and skill roadmap.",
      },
      { property: "og:title", content: "What's Your Future Score? — Career Discovery Game" },
      {
        property: "og:description",
        content:
          "Your interests. Your skills. Your possible future. 10 questions, 3 minutes, 1 future profile.",
      },
    ],
  }),
  component: FutureScoreGame,
});

type Phase = "landing" | "game" | "calculating" | "result";

const IDLE_MS = 60_000;

function FutureScoreGame() {
  const [phase, setPhase] = useState<Phase>("landing");
  const [answers, setAnswers] = useState<Answers>({});
  const [player, setPlayer] = useState<PlayerInfo | null>(null);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [stallMode, setStallMode] = useState(false);
  const [idleWarning, setIdleWarning] = useState(false);
  const { enabled, toggle, play } = useSound();
  const idleTimer = useRef<number | null>(null);

  const reset = useCallback(() => {
    setAnswers({});
    setPlayer(null);
    setResult(null);
    setIdleWarning(false);
    setPhase("landing");
    window.scrollTo({ top: 0 });
  }, []);

  // 60s inactivity auto-reset (stall safety)
  useEffect(() => {
    const schedule = () => {
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      setIdleWarning(false);
      if (phase === "landing") return;
      idleTimer.current = window.setTimeout(() => {
        setIdleWarning(true);
        window.setTimeout(reset, 2500);
      }, IDLE_MS);
    };
    const events = ["pointerdown", "keydown", "touchstart", "scroll", "mousemove"] as const;
    events.forEach((e) => window.addEventListener(e, schedule, { passive: true }));
    schedule();
    return () => {
      events.forEach((e) => window.removeEventListener(e, schedule));
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
    };
  }, [phase, reset]);

  const toggleStall = async () => {
    play("click");
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setStallMode(true);
      } else {
        await document.exitFullscreen();
        setStallMode(false);
      }
    } catch {
      setStallMode((s) => !s);
    }
  };

  const handleAnswer = (questionId: number, key: string) =>
    setAnswers((prev) => ({ ...prev, [questionId]: key }));

  return (
    <main className={stallMode ? "select-none text-[1.05rem]" : ""}>
      <FuturisticBackground intensity={phase === "landing" ? "high" : "low"} />

      <div className="fixed right-4 top-4 z-50 flex gap-2">
        <button
          onClick={() => {
            toggle();
            play("click");
          }}
          aria-label={enabled ? "Turn sound off" : "Turn sound on"}
          className="glass flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:border-secondary/60"
        >
          {enabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </button>
        <button
          onClick={toggleStall}
          aria-label={stallMode ? "Exit stall mode" : "Enter stall mode"}
          className="glass flex items-center gap-2 rounded-full px-4 text-xs font-display uppercase tracking-widest transition-colors hover:border-primary/60"
        >
          {stallMode ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          <span className="hidden sm:inline">{"\n"}</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {phase === "landing" && (
          <motion.div key="landing" exit={{ opacity: 0, scale: 1.03 }} transition={{ duration: 0.3 }}>
            <LandingScreen
              onStart={(p) => {
                play("click");
                setPlayer(p);
                setAnswers({});
                setResult(null);
                setPhase("game");
              }}
            />
          </motion.div>
        )}

        {phase === "game" && (
          <motion.div key="game" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <GameScreen
              answers={answers}
              onAnswer={handleAnswer}
              onSelectSound={() => play("select")}
              onComplete={() => {
                play("progress");
                setPhase("calculating");
              }}
            />
          </motion.div>
        )}

        {phase === "calculating" && (
          <motion.div key="calc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <CalculatingScreen
              onDone={() => {
                setResult(calculateResult(answers));
                play("reveal");
                setPhase("result");
              }}
            />
          </motion.div>
        )}

        {phase === "result" && result && (
          <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <ResultScreen
              result={result}
              player={player}
              onRestart={() => {
                play("achievement");
                reset();
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {idleWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 backdrop-blur">
          <p className="font-display text-3xl font-black uppercase tracking-widest text-gradient">
            Ready for your future?
          </p>
        </div>
      )}
    </main>
  );
}
