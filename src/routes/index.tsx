import { createFileRoute, Link } from "@tanstack/react-router";
import skillAiLogo from "@/assets/skill-ai-logo.png";
import { Calendar, Clock, MapPin, Award, Play, ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ApplyModal } from "./ug-programs";


import pillar1 from "@/assets/pillar-1.jpg";
import pillar2 from "@/assets/pillar-2.jpg";
import pillar3 from "@/assets/pillar-3.jpg";
import pillar4 from "@/assets/pillar-4.jpg";
import demodayImg from "@/assets/demoday.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SKILL AI School of Business — Build Real Businesses" },
      { name: "description", content: "PGP in Startup Leadership & Entrepreneurship at SKILL AI. 12 months, full-time, Bangalore." },
      { property: "og:title", content: "SKILL AI School of Business" },
      { property: "og:description", content: "The business school where you build real businesses." },
    ],
  }),
  component: Index,
});

const navItems: { label: string; chevron: boolean; href?: string }[] = [
  { label: "AI", chevron: true, href: "/ai" },
  { label: "Multimedia", chevron: true, href: "/multimedia" },
  { label: "Management", chevron: true, href: "/management" },
  { label: "UG & PG Program", chevron: true, href: "/ug-programs" },
  { label: "Online Programs", chevron: true, href: "/online-programs" },
  { label: "Workshop", chevron: false, href: "/workshop" },
  { label: "AICS", chevron: false, href: "/aics" },
  { label: "Future Score", chevron: false, href: "/future-score" },
];

const stats = [
  { value: "10L", label: "Average CTC (in Lakhs)" },
  { value: "25+", label: "Programs" },
  { value: "50+", label: "Internships" },
  { value: "100+", label: "Companies tie-up" },
  { value: "10000+", label: "Case studies" },
];

const pillars = [
  
  { n: "2", title: "AI courses", img: pillar2, href: "/ai", body: "Explore industry-ready AI, DS, Big Data, Advanced MLOps, Gen Ai, Agentic Ai, Cyber security courses with live projects and placement support." },
  { n: "3", title: "Multimedia", img: pillar3, href: "/multimedia", body: "Explore industry-ready Multimedia, Graphic Design, Animation, VFX, Video Editing, UI/UX, and Digital Media courses with live projects, practical training, and placement support." },
  { n: "4", title: "Management", img: pillar4, href: "/management", body: "Business & Entrepreneurship, Sales, Marketing and Finance — operator-led classes that turn theory into traction." },
  { n: "5", title: "UG/PG Program", img: pillar1, href: "/ug-programs", body: "Undergraduate (BCA, BBA, BCom, BA) and Postgraduate (MBA, MCA, MCom, MA) degrees redesigned for the AI era." },
];

const toolkit = ["Python", "TensorFlow", "PyTorch", "LangChain", "Hugging Face", "Adobe Photoshop", "Adobe Illustrator", "Premiere Pro", "After Effects", "Blender", "Figma", "Canva", "Excel", "PowerPoint", "Tableau", "Power BI", "Slack", "Notion", "Salesforce", "HubSpot"];

/** Auto-reveal on scroll for any element with class "reveal" */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
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
  }, []);
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

