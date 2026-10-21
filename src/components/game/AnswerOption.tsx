import { motion } from "motion/react";
import { Check } from "lucide-react";
import type { AnswerOption as AnswerOptionType } from "@/data/questions";

interface Props {
  option: AnswerOptionType;
  index: number;
  selected: boolean;
  locked: boolean;
  onSelect: () => void;
}

export function AnswerOption({ option, index, selected, locked, onSelect }: Props) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.06 * index, duration: 0.35 }}
      whileHover={{ scale: locked ? 1 : 1.015, x: locked ? 0 : 4 }}
      whileTap={{ scale: locked ? 1 : 0.985 }}
      onClick={onSelect}
      disabled={locked && !selected}
      aria-pressed={selected}
      aria-label={`Option ${option.key}: ${option.label}`}
      className={`glass group flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition-colors sm:px-5 sm:py-5 ${
        selected ? "glow-primary border-primary/60 bg-primary/10" : "hover:border-secondary/50"
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold transition-colors ${
          selected
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground group-hover:text-secondary"
        }`}
      >
        {option.key}
      </span>
      <span className="text-2xl sm:text-3xl">{option.emoji}</span>
      <span className="flex-1 text-base font-medium leading-snug sm:text-lg">{option.label}</span>
      {selected && (
        <motion.span
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground"
        >
          <Check className="h-4 w-4" />
        </motion.span>
      )}
    </motion.button>
  );
}
