import { Link } from "@tanstack/react-router";
import skillAiLogo from "@/assets/skill-ai-logo.png";
import { useEffect, useState, type ComponentType } from "react";
import { ArrowRight, Clock, Sparkles, CheckCircle2, Rocket, Trophy, Briefcase } from "lucide-react";
import { ApplyModal } from "@/routes/ug-programs";

export type CourseDetailProps = {
  eyebrow: string;
  title: string;
  tagline: string;
  Icon: ComponentType<{ className?: string }>;
  duration: string;
  level: string;
  mode: string;
  tools: string[];
  roadmap: { phase: string; title: string; points: string[] }[];
  outcomes: string[];
  careerRoles?: { role: string; anchor: string; desc: string }[];
  heroGradient?: string;
  heroImage?: string;
  heroBadge?: string;
  heroCaption?: string;
};

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in-view"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function CourseDetail({
  eyebrow, title, tagline, Icon, duration, level, mode, tools, roadmap, outcomes, careerRoles,
  heroGradient = "from-amber-500/30 via-orange-500/20 to-transparent",
  heroImage, heroBadge, heroCaption,
}: CourseDetailProps) {
  useReveal();
  const [apply, setApply] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={skillAiLogo} alt="SkillAI - Learn Skill Get Job" className="h-9 w-auto rounded-md bg-white p-1" />
          </Link>
          <Link to="/ai" className="text-sm text-muted-foreground hover:text-foreground">← All AI Programs</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40 px-6 py-20">
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${heroGradient} animate-[pulse_6s_ease-in-out_infinite]`} />
        <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-lime/20 blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
        <div className="absolute -bottom-32 -left-24 -z-10 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.3fr_1fr] items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-semibold text-lime">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" /> {eyebrow}
            </span>
            <h1 className="mt-5 text-5xl font-black tracking-tight md:text-6xl">
              {title.split(" ").map((w, i) => (
                <span key={i} className="inline-block animate-fade-in" style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}>{w}&nbsp;</span>
              ))}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground reveal reveal-delay-2">{tagline}</p>

            <div className="mt-8 flex flex-wrap gap-3 reveal reveal-delay-3">
              <Stat icon={<Clock className="h-4 w-4" />} label="Duration" value={duration} />
              <Stat icon={<Trophy className="h-4 w-4" />} label="Level" value={level} />
              <Stat icon={<Rocket className="h-4 w-4" />} label="Mode" value={mode} />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => setApply(true)} className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-lime-foreground shadow-lg shadow-lime/20 transition-all hover:scale-105 hover:shadow-lime/40">
                Apply Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a href="#roadmap" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold hover:bg-surface transition-colors">
                View Roadmap
              </a>
            </div>
          </div>

          {heroImage ? (
            <div className="reveal reveal-delay-2 relative lg:p-6">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-lime/30 via-fuchsia-500/20 to-cyan-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-lime/30 bg-surface shadow-2xl shadow-lime/20 hover:scale-[1.02] transition-transform">
                <div className="aspect-square p-4 md:p-6 flex items-center justify-center bg-gradient-to-br from-background via-surface to-background">
                  <img src={heroImage} alt={title} className="max-h-full max-w-full object-contain rounded-2xl" />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-lime">{heroBadge ?? eyebrow}</div>
                  <div className="mt-1 text-lg font-black">{heroCaption ?? `${duration} · ${mode}`}</div>
                </div>
              </div>
            </div>
          ) : (
          <div className="reveal reveal-delay-2 relative">
            <div className="relative rounded-3xl border border-lime/30 bg-surface p-10 shadow-2xl shadow-lime/10 hover:scale-[1.02] transition-transform">
              <div className="absolute -top-6 -right-6 grid h-20 w-20 place-items-center rounded-2xl bg-lime text-lime-foreground shadow-xl animate-[float_4s_ease-in-out_infinite]">
                <Icon className="h-10 w-10" />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Program Snapshot</div>
              <div className="mt-3 text-2xl font-black">{title}</div>
              <div className="mt-6 space-y-3 text-sm">
                {outcomes.slice(0, 4).map((o) => (
                  <div key={o} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                    <span>{o}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          )}
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="border-b border-border/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">Learning Roadmap</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Your journey, phase by phase</h2>
            <p className="mt-4 text-muted-foreground">A structured path from fundamentals to industry-ready expert.</p>
          </div>

          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime via-orange-500 to-transparent" />
            <div className="space-y-12">
              {roadmap.map((r, i) => (
                <div key={r.phase} className={`reveal reveal-delay-${(i % 4) + 1} relative grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"}`}>
                    <div className="text-xs font-bold uppercase tracking-widest text-orange-400">{r.phase}</div>
                    <h3 className="mt-2 text-2xl font-black">{r.title}</h3>
                    <ul className={`mt-4 space-y-2 text-sm text-muted-foreground ${i % 2 ? "" : "md:ml-auto"}`}>
                      {r.points.map((p) => <li key={p} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime shrink-0" />{p}</li>)}
                    </ul>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 grid h-10 w-10 place-items-center rounded-full bg-background border-2 border-lime text-lime font-black shadow-lg shadow-lime/30 animate-[pulse_3s_ease-in-out_infinite]">
                    {i + 1}
                  </div>
                  <div />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="border-b border-border/40 bg-surface/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">Tools & Tech Stack</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Tools you'll master</h2>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {tools.map((t, i) => (
              <span
                key={t}
                className={`reveal reveal-delay-${(i % 4) + 1} inline-flex items-center gap-2 rounded-2xl border border-border bg-background px-5 py-3 text-sm font-semibold hover:border-lime hover:bg-lime/5 hover:-translate-y-1 transition-all cursor-default`}
              >
                <span className="h-2 w-2 rounded-full bg-lime animate-pulse" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* Career Roles Mapped to Modules */}
      {careerRoles && careerRoles.length > 0 && (
        <section className="border-b border-border/40 bg-surface/30 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="reveal max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-lime">Career Roles Mapped to Modules</span>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Where this programme takes you</h2>
              <p className="mt-4 text-muted-foreground">Every role below maps to specific modules — the programme is designed so you can specialise as you graduate.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {careerRoles.map((r, i) => (
                <div
                  key={r.role}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className="animate-fade-in group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-6 hover:border-lime/60 hover:-translate-y-2 transition-all"
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-lime/0 to-fuchsia-500/0 group-hover:from-lime/10 group-hover:to-fuchsia-500/10 transition-all" />
                  <Briefcase className="h-6 w-6 text-lime" />
                  <div className="mt-3 text-lg font-black">{r.role}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-widest text-orange-400">{r.anchor}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{r.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes */}
      <section className="border-b border-border/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">What you'll be able to do</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Career Outcomes</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((o, i) => (
              <div key={o} className={`reveal reveal-delay-${(i % 4) + 1} rounded-2xl border border-border/50 bg-surface p-6 hover:border-lime/60 hover:-translate-y-1 transition-all`}>
                <CheckCircle2 className="h-6 w-6 text-lime" />
                <p className="mt-3 text-sm font-medium">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-lime/10 via-orange-500/5 to-transparent" />
        <div className="mx-auto max-w-4xl text-center reveal">
          <h2 className="text-4xl font-black md:text-6xl">Ready to build your future?</h2>
          <p className="mt-5 text-lg text-muted-foreground">Join the next cohort of {title}.</p>
          <button onClick={() => setApply(true)} className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-base font-bold text-lime-foreground shadow-xl shadow-lime/30 hover:scale-105 transition-transform">
            Apply Now <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {apply && <ApplyModal program={title} onClose={() => setApply(false)} />}
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-border/50 bg-surface px-4 py-2.5">
      <span className="text-lime">{icon}</span>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-bold">{value}</div>
      </div>
    </div>
  );
}
