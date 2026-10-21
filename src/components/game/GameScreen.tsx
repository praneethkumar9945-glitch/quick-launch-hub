import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { questions } from "@/data/questions";
import type { Answers } from "@/lib/game";
import { ProgressBar } from "./ProgressBar";
import { QuestionCard } from "./QuestionCard";

interface Props {
  answers: Answers;
  onAnswer: (questionId: number, key: string) => void;
  onComplete: () => void;
  onSelectSound: () => void;
}

export function GameScreen({ answers, onAnswer, onComplete, onSelectSound }: Props) {
  const [index, setIndex] = useState(0);
  const [locked, setLocked] = useState(false);
  const question = questions[index] ?? questions[0]!;
  const progress = ((index + (locked ? 1 : 0)) / questions.length) * 100;

  const handleSelect = useCallback(
    (key: string) => {
      if (locked) return;
      setLocked(true);
      onSelectSound();
      onAnswer(question.id, key);
      window.setTimeout(() => {
        if (index === questions.length - 1) {
          onComplete();
        } else {
          setIndex((i) => i + 1);
          setLocked(false);
        }
      }, 550);
    },
    [locked, onSelectSound, onAnswer, question.id, index, onComplete],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (["A", "B", "C", "D", "E"].includes(key)) handleSelect(key);
      if (["1", "2", "3", "4", "5"].includes(key))
        handleSelect(["A", "B", "C", "D", "E"][Number(key) - 1]!);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleSelect]);

  return (
    <section className="mx-auto flex min-h-[100dvh] w-full max-w-3xl flex-col justify-center px-5 py-16">
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between font-display text-xs uppercase tracking-[0.3em] text-muted-foreground sm:text-sm">
          <span>
            Question {String(index + 1).padStart(2, "0")} / {questions.length}
          </span>
          <span className="text-secondary">{Math.round(progress)}%</span>
        </div>
        <ProgressBar value={progress} />
      </div>

      <AnimatePresence mode="wait">
        <QuestionCard
          key={question.id}
          question={question}
          selectedKey={answers[question.id]}
          locked={locked}
          onSelect={handleSelect}
        />
      </AnimatePresence>
    </section>
  );
}