function Index() {
  useScrollReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [apply, setApply] = useState(false);


  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <a href="/" className="shrink-0">
            <Logo />
          </a>
          <ul className="hidden items-center gap-4 xl:gap-6 lg:flex">
            {navItems.map((n) => {
              const inner = (
                <>
                  <span className="relative">
                    {n.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-lime transition-all duration-300 group-hover:w-full" />
                  </span>
                  {n.chevron && <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-y-0.5" />}
                </>
              );
              return (
                <li key={n.label}>
                  {n.href ? (
                    <Link to={n.href} className="group flex items-center gap-1 text-[13px] whitespace-nowrap text-foreground/85 transition-colors hover:text-lime">{inner}</Link>
                  ) : (
                    <button className="group flex items-center gap-1 text-[13px] whitespace-nowrap text-foreground/85 transition-colors hover:text-lime">{inner}</button>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-2">
            <button onClick={() => setApply(true)} className="hidden sm:inline-flex rounded-full border border-lime px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide text-lime transition-all hover:bg-lime hover:text-lime-foreground hover:scale-105">
              CHAT WITH US
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
                    <Link to={n.href} className={cls} onClick={() => setMenuOpen(false)}>{content}</Link>
                  ) : (
                    <button className={cls}>{content}</button>
                  )}
                </li>
              );
            })}
            <li className="mt-2">
              <button onClick={() => { setMenuOpen(false); setApply(true); }} className="w-full rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-lime-foreground">
                CHAT WITH US
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-16 lg:pt-20 lg:pb-20">
        {/* decorative glow */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-lime/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute top-40 right-0 h-80 w-80 rounded-full bg-mint/10 blur-3xl animate-float-soft" />

        <div className="grid items-center gap-10 lg:gap-12">
          <div className="reveal max-w-3xl">
            <div className="mb-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-mint whitespace-pre-line">{"\n"}</div>
            <h1 className="text-[2.25rem] sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Start Career With <br />
              <span className="text-gradient-lime">Skill AI</span>
            </h1>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              <Meta icon={<Calendar className="h-4 w-4 text-lime" />} label="online/offline" />
              <Meta icon={<Clock className="h-4 w-4 text-lime" />} label="Full-Time" />
              <Meta icon={<MapPin className="h-4 w-4 text-lime" />} label="Mangalore" />
              <Meta icon={<Award className="h-4 w-4 text-lime" />} label="Limited seats" />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["AI-focused", "Placements", "Industry experts Classes"].map((t, i) => (
                <span
                  key={t}
                  className="reveal rounded-full border border-lime/40 bg-lime/5 px-3.5 py-1.5 text-xs sm:text-sm text-lime transition-all hover:bg-lime/15 hover:scale-105"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {t}
                </span>
              ))}
            </div>

            <button onClick={() => setApply(true)} className="mt-7 inline-flex items-center gap-3 rounded-full bg-lime px-5 sm:px-6 py-3 text-sm font-bold tracking-wider text-lime-foreground transition-all hover:scale-[1.04] hover:shadow-[0_8px_24px_oklch(0.72_0.2_50/0.35)] animate-pulse-glow">
              KNOW MORE <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

          </div>
        </div>

        {/* scroll hint */}
        <div className="mt-12 hidden lg:flex justify-center">
          <div className="flex flex-col items-center gap-1 text-muted-foreground animate-scroll-blink">
            <span className="text-xs tracking-widest">SCROLL</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-surface/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="reveal max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Career Outcomes That Matter; AI Training with Real Job Opportunities</h2>
            <p className="mt-5 text-base sm:text-lg italic text-muted-foreground">
              "At Skill AI, success is measured by more than certificates or placements. Our industry-focused AI training programs prepare students for high-paying careers through real-world projects, internship opportunities, mentorship, and hands-on experience."
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`reveal reveal-delay-${(i % 5) + 1} hover-lift rounded-2xl border border-border bg-background p-5 sm:p-6 hover:border-lime/50`}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient-lime">{s.value}</div>
                <div className="mt-2 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 flex flex-wrap gap-3">
            <CtaBtn primary onClick={() => setApply(true)}>Learn More</CtaBtn>
          </div>
        </div>
      </section>

      {/* Pillars / Program */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="reveal text-xs sm:text-sm font-medium uppercase tracking-widest text-mint">Program Details</div>
        <h2 className="reveal mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
          AI, Multimedia <br /> Management, <span className="text-gradient-lime">UG/PG Program</span>
        </h2>
        <div className="reveal mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm">
          <Meta icon={<Calendar className="h-4 w-4 text-lime" />} label="online/offline" />
          <Meta icon={<Clock className="h-4 w-4 text-lime" />} label="Full-Time, Part time" />
          <Meta icon={<Calendar className="h-4 w-4 text-lime" />} label="2026" />
          <Meta icon={<MapPin className="h-4 w-4 text-lime" />} label="Mangalore" />
        </div>

        <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Link
              to={p.href}
              key={p.title}
              className={`reveal reveal-delay-${(i % 4) + 1} hover-lift group relative block overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-8 hover:border-lime/50`}
            >
              <div className="mb-5 sm:mb-6 h-36 sm:h-40 overflow-hidden rounded-2xl">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={512} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold group-hover:text-lime transition-colors">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-lime">
                Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="reveal mt-12 flex justify-center">
          <CtaBtn primary onClick={() => setApply(true)}>Apply Now</CtaBtn>
        </div>
      </section>

      {/* Demo Day */}
      <section className="bg-surface/40 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <div className="text-xs sm:text-sm font-medium uppercase tracking-widest text-mint">SKILL AI Demo Day</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Industrial Experts come to campus.<br />Students pitch real businesses.</h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground">
              Demo Days are hosted by the SKILL AI Startup Lab, where students pitch to IEs from across the country. Every founder walks away with direct 1:1 feedback; the strongest pitches open doors to follow-up meetings and real investment.
            </p>
            <div className="mt-7 sm:mt-8 grid grid-cols-2 gap-4 sm:gap-5">
              <div className="hover-lift rounded-2xl border border-border bg-background p-4 sm:p-5 hover:border-lime/50">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-lime">100+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">IEs on Campus</div>
              </div>
              <div className="hover-lift rounded-2xl border border-border bg-background p-4 sm:p-5 hover:border-lime/50">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-lime">20+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Student Startups</div>
              </div>
            </div>
            <div className="mt-7 sm:mt-8">
              <CtaBtn primary onClick={() => setApply(true)}>Learn More</CtaBtn>
            </div>
          </div>
          <div className="reveal reveal-delay-2 aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl animate-float-soft">
            <img src={demodayImg} alt="SKILL AI Demo Day" loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Tool Kit Marquee */}
        <div className="mx-auto mt-14 sm:mt-16 max-w-7xl px-4 sm:px-6">
          <div className="text-center text-xs sm:text-sm font-semibold uppercase tracking-widest text-muted-foreground">Tool Kit — Many Used in AI, Multimedia & Management</div>
          <div className="marquee-pause mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="marquee-track gap-10 sm:gap-14 py-2">
              {[...toolkit, ...toolkit].map((t, i) => (
                <div key={i} className="shrink-0 text-sm sm:text-base font-semibold tracking-wider text-foreground/70 transition-colors hover:text-lime">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-24 text-center">
        <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight whitespace-pre-line text-gradient-lime">
          Skill AI Real-World Skills. Real-World Careers
        </h2>
        <p className="reveal reveal-delay-1 mt-5 text-base sm:text-lg text-muted-foreground">
          Join skills that turn ambition into opportunity, Applications for the 2026 cohort are now open.
        </p>
        <div className="reveal reveal-delay-2 mt-8 flex flex-wrap justify-center gap-3">
          <CtaBtn primary onClick={() => setApply(true)}>Apply Now</CtaBtn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 px-4 sm:px-6 py-12 sm:py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">Mangalore, India</p>
          </div>
          <FootCol title="Programs" items={["PG Program", "UG Program", "Online Programs", "Incubation"]} />
          <FootCol title="School" items={["Outcomes", "Faculty", "Alumni", "Life at SKILL AI"]} />
          <FootCol title="Contact" items={["Chat with us", "Connect@skillaiindia.com", "Press", "Careers"]} onItemClick={(i) => i === "Chat with us" && setApply(true)} />
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground whitespace-pre-line">
          © 2026 Skill AI India School of AI. All Rights Reserved.{"\n\u00a0"}
        </div>
      </footer>

      {apply && <ApplyModal program="SKILL AI Programs" onClose={() => setApply(false)} />}
    </div>
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

function CtaBtn({ children, primary, onClick }: { children: React.ReactNode; primary?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={
        primary
          ? "group inline-flex items-center gap-2 rounded-full bg-lime px-5 sm:px-6 py-3 text-xs sm:text-sm font-bold tracking-wider text-lime-foreground transition-all hover:scale-[1.04] hover:shadow-[0_8px_24px_oklch(0.72_0.2_50/0.35)]"
          : "group inline-flex items-center gap-2 rounded-full border border-lime px-5 sm:px-6 py-3 text-xs sm:text-sm font-bold tracking-wider text-lime transition-all hover:bg-lime hover:text-lime-foreground hover:scale-[1.04]"
      }
    >
      {children} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  );
}


function FootCol({ title, items, onItemClick }: { title: string; items: string[]; onItemClick?: (item: string) => void }) {
  return (
    <div>
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}>
            <a href="#" onClick={(e) => { if (onItemClick) { e.preventDefault(); onItemClick(i); } }} className="relative inline-block transition-colors hover:text-lime">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
