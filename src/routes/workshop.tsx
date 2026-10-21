import { createFileRoute, Link } from "@tanstack/react-router";
import { submitApplication } from "@/lib/php-api";
import skillAiLogo from "@/assets/skill-ai-logo.png";

import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  Clock,
  FileSearch,
  FileText,
  GitBranch,
  Layers,
  Lightbulb,
  MapPin,
  Menu,
  MessageSquare,
  Presentation,
  Search,
  Target,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/workshop")({
  head: () => ({
    meta: [
      { title: "1-Week Business Analyst Workshop — Skill AI India" },
      {
        name: "description",
        content:
          "From business problem to complete business solution. A 1-week intensive Business Analyst workshop covering BRD, FRD, SOP, Use Cases, UAT and more — one real-world project, complete BA experience.",
      },
      { property: "og:title", content: "1-Week Business Analyst Workshop — Skill AI India" },
      {
        property: "og:description",
        content:
          "Practical training across the complete BA lifecycle — BRD, FRD, SOP, Use Cases, UAT & more. One week, one real-world project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: WorkshopPage,
});

const navItems: { label: string; chevron: boolean; href?: string }[] = [
  { label: "AI", chevron: true, href: "/ai" },
  { label: "Multimedia", chevron: true, href: "/multimedia" },
  { label: "Management", chevron: true, href: "/management" },
  { label: "UG & PG Program", chevron: true, href: "/ug-programs" },
  { label: "Online Programs", chevron: true, href: "/online-programs" },
  { label: "Workshop", chevron: false, href: "/workshop" },
  { label: "AICS", chevron: false, href: "/aics" },
];

const lifecycle = [
  "Business Problem",
  "Problem Statement",
  "Stakeholder Identification",
  "Requirement Gathering",
  "BRD",
  "FRD",
  "AS-IS Process",
  "Root Cause Analysis",
  "Gap Analysis",
  "TO-BE Process",
  "Use Cases",
  "User Stories",
  "Acceptance Criteria",
  "RTM",
  "UAT",
  "SOP",
  "Final Business Solution",
];

const days = [
  {
    day: "Day 1",
    title: "BA Fundamentals & Problem Solving",
    blocks: [
      {
        heading: "Introduction to Business Analysis",
        items: [
          "What is Business Analysis?",
          "Role of a Business Analyst",
          "BA responsibilities",
          "BA vs Data Analyst",
          "BA role in IT projects",
          "SDLC overview",
          "Agile vs Waterfall",
          "Introduction to Scrum",
          "BA project lifecycle",
        ],
      },
      {
        heading: "Problem Identification",
        items: [
          "Business problem identification",
          "Problem statement",
          "Business objectives",
          "Business impact",
          "Scope",
          "Stakeholder identification",
          "Business needs vs requirements",
        ],
      },
      {
        heading: "Problem-Solving Techniques",
        items: [
          "5 Whys",
          "Root Cause Analysis",
          "Fishbone Diagram",
          "Gap Analysis",
          "Process analysis",
          "Impact analysis",
        ],
      },
    ],
    activity: "Problem Statement + Business Objective + Initial Scope",
  },
  {
    day: "Day 2",
    title: "Requirements & BRD",
    blocks: [
      {
        heading: "Requirement Gathering",
        items: [
          "Elicitation techniques",
          "Stakeholder interviews & workshops",
          "Surveys and observation",
          "Business needs vs requirements",
          "Prioritizing requirements",
        ],
      },
      {
        heading: "Business Requirements Document (BRD)",
        items: [
          "BRD structure and purpose",
          "Writing clear business requirements",
          "Scope, objectives & success metrics",
          "Assumptions, constraints & risks",
          "Stakeholder review & sign-off",
        ],
      },
    ],
    activity: "Requirement List + complete BRD draft",
  },
  {
    day: "Day 3",
    title: "FRD, Process & SOP",
    blocks: [
      {
        heading: "Functional Requirements Document (FRD)",
        items: [
          "From business to functional requirements",
          "FRD structure & best practices",
          "Functional vs non-functional requirements",
          "Traceability from BRD to FRD",
        ],
      },
      {
        heading: "Process Mapping & SOP",
        items: [
          "AS-IS process mapping",
          "Root cause & gap analysis",
          "TO-BE process design",
          "Writing Standard Operating Procedures",
          "Process improvement recommendations",
        ],
      },
    ],
    activity: "FRD + AS-IS / TO-BE process maps + SOP",
  },
  {
    day: "Day 4",
    title: "Agile, Use Cases & UAT",
    blocks: [
      {
        heading: "Agile Requirements",
        items: [
          "Use cases & use case diagrams",
          "Writing user stories",
          "Acceptance criteria that work",
          "Backlog & sprint basics",
        ],
      },
      {
        heading: "Traceability & UAT",
        items: [
          "Requirement Traceability Matrix (RTM)",
          "UAT planning & scenarios",
          "Writing UAT test cases",
          "Defect triage & sign-off",
        ],
      },
    ],
    activity: "User Stories + Acceptance Criteria + RTM + UAT scenarios",
  },
  {
    day: "Day 5",
    title: "Tools & Final Project",
    blocks: [
      {
        heading: "BA Tools Hands-On",
        items: [
          "Excel for analysis",
          "SQL for data queries",
          "Power BI dashboards",
          "Jira & Confluence basics",
          "Visio / Lucidchart / Draw.io",
        ],
      },
      {
        heading: "Capstone Presentation",
        items: [
          "Assemble the complete BA project",
          "Present your business solution",
          "Get expert feedback",
          "Next steps in your BA career",
        ],
      },
    ],
    activity: "Final project presentation + feedback",
  },
];

const deliverables = [
  "Problem Statement",
  "Business Objectives",
  "BRD",
  "FRD",
  "SOP",
  "Use Cases",
  "User Stories",
  "Acceptance Criteria",
  "Requirement Traceability Matrix",
  "UAT Test Scenarios",
  "UAT Test Cases",
  "AS-IS Process",
  "TO-BE Process",
  "Gap Analysis",
  "Root Cause Analysis",
];

const tools = ["Excel", "SQL", "Power BI", "Jira", "Confluence", "Visio / Lucidchart / Draw.io"];

const audiences = [
  "Students",
  "Fresh Graduates",
  "Aspiring Business Analysts",
  "Working Professionals",
  "Software Developers",
  "QA / Test Engineers",
  "Data Analysts",
  "Project Coordinators",
  "IT Professionals",
  "Career Transitioners",
];

const gains = [
  { icon: Search, title: "Understand", body: "Grasp the business problem and context" },
  { icon: Brain, title: "Analyze", body: "Break down requirements and processes" },
  { icon: FileText, title: "Document", body: "Create professional BA deliverables" },
  { icon: MessageSquare, title: "Communicate", body: "Bridge stakeholders and teams" },
  { icon: ClipboardCheck, title: "Validate", body: "Verify through UAT and acceptance criteria" },
  { icon: Lightbulb, title: "Solve", body: "Deliver a complete business solution" },
];

const overview = [
  { day: "Day 1", focus: "BA Fundamentals & Problem Solving", deliverables: "Problem Statement, Objectives, Scope" },
  { day: "Day 2", focus: "Requirements & BRD", deliverables: "Requirement List, BRD" },
  { day: "Day 3", focus: "FRD, Process & SOP", deliverables: "FRD, AS-IS, TO-BE, SOP" },
  { day: "Day 4", focus: "Agile, Use Cases & UAT", deliverables: "User Stories, Acceptance Criteria, RTM, UAT" },
  { day: "Day 5", focus: "Tools & Final Project", deliverables: "Excel, SQL, Power BI, Final Presentation" },
];

const lifecycleIcons = [Target, FileSearch, Users, ClipboardList, BookOpen, FileText, GitBranch, Layers];

/** Auto-reveal on scroll for any element with class "reveal" */
function useScrollReveal(deps: unknown[] = []) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.in-view)");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

function Logo({ size = "md" }: { size?: "md" | "sm" }) {
  const height = size === "sm" ? "h-8" : "h-10";
  return (
    <img
      src={skillAiLogo}
      alt="SkillAI - Learn Skill Get Job"
      className={`${height} w-auto rounded-md bg-white p-1`}
    />
  );
}

function WorkshopPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDay, setActiveDay] = useState(0);
  useScrollReveal([activeDay]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <Link to="/" className="shrink-0">
            <Logo />
          </Link>
          <ul className="hidden items-center gap-4 xl:gap-6 lg:flex">
            {navItems.map((n) => {
              const isActive = n.href === "/workshop";
              const inner = (
                <>
                  <span className="relative">
                    {n.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-lime transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </span>
                  {n.chevron && <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-y-0.5" />}
                </>
              );
              return (
                <li key={n.label}>
                  {n.href ? (
                    <Link
                      to={n.href}
                      className={`group flex items-center gap-1 text-[13px] whitespace-nowrap transition-colors hover:text-lime ${
                        isActive ? "text-lime font-semibold" : "text-foreground/85"
                      }`}
                    >
                      {inner}
                    </Link>
                  ) : (
                    <button className="group flex items-center gap-1 text-[13px] whitespace-nowrap text-foreground/85 transition-colors hover:text-lime">
                      {inner}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollTo("apply")}
              className="hidden sm:inline-flex rounded-full border border-lime px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide text-lime transition-all hover:bg-lime hover:text-lime-foreground hover:scale-105"
            >
              APPLY NOW
            </button>
            <button
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-md border border-border text-foreground lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden border-t border-border transition-[max-height,opacity] duration-300 ${
            menuOpen ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 px-4 py-3">
            {navItems.map((n) => {
              const content = (
                <>
                  {n.label}
                  {n.chevron && <ChevronDown className="h-4 w-4 opacity-60" />}
                </>
              );
              const cls = "flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm text-foreground/90 transition-colors hover:bg-surface";
              return (
                <li key={n.label}>
                  {n.href ? (
                    <Link to={n.href} className={cls} onClick={() => setMenuOpen(false)}>
                      {content}
                    </Link>
                  ) : (
                    <button className={cls}>{content}</button>
                  )}
                </li>
              );
            })}
            <li className="mt-2">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  scrollTo("apply");
                }}
                className="w-full rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-lime-foreground"
              >
                APPLY NOW
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-16 lg:pt-20 lg:pb-20">
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-lime/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute top-40 right-0 h-80 w-80 rounded-full bg-mint/10 blur-3xl animate-float-soft" />

        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/5 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-lime">
              <Clock className="h-3.5 w-3.5" /> 1-Week Intensive
            </span>
            <h1 className="mt-5 text-[2.25rem] sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Business Analyst <span className="text-gradient-lime">Workshop</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl font-medium text-foreground/90">
              From Business Problem to Complete Business Solution
            </p>
            <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              Practical training across the complete BA lifecycle — BRD, FRD, SOP, Use Cases, UAT &amp; more. One week, one real-world project, complete Business Analyst experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              <Meta icon={<Calendar className="h-4 w-4 text-lime" />} label="5 Days" />
              <Meta icon={<Clock className="h-4 w-4 text-lime" />} label="Hands-on" />
              <Meta icon={<MapPin className="h-4 w-4 text-lime" />} label="Mangalore / Online" />
              <Meta icon={<Award className="h-4 w-4 text-lime" />} label="15+ Deliverables" />
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("apply")}
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-5 sm:px-6 py-3 text-xs sm:text-sm font-bold tracking-wider text-lime-foreground transition-all hover:scale-[1.04] hover:shadow-[0_8px_24px_oklch(0.72_0.2_50/0.35)] animate-pulse-glow"
              >
                START YOUR BA JOURNEY <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo("curriculum")}
                className="group inline-flex items-center gap-2 rounded-full border border-lime px-5 sm:px-6 py-3 text-xs sm:text-sm font-bold tracking-wider text-lime transition-all hover:bg-lime hover:text-lime-foreground hover:scale-[1.04]"
              >
                VIEW CURRICULUM <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* BA Project Dashboard mock */}
          <div className="reveal reveal-delay-2">
            <div className="hover-lift rounded-3xl border border-border bg-surface p-5 sm:p-7 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <BarChart3 className="h-4 w-4 text-lime" /> BA Project Dashboard
                </div>
                <span className="rounded-full bg-lime/10 px-3 py-1 text-[11px] font-semibold text-lime">Live Project</span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-background p-4">
                  <div className="text-xs text-muted-foreground">Deliverables</div>
                  <div className="mt-1 text-2xl font-bold text-gradient-lime">24%</div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[24%] rounded-full bg-lime" />
                  </div>
                  <div className="mt-1.5 text-[11px] text-mint">↑ Completion rate</div>
                </div>
                <div className="rounded-2xl border border-border bg-background p-4">
                  <div className="text-xs text-muted-foreground">Stakeholders</div>
                  <div className="mt-1 text-2xl font-bold text-gradient-lime">45</div>
                  <div className="mt-2 flex -space-x-1.5">
                    {[0, 1, 2, 3].map((i) => (
                      <span key={i} className="h-5 w-5 rounded-full border border-background bg-surface-2" />
                    ))}
                  </div>
                  <div className="mt-1.5 text-[11px] text-mint">↑ Identified</div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-border bg-background p-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Requirements by Day</span>
                  <span>UAT Progress 9%</span>
                </div>
                <div className="mt-3 flex h-16 items-end gap-1.5">
                  {[35, 55, 40, 70, 60, 85, 95].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md bg-lime/25 transition-colors hover:bg-lime/50" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="mt-1.5 flex justify-between text-[10px] text-muted-foreground">
                  {["D1", "D2", "D3", "D4", "D5", "D6", "D7"].map((d) => (
                    <span key={d} className="flex-1 text-center">{d}</span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["BRD", "FRD", "RTM", "UAT"].map((t) => (
                  <span key={t} className="rounded-full border border-lime/40 bg-lime/5 px-3 py-1 text-[11px] font-semibold text-lime">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BA Lifecycle */}
      <section className="bg-surface/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="reveal text-xs sm:text-sm font-medium uppercase tracking-widest text-mint">Project Roadmap</div>
          <h2 className="reveal mt-3 text-3xl sm:text-4xl font-bold tracking-tight">The Complete BA Lifecycle</h2>
          <p className="reveal mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
            Follow the journey from business problem to final solution — every step a Business Analyst owns in a real project.
          </p>

          <div className="mt-10 grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {lifecycle.map((step, i) => {
              const Icon = lifecycleIcons[i % lifecycleIcons.length];
              const isLast = i === lifecycle.length - 1;
              return (
                <div
                  key={step}
                  className={`reveal reveal-delay-${(i % 4) + 1} hover-lift flex items-start gap-3 rounded-2xl border p-4 ${
                    isLast
                      ? "border-lime/60 bg-lime/10 sm:col-span-2 md:col-span-1"
                      : "border-border bg-background hover:border-lime/50"
                  }`}
                >
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${isLast ? "bg-lime text-lime-foreground" : "bg-lime/10 text-lime"}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Step {i + 1}</div>
                    <div className={`mt-0.5 text-sm font-semibold ${isLast ? "text-lime" : ""}`}>{step}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="reveal mt-10 text-center">
            <div className="text-lg sm:text-xl font-bold text-gradient-lime">Build. Analyze. Document. Solve.</div>
            <p className="mt-2 text-sm text-muted-foreground">One Week. One Real-World Project. Complete Business Analyst Experience.</p>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24 scroll-mt-24">
        <div className="reveal text-xs sm:text-sm font-medium uppercase tracking-widest text-mint">5-Day Curriculum</div>
        <h2 className="reveal mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Day-by-Day Workshop Breakdown</h2>
        <p className="reveal mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
          Each day builds on the last — from fundamentals to a complete, presentation-ready BA project.
        </p>

        {/* Day tabs */}
        <div className="reveal mt-8 flex flex-wrap gap-2">
          {days.map((d, i) => (
            <button
              key={d.day}
              onClick={() => setActiveDay(i)}
              className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                activeDay === i
                  ? "bg-lime text-lime-foreground shadow-[0_6px_18px_oklch(0.72_0.2_50/0.35)]"
                  : "border border-border bg-surface text-foreground/80 hover:border-lime/50 hover:text-lime"
              }`}
            >
              {d.day}
            </button>
          ))}
        </div>

        {/* Active day panel */}
        <div className="mt-8 rounded-3xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-lime/10 px-3.5 py-1.5 text-xs font-bold tracking-widest text-lime">{days[activeDay].day.toUpperCase()}</span>
            <h3 className="text-xl sm:text-2xl font-bold">{days[activeDay].title}</h3>
          </div>

          <div className="mt-7 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {days[activeDay].blocks.map((b) => (
              <div key={b.heading} className="hover-lift rounded-2xl border border-border bg-background p-5 hover:border-lime/50">
                <div className="text-sm font-semibold text-lime">{b.heading}</div>
                <ul className="mt-3 space-y-2">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="hover-lift rounded-2xl border border-lime/40 bg-lime/5 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-lime">
                <Presentation className="h-4 w-4" /> Practical Activity
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">{days[activeDay].activity}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-surface/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="reveal text-xs sm:text-sm font-medium uppercase tracking-widest text-mint">Workshop Deliverables</div>
          <h2 className="reveal mt-3 text-3xl sm:text-4xl font-bold tracking-tight">What You'll Create</h2>
          <p className="reveal mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
            By the end of the workshop, you'll have practical experience producing these professional BA documents and tools.
          </p>

          <div className="mt-10 grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {deliverables.map((d, i) => (
              <div
                key={d}
                className={`reveal reveal-delay-${(i % 5) + 1} hover-lift flex items-center gap-2.5 rounded-2xl border border-border bg-background p-4 hover:border-lime/50`}
              >
                <FileText className="h-4 w-4 shrink-0 text-lime" />
                <span className="text-xs sm:text-sm font-medium">{d}</span>
              </div>
            ))}
          </div>

          <div className="reveal mt-12">
            <div className="flex items-center gap-2 text-sm font-semibold text-lime">
              <Wrench className="h-4 w-4" /> Tools Exposure
            </div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {tools.map((t) => (
                <span key={t} className="rounded-full border border-lime/40 bg-lime/5 px-4 py-2 text-xs sm:text-sm font-semibold text-lime transition-all hover:bg-lime/15 hover:scale-105">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who should attend + What you gain */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="grid gap-14 lg:gap-16 lg:grid-cols-2">
          <div>
            <div className="reveal text-xs sm:text-sm font-medium uppercase tracking-widest text-mint">Who Should Attend?</div>
            <h2 className="reveal mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Is This For You?</h2>
            <p className="reveal mt-4 text-sm sm:text-base text-muted-foreground">
              This workshop is designed for anyone looking to build or transition into a Business Analysis career.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {audiences.map((a, i) => (
                <span
                  key={a}
                  className={`reveal reveal-delay-${(i % 5) + 1} rounded-full border border-border bg-surface px-4 py-2 text-xs sm:text-sm text-foreground/90 transition-all hover:border-lime/50 hover:text-lime`}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="reveal text-xs sm:text-sm font-medium uppercase tracking-widest text-mint">What You Will Gain</div>
            <h2 className="reveal mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Understand → Analyze → <span className="text-gradient-lime">Solve</span>
            </h2>
            <p className="reveal mt-4 text-sm sm:text-base text-muted-foreground">
              By the end of the workshop, you'll understand how a BA works from problem identification to solution delivery — and complete a real project.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {gains.map((g, i) => (
                <div key={g.title} className={`reveal reveal-delay-${(i % 3) + 1} hover-lift rounded-2xl border border-border bg-surface p-4 hover:border-lime/50`}>
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-lime/10 text-lime">
                      <g.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-bold">{g.title}</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview table */}
      <section className="bg-surface/40 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="reveal text-xs sm:text-sm font-medium uppercase tracking-widest text-mint">At a Glance</div>
          <h2 className="reveal mt-3 text-3xl sm:text-4xl font-bold tracking-tight">5-Day Workshop Overview</h2>

          <div className="reveal mt-8 overflow-hidden rounded-3xl border border-border">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="bg-surface text-xs uppercase tracking-widest text-muted-foreground">
                    <th className="px-5 py-4 font-semibold">Day</th>
                    <th className="px-5 py-4 font-semibold">Main Focus</th>
                    <th className="px-5 py-4 font-semibold">Key Deliverables</th>
                  </tr>
                </thead>
                <tbody>
                  {overview.map((r, i) => (
                    <tr key={r.day} className={`border-t border-border transition-colors hover:bg-lime/5 ${i % 2 ? "bg-surface/40" : "bg-background"}`}>
                      <td className="px-5 py-4 font-bold text-lime whitespace-nowrap">{r.day}</td>
                      <td className="px-5 py-4 font-medium">{r.focus}</td>
                      <td className="px-5 py-4 text-muted-foreground">{r.deliverables}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Apply */}
      <ApplySection />

      {/* Footer */}
      <footer className="border-t border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 px-4 sm:px-6 py-12 sm:py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">Mangalore, India</p>
          </div>
          <FootCol title="Programs" items={["PG Program", "UG Program", "Online Programs", "Incubation"]} />
          <FootCol title="School" items={["Outcomes", "Faculty", "Alumni", "Life at SKILL AI"]} />
          <FootCol title="Contact" items={["Chat with us", "Connect@skillaiindia.com", "Press", "Careers"]} />
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground whitespace-pre-line">
          © 2026 Skill AI India School of AI. All Rights Reserved.{"\n "}
        </div>
      </footer>
    </div>
  );
}

const whyJoin = [
  "Complete a real-world BA project from start to finish",
  "Create 15+ professional BA deliverables",
  "Hands-on exposure to Excel, SQL, Power BI, Jira & more",
  "Learn the full BA lifecycle: problem to solution",
  "Present your project and get feedback",
];

function ApplySection() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "", experience: "", goal: "" });


  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section id="apply" className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24 scroll-mt-24">
      <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 lg:items-start">
        <div className="reveal">
          <div className="text-xs sm:text-sm font-medium uppercase tracking-widest text-mint">Apply Now</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Reserve Your <span className="text-gradient-lime">Seat</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Fill out the application form to register for the 1-Week Business Analyst Workshop.
          </p>

          <div className="mt-8 rounded-3xl border border-border bg-surface p-6 sm:p-7">
            <div className="text-sm font-bold text-lime">Why Join This Workshop?</div>
            <ul className="mt-4 space-y-3">
              {whyJoin.map((w) => (
                <li key={w} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                  {w}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border pt-5">
              <div className="text-lg font-bold text-gradient-lime">Build. Analyze. Document. Solve.</div>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">One Week. One Real-World Project. Complete BA Experience.</p>
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-2">
          {submitted ? (
            <div className="grid min-h-[26rem] place-items-center rounded-3xl border border-lime/50 bg-lime/5 p-8 text-center">
              <div>
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-lime text-lime-foreground">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-2xl font-bold">Application Received!</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
                  Thanks {form.name.split(" ")[0] || "there"} — we've received your application for the Business Analyst Workshop. Our team will reach out to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border border-lime px-5 py-2.5 text-xs font-bold tracking-wider text-lime transition-all hover:bg-lime hover:text-lime-foreground"
                >
                  SUBMIT ANOTHER APPLICATION
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setSending(true);
                setSendError("");
                const res = await submitApplication({
                  form_type: "workshop",
                  program: "1-Week Business Analyst Workshop",
                  name: form.name,
                  email: form.email,
                  phone: form.phone,
                  role: form.role,
                  experience: form.experience,
                  goal: form.goal,
                });
                setSending(false);
                if (res.ok || res.offline) {
                  setSubmitted(true);
                } else {
                  setSendError(res.error ?? "Could not submit. Please try again.");
                }
              }}

              className="rounded-3xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name *">
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-lime"
                  />
                </Field>
                <Field label="Email *">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-lime"
                  />
                </Field>
                <Field label="Phone Number *">
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+91 ..."
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-lime"
                  />
                </Field>
                <Field label="Current Role">
                  <input
                    value={form.role}
                    onChange={update("role")}
                    placeholder="e.g. Student, Developer, QA"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-lime"
                  />
                </Field>
                <Field label="Years of Experience">
                  <select
                    value={form.experience}
                    onChange={update("experience")}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-lime"
                  >
                    <option value="">Select...</option>
                    <option value="fresher">Fresher / Student</option>
                    <option value="0-2">0–2 years</option>
                    <option value="2-5">2–5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="What do you want to gain from this workshop?">
                    <textarea
                      value={form.goal}
                      onChange={update("goal")}
                      rows={4}
                      placeholder="Tell us about your goals..."
                      className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-lime"
                    />
                  </Field>
                </div>
              </div>
              {sendError && <p className="text-sm text-destructive">{sendError}</p>}
              <button
                type="submit"
                disabled={sending}
                className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-bold tracking-wider text-lime-foreground transition-all hover:scale-[1.02] hover:shadow-[0_8px_24px_oklch(0.72_0.2_50/0.35)] disabled:opacity-60"
              >
                {sending ? "SENDING…" : "SUBMIT APPLICATION"}{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold tracking-wide text-foreground/80">{label}</span>
      {children}
    </label>
  );
}

function Meta({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-foreground/90">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function FootCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}>
            <a href="#" onClick={(e) => e.preventDefault()} className="relative inline-block transition-colors hover:text-lime">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
