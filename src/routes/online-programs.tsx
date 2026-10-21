import { createFileRoute, Link } from "@tanstack/react-router";
import skillAiLogo from "@/assets/skill-ai-logo.png";
import { useEffect, useState } from "react";
import { Monitor, Clock, Globe, Zap, PlayCircle, Award } from "lucide-react";
import { ApplyModal } from "./ug-programs";

export const Route = createFileRoute("/online-programs")({
  head: () => ({
    meta: [
      { title: "Online Programs — Skill Ai School of Business" },
      { name: "description", content: "Live online cohorts in AI, growth, product and entrepreneurship — taught by founders." },
    ],
  }),
  component: OnlinePrograms,
});

const programs = [
  { title: "AI for Business Leaders", weeks: "6 weeks", time: "5 hrs/wk", fee: "₹29,000", tag: "Flagship", desc: "Practical AI workflows for marketing, ops and decision-making. Build 3 internal AI tools.", outcomes: ["Use 10+ AI tools fluently", "Automate 5 business workflows", "Build a custom GPT for your team"] },
  { title: "Growth Marketing Bootcamp", weeks: "8 weeks", time: "6 hrs/wk", fee: "₹34,000", tag: "Bestseller", desc: "Performance ads, SEO, content, and retention — taught by CMOs of unicorns.", outcomes: ["Run live campaigns on Meta/Google", "Build a content engine", "Master retention funnels"] },
  { title: "Founder's Bootcamp", weeks: "10 weeks", time: "8 hrs/wk", fee: "₹49,000", tag: "Founder-track", desc: "0 to MVP to first revenue. Mentorship from 15+ founders.", outcomes: ["Validate & launch your MVP", "Get first 10 paying customers", "Pitch to real investors"] },
  { title: "Product Management Sprint", weeks: "6 weeks", time: "5 hrs/wk", fee: "₹27,000", tag: "Live", desc: "Think like a PM. Roadmaps, specs, metrics, and stakeholder management.", outcomes: ["Ship a real product spec", "Run discovery interviews", "Build a PM portfolio"] },
  { title: "Data Storytelling with AI", weeks: "5 weeks", time: "4 hrs/wk", fee: "₹22,000", tag: "New", desc: "Turn raw data into decisions using SQL, GPT and dashboards.", outcomes: ["Master SQL & GPT-powered analysis", "Build executive dashboards", "Write data narratives"] },
  { title: "No-Code SaaS Builder", weeks: "7 weeks", time: "6 hrs/wk", fee: "₹31,000", tag: "Build", desc: "Ship a real SaaS without writing code — using Bubble, Lovable, and AI.", outcomes: ["Launch a working SaaS", "Set up payments & auth", "Acquire first paying users"] },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in-view"), io.unobserve(e.target))), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function OnlinePrograms() {
  useReveal();
  const [apply, setApply] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2"><img src={skillAiLogo} alt="SkillAI - Learn Skill Get Job" className="h-9 w-auto rounded-md bg-white p-1" /></Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Home</Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border/40 px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,oklch(0.72_0.2_50/0.25),transparent_60%)]" />
        <div className="mx-auto max-w-7xl reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-semibold text-lime"><Globe className="h-3.5 w-3.5" /> Online · Live</span>
          <h1 className="mt-5 text-5xl font-black md:text-7xl">Learn from <span className="text-gradient-lime">anywhere</span>.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Live online cohorts taught by founders, CMOs and product leaders. Project-based, capped at 40 learners.</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {[{Icon:Monitor,t:"Live cohorts"},{Icon:Zap,t:"Real projects"},{Icon:Award,t:"Verified certificate"},{Icon:PlayCircle,t:"Lifetime replays"}].map((b,i)=>(
            <div key={b.t} className={`reveal reveal-delay-${i+1} rounded-2xl border border-border/40 bg-surface p-5 text-center`}>
              <b.Icon className="mx-auto h-6 w-6 text-lime" />
              <div className="mt-2 text-sm font-semibold">{b.t}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/40 bg-surface/40 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black md:text-5xl reveal">Live cohorts</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <article key={p.title} className={`reveal reveal-delay-${(i % 5) + 1} hover-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/40 bg-background p-6`}>
                <span className="absolute right-4 top-4 rounded-full bg-lime/15 px-2.5 py-1 text-[10px] font-bold text-lime ring-1 ring-lime/30">{p.tag}</span>
                <h3 className="pr-16 text-xl font-bold">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{p.weeks}</span>
                  <span>{p.time}</span>
                  <span className="font-bold text-lime">{p.fee}</span>
                </div>
                <p className="mt-4 text-sm">{p.desc}</p>
                <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  {p.outcomes.map((o) => <li key={o} className="flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-lime" />{o}</li>)}
                </ul>
                <div className="mt-auto pt-6"><button onClick={() => setApply(p.title)} className="w-full rounded-full bg-lime py-2.5 text-sm font-bold text-lime-foreground hover:scale-[1.02] transition-transform">Enroll Now</button></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {apply && <ApplyModal program={apply} onClose={() => setApply(null)} />}
    </div>
  );
}
