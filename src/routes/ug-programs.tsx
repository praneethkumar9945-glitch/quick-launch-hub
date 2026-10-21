import { createFileRoute, Link } from "@tanstack/react-router";
import { submitApplication } from "@/lib/php-api";
import skillAiLogo from "@/assets/skill-ai-logo.png";
import { useEffect, useState } from "react";
import { ArrowRight, GraduationCap, Briefcase, Calculator, BookOpen, Sparkles, Clock, Users, Rocket, TrendingUp, Building2, Globe2 } from "lucide-react";


export const Route = createFileRoute("/ug-programs")({
  head: () => ({
    meta: [
      { title: "UG / PG Programs — Skill Ai School of Business" },
      { name: "description", content: "Undergraduate (BCA, BBA, BCom, BA) and Postgraduate (MBA, MCA, MCom, MA) programs at Skill Ai — built for the AI era." },
    ],
  }),
  component: UGPrograms,
});

const courses = [
  {
    slug: "bca",
    title: "BCA",
    full: "Bachelor of Computer Applications",
    Icon: GraduationCap,
    tag: "Tech · AI · Code",
    duration: "3 years",
    seats: "120 seats",
    gradient: "from-orange-500/30 to-amber-500/10",
    short: "Become an AI-first builder. Code, ship, and deploy real products from day one.",
    highlights: [
      "Full-stack web & mobile development",
      "AI/ML, prompt engineering & LLM apps",
      "Cloud, DevOps & system design",
      "Capstone with partner startups",
    ],
    careers: ["Software Engineer", "AI Engineer", "Product Engineer", "Founding Engineer"],
  },
  {
    slug: "bba",
    title: "BBA",
    full: "Bachelor of Business Administration",
    Icon: Briefcase,
    tag: "Business · Strategy",
    duration: "3 years",
    seats: "180 seats",
    gradient: "from-amber-500/30 to-orange-600/10",
    short: "Run real businesses while you study. Marketing, ops, finance, and founder skills.",
    highlights: [
      "Marketing, sales & growth labs",
      "Operations & supply chain sims",
      "Finance for founders",
      "Live consulting projects",
    ],
    careers: ["Business Analyst", "Growth Manager", "Founder's Office", "Brand Manager"],
  },
  {
    slug: "bcom",
    title: "B.Com",
    full: "Bachelor of Commerce",
    Icon: Calculator,
    tag: "Finance · Accounts",
    duration: "3 years",
    seats: "150 seats",
    gradient: "from-orange-600/30 to-yellow-500/10",
    short: "Master modern finance — from books to fintech, taxation to investment banking.",
    highlights: [
      "Advanced accounting & GST",
      "Equity research & valuation",
      "Fintech, payments & risk",
      "CFA / ACCA aligned electives",
    ],
    careers: ["Financial Analyst", "Auditor", "Investment Associate", "Tax Consultant"],
  },
  {
    slug: "ba",
    title: "BA",
    full: "Bachelor of Arts (Liberal Studies)",
    Icon: BookOpen,
    tag: "Liberal · Media · Policy",
    duration: "3 years",
    seats: "100 seats",
    gradient: "from-amber-400/30 to-orange-500/10",
    short: "Think across disciplines. Psychology, economics, media, and design thinking.",
    highlights: [
      "Behavioural economics & psych",
      "Media, storytelling & content",
      "Public policy & sustainability",
      "Internships with NGOs & media houses",
    ],
    careers: ["Content Strategist", "Policy Analyst", "PR & Comms", "UX Researcher"],
  },
];

