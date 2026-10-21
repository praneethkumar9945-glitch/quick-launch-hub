import { createFileRoute, Link } from "@tanstack/react-router";
import skillAiLogo from "@/assets/skill-ai-logo.png";
const heroImg = "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=1200&q=80&auto=format&fit=crop";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight, Clock, Award, Rocket, Sparkles, CheckCircle2,
  Cog, Timer, Layers, Brain, Server, Briefcase, Calendar, Users,
  Code2, BarChart3, Cpu, MessageSquare, Wand2, Bot, Cloud, Trophy,
  GraduationCap, Monitor, HardDrive, Wifi, Terminal,
} from "lucide-react";
import { ApplyModal } from "@/routes/ug-programs";

export const Route = createFileRoute("/ai/gen-ai")({
  head: () => ({
    meta: [
      { title: "Master's in Gen AI & Agentic AI — 10 Month Program | Skill Ai" },
      { name: "description", content: "Skill AI's flagship 10-month Master's in GenAI & Agentic AI — 480 hours, 9 modules, from Python foundations to multi-agent production systems with a Company-sourced capstone." },
    ],
  }),
  component: GenAiAgenticPage,
});

const HIGHLIGHTS = [
  { icon: Clock, label: "Duration", value: "10 Months (Fast)" },
  { icon: Calendar, label: "Schedule", value: "2 hrs/day · 6 days" },
  { icon: Layers, label: "Sessions", value: "240 Sessions" },
  { icon: Timer, label: "Total Hours", value: "480 Hours" },
  { icon: Award, label: "Modules", value: "9 Modules · 40 Weeks" },
  { icon: Rocket, label: "Mode", value: "Hybrid · Live Projects" },
];

const MODULES = [
  { n: 1, icon: Code2, title: "Python, Data & Math Foundations for AI", weeks: "Weeks 1–4", hours: "48 hrs · 24 sessions",
    points: ["Python — syntax, OOP, exception handling", "NumPy & Pandas · Linear algebra for AI", "Calculus intuition for ML", "Git, Jupyter, Colab & VS Code"],
    project: "Automated Data Report Generator (OOP + File Handling)", color: "from-lime/30 to-emerald-500/10" },
  { n: 2, icon: BarChart3, title: "Statistics, Probability & ML Foundations", weeks: "Weeks 5–8", hours: "48 hrs · 24 sessions",
    points: ["Descriptive stats & hypothesis testing", "Regression, classification, ensembles", "Clustering & dimensionality reduction", "Scikit-learn pipelines · Bias-variance"],
    project: "Predictive model on a partner-supplied tabular dataset", color: "from-orange-500/30 to-amber-500/10" },
  { n: 3, icon: Cpu, title: "Deep Learning Foundations (NN, CNN, RNN)", weeks: "Weeks 9–13", hours: "60 hrs · 30 sessions",
    points: ["Neural nets & backpropagation", "Optimisers, regularisation, batch norm", "CNNs for vision · RNN / LSTM / GRU", "PyTorch / TensorFlow · GPU basics"],
    project: "Image / sequence classifier for an internal use case", color: "from-fuchsia-500/30 to-purple-500/10" },
  { n: 4, icon: MessageSquare, title: "NLP & Transformer Architectures", weeks: "Weeks 14–17", hours: "48 hrs · 24 sessions",
    points: ["Embeddings — word2vec, GloVe, contextual", "Attention & Transformer architecture", "BERT-family fine-tuning; sequence-to- sequence & decoder-only architectures", "Hugging Face · IndicBERT · multilingual"],
    project: "Custom text-classification / NER pipeline", color: "from-cyan-500/30 to-blue-500/10" },
  { n: 5, icon: Wand2, title: "Generative AI & Large Language Models", weeks: "Weeks 18–22", hours: "60 hrs · 30 sessions",
    points: ["Pretraining, instruction tuning, RLHF", "Prompt engineering · CoT · few-shot", "FAISS / Chroma / Pinecone · RAG · GraphRAG", "LoRA, QLoRA, PEFT, DPO, ORPO · Guardrails"],
    project: "RAG assistant on partner documents", color: "from-rose-500/30 to-pink-500/10" },
  { n: 6, icon: Bot, title: "Agentic AI Systems & Multi-Agent Orchestration", weeks: "Weeks 23–28", hours: "72 hrs · 36 sessions",
    points: ["Agent anatomy — planning, memory, tools", "LangGraph · CrewAI · AutoGen", "Model Context Protocol (MCP)", "GPT-4o, LLaVA, CLIP, image + text + audio"],
    project: "Multi-agent workflow automating a real Company task", color: "from-lime/30 to-teal-500/10" },
  { n: 7, icon: Server, title: "AI Product Engineering, Evaluation & MLOps", weeks: "Weeks 29–33", hours: "60 hrs · 30 sessions",
    points: ["FastAPI · MLflow · Model registry", "LLM & agent evaluation", "prompt-injection defence , observability — logging", "vLLM / TensorRT-LLM · CI/CD"],
    project: "Deployed agent behind an API with monitoring & guardrails", color: "from-amber-500/30 to-yellow-500/10" },
  { n: 8, icon: Cloud, title: "Cloud AI Infrastructure & Scalable Deployment", weeks: "Weeks 34–37", hours: "48 hrs · 24 sessions",
    points: ["Docker containerisation for AI workloads", "cloud compute for AI — GPU instances", "Managed inference endpoints", "Scaling strategies — load balancing, caching, batching"],
    project: "Containerised, auto-scaling deployment of the M6/M7 agent", color: "from-violet-500/30 to-indigo-500/10" },
  { n: 9, icon: Trophy, title: "Capstone — Manager Sourced Multi Agent Product", weeks: "Weeks 38–40", hours: "36 hrs · 18 sessions",
    points: ["Real Partner Brief - Solution Architecture.", "Multi-Agent Product Design & Data Sourcing.", "Build, test & iterate against live feedback.", "Professional Final Demo & Stakeholder Pitch ; portfolio packaging"],
    project: "End-to-end multi agent product on a live partner brief", color: "from-sky-500/30 to-cyan-500/10" },
];

