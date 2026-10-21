import { createFileRoute, Link } from "@tanstack/react-router";
import { submitApplication } from "@/lib/php-api";
import skillAiLogo from "@/assets/skill-ai-logo.png";
import heroImg from "@/assets/card-ads.jpg";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  ArrowRight, Clock, Trophy, Rocket, Sparkles, CheckCircle2,
  LineChart, BarChart3, Cog, Gauge, Timer, Layers, Database, Brain,
  Server, Briefcase, Calendar, Users, Target, Zap,
} from "lucide-react";
import { ApplyModal } from "@/routes/ug-programs";

export const Route = createFileRoute("/ai/advanced-data-science")({
  head: () => ({
    meta: [
      { title: "Advanced Core Data Science — 3 Month Program | Skill Ai" },
      { name: "description", content: "12-week Advanced Core Data Science program: statistics, ML, time series, deep learning, MLOps & industry capstones. 144 hours, 72 sessions." },
    ],
  }),
  component: AdvancedDataSciencePage,
});

const HIGHLIGHTS = [
  { icon: Clock, label: "Duration", value: "3 Months" },
  { icon: Calendar, label: "Schedule", value: "2 hrs/day · 6 days" },
  { icon: Layers, label: "Sessions", value: "72 Sessions" },
  { icon: Timer, label: "Total Hours", value: "144 Hours" },
  { icon: Trophy, label: "Level", value: "Intermediate → Advanced" },
  { icon: Rocket, label: "Mode", value: "Hybrid · 12 Weeks" },
];

const MODULES = [
  { n: 1, icon: Cog, title: "Python for Data Science & Clean Code", weeks: "Week 1", hours: "12 hrs",
    points: ["Python refresher · OOP basics", "File handling (CSV, JSON, text)", "Jupyter / Colab + virtual environments", "PEP8, docstrings & clean-code practices"], color: "from-lime/30 to-emerald-500/10" },
  { n: 2, icon: Database, title: "Data Manipulation — NumPy, Pandas & Polars", weeks: "Week 2", hours: "12 hrs",
    points: ["NumPy arrays & vectorized ops", "Pandas: merge, group, reshape", "Memory optimisation for large data", "Polars for out-of-core, lazy processing"], color: "from-orange-500/30 to-amber-500/10" },
  { n: 3, icon: BarChart3, title: "Statistics for Data Science (Core)", weeks: "Week 3", hours: "12 hrs",
    points: ["Descriptive stats & distributions", "Hypothesis testing · p-values · CIs", "Correlation & regression fundamentals", "A/B testing statistical foundations"], color: "from-fuchsia-500/30 to-purple-500/10" },
  { n: 4, icon: Database, title: "SQL for Data Analytics", weeks: "Week 4", hours: "12 hrs",
    points: ["Joins, aggregations, subqueries", "SQL ↔ Python / Pandas workflows", "Business query patterns", "SQLite & PostgreSQL locally"], color: "from-cyan-500/30 to-blue-500/10" },
  { n: 5, icon: Cog, title: "Data Cleaning, Wrangling & Feature Engineering", weeks: "Week 5", hours: "12 hrs",
    points: ["Missing values & outliers", "Encoding categorical features", "Scaling & engineering pipelines", "Feature Stores with Feast"], color: "from-rose-500/30 to-pink-500/10" },
  { n: 6, icon: LineChart, title: "EDA & Interactive Visualization Dashboards", weeks: "Week 6", hours: "12 hrs",
    points: ["Exploratory analysis workflow", "Matplotlib · Seaborn · Plotly", "Streamlit dashboards (local)", "Tableau for business stakeholders"], color: "from-lime/30 to-teal-500/10" },
  { n: 7, icon: Server, title: "Data Engineering Foundations & Pipeline Orchestration", weeks: "Weeks 7–8", hours: "24 hrs",
    points: ["ETL: CSV → SQLite / Parquet", "PySpark (local mode) for larger-than-memory data", "Spark DataFrames · transformations · actions", "Apache Airflow DAGs & scheduling"], color: "from-amber-500/30 to-yellow-500/10" },
  { n: 8, icon: Target, title: "Time Series Forecasting & Enterprise A/B Testing", weeks: "Week 9", hours: "12 hrs",
    points: ["Decomposition & stationarity", "ARIMA & Prophet forecasting", "A/B experiment design", "Statistical impact analysis for business"], color: "from-violet-500/30 to-indigo-500/10" },
  { n: 9, icon: Zap, title: "Big Data Concepts & MLOps Foundations", weeks: "Weeks 10–11", hours: "24 hrs",
    points: ["Big data concepts overview", "Model deployment with FastAPI", "Containerisation with Docker", "Experiment tracking · MLflow · DVC"], color: "from-sky-500/30 to-cyan-500/10" },
  { n: 10, icon: Briefcase, title: "Capstone Projects & Live Portfolio Packaging", weeks: "Week 12", hours: "12 hrs",
    points: ["End-to-end production-style capstone", "Healthcare / Finance / Retail / HR / Marketing", "Local packaging & demo", "Hiring-partner presentation · portfolio & resume"], color: "from-orange-500/30 to-red-500/10" },
];

