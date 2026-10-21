import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Brain, ChevronDown, Cpu, Network, Rocket, Sparkles, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NeuralCanvas } from "./NeuralCanvas";
import { summit } from "@/config/aics-summit";

const ease = [0.2, 0.7, 0.2, 1] as const;
const RING = "35vh";

type SideCardData = { icon: LucideIcon; label: string; sub: string; angle: number };

const leftCards: SideCardData[] = [
  { icon: Brain, label: "AI Careers", sub: "Shape your path", angle: -55 },
  { icon: Users, label: "Expert Mentors", sub: "Learn from leaders", angle: 0 },
  { icon: Cpu, label: "Future Tech", sub: "Hands-on labs", angle: 55 },
];

const rightCards: SideCardData[] = [
  { icon: Sparkles, label: "Live Demos", sub: "See AI in action", angle: 125 },
  { icon: Network, label: "Networking", sub: "Meet your peers", angle: 180 },
  { icon: Rocket, label: "Career Hub", sub: "Jumpstart your journey", angle: 235 },
];

function SideCard({ icon: Icon, label, sub }: Omit<SideCardData, "angle">) {
  return (
    <div className="absolute left-0 top-0 flex w-32 -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 rounded-2xl border border-border bg-glass px-3 py-2.5 shadow-glow backdrop-blur-md md:w-40">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-glow/20">
        <Icon className="h-4 w-4 text-foreground" aria-hidden />
      </span>
      <span className="text-left font-aics-display text-[11px] font-semibold uppercase leading-tight tracking-wider md:text-xs">
        {label}
        <span className="block font-aics-sans text-[10px] font-normal normal-case tracking-normal text-muted-foreground md:text-[11px]">{sub}</span>
      </span>
    </div>
  );
}

