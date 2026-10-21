import { motion } from "motion/react";

interface Props {
  title: string;
  items: { emoji: string; label: string }[];
}

export function ChipSection({ title, items }: Props) {
  return (
    <div>
      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
        {title}
      </h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {items.map((item, i) => (
          <motion.span
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium sm:text-base"
          >
            <span className="text-lg">{item.emoji}</span>
            {item.label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
