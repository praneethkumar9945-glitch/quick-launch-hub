import { useEffect, useState } from "react";

interface Props {
  intensity?: "low" | "high";
}

type Particle = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  blue: boolean;
};

export function FuturisticBackground({ intensity = "high" }: Props) {
  // Generated after mount only: Math.random() during SSR causes hydration mismatch.
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: intensity === "high" ? 28 : 14 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 14,
        duration: 12 + Math.random() * 14,
        size: 2 + Math.random() * 4,
        blue: Math.random() > 0.5,
      })),
    );
  }, [intensity]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="grid-bg absolute inset-0 opacity-70"
        style={{ animation: "grid-pan 8s linear infinite" }}
      />
      <div
        className="absolute -left-40 top-[-10rem] h-[36rem] w-[36rem] rounded-full bg-primary/25 blur-[140px]"
        style={{ animation: "fs-pulse-glow 7s ease-in-out infinite" }}
      />
      <div
        className="absolute -right-40 bottom-[-12rem] h-[40rem] w-[40rem] rounded-full bg-secondary/25 blur-[150px]"
        style={{ animation: "fs-pulse-glow 9s ease-in-out infinite" }}
      />
      {particles.map((p) => (
        <span
          key={p.id}
          className={`absolute bottom-[-10vh] rounded-full ${p.blue ? "bg-secondary" : "bg-primary"}`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
            opacity: 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_10%,oklch(0.13_0.012_265/85%)_100%)]" />
    </div>
  );
}
