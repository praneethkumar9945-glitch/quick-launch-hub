import { motion } from "motion/react";
import { QrCode, Rocket } from "lucide-react";
import { programs } from "@/data/roadmaps";

export function InstitutionCTA() {
  return (
    <section className="glass rounded-3xl p-6 text-center sm:p-10">
      <h2 className="font-display text-2xl font-black uppercase tracking-wide sm:text-3xl">
        Want to build these skills?
      </h2>
      <p className="mt-3 text-muted-foreground">
        Your future starts with the skills you build today.
      </p>

      <p className="mt-8 font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
        Explore Our Programs
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass flex items-center gap-3 rounded-2xl px-4 py-4 text-left transition-colors hover:border-primary/60"
          >
            <span className="text-2xl">{p.emoji}</span>
            <span className="font-medium">{p.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
        <a
          href="#talk"
          className="glow-primary inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-display font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Talk To Our Team <Rocket className="h-4 w-4" />
        </a>
        <div className="flex items-center gap-3">
          <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-dashed border-border">
            <QrCode className="h-10 w-10 text-muted-foreground" aria-hidden />
          </div>
          <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Scan to
            <br />
            learn more
          </span>
        </div>
      </div>
    </section>
  );
}
