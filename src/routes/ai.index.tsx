import { createFileRoute, Link } from "@tanstack/react-router";
import skillAiLogo from "@/assets/skill-ai-logo.png";
import { useEffect, useState } from "react";
import { ApplyModal } from "@/routes/ug-programs";
import { Brain, Database, LineChart, Cpu, Shield, Lock, BarChart3, Sparkles, ArrowRight, Clock } from "lucide-react";
import imgGenAi from "@/assets/card-gen-ai.jpg";
import imgBigData from "@/assets/card-big-data.jpg";
import imgAds from "@/assets/card-ads.jpg";
import imgBdCert from "@/assets/card-bd-cert.jpg";
import imgCyber from "@/assets/card-cyber.jpg";
import imgDatasec from "@/assets/card-datasec.jpg";
import imgProductManagement from "@/assets/card-pm.jpg";

export const Route = createFileRoute("/ai/")({
  head: () => ({
    meta: [
      { title: "AI Programs — Skill Ai" },
      { name: "description", content: "AI programs at Skill Ai: Gen AI, Agentic AI, Big Data, Data Science, Cyber Security, Data Security and AI Product Management." },
    ],
  }),
  component: AIPrograms,
});

const tracks = [
  { to: "/ai/gen-ai", img: imgGenAi, Icon: Brain, title: "Master's in Gen AI & Agentic AI", desc: "Build production-grade generative AI systems and autonomous agents.", dur: "10 Months (Fast)", skills: ["LLMs", "LangGraph", "RAG", "Agents"] },
  { to: "/ai/big-data", img: imgBigData, Icon: Database, title: "Master's in AI Big Data & Advance MLOps", desc: "Engineer massive data pipelines, MLOps and AI systems that power enterprises.", dur: "12 months (275 sessions)", skills: ["Spark", "Kafka", "MLflow", "Cloud"] },
  { to: "/ai/advanced-data-science", img: imgAds, Icon: LineChart, title: "Advanced Data Science", desc: "From statistics to deep learning — solve real business problems.", dur: "3 Months", skills: ["Python", "ML", "DL", "SageMaker"] },
  { to: "/ai/big-data-cert", img: imgBdCert, Icon: Cpu, title: "Certificate in Big Data", desc: "A focused sprint into distributed data systems for working professionals.", dur: "6 months", skills: ["Spark", "Hadoop", "AWS", "Airflow"] },
  { to: "/ai/cyber-security", img: imgCyber, Icon: Shield, title: "Expertise in Cyber Security", desc: "Defend, attack and architect secure systems in the AI era.", dur: "12 months", skills: ["Pentest", "SOC", "Cloud Sec", "OSCP"] },
  { to: "/ai/data-security", img: imgDatasec, Icon: Lock, title: "Certificate in Data Security", desc: "Encryption, compliance, privacy and governance for modern data.", dur: "6 months", skills: ["Encryption", "KMS", "GDPR", "DLP"] },
  { to: "/ai/product-management", img: imgProductManagement, Icon: BarChart3, title: "Advanced Product Management", desc: "Strategy, engineering, data & AI — 24-week PM operating system with a live-brief capstone.", dur: "6 months (24 weeks)", skills: ["Strategy", "Technical PRDs", "Metrics", "AI PRDs"] },
];


function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in-view"), io.unobserve(e.target))), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function AIPrograms() {
  useReveal();
  const [applyFor, setApplyFor] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2"><img src={skillAiLogo} alt="SkillAI - Learn Skill Get Job" className="h-9 w-auto rounded-md bg-white p-1" /></Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Home</Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border/40 px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,oklch(0.72_0.2_50/0.25),transparent_60%)]" />
        <div className="mx-auto max-w-7xl reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-semibold text-lime"><Sparkles className="h-3.5 w-3.5" /> Artificial Intelligence</span>
          <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">Build with <span className="text-gradient-lime">AI, not around it</span>.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Programs that go beyond theory — ship LLM apps, data pipelines and AI products with mentors from leading AI teams.</p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t, i) => (
            <div
              key={t.title}
              className={`reveal reveal-delay-${(i % 4) + 1} hover-lift group relative overflow-hidden flex h-full flex-col rounded-3xl border border-border/50 bg-surface transition-all hover:border-lime/60`}
            >
              <Link to={t.to} className="block">
                <div className="relative h-44 overflow-hidden">
                  <img src={t.img} alt={t.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                  <div className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-xl bg-lime/90 text-lime-foreground shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"><t.Icon className="h-5 w-5" /></div>
                </div>
              </Link>
              <div className="flex flex-1 flex-col p-7">
                <Link to={t.to}><h2 className="text-2xl font-black hover:text-lime transition-colors">{t.title}</h2></Link>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{t.dur}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.skills.map((s) => <span key={s} className="rounded-full bg-background/60 px-3 py-1 text-xs text-muted-foreground ring-1 ring-border/40">{s}</span>)}
                </div>
                <div className="mt-auto flex gap-2 pt-6">
                  <button onClick={() => setApplyFor(t.title)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-lime-foreground hover:scale-105 transition-transform">Apply Now <ArrowRight className="h-4 w-4" /></button>
                  <Link to={t.to} className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-bold hover:bg-background transition-colors">Explore</Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      <section className="border-t border-border/40 bg-surface/50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black md:text-5xl reveal">Why Skill Ai AI?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[{ t: "Ship Real AI", d: "Deploy 3+ AI products into production during the program." }, { t: "Mentor Network", d: "1:1 with AI engineers from OpenAI, Google, Meta & top startups." }, { t: "GPU Credits", d: "Access to GPU credits and enterprise LLM APIs." }].map((b, i) => (
              <div key={b.t} className={`reveal reveal-delay-${i + 1} rounded-2xl border border-border/40 bg-background p-6 hover-lift`}>
                <div className="text-xl font-bold">{b.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {applyFor && <ApplyModal program={applyFor} onClose={() => setApplyFor(null)} />}
    </div>
  );
}