function CardOrbit({ cards, side }: { cards: SideCardData[]; side: "left" | "right" }) {
  const orbit = side === "left" ? "animate-orbit-left" : "animate-orbit-right";
  const counter = side === "left" ? "animate-orbit-left-rev" : "animate-orbit-right-rev";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, ease, delay: 0.4 }}
      className={`pointer-events-none absolute top-1/2 h-0 w-0 ${side === "left" ? "left-0" : "right-0"}`}
    >
      <div className={orbit} style={{ transformOrigin: "0 0" }}>
        {cards.map(({ angle, ...card }) => (
          <div
            key={card.label}
            className="absolute left-0 top-0"
            style={{ transform: `rotate(${angle}deg) translateX(${RING}) rotate(${-angle}deg)` }}
          >
            <div className={counter} style={{ transformOrigin: "0 0" }}>
              <SideCard {...card} />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Hero() {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 }), sy = useSpring(my, { stiffness: 60, damping: 20 });
  const lx = useTransform(sx, (v) => v * -40), ly = useTransform(sy, (v) => v * -30);
  const rx = useTransform(sx, (v) => v * 40), ry = useTransform(sy, (v) => v * 30);
  const gx = useMotionValue(-500), gy = useMotionValue(-500);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden aics-bg-hero"
      onPointerMove={(e) => {
        mx.set(e.clientX / window.innerWidth - 0.5); my.set(e.clientY / window.innerHeight - 0.5);
        gx.set(e.clientX - 250); gy.set(e.clientY - 250);
      }}
    >
      <div className="absolute inset-0 scanlines" />
      <NeuralCanvas />
      <motion.div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary-glow/25 blur-[100px]" style={{ x: gx, y: gy }} />

      {/* Left half circle with rotating cards */}
      <div className="pointer-events-none absolute h-[70vh] w-[70vh] half-ring" style={{ top: "calc(50% - 35vh)", left: "-35vh" }} />
      <motion.div style={{ x: lx, y: ly }} className="pointer-events-none absolute left-0 top-1/2 hidden h-0 w-0 md:block">
        <CardOrbit cards={leftCards} side="left" />
      </motion.div>

      {/* Right half circle with rotating cards */}
      <div className="pointer-events-none absolute h-[70vh] w-[70vh] half-ring" style={{ top: "calc(50% - 35vh)", right: "-35vh" }} />
      <motion.div style={{ x: rx, y: ry }} className="pointer-events-none absolute right-0 top-1/2 hidden h-0 w-0 md:block">
        <CardOrbit cards={rightCards} side="right" />
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-20 pt-28 text-center sm:px-6 sm:pb-24 sm:pt-24">
        <motion.p initial={{ opacity: 0, letterSpacing: "0.8em" }} animate={{ opacity: 1, letterSpacing: "0.3em" }} transition={{ duration: 1.2, ease }}
          className="mb-6 max-w-full text-[10px] font-medium tracking-[0.12em] text-muted-foreground sm:mb-8 sm:text-xs sm:tracking-[0.2em]">THE NEXT GENERATION OF INTELLIGENCE</motion.p>

        <div className="flex max-w-full items-center gap-3 sm:gap-5 md:gap-8">
          <motion.span initial={{ opacity: 0, scale: 0.6, filter: "blur(20px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1.1, ease, delay: 0.2 }}
            className="shrink-0 font-aics-display text-5xl font-extrabold leading-none tracking-tighter text-glow sm:text-7xl md:text-[9rem]">Ai</motion.span>
          <motion.span initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.8, delay: 0.7, ease }} className="h-16 w-px shrink-0 origin-top bg-foreground/50 sm:h-24 md:h-36" />
          <h1 className="min-w-0 text-left font-aics-display text-3xl font-bold uppercase leading-[0.95] tracking-tight sm:text-4xl md:text-7xl">
            {["Career", "Summit"].map((word, wi) => (
              <span key={word} className="block overflow-hidden">
                {word.split("").map((ch, i) => (
                  <motion.span key={i} className="inline-block" initial={{ y: "110%", filter: "blur(8px)" }} animate={{ y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.7, ease, delay: 0.8 + wi * 0.25 + i * 0.04 }}>{ch}</motion.span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        <motion.div initial={{ opacity: 0, clipPath: "inset(0 50% 0 50%)" }} animate={{ opacity: 1, clipPath: "inset(0 0% 0 0%)" }} transition={{ duration: 1, delay: 1.5, ease }}
          className="mt-6 flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 border-y border-foreground/30 px-2 py-2 font-aics-display text-xs font-medium sm:flex-nowrap sm:gap-4 sm:px-4 sm:text-base md:text-2xl">
          <span>{summit.dateLabel}</span><span className="hidden h-5 w-px shrink-0 bg-foreground/50 sm:block" /><span>{summit.city}</span>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.8 }} className="mt-8 max-w-2xl font-aics-display text-xl font-medium sm:mt-10 md:text-3xl">
          Your Future. <span className="aics-text-gradient">Redefined by AI.</span>
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.95 }} className="mt-4 max-w-xl text-muted-foreground">
          Explore emerging AI careers, connect with industry experts, experience future-ready technologies, and discover the opportunities shaping tomorrow's workforce.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.1 }} className="mt-8 flex w-full max-w-sm flex-col justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:gap-4">
          <a href="#register" className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-glow transition hover:scale-105 sm:px-8 sm:py-4 sm:text-base">REGISTER FOR THE SUMMIT</a>
          <a href="#about" className="rounded-full border border-border bg-glass px-5 py-3 text-sm font-medium backdrop-blur transition hover:border-foreground sm:px-8 sm:py-4 sm:text-base">EXPLORE THE EXPERIENCE</a>
        </motion.div>
      </div>

      <motion.a href="#info" aria-label="Scroll down" initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 10, 0] }} transition={{ opacity: { delay: 2.5 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 text-muted-foreground sm:block sm:bottom-8"><ChevronDown className="h-7 w-7" /></motion.a>
    </section>
  );
}
