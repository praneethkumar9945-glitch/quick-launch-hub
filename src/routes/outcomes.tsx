import { createFileRoute, Link } from "@tanstack/react-router";
import skillAiLogo from "@/assets/skill-ai-logo.png";
import { useEffect, useState } from "react";
import { TrendingUp, Briefcase, Award, Users, Building2, Rocket } from "lucide-react";
import { ApplyModal } from "./ug-programs";

export const Route = createFileRoute("/outcomes")({
  head: () => ({
    meta: [
      { title: "Outcomes — Skill Ai School of Business" },
      { name: "description", content: "Placements, founder roles and salaries achieved by Skill Ai graduates." },
    ],
  }),
  component: Outcomes,
});

const stats = [
  { v: "26L", l: "Average CTC" },
  { v: "58%", l: "Founder-facing roles" },
  { v: "2.8X", l: "Average CTC jump" },
  { v: "500+", l: "Hiring partners" },
  { v: "36.5L", l: "Top 25% Avg CTC" },
  { v: "98%", l: "Placement rate" },
];

const roles = [
  { Icon: Rocket, title: "Founder's Office", count: "32%", desc: "Chief of staff & strategy roles at fast-growing startups." },
  { Icon: TrendingUp, title: "Growth & Marketing", count: "22%", desc: "Performance, content, and brand growth leadership." },
  { Icon: Briefcase, title: "Product Management", count: "18%", desc: "APM and PM-1 roles at consumer & SaaS startups." },
  { Icon: Building2, title: "VC & Investing", count: "12%", desc: "Analyst roles at top early-stage VC firms." },
  { Icon: Award, title: "Own Venture", count: "10%", desc: "Founders building their startup from campus." },
  { Icon: Users, title: "Consulting", count: "6%", desc: "Strategy roles at Bain, BCG & boutique firms." },
];

const stories = [
  { name: "Lucky Sharma", role: "Founder, EverRaw Foods", note: "Pitched on Shark Tank India within 6 months of graduating.", ctc: "Own Venture", photo: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=200&q=80&auto=format&fit=crop" },
  { name: "Ananya Rao", role: "Chief of Staff, Cred", note: "Started in founder's office and now leads a 12-person team.", ctc: "₹42 LPA", photo: "https://images.unsplash.com/photo-1611432579699-484f7990b127?w=200&q=80&auto=format&fit=crop" },
  { name: "Rohit Mehta", role: "APM, Razorpay", note: "Shipped 3 products in his first year out of Skill Ai.", ctc: "₹38 LPA", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80&auto=format&fit=crop" },
  { name: "Priya Iyer", role: "Analyst, Blume Ventures", note: "Led 2 seed-stage deals in the consumer space.", ctc: "₹32 LPA", photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&q=80&auto=format&fit=crop" },
  { name: "Karan Shah", role: "Growth Lead, Meesho", note: "Drove a 40% user growth in his cohort vertical.", ctc: "₹36 LPA", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop" },
  { name: "Neha Kapoor", role: "Founder, Bloom Skincare", note: "Bootstrapped to ₹1Cr ARR within 14 months.", ctc: "Own Venture", photo: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?w=200&q=80&auto=format&fit=crop" },
];

const hiring = ["Cred", "Meesho", "Razorpay", "Urban Company", "Blume", "Elevation", "Antler", "PhonePe", "Zerodha", "Swiggy", "Zepto", "boAt"];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in-view"), io.unobserve(e.target))), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Outcomes() {
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
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,oklch(0.72_0.2_50/0.25),transparent_60%)]" />
        <div className="mx-auto max-w-7xl reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-semibold text-lime">Career Outcomes</span>
          <h1 className="mt-5 text-5xl font-black md:text-7xl">Real <span className="text-gradient-lime">outcomes</span>. Real jobs.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Where Skill Ai graduates work, what they earn, and the ventures they build.</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <div key={s.l} className={`reveal reveal-delay-${(i % 5) + 1} rounded-2xl border border-border/40 bg-surface p-6 text-center hover-lift`}>
              <div className="text-3xl font-black text-gradient-lime md:text-4xl">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/40 bg-surface/40 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black md:text-5xl reveal">Where graduates land</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((r, i) => (
              <div key={r.title} className={`reveal reveal-delay-${(i % 5) + 1} hover-lift rounded-2xl border border-border/40 bg-background p-6`}>
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-lime/15 text-lime ring-1 ring-lime/30"><r.Icon className="h-6 w-6" /></div>
                  <div className="text-2xl font-black text-gradient-lime">{r.count}</div>
                </div>
                <h3 className="mt-4 text-lg font-bold">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black md:text-5xl reveal">Alumni stories</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((s, i) => (
              <div key={s.name} className={`reveal reveal-delay-${(i % 5) + 1} rounded-2xl border border-border/40 bg-surface p-6 hover-lift`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={s.photo} alt={s.name} loading="lazy" width={48} height={48} className="h-12 w-12 rounded-full object-cover ring-2 ring-lime/30" />
                    <div>
                      <div className="font-bold">{s.name}</div>
                      <div className="text-xs text-muted-foreground">{s.role}</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-lime/15 px-3 py-1 text-xs font-bold text-lime ring-1 ring-lime/30">{s.ctc}</span>
                </div>
                <p className="mt-4 text-sm">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-surface/40 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-2xl font-black reveal">Hiring partners</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {hiring.map((h) => (
              <span key={h} className="rounded-xl border border-border/40 bg-background px-4 py-2 text-sm font-semibold">{h}</span>
            ))}
          </div>
          <div className="mt-10">
            <button onClick={() => setApply(true)} className="rounded-full bg-lime px-7 py-3 font-bold text-lime-foreground hover:scale-105 transition-transform animate-pulse-glow">Apply Now</button>
          </div>
        </div>
      </section>

      {apply && <ApplyModal program="Skill Ai Programs" onClose={() => setApply(false)} />}
    </div>
  );
}
