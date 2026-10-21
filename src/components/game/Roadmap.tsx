import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

interface Props {
  steps: string[];
}

export function Roadmap({ steps }: Props) {
  return (
    <div>
      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
        🚀 Your Possible Future Roadmap
      </h3>
      <ol className="relative mt-6 flex flex-col items-center gap-0">
        {steps.map((step, i) => {
          const last = i === steps.length - 1;
          return (
            <motion.li
              key={step}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4 }}
              className="flex w-full max-w-md flex-col items-center"
            >
              <div
                className={`glass w-full rounded-2xl px-5 py-4 text-center font-display font-bold tracking-wide ${
                  last ? "glow-primary border-primary/60 bg-primary/10" : ""
                }`}
              >
                <span className="mr-2 text-xs text-muted-foreground">
                  {last ? "" : String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </div>
              {!last && (
                <ArrowDown className="my-2 h-5 w-5 text-secondary" aria-hidden />
              )}
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