const pgCourses = [
  {
    slug: "mba",
    title: "MBA",
    full: "Master of Business Administration",
    Icon: Rocket,
    tag: "Leadership · Strategy · AI",
    duration: "2 years",
    seats: "120 seats",
    gradient: "from-orange-500/30 to-amber-500/10",
    short: "An MBA rebuilt for the AI era — strategy, product, finance and founder skills taught by operators.",
    highlights: [
      "AI-native strategy & product",
      "Venture building & fundraising",
      "Global immersion week",
      "Capstone with a real startup",
    ],
    careers: ["Founder", "Chief of Staff", "Product Manager", "VC Associate"],
  },
  {
    slug: "mca",
    title: "MCA",
    full: "Master of Computer Applications",
    Icon: TrendingUp,
    tag: "Engineering · AI · Systems",
    duration: "2 years",
    seats: "90 seats",
    gradient: "from-amber-500/30 to-orange-600/10",
    short: "Become a senior AI / full-stack engineer. Ship production systems with LLMs, agents and cloud-native stacks.",
    highlights: [
      "Advanced ML, LLMs & agents",
      "Distributed systems & cloud",
      "Applied research projects",
      "Industry capstone with funded startups",
    ],
    careers: ["Senior Engineer", "AI Engineer", "Tech Lead", "Founding Engineer"],
  },
  {
    slug: "mcom",
    title: "M.Com",
    full: "Master of Commerce",
    Icon: Building2,
    tag: "Finance · Fintech · Markets",
    duration: "2 years",
    seats: "100 seats",
    gradient: "from-orange-600/30 to-yellow-500/10",
    short: "Specialise in modern finance — fintech, investment banking, equity research, taxation and corporate strategy.",
    highlights: [
      "Investment banking & valuation",
      "Fintech, payments & risk",
      "Advanced taxation & audit",
      "CFA / ACCA aligned",
    ],
    careers: ["Investment Banker", "Equity Analyst", "Fintech PM", "Corporate Strategy"],
  },
  {
    slug: "ma",
    title: "MA",
    full: "Master of Arts (Media & Public Policy)",
    Icon: Globe2,
    tag: "Media · Policy · Research",
    duration: "2 years",
    seats: "80 seats",
    gradient: "from-amber-400/30 to-orange-500/10",
    short: "Shape narratives and policy. Specialise in journalism, public policy, UX research or brand storytelling.",
    highlights: [
      "Public policy & governance",
      "Long-form journalism & storytelling",
      "Qualitative & UX research methods",
      "Field internships with media & think-tanks",
    ],
    careers: ["Policy Analyst", "Journalist", "UX Researcher", "Comms Lead"],
  },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in-view"), io.unobserve(e.target))),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function UGPrograms() {
  useReveal();
  const [open, setOpen] = useState<string | null>(null);
  const [applyFor, setApplyFor] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={skillAiLogo} alt="SkillAI - Learn Skill Get Job" className="h-9 w-auto rounded-md bg-white p-1" />
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Home</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40 px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.72_0.2_50/0.25),transparent_60%)]" />
        <div className="mx-auto max-w-7xl reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-semibold text-lime">
            <Sparkles className="h-3.5 w-3.5" /> Undergraduate & Postgraduate Programs
          </span>
          <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
            UG & PG that build <span className="text-gradient-lime">real careers</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Four undergraduate and four postgraduate degrees, redesigned for the AI era. Live projects, founder mentors, and real placements from day one.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a href="#ug" className="rounded-full border border-lime/40 px-4 py-2 text-lime hover:bg-lime/10">↓ UG Programs</a>
            <a href="#pg" className="rounded-full border border-lime/40 px-4 py-2 text-lime hover:bg-lime/10">↓ PG Programs</a>
          </div>
        </div>
      </section>

      {/* UG Cards */}
      <section id="ug" className="px-6 py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 reveal">
            <div className="text-xs font-bold uppercase tracking-widest text-lime">Undergraduate</div>
            <h2 className="mt-2 text-3xl md:text-5xl font-black">UG Programs</h2>
          </div>
          <div className="grid gap-7 md:grid-cols-2">
          {courses.map((c, i) => (
            <article
              key={c.slug}
              className={`reveal reveal-delay-${(i % 4) + 1} hover-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-surface p-8`}
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${c.gradient} opacity-60`} />
              <div className="flex items-start justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-lime/20 text-lime ring-1 ring-lime/30">
                  <c.Icon className="h-7 w-7" />
                </div>
                <span className="rounded-full border border-border/40 bg-background/40 px-3 py-1 text-[10px] font-semibold tracking-wider text-muted-foreground">
                  {c.tag}
                </span>
              </div>
              <h2 className="mt-6 text-4xl font-black">{c.title}</h2>
              <p className="text-sm text-muted-foreground">{c.full}</p>
              <p className="mt-4 text-base">{c.short}</p>

              <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{c.duration}</span>
                <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />{c.seats}</span>
              </div>

              <ul className="mt-5 grid gap-2 text-sm">
                {c.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {c.careers.map((r) => (
                  <span key={r} className="rounded-full bg-background/60 px-3 py-1 text-xs text-muted-foreground ring-1 ring-border/40">
                    {r}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3 pt-7">
                <button
                  onClick={() => setOpen(c.slug)}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-5 py-2.5 text-sm font-semibold hover:bg-background"
                >
                  Explore <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setApplyFor(c.title)}
                  className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-lime-foreground hover:scale-105 transition-transform animate-pulse-glow"
                >
                  Apply Now
                </button>
              </div>
            </article>
          ))}
          </div>
        </div>
      </section>

      {/* PG Cards */}
      <section id="pg" className="border-t border-border/40 bg-surface/30 px-6 py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 reveal">
            <div className="text-xs font-bold uppercase tracking-widest text-lime">Postgraduate</div>
            <h2 className="mt-2 text-3xl md:text-5xl font-black">PG Programs</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">Master's degrees designed with operators, founders and AI labs — for the next generation of builders and leaders.</p>
          </div>
          <div className="grid gap-7 md:grid-cols-2">
            {pgCourses.map((c, i) => (
              <article
                key={c.slug}
                className={`reveal reveal-delay-${(i % 4) + 1} hover-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-surface p-8`}
              >
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${c.gradient} opacity-60`} />
                <div className="flex items-start justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-lime/20 text-lime ring-1 ring-lime/30">
                    <c.Icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border border-border/40 bg-background/40 px-3 py-1 text-[10px] font-semibold tracking-wider text-muted-foreground">
                    {c.tag}
                  </span>
                </div>
                <h2 className="mt-6 text-4xl font-black">{c.title}</h2>
                <p className="text-sm text-muted-foreground">{c.full}</p>
                <p className="mt-4 text-base">{c.short}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{c.duration}</span>
                  <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />{c.seats}</span>
                </div>
                <ul className="mt-5 grid gap-2 text-sm">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.careers.map((r) => (
                    <span key={r} className="rounded-full bg-background/60 px-3 py-1 text-xs text-muted-foreground ring-1 ring-border/40">
                      {r}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-3 pt-7">
                  <button
                    onClick={() => setApplyFor(c.title)}
                    className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-lime-foreground hover:scale-105 transition-transform animate-pulse-glow"
                  >
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why UG */}
      <section className="border-t border-border/40 bg-surface/50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black md:text-5xl reveal">Why Skill Ai for UG?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { t: "Founder Mentors", d: "1:1 access to 100+ unicorn founders and operators." },
              { t: "Live Projects", d: "Work on real revenue-generating ventures from year 1." },
              { t: "Placement Promise", d: "Graduate into founder-facing or high-growth tech roles." },
            ].map((b, i) => (
              <div key={b.t} className={`reveal reveal-delay-${i + 1} rounded-2xl border border-border/40 bg-background p-6 hover-lift`}>
                <div className="text-xl font-bold">{b.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      {open && (
        <CourseModal course={courses.find((c) => c.slug === open)!} onClose={() => setOpen(null)} onApply={(t) => { setOpen(null); setApplyFor(t); }} />
      )}
      {applyFor && <ApplyModal program={applyFor} onClose={() => setApplyFor(null)} />}
    </div>
  );
}

function CourseModal({ course, onClose, onApply }: { course: typeof courses[number]; onClose: () => void; onApply: (t: string) => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-3xl border border-border/60 bg-surface p-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-3xl font-black">{course.title}</h3>
            <p className="text-sm text-muted-foreground">{course.full}</p>
          </div>
          <button onClick={onClose} className="text-2xl text-muted-foreground hover:text-foreground">×</button>
        </div>
        <p className="mt-4">{course.short}</p>
        <h4 className="mt-6 font-bold text-lime">Curriculum highlights</h4>
        <ul className="mt-2 space-y-1.5 text-sm">{course.highlights.map((h) => <li key={h}>• {h}</li>)}</ul>
        <h4 className="mt-6 font-bold text-lime">Career paths</h4>
        <div className="mt-2 flex flex-wrap gap-2">{course.careers.map((r) => <span key={r} className="rounded-full bg-background px-3 py-1 text-xs ring-1 ring-border/40">{r}</span>)}</div>
        <button onClick={() => onApply(course.title)} className="mt-7 w-full rounded-full bg-lime py-3 font-bold text-lime-foreground">Apply for {course.title}</button>
      </div>
    </div>
  );
}

export function ApplyModal({ program, onClose, variant = "default" }: { program: string; onClose: () => void; variant?: "default" | "multimedia" }) {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const isMM = variant === "multimedia";
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interest: "",
    level: "",
    portfolio: "",
    tools: "",
    project: "",
    why: "",
  });
  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError("");
    const res = await submitApplication({
      form_type: isMM ? "multimedia-program" : "ug-pg-program",
      program,
      name: form.name,
      email: form.email,
      phone: form.phone,
      city: form.city,
      goal: isMM ? form.project : form.why,
      extra: isMM
        ? { interest: form.interest, level: form.level, portfolio: form.portfolio, tools: form.tools }
        : { why: form.why },
    });
    setSending(false);
    if (res.ok || res.offline) {
      setDone(true);
    } else {
      setSendError(res.error ?? "Could not submit. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-md rounded-3xl border border-border/60 bg-surface p-7 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-black">Apply — {program}</h3>
          <button onClick={onClose} className="text-2xl text-muted-foreground hover:text-foreground">×</button>
        </div>
        {done ? (
          <div className="py-10 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-lime text-lime-foreground text-2xl">✓</div>
            <p className="mt-4 font-semibold">Application received!</p>
            <p className="text-sm text-muted-foreground">Our team will reach out within 24 hrs.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-5 grid gap-3">
            <input required value={form.name} onChange={update("name")} placeholder="Full name" className="rounded-xl border border-border/60 bg-background px-4 py-2.5 text-sm outline-none focus:border-lime" />
            <input required value={form.email} onChange={update("email")} type="email" placeholder="Email" className="rounded-xl border border-border/60 bg-background px-4 py-2.5 text-sm outline-none focus:border-lime" />
            <input required value={form.phone} onChange={update("phone")} placeholder="Phone" className="rounded-xl border border-border/60 bg-background px-4 py-2.5 text-sm outline-none focus:border-lime" />
            <input value={form.city} onChange={update("city")} placeholder="City" className="rounded-xl border border-border/60 bg-background px-4 py-2.5 text-sm outline-none focus:border-lime" />
            {isMM ? (
              <>
                <select required value={form.interest} onChange={update("interest")} className="rounded-xl border border-border/60 bg-background px-4 py-2.5 text-sm outline-none focus:border-lime">
                  <option value="">Creative area of interest</option>
                  <option>Graphic Design & Branding</option>
                  <option>Video Editing & VFX</option>
                  <option>2D / 3D Animation</option>
                  <option>Film Direction & Cinematography</option>
                  <option>Performance & Social Media Marketing</option>
                </select>
                <select required value={form.level} onChange={update("level")} className="rounded-xl border border-border/60 bg-background px-4 py-2.5 text-sm outline-none focus:border-lime">
                  <option value="">Your current level</option>
                  <option>Absolute beginner</option>
                  <option>Hobbyist / self-taught</option>
                  <option>1–2 years experience</option>
                  <option>Working professional</option>
                </select>
                <input value={form.portfolio} onChange={update("portfolio")} placeholder="Portfolio / Instagram / showreel link (optional)" className="rounded-xl border border-border/60 bg-background px-4 py-2.5 text-sm outline-none focus:border-lime" />
                <input value={form.tools} onChange={update("tools")} placeholder="Tools you already use (e.g. Photoshop, Premiere)" className="rounded-xl border border-border/60 bg-background px-4 py-2.5 text-sm outline-none focus:border-lime" />
                <textarea required value={form.project} onChange={update("project")} placeholder="Tell us about a project or story you'd love to create." rows={3} className="rounded-xl border border-border/60 bg-background px-4 py-2.5 text-sm outline-none focus:border-lime" />
              </>
            ) : (
              <textarea value={form.why} onChange={update("why")} placeholder="Why this program?" rows={3} className="rounded-xl border border-border/60 bg-background px-4 py-2.5 text-sm outline-none focus:border-lime" />
            )}
            {sendError && <p className="text-sm text-destructive">{sendError}</p>}
            <button disabled={sending} className="rounded-full bg-lime py-3 font-bold text-lime-foreground hover:scale-[1.02] transition-transform disabled:opacity-60">
              {sending ? "Sending…" : "Submit application"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

