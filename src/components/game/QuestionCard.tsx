import { motion } from "motion/react";
import type { Question } from "@/data/questions";
import { AnswerOption } from "./AnswerOption";

interface Props {
  question: Question;
  selectedKey?: string;
  locked: boolean;
  onSelect: (key: string) => void;
}

export function QuestionCard({ question, selectedKey, locked, onSelect }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -28 }}
      transition={{ duration: 0.35 }}
      className="w-full"
    >
      <h2 className="font-display text-2xl font-bold leading-tight sm:text-4xl">
        {question.prompt}
      </h2>
      {question.sub && (
        <p className="mt-2 text-lg text-muted-foreground sm:text-xl">{question.sub}</p>
      )}

      <div className="mt-7 grid gap-3">
        {question.options.map((option, i) => (
          <AnswerOption
            key={option.key}
            option={option}
            index={i}
            selected={selectedKey === option.key}
            locked={locked}
            onSelect={() => onSelect(option.key)}
          />
        ))}
      </div>

      <p className="mt-6 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
        Tap a card or press A – E
      </p>
    </motion.div>
  );
}
