import { createFileRoute, Link } from "@tanstack/react-router";
import skillAiLogo from "@/assets/skill-ai-logo.png";
import { useEffect, useState } from "react";
import { Rocket, DollarSign, Users, Lightbulb, Building2, TrendingUp, CheckCircle2 } from "lucide-react";
import { ApplyModal } from "./ug-programs";

export const Route = createFileRoute("/incubation")({
  head: () => ({
    meta: [
      { title: "Incubation — Skill Ai Startup Lab" },
      { name: "description", content: "Funding, mentorship, and infra to take your idea from zero to revenue at Skill Ai Startup Lab." },
    ],
  }),
  component: Incubation,
});

const offerings = [
  { Icon: DollarSign, t: "₹25L Pre-seed", d: "Equity-free grant up to ₹25 lakh for selected founders." },
  { Icon: Users, t: "Founder Mentors", d: "1:1 mentorship from 100+ unicorn founders & VCs." },
  { Icon: Building2, t: "Studio & Infra", d: "Dedicated office, studio, hardware lab and legal stack." },
  { Icon: TrendingUp, t: "GTM Support", d: "Growth, design and tech pods to help you ship fast." },
  { Icon: Lightbulb, t: "Idea Validation", d: "Customer discovery, MVP sprints and PMF playbooks." },
  { Icon: Rocket, t: "Demo Day", d: "Pitch to 80+ top VCs at the Skill Ai Demo Day each cohort." },
];

const stages = [
  { s: "01", t: "Apply", d: "Submit your idea — solo or with co-founders. Rolling intakes every quarter." },
  { s: "02", t: "Discovery Sprint", d: "2-week paid sprint to validate your problem and customer." },
  { s: "03", t: "Build & Ship", d: "16-week incubation with funding, mentors, and a studio team." },
  { s: "04", t: "Demo Day", d: "Pitch to investors and secure follow-on funding." },
];

const ventures = [
  { name: "EverRaw Foods", sector: "D2C Foods", raise: "Shark Tank India", note: "₹2.5L revenue in 10 weeks on campus." },
  { name: "Bloom Skincare", sector: "Beauty", raise: "₹1Cr ARR", note: "Bootstrapped to profitability in 14 months." },
  { name: "Lexi AI", sector: "AI SaaS", raise: "$500K Seed", note: "Legal copilot used by 40+ Indian law firms." },
  { name: "Trekify", sector: "Travel", raise: "₹3Cr Seed", note: "Adventure trips marketplace, 8000+ bookings." },
  { name: "Pago Pay", sector: "Fintech", raise: "Angel Round", note: "Tap-to-pay for kirana stores in tier-2 cities." },
  { name: "Stitch Studio", sector: "Fashion", raise: "₹80L Pre-seed", note: "On-demand designer wear, 5x MoM growth." },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in-view"), io.unobserve(e.target))), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Incubation() {
  useReveal();
  const [apply, setApply] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2"><img src={skillAiLogo} alt="SkillAI - Learn Skill Get Job" className="h-9 w-auto rounded-md bg-white p-1" /></Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Home</Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border/40 px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_30%,oklch(0.72_0.2_50/0.3),transparent_60%)]" />
        <div className="mx-auto max-w-7xl reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-semibold text-lime"><Rocket className="h-3.5 w-3.5" /> Skill Ai Startup Lab</span>
          <h1 className="mt-5 text-5xl font-black md:text-7xl">From idea to <span className="text-gradient-lime">first revenue</span>.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Skill Ai Startup Lab gives founders capital, mentorship and a full operating team to take a venture from zero to one — in 16 weeks.</p>
          <div className="mt-7 flex gap-3">
            <button onClick={() => setApply(true)} className="rounded-full bg-lime px-7 py-3 font-bold text-lime-foreground hover:scale-105 transition-transform animate-pulse-glow">Apply to Incubator</button>
            <a href="#how" className="rounded-full border border-border/60 bg-background/60 px-7 py-3 font-semibold hover:bg-background">How it works</a>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[{v:"₹25L",l:"Grant"},{v:"500+",l:"Ventures built"},{v:"₹120Cr+",l:"Follow-on raised"},{v:"80+",l:"VC partners"}].map((s,i)=>(
            <div key={s.l} className={`reveal reveal-delay-${i+1} rounded-2xl border border-border/40 bg-surface p-5 text-center`}>
              <div className="text-3xl font-black text-gradient-lime">{s.v}</div>
              <div className="text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black md:text-5xl reveal">What you get</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o, i) => (
              <div key={o.t} className={`reveal reveal-delay-${(i % 5) + 1} hover-lift rounded-2xl border border-border/40 bg-surface p-6`}>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-lime/15 text-lime ring-1 ring-lime/30"><o.Icon className="h-6 w-6" /></div>
                <h3 className="mt-4 text-lg font-bold">{o.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="border-t border-border/40 bg-surface/40 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black md:text-5xl reveal">How it works</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {stages.map((s, i) => (
              <div key={s.s} className={`reveal reveal-delay-${i+1} relative rounded-2xl border border-border/40 bg-background p-6 hover-lift`}>
                <div className="text-4xl font-black text-lime/40">{s.s}</div>
                <h3 className="mt-2 text-lg font-bold">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black md:text-5xl reveal">Ventures built at Skill Ai</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ventures.map((v, i) => (
              <div key={v.name} className={`reveal reveal-delay-${(i % 5) + 1} rounded-2xl border border-border/40 bg-surface p-6 hover-lift`}>
                <div className="flex items-center justify-between">
                  <div className="font-bold">{v.name}</div>
                  <span className="rounded-full bg-lime/15 px-2.5 py-1 text-[10px] font-bold text-lime ring-1 ring-lime/30">{v.raise}</span>
                </div>
                <div className="text-xs text-muted-foreground">{v.sector}</div>
                <p className="mt-3 text-sm">{v.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-surface/40 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black md:text-5xl reveal">Who should apply</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {["Aspiring founders aged 18–32 with an idea","Student founders building during college","Solo founders looking for co-founders","Early teams pre-revenue or with <₹10L MRR","Domain experts ready to commercialize tech","Founders open to relocating to Bangalore"].map((p, i) => (
              <div key={p} className={`reveal reveal-delay-${(i % 4) + 1} flex items-start gap-3 rounded-xl border border-border/40 bg-background p-4`}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                <span className="text-sm">{p}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <button onClick={() => setApply(true)} className="rounded-full bg-lime px-7 py-3 font-bold text-lime-foreground hover:scale-105 transition-transform animate-pulse-glow">Apply to Incubator</button>
          </div>
        </div>
      </section>

      {apply && <ApplyModal program="Skill Ai Startup Lab Incubation" onClose={() => setApply(false)} />}
    </div>
  );
}