const TOOLS = [
  "Python", "NumPy", "Pandas", "Scikit-learn", "PyTorch", "TensorFlow", "Keras",
  "Hugging Face", "Transformers", "IndicBERT", "spaCy",
  "OpenAI", "Anthropic", "GPT-4o", "LangChain", "LangGraph", "LangSmith",
  "CrewAI", "AutoGen", "MCP", "FAISS", "Chroma", "Pinecone",
  "LoRA", "QLoRA", "PEFT", "vLLM", "TensorRT-LLM",
  "FastAPI", "MLflow", "Docker", "AWS", "GCP", "Azure", "CUDA", "Git",
];

const ROLES = [
  { role: "GenAI Engineer", anchor: "M5, M7", desc: "LLM apps, RAG systems, prompt engineering, fine-tuning" },
  { role: "Agentic AI Engineer", anchor: "M6, M9", desc: "Multi-agent orchestration, tool-use, memory, LangGraph/CrewAI" },
  { role: "AI / ML Engineer", anchor: "M1, M2, M3", desc: "Model training, evaluation & deployment across ML and DL" },
  { role: "NLP Engineer", anchor: "M4, M5", desc: "Text classification, NER, transformer fine-tuning, multilingual NLP" },
  { role: "MLOps / AI Infra Engineer", anchor: "M7, M8", desc: "Model registries, CI/CD for AI, containerised auto-scaling deployment" },
];

const OUTCOMES = [
  "Design & build production-grade GenAI systems",
  "Ship multi-agent workflows with LangGraph / CrewAI / AutoGen",
  "Fine-tune LLMs with LoRA / QLoRA / PEFT",
  "Architect RAG & GraphRAG on real partner data",
  "Containerise & auto-scale AI services on cloud GPU",
  "Deliver a Company-sourced capstone to a live partner brief",
];

const IDEAL_FOR = [
  { title: "Engineering graduates & students", desc: "CSE, IT, ECE, EEE, Mechanical and other branches wanting a structured, project-driven route into AI." },
  { title: "Working software developers", desc: "Upskill from traditional development into AI/ML and agentic-systems engineering." },
  { title: "Data analysts & BI professionals", desc: "Move from reporting into predictive modelling, GenAI and automation." },
  { title: "Fresh graduates (any technical discipline)", desc: "B.Sc./B.C.A./M.C.A. and diploma holders seeking an industry-ready first role in AI." },
  { title: "Career switchers", desc: "From QA, support, embedded systems and other adjacent fields with basic logical aptitude." },
  { title: "Product managers & technical founders", desc: "Get working depth in AI systems rather than a purely conceptual overview." },
];

const PREREQUISITES = [
  "No prior coding experience is mandatory — Python is taught from first principles in Module 1.",
  "Comfort with basic computer operation and logical/analytical reasoning (10+2 or equivalent maths).",
  "Willingness to commit to the daily schedule and Company Standard project work.",
];