const TOOLS = [
  "Python 3.x", "Jupyter", "Google Colab", "Git", "GitHub", "PEP8",
  "NumPy", "Pandas", "Polars",
  "SQL", "SQLite", "PostgreSQL", "Feast",
  "Matplotlib", "Seaborn", "Plotly", "Streamlit", "Tableau",
  "PySpark", "Parquet", "Apache Airflow",
  "ARIMA", "Prophet", "A/B Testing",
  "FastAPI", "Docker", "MLflow", "DVC",
];

const CAPSTONES = [
  "Healthcare Risk Prediction",
  "Financial Forecasting Engine",
  "Retail Demand & A/B Testing",
  "HR Attrition & People Analytics",
  "Marketing Mix & Attribution",
  "End-to-End Local MLOps Pipeline",
];

const OUTCOMES = [
  "Build production-style ML apps run locally with FastAPI, Docker, MLflow & DVC",
  "Engineer features, pipelines & feature stores for tabular ML",
  "Forecast time series and design enterprise A/B tests",
  "Ship interactive dashboards with Streamlit & Tableau",
  "Orchestrate ETL pipelines with PySpark & Apache Airflow",
  "Package a portfolio-ready capstone across Healthcare, Finance, Retail, HR or Marketing",
];

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

// Zoho-style scroll parallax
function useParallax() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const y = window.scrollY;
      ref.current.style.transform = `translate3d(0, ${y * 0.15}px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return ref;
}

function AdvancedDataSciencePage() {
  useReveal();
  const parallaxRef = useParallax();
  const [apply, setApply] = useState(false);
  const [activeModule, setActiveModule] = useState(0);

  // Auto-rotate spotlight
  useEffect(() => {
    const id = setInterval(() => setActiveModule((i) => (i + 1) % MODULES.length), 3500);
    return () => clearInterval(id);
  }, []);

  const current = useMemo(() => MODULES[activeModule], [activeModule]);
  const ActiveIcon = current.icon;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={skillAiLogo} alt="SkillAI - Learn Skill Get Job" className="h-9 w-auto rounded-md bg-white p-1" />
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/ai" className="text-sm text-muted-foreground hover:text-foreground">← All AI Programs</Link>
            <button onClick={() => setApply(true)} className="hidden md:inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2 text-sm font-bold text-lime-foreground hover:scale-105 transition-transform">
              Apply <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO — Zoho-style layered gradients + parallax orbs */}
      <section className="relative overflow-hidden border-b border-border/40 px-6 py-24 md:py-32">
        <div ref={parallaxRef} className="absolute inset-0 -z-10">
          <div className="absolute -top-20 -left-20 h-[28rem] w-[28rem] rounded-full bg-lime/25 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
          <div className="absolute top-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-orange-500/25 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground)/0.06)_1px,transparent_0)] [background-size:32px_32px]" />

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.3fr_1fr] items-center">
          <div>
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-semibold text-lime">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" /> Advanced Program · Cohort Open
              </span>
            </div>
            <h1 className="reveal mt-6 text-5xl font-black tracking-tight md:text-6xl leading-[1.05]">
              {"Advanced Core Data Science".split(" ").map((w, i) => (
                <span key={i} className="inline-block animate-fade-in mr-3" style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}>{w}</span>
              ))}
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg text-muted-foreground">
              A rigorous 3-month, 144-hour journey from statistical reasoning to deep learning, MLOps and industry-grade capstones. Built for learners who already speak Python & Pandas.
            </p>

            <div className="reveal reveal-delay-3 mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
              {HIGHLIGHTS.map((h, i) => {
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
              <button onClick={() => setApply(true)} className="group inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-bold text-lime-foreground shadow-2xl shadow-lime/30 hover:scale-105 hover:shadow-lime/50 transition-all">
                Apply Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a href="#roadmap" className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-bold hover:bg-surface transition-colors">
                Explore 12-Week Roadmap
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative lg:p-6">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-lime/30 via-fuchsia-500/20 to-cyan-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-lime/30 bg-surface shadow-2xl shadow-lime/20 hover:scale-[1.02] transition-transform">
              <div className="aspect-square p-4 md:p-6 flex items-center justify-center bg-gradient-to-br from-background via-surface to-background">
                <img src={heroImg} alt="Advanced Core Data Science" className="max-h-full max-w-full object-contain rounded-2xl" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-lime">Advanced Programme</div>
                <div className="mt-1 text-lg font-black">12 Weeks · 144 Hours · 10 Modules</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE OVERVIEW — Zoho-style split with rotating spotlight */}
      <section className="relative border-b border-border/40 px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">Course Overview</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">From statistical thinking to production ML</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Designed for learners with a working grip on Python, NumPy, Pandas and basic ML. Over 12 weeks — 2 hours a day, 6 days a week — you advance through statistics, feature engineering, advanced algorithms, time series, unsupervised learning, SQL/Spark, deep learning, MLOps and finally end-to-end industry capstones with interview prep.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Each week is anchored to one core module. <span className="text-foreground font-semibold">Days 1–5</span> cover conceptual and applied topics; <span className="text-foreground font-semibold">Day 6</span> is a hands-on lab or project that consolidates the week.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {[
                { k: "12", v: "Weeks" },
                { k: "72", v: "Sessions" },
                { k: "144", v: "Hours" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-border/50 bg-surface p-5 text-center hover:border-lime hover:-translate-y-1 transition-all">
                  <div className="text-3xl font-black text-lime">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Rotating spotlight card */}
          <div className="reveal reveal-delay-2 relative lg:sticky lg:top-24">
            <div className={`relative overflow-hidden rounded-3xl border border-lime/30 bg-gradient-to-br ${current.color} p-8 shadow-2xl shadow-lime/10 transition-all duration-700`}>
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
                {MODULES.map((m, i) => (
                  <button key={m.n} onClick={() => setActiveModule(i)} aria-label={`Module ${m.n}`}
                    className={`h-1.5 rounded-full transition-all ${i === activeModule ? "w-8 bg-lime" : "w-3 bg-border hover:bg-muted-foreground"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP — alternating timeline (Big Data style) */}
      <section id="roadmap" className="relative border-b border-border/40 bg-surface/30 px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--lime)/0.08),transparent_60%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">Learning Roadmap</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Your journey, phase by phase</h2>
            <p className="mt-4 text-muted-foreground">12 weeks · 10 modules · a structured path from statistical thinking to production ML.</p>
          </div>

          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime via-orange-500 to-transparent" />
            <div className="space-y-12">
              {MODULES.map((m, i) => (
                <div
                  key={m.n}
                  className={`reveal reveal-delay-${(i % 4) + 1} relative grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"}`}>
                    <div className="text-xs font-bold uppercase tracking-widest text-orange-400">
                      Module {m.n} · {m.weeks} · {m.hours}
                    </div>
                    <h3 className="mt-2 text-2xl font-black">{m.title}</h3>
                    <ul className={`mt-4 space-y-2 text-sm text-muted-foreground ${i % 2 ? "" : "md:ml-auto"}`}>
                      {m.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime shrink-0" />
                          {p}
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

      {/* TOOLS — marquee + hover chips */}
      <section className="relative border-b border-border/40 px-6 py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">Tools & Tech Stack</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Master the industry-standard toolkit</h2>
            <p className="mt-4 text-muted-foreground">From notebooks to production — the same stack used at Netflix, Uber, Airbnb & Zoho.</p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {TOOLS.map((t, i) => (
              <span key={t}
                style={{ animationDelay: `${i * 40}ms` }}
                className="animate-fade-in inline-flex items-center gap-2 rounded-2xl border border-border bg-surface px-5 py-3 text-sm font-semibold hover:border-lime hover:bg-lime/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-lime/10 transition-all cursor-default">
                <span className="h-2 w-2 rounded-full bg-lime animate-pulse" /> {t}
              </span>
            ))}
          </div>

          {/* Zoho-style scrolling marquee */}
          <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-8 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
              {[...TOOLS, ...TOOLS].map((t, i) => (
                <span key={i} className="text-3xl md:text-5xl font-black text-muted-foreground/30 hover:text-lime transition-colors">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPSTONES */}
      <section className="border-b border-border/40 bg-surface/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">Capstone Options · Week 12</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Ship a production-grade project</h2>
            <p className="mt-4 text-muted-foreground">Pick one, design it, build it, present it on Demo Day.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CAPSTONES.map((c, i) => (
              <div key={c} style={{ animationDelay: `${i * 60}ms` }}
                className="animate-fade-in group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-6 hover:border-lime/60 hover:-translate-y-2 transition-all">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-lime/0 to-orange-500/0 group-hover:from-lime/10 group-hover:to-orange-500/10 transition-all" />
                <div className="text-4xl font-black text-lime/80">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-3 text-lg font-black">{c}</div>
                <div className="mt-2 text-sm text-muted-foreground">End-to-end pipeline · deployment · monitoring · presentation.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER ROLES */}
      <section className="border-b border-border/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">Career Roles Mapped to Modules</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Where this programme takes you</h2>
            <p className="mt-4 text-muted-foreground">Every role below maps to specific modules — the programme is designed so you can specialise as you graduate.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { role: "Data Scientist", anchor: "M1–M4", desc: "Statistics, ML modelling and hypothesis-driven analysis on real datasets" },
              { role: "ML Engineer", anchor: "M5, M6", desc: "Deep learning and production model training with PyTorch / TensorFlow" },
              { role: "Data Analyst", anchor: "M1, M8", desc: "SQL, EDA, dashboards and business storytelling" },
              { role: "MLOps Engineer", anchor: "M7, M9", desc: "Deployment, monitoring and CI/CD for ML services" },
              { role: "AI Product Engineer", anchor: "M8, M10", desc: "Ship a portfolio-grade data-science product end-to-end" },
              { role: "Applied Researcher", anchor: "M5, M10", desc: "Advanced experimentation and capstone research delivery" },
            ].map((r, i) => (
              <div key={r.role} style={{ animationDelay: `${i * 60}ms` }}
                className="animate-fade-in group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-6 hover:border-lime/60 hover:-translate-y-2 transition-all">
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

      {/* OUTCOMES */}
      <section className="border-b border-border/40 bg-surface/30 px-6 py-24">

        <div className="mx-auto max-w-7xl">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">What you'll be able to do</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Career Outcomes</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {OUTCOMES.map((o, i) => (
              <div key={o} style={{ animationDelay: `${i * 80}ms` }}
                className="animate-fade-in rounded-2xl border border-border/50 bg-surface p-6 hover:border-lime/60 hover:-translate-y-1 transition-all">
                <CheckCircle2 className="h-6 w-6 text-lime" />
                <p className="mt-3 text-sm font-medium">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM — inline */}
      <section id="apply" className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-lime/10 via-orange-500/5 to-transparent" />
        <div className="absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-lime/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="mx-auto max-w-4xl">
          <div className="reveal text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-semibold text-lime">
              <Users className="h-3.5 w-3.5" /> Limited seats per cohort
            </span>
            <h2 className="mt-5 text-4xl font-black md:text-6xl">Reserve your seat</h2>
            <p className="mt-4 text-lg text-muted-foreground">Complete the application below — our admissions team will reach out within 24 hours.</p>
          </div>

          <InlineApplicationForm />
        </div>
      </section>

      {apply && <ApplyModal program="Advanced Core Data Science" onClose={() => setApply(false)} />}

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}

function InlineApplicationForm() {
  const [state, setState] = useState({
    name: "", email: "", phone: "", city: "", background: "", experience: "beginner",
    goal: "", batch: "next", agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.agree) return;
    setSending(true);
    setSendError("");
    const res = await submitApplication({
      form_type: "advanced-data-science",
      program: "Advanced Data Science & AI Certification",
      name: state.name,
      email: state.email,
      phone: state.phone,
      city: state.city,
      education: state.background,
      experience: state.experience,
      goal: state.goal,
      extra: { batch: state.batch },
    });
    setSending(false);
    if (res.ok || res.offline) {
      setSubmitted(true);
    } else {
      setSendError(res.error ?? "Could not submit. Please try again.");
    }
  };


  if (submitted) {
    return (
      <div className="mt-12 rounded-3xl border border-lime/40 bg-surface p-10 text-center animate-fade-in">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-lime text-lime-foreground animate-[float_4s_ease-in-out_infinite]">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-6 text-3xl font-black">Application received!</h3>
        <p className="mt-3 text-muted-foreground">Thanks {state.name || "friend"} — our team will email {state.email || "you"} within 24 hours with next steps.</p>
        <button onClick={() => { setSubmitted(false); setState({ name: "", email: "", phone: "", city: "", background: "", experience: "beginner", goal: "", batch: "next", agree: false }); }}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold hover:bg-background transition-colors">
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="reveal reveal-delay-2 mt-12 rounded-3xl border border-border/60 bg-surface/80 backdrop-blur p-8 md:p-10 shadow-2xl shadow-lime/5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name *" >
          <input required value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/20 transition-all" placeholder="Jane Doe" />
        </Field>
        <Field label="Email *">
          <input required type="email" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/20 transition-all" placeholder="jane@example.com" />
        </Field>
        <Field label="Phone *">
          <input required type="tel" value={state.phone} onChange={(e) => setState({ ...state, phone: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/20 transition-all" placeholder="+91 98765 43210" />
        </Field>
        <Field label="City">
          <input value={state.city} onChange={(e) => setState({ ...state, city: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/20 transition-all" placeholder="Bengaluru" />
        </Field>
        <Field label="Educational background">
          <input value={state.background} onChange={(e) => setState({ ...state, background: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/20 transition-all" placeholder="B.Tech CSE, 2024" />
        </Field>
        <Field label="Experience with Python / ML">
          <select value={state.experience} onChange={(e) => setState({ ...state, experience: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/20 transition-all">
            <option value="beginner">Beginner — some Python</option>
            <option value="working">Working knowledge (Pandas + basic ML)</option>
            <option value="intermediate">Intermediate — built projects</option>
            <option value="professional">Working professional in data</option>
          </select>
        </Field>
        <Field label="Preferred batch">
          <select value={state.batch} onChange={(e) => setState({ ...state, batch: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/20 transition-all">
            <option value="next">Next cohort</option>
            <option value="morning">Morning (7–9 AM)</option>
            <option value="evening">Evening (7–9 PM)</option>
            <option value="weekend">Weekend intensive</option>
          </select>
        </Field>
        <Field label="Career goal">
          <input value={state.goal} onChange={(e) => setState({ ...state, goal: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/20 transition-all" placeholder="Senior Data Scientist" />
        </Field>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
        <input type="checkbox" checked={state.agree} onChange={(e) => setState({ ...state, agree: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-border accent-lime" />
        <span>I agree to be contacted by the Skill Ai admissions team about this program.</span>
      </label>

      {sendError && <p className="text-sm text-destructive">{sendError}</p>}
      <button type="submit" disabled={!state.agree || sending}
        className="mt-2 group inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-base font-bold text-lime-foreground shadow-2xl shadow-lime/30 hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all">
        {sending ? "Sending…" : "Submit Application"} <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>

    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</div>
      {children}
    </label>
  );
}
