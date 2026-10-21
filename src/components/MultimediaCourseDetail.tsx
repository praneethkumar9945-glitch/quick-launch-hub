import { Link } from "@tanstack/react-router";
import skillAiLogo from "@/assets/skill-ai-logo.png";
import { useEffect, useMemo, useRef, useState, type ComponentType } from "react";
import {
  ArrowRight, Clock, Award, Rocket, Sparkles, CheckCircle2,
  Layers, Timer, Calendar, Users,
} from "lucide-react";
import { ApplyModal } from "@/routes/ug-programs";

export type MMModule = {
  n: number;
  icon: ComponentType<{ className?: string }>;
  title: string;
  weeks: string;
  hours: string;
  points: string[];
  color?: string;
};

export type MultimediaCourseProps = {
  eyebrow: string;
  title: string;
  tagline: string;
  duration: string;
  sessions: string;
  totalHours: string;
  level: string;
  mode: string;
  schedule: string;
  overview: string;
  modules: MMModule[];
  tools: string[];
  capstones: string[];
  outcomes: string[];
  heroImage?: string;
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

function useParallax() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      ref.current.style.transform = `translate3d(0, ${window.scrollY * 0.15}px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return ref;
}

export function MultimediaCourseDetail(props: MultimediaCourseProps) {
  useReveal();
  const parallaxRef = useParallax();
  const [apply, setApply] = useState(false);
  const [activeModule, setActiveModule] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActiveModule((i) => (i + 1) % props.modules.length), 3500);
    return () => clearInterval(id);
  }, [props.modules.length]);

  const current = useMemo(() => props.modules[activeModule], [activeModule, props.modules]);
  const ActiveIcon = current.icon;

  const HIGHLIGHTS = [
    { icon: Clock, label: "Duration", value: props.duration },
    { icon: Calendar, label: "Schedule", value: props.schedule },
    { icon: Layers, label: "Sessions", value: props.sessions },
    { icon: Timer, label: "Total Hours", value: props.totalHours },
    { icon: Award, label: "Level", value: props.level },
    { icon: Rocket, label: "Mode", value: props.mode },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={skillAiLogo} alt="SkillAI" className="h-9 w-auto rounded-md bg-white p-1" />
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/multimedia" className="text-sm text-muted-foreground hover:text-foreground">← All Multimedia</Link>
            <button onClick={() => setApply(true)} className="hidden md:inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2 text-sm font-bold text-lime-foreground hover:scale-105 transition-transform">
              Apply <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/40 px-6 py-24 md:py-32">
        <div ref={parallaxRef} className="absolute inset-0 -z-10">
          <div className="absolute -top-20 -left-20 h-[28rem] w-[28rem] rounded-full bg-lime/25 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
          <div className="absolute top-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-orange-500/25 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground)/0.06)_1px,transparent_0)] [background-size:32px_32px]" />

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.3fr_1fr] items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-semibold text-lime">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" /> {props.eyebrow}
            </span>
            <h1 className="mt-5 text-5xl font-black tracking-tight md:text-6xl leading-[1.05]">
              {props.title.split(" ").map((w, i) => (
                <span key={i} className="inline-block animate-fade-in mr-3" style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}>{w}</span>
              ))}
            </h1>
            <p className="reveal reveal-delay-2 mt-5 max-w-xl text-lg text-muted-foreground">{props.tagline}</p>

            <div className="reveal reveal-delay-3 mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 max-w-lg">
              {HIGHLIGHTS.slice(0, 3).map((h, i) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} style={{ animationDelay: `${i * 80}ms` }} className="animate-fade-in rounded-2xl border border-border/50 bg-surface/60 backdrop-blur px-4 py-3 hover:border-lime/60 hover:-translate-y-1 transition-all">
                    <Icon className="h-4 w-4 text-lime" />
                    <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">{h.label}</div>
                    <div className="text-sm font-bold">{h.value}</div>
                  </div>
                );
              })}
            </div>

            <div className="reveal reveal-delay-4 mt-8 flex flex-wrap gap-3">
              <button onClick={() => setApply(true)} className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-lime-foreground shadow-lg shadow-lime/20 transition-all hover:scale-105 hover:shadow-lime/40">
                Apply Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a href="#roadmap" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold hover:bg-surface transition-colors">
                Explore Roadmap
              </a>
            </div>
          </div>

          {props.heroImage ? (
            <div className="reveal reveal-delay-2 relative lg:p-6">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-lime/30 via-fuchsia-500/20 to-cyan-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-lime/30 bg-surface shadow-2xl shadow-lime/20 hover:scale-[1.02] transition-transform">
                <div className="aspect-square p-4 md:p-6 flex items-center justify-center bg-gradient-to-br from-background via-surface to-background">
                  <img src={props.heroImage} alt={props.title} className="max-h-full max-w-full object-contain rounded-2xl" />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-lime">{props.eyebrow}</div>
                  <div className="mt-1 text-lg font-black">{props.duration} · {props.totalHours} · {props.modules.length} Modules</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="reveal reveal-delay-2 relative">
              <div className="relative rounded-3xl border border-lime/30 bg-surface p-10 shadow-2xl shadow-lime/10 hover:scale-[1.02] transition-transform">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Program Snapshot</div>
                <div className="mt-3 text-2xl font-black">{props.title}</div>
                <div className="mt-6 space-y-3 text-sm">
                  {props.outcomes.slice(0, 4).map((o) => (
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

      {/* OVERVIEW */}
      <section className="relative border-b border-border/40 px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">Course Overview</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">{props.title}</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{props.overview}</p>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <div className="rounded-2xl border border-border/50 bg-surface p-5 text-center hover:border-lime hover:-translate-y-1 transition-all">
                <div className="text-3xl font-black text-lime">{props.modules.length}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Modules</div>
              </div>
              <div className="rounded-2xl border border-border/50 bg-surface p-5 text-center hover:border-lime hover:-translate-y-1 transition-all">
                <div className="text-3xl font-black text-lime">{props.sessions.split(" ")[0]}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Sessions</div>
              </div>
              <div className="rounded-2xl border border-border/50 bg-surface p-5 text-center hover:border-lime hover:-translate-y-1 transition-all">
                <div className="text-3xl font-black text-lime">{props.totalHours.split(" ")[0]}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative lg:sticky lg:top-24">
            <div className={`relative overflow-hidden rounded-3xl border border-lime/30 bg-gradient-to-br ${current.color ?? "from-lime/30 to-orange-500/10"} p-8 shadow-2xl shadow-lime/10 transition-all duration-700`}>
              <div key={current.n} className="animate-fade-in">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-lime text-lime-foreground shadow-xl animate-[float_4s_ease-in-out_infinite]">
                    <ActiveIcon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Module {current.n} · {current.weeks}</div>
                    <div className="text-xs font-bold text-orange-400">{current.hours}</div>
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-black">{current.title}</h3>
                <ul className="mt-5 space-y-2.5 text-sm">
                  {current.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime" /> <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex gap-1.5">
                {props.modules.map((m, i) => (
                  <button key={m.n} onClick={() => setActiveModule(i)} aria-label={`Module ${m.n}`}
                    className={`h-1.5 rounded-full transition-all ${i === activeModule ? "w-8 bg-lime" : "w-3 bg-border hover:bg-muted-foreground"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="relative border-b border-border/40 bg-surface/30 px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--lime)/0.08),transparent_60%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">Learning Roadmap</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Your journey, phase by phase</h2>
            <p className="mt-4 text-muted-foreground">A structured path from fundamentals to a shipped portfolio.</p>
          </div>

          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime via-orange-500 to-transparent" />
            <div className="space-y-12">
              {props.modules.map((m, i) => (
                <div key={m.n} className={`reveal reveal-delay-${(i % 4) + 1} relative grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"}`}>
                    <div className="text-xs font-bold uppercase tracking-widest text-orange-400">
                      Module {m.n} · {m.weeks} · {m.hours}
                    </div>
                    <h3 className="mt-2 text-2xl font-black">{m.title}</h3>
                    <ul className={`mt-4 space-y-2 text-sm text-muted-foreground ${i % 2 ? "" : "md:ml-auto"}`}>
                      {m.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime shrink-0" />{p}
                        </li>
                      ))}
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

      {/* TOOLS */}
      <section className="relative border-b border-border/40 px-6 py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">Tools & Tech Stack</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Master the industry-standard toolkit</h2>
            <p className="mt-4 text-muted-foreground">The exact stack used by top studios and creators worldwide.</p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {props.tools.map((t, i) => (
              <span key={t} style={{ animationDelay: `${i * 40}ms` }}
                className="animate-fade-in inline-flex items-center gap-2 rounded-2xl border border-border bg-surface px-5 py-3 text-sm font-semibold hover:border-lime hover:bg-lime/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-lime/10 transition-all cursor-default">
                <span className="h-2 w-2 rounded-full bg-lime animate-pulse" /> {t}
              </span>
            ))}
          </div>

          <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-8 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
              {[...props.tools, ...props.tools].map((t, i) => (
                <span key={i} className="text-3xl md:text-5xl font-black text-muted-foreground/30 hover:text-lime transition-colors">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPSTONES */}
      {props.capstones.length > 0 && (
        <section className="border-b border-border/40 bg-surface/30 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="reveal max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-lime">Capstone Projects</span>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Ship a portfolio-grade project</h2>
              <p className="mt-4 text-muted-foreground">Pick one, design it, build it, present it on Demo Day.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {props.capstones.map((c, i) => (
                <div key={c} style={{ animationDelay: `${i * 60}ms` }}
                  className="animate-fade-in group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-6 hover:border-lime/60 hover:-translate-y-2 transition-all">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-lime/0 to-orange-500/0 group-hover:from-lime/10 group-hover:to-orange-500/10 transition-all" />
                  <div className="text-4xl font-black text-lime/80">{String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-3 text-lg font-black">{c}</div>
                  <div className="mt-2 text-sm text-muted-foreground">End-to-end concept · production · presentation.</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OUTCOMES */}
      <section className="border-b border-border/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">What you'll be able to do</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Career Outcomes</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {props.outcomes.map((o, i) => (
              <div key={o} style={{ animationDelay: `${i * 80}ms` }}
                className="animate-fade-in rounded-2xl border border-border/50 bg-surface p-6 hover:border-lime/60 hover:-translate-y-1 transition-all">
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
        <div className="absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-lime/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="mx-auto max-w-4xl text-center reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-semibold text-lime">
            <Users className="h-3.5 w-3.5" /> Limited seats per cohort
          </span>
          <h2 className="mt-5 text-4xl font-black md:text-6xl">Reserve your seat</h2>
          <p className="mt-4 text-lg text-muted-foreground">Apply now — our admissions team will reach out within 24 hours.</p>
          <button onClick={() => setApply(true)} className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-base font-bold text-lime-foreground shadow-2xl shadow-lime/30 hover:scale-105 transition-transform">
            Apply Now <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {apply && <ApplyModal program={props.title} onClose={() => setApply(false)} variant="multimedia" />}

      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
      `}</style>
    </div>
  );
}