const SYS_CONFIG = [
  { icon: Cpu, label: "Processor", min: "Intel i5 (8th gen) / Ryzen 5", rec: "Intel i7 / Ryzen 7 / Apple M-series" },
  { icon: Layers, label: "RAM", min: "8 GB", rec: "16 GB or higher" },
  { icon: HardDrive, label: "Storage", min: "256 GB SSD (30+ GB free)", rec: "512 GB SSD" },
  { icon: Monitor, label: "Operating System", min: "Win 10 / macOS 12 / Ubuntu 20.04", rec: "Win 11 / macOS 14+ / Ubuntu 22.04+" },
  { icon: Server, label: "GPU (local)", min: "Not required — integrated graphics fine", rec: "Optional discrete GPU for experimentation" },
  { icon: Wifi, label: "Internet", min: "10 Mbps stable broadband", rec: "25+ Mbps with backup hotspot" },
];

const REQUIRED_SW = [
  "Python 3.10+ and a code editor (VS Code or PyCharm)",
  "Anaconda or venv/conda for dependency management",
  "Git locally + GitHub account for version control & portfolio",
  "Docker Desktop (installed ahead of Module 8)",
  "Google account for Colab; institute-issued sandbox API keys (Module 5)",
  "Modern browser (Chrome/Edge) for LMS, Jupyter/Colab and cloud consoles",
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

function GenAiAgenticPage() {
  useReveal();
  const parallaxRef = useParallax();
  const [apply, setApply] = useState(false);
  const [activeModule, setActiveModule] = useState(0);

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

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/40 px-6 py-24 md:py-32">
        <div ref={parallaxRef} className="absolute inset-0 -z-10">
          <div className="absolute -top-20 -left-20 h-[28rem] w-[28rem] rounded-full bg-lime/25 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
          <div className="absolute top-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/25 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground)/0.06)_1px,transparent_0)] [background-size:32px_32px]" />

        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1.3fr_1fr] items-center">
          <div>
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-semibold text-lime">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" /> Flagship Master's · Cohort Open
              </span>
            </div>
            <h1 className="reveal mt-6 text-5xl font-black tracking-tight md:text-7xl leading-[1.05]">
              {"Master's in GenAI & Agentic AI".split(" ").map((w, i) => (
                <span key={i} className="inline-block animate-fade-in mr-3" style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}>{w}</span>
              ))}
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg text-muted-foreground">
              Skill AI's flagship 10-month, 480-hour programme — from Python fundamentals to designing, building and deploying autonomous multi-agent AI systems. Exit having shipped a Company-sourced multi-agent product against a real partner brief.
            </p>

            <div className="reveal reveal-delay-3 mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 max-w-2xl">
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

            <div className="reveal reveal-delay-4 mt-10 flex flex-wrap gap-3">
              <button onClick={() => setApply(true)} className="group inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-bold text-lime-foreground shadow-2xl shadow-lime/30 hover:scale-105 hover:shadow-lime/50 transition-all">
                Apply Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a href="#roadmap" className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-bold hover:bg-surface transition-colors">
                Explore 9-Module Roadmap
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative lg:p-6">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-lime/30 via-fuchsia-500/20 to-cyan-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-lime/30 bg-surface shadow-2xl shadow-lime/20 hover:scale-[1.02] transition-transform">
              <div className="aspect-square p-4 md:p-6 flex items-center justify-center bg-gradient-to-br from-background via-surface to-background">
                <img src={heroImg} alt="Master's in GenAI & Agentic AI" className="max-h-full max-w-full object-contain rounded-2xl" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-lime">Flagship Programme</div>
                <div className="mt-1 text-lg font-black">10 Months · 480 Hours · 9 Modules</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative border-b border-border/40 px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">Programme Overview</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">From Python first-principles to autonomous agents</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Every module in the Skill AI Learning Model closes with a Company-assigned project drawn from live partner briefs — no theory-only modules. You move through Python, ML, deep learning, NLP, Generative AI, Agentic AI, MLOps and cloud deployment, and finish with a capstone shipped against a real stakeholder.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">Fast Track</span> — 2 hrs/day, 6 days/week for 10 months. <span className="text-foreground font-semibold">Normal Track</span> — same 480 hours delivered over ~20 months at half the weekly pace. Both tracks share the same syllabus, projects and capstone.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {[
                { k: "40", v: "Weeks" },
                { k: "240", v: "Sessions" },
                { k: "480", v: "Hours" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-border/50 bg-surface p-5 text-center hover:border-lime hover:-translate-y-1 transition-all">
                  <div className="text-3xl font-black text-lime">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Rotating spotlight */}
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
                <div className="mt-5 rounded-xl border border-border/40 bg-background/40 p-3 text-xs">
                  <span className="font-bold uppercase tracking-widest text-lime">Company Project · </span>
                  <span className="text-foreground/90">{current.project}</span>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {MODULES.map((m, i) => (
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
            <span className="text-xs font-bold uppercase tracking-widest text-lime">Module-Wise Roadmap</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Your 40-week journey</h2>
            <p className="mt-4 text-muted-foreground">9 modules · 240 sessions · every module closes with a Company-assigned project.</p>
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
                    <div className={`mt-4 inline-block rounded-lg border border-lime/30 bg-lime/5 px-3 py-1.5 text-xs text-lime font-semibold ${i % 2 ? "" : "md:ml-auto"}`}>
                      Project · {m.project}
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 grid h-10 w-10 place-items-center rounded-full bg-background border-2 border-lime text-lime font-black shadow-lg shadow-lime/30 animate-[pulse_3s_ease-in-out_infinite]">
                    {m.n}
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
            <h2 className="mt-3 text-4xl font-black md:text-5xl">The end-to-end GenAI toolkit</h2>
            <p className="mt-4 text-muted-foreground">From notebooks to multi-agent orchestration — the stack used by leading AI product teams.</p>
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

          <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-8 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
              {[...TOOLS, ...TOOLS].map((t, i) => (
                <span key={i} className="text-3xl md:text-5xl font-black text-muted-foreground/30 hover:text-lime transition-colors">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAREER ROLES */}
      <section className="border-b border-border/40 bg-surface/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">Career Roles Mapped to Modules</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Where this programme takes you</h2>
            <p className="mt-4 text-muted-foreground">Every role below maps to specific modules — the programme is designed so you can specialise as you graduate.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ROLES.map((r, i) => (
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
      <section className="border-b border-border/40 px-6 py-24">
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

      {/* TARGET AUDIENCE */}
      <section className="border-b border-border/40 bg-surface/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">Target Audience & Eligibility</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Built for technical & non-technical entrants</h2>
            <p className="mt-4 text-muted-foreground">The programme takes learners from first principles to deployment — eligibility is based on aptitude and intent, not a specific prior degree.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {IDEAL_FOR.map((r, i) => (
              <div key={r.title} style={{ animationDelay: `${i * 60}ms` }}
                className="animate-fade-in rounded-2xl border border-border/50 bg-background p-6 hover:border-lime/60 hover:-translate-y-1 transition-all">
                <GraduationCap className="h-6 w-6 text-lime" />
                <div className="mt-3 text-base font-black">{r.title}</div>
                <div className="mt-2 text-sm text-muted-foreground">{r.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-lime/30 bg-lime/5 p-6">
            <div className="text-xs font-bold uppercase tracking-widest text-lime">Prerequisites</div>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {PREREQUISITES.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime" /> <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SYSTEM CONFIG */}
      <section className="border-b border-border/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">System Configuration</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">What you'll need on your machine</h2>
            <p className="mt-4 text-muted-foreground">Deep learning and LLM training in Modules 3–5 run on institute-provided cloud GPU credits — your personal machine doesn't need a dedicated GPU.</p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border/50">
            <div className="grid grid-cols-[1.2fr_1.5fr_1.5fr] bg-surface px-6 py-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <div>Component</div><div>Minimum</div><div>Recommended</div>
            </div>
            {SYS_CONFIG.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="grid grid-cols-[1.2fr_1.5fr_1.5fr] items-center border-t border-border/40 px-6 py-4 text-sm hover:bg-surface/40 transition-colors">
                  <div className="flex items-center gap-3 font-bold"><Icon className="h-4 w-4 text-lime" /> {c.label}</div>
                  <div className="text-muted-foreground">{c.min}</div>
                  <div>{c.rec}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border/50 bg-surface p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-lime">
                <Terminal className="h-4 w-4" /> Required Software & Accounts
              </div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {REQUIRED_SW.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime" /> <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-lime/30 bg-gradient-to-br from-lime/10 to-fuchsia-500/5 p-6">
              <Cloud className="h-6 w-6 text-lime" />
              <div className="mt-3 text-lg font-black">Institute cloud GPU included</div>
              <p className="mt-2 text-sm text-muted-foreground">All heavy training and LLM inference runs on Google Colab Pro / AWS / GCP credits provided by the institute. No personal GPU billing required.</p>
              <p className="mt-3 text-sm text-muted-foreground">Learners without a personal laptop can use institute lab systems, pre-configured to the recommended spec.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-lime/10 via-fuchsia-500/5 to-transparent" />
        <div className="absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-lime/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-semibold text-lime">
            <Users className="h-3.5 w-3.5" /> Limited seats · Cohort Open
          </span>
          <h2 className="mt-5 text-4xl font-black md:text-6xl">Reserve your seat</h2>
          <p className="mt-4 text-lg text-muted-foreground">Applications are reviewed by our admissions team within 24 hours.</p>
          <button onClick={() => setApply(true)} className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-base font-bold text-lime-foreground shadow-2xl shadow-lime/30 hover:scale-105 transition-all">
            Apply Now <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {apply && <ApplyModal program="Master's in GenAI & Agentic AI" onClose={() => setApply(false)} />}

      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
      `}</style>
    </div>
  );
}
