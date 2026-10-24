import { useState } from "react";
import { motion } from "motion/react";
import { QrCode, Rocket } from "lucide-react";
import { programs } from "@/data/roadmaps";
import { submitApplication } from "@/lib/php-api";

export function InstitutionCTA() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    const res = await submitApplication({
      form_type: "enquiry",
      program: "Future Score — Talk To Our Team",
      name: form.name,
      email: form.email,
      phone: form.phone,
      goal: form.message,
      source_page: "/future-score",
    });
    setSending(false);
    if (res.ok) {
      setDone(true);
    } else {
      setError(
        res.offline
          ? "Our server is not reachable right now — your message was NOT saved. Please try again in a few minutes."
          : (res.error ?? "Could not send. Please try again."),
      );
    }
  };

  const inputCls =
    "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary";

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
        <button
          onClick={() => setOpen(true)}
          className="glow-primary inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-display font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Talk To Our Team <Rocket className="h-4 w-4" />
        </button>
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

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="glass w-full max-w-md rounded-3xl p-7 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                Talk to our team
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="text-2xl text-muted-foreground hover:text-foreground"
              >
                ×
              </button>
            </div>
            {done ? (
              <div className="py-8 text-center">
                <p className="font-display text-lg font-bold text-primary">Message received!</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our team will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-5 grid gap-3">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Full name"
                  className={inputCls}
                />
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Phone number"
                  className={inputCls}
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email"
                  className={inputCls}
                />
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What would you like to know? (optional)"
                  rows={3}
                  className={inputCls}
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
                <button
                  type="submit"
                  disabled={sending}
                  className="glow-primary rounded-xl bg-primary px-6 py-3 font-display font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
