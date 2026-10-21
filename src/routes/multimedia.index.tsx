import { createFileRoute, Link } from "@tanstack/react-router";
import skillAiLogo from "@/assets/skill-ai-logo.png";
import { useEffect, useState } from "react";
import { ApplyModal } from "@/routes/ug-programs";
import { Palette, Film, Wand2, Clapperboard, Megaphone, Sparkles, ArrowRight, Clock, Users, Camera } from "lucide-react";
import imgGraphic from "@/assets/card-mm-graphic.jpg";
import imgVideo from "@/assets/card-mm-video.jpg";
import imgAnim from "@/assets/card-mm-anim.jpg";
import imgFilm from "@/assets/card-mm-film.jpg";
import imgPmsmm from "@/assets/card-mm-pmsmm.jpg";

export const Route = createFileRoute("/multimedia/")({
  head: () => ({
    meta: [
      { title: "Multimedia Programs — Skill Ai" },
      { name: "description", content: "AI-integrated multimedia programs at Skill Ai: graphic design, video & VFX, animation, film production and marketing." },
    ],
  }),
  component: MultimediaIndex,
});

const tracks = [
  {
    Icon: Palette,
    img: imgGraphic,
    title: "AI Integrated Graphic Design",
    slug: "ai-graphic-design" as const,
    desc: "Design brand systems, campaigns and social creatives — supercharged with generative AI workflows.",
    dur: "3 Months (Fast-Track) / 6 Months (Normal)",
    skills: ["Figma", "Photoshop", "Illustrator", "Midjourney", "Firefly"],
    gradient: "from-fuchsia-500/25 to-orange-500/10",
  },
  {
    Icon: Film,
    img: imgVideo,
    title: "AI Integrated Video Editing & VFX",
    slug: "ai-video-editing-vfx" as const,
    desc: "Cinematic editing, colour, motion & AI-powered VFX for creators, brands and studios.",
    dur: "3 Months",
    skills: ["Premiere Pro", "DaVinci", "After Effects", "Runway", "Sora-style tools"],
    gradient: "from-cyan-500/25 to-blue-500/10",
  },
  {
    Icon: Wand2,
    img: imgAnim,
    title: "Animation & VFX",
    slug: "animation-vfx" as const,
    desc: "2D/3D animation, motion graphics and blockbuster-grade VFX pipelines.",
    dur: "3 Months",
    skills: ["After Effects", "Blender", "Cinema 4D", "Houdini", "Nuke"],
    gradient: "from-violet-500/25 to-purple-500/10",
  },
  {
    Icon: Clapperboard,
    img: imgFilm,
    title: "Film Production",
    slug: "film-production" as const,
    desc: "End-to-end filmmaking — direction, cinematography, sound and post — from script to screen.",
    dur: "3 Months",
    skills: ["Direction", "Cinematography", "Screenwriting", "Sound Design", "Post-production"],
    gradient: "from-amber-500/25 to-red-500/10",
  },
  {
    Icon: Megaphone,
    img: imgPmsmm,
    title: "PM & SMM",
    slug: "pm-smm" as const,
    desc: "Performance Marketing & Social Media Marketing — build, launch and scale brands online.",
    dur: "3 Months",
    skills: ["Meta Ads", "Google Ads", "SEO", "Analytics", "Content Strategy"],
    gradient: "from-lime/25 to-emerald-500/10",
  },
];


function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in-view"), io.unobserve(e.target))), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function MultimediaIndex() {
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
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,oklch(0.72_0.2_50/0.25),transparent_60%)]" />
        <div className="mx-auto max-w-7xl reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-semibold text-lime"><Sparkles className="h-3.5 w-3.5" /> Multimedia</span>
          <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">Tell stories that <span className="text-gradient-lime">move people</span>.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">AI-integrated multimedia tracks — design, video, animation, film and marketing. Industry-grade studios, AI-augmented workflows and live client briefs.</p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t, i) => {
            const to = `/multimedia/${t.slug}` as "/multimedia/ai-graphic-design";
            return (
              <div
                key={t.title}
                className={`reveal reveal-delay-${(i % 4) + 1} hover-lift group relative overflow-hidden flex h-full flex-col rounded-3xl border border-border/50 bg-surface transition-all hover:border-lime/60`}
              >
                <Link to={to} className="block">
                  <div className="relative h-44 overflow-hidden">
                    <img src={t.img} alt={t.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                    <div className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-xl bg-lime/90 text-lime-foreground shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"><t.Icon className="h-5 w-5" /></div>
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-7">
                  <Link to={to}><h2 className="text-2xl font-black hover:text-lime transition-colors">{t.title}</h2></Link>
                  <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{t.dur}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.skills.map((s) => <span key={s} className="rounded-full bg-background/60 px-3 py-1 text-xs text-muted-foreground ring-1 ring-border/40">{s}</span>)}
                  </div>
                  <div className="mt-auto flex gap-2 pt-6">
                    <button onClick={() => setApplyFor(t.title)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-lime-foreground hover:scale-105 transition-transform">Apply Now <ArrowRight className="h-4 w-4" /></button>
                    <Link to={to} className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-bold hover:bg-background transition-colors">Explore</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border/40 bg-surface/50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black md:text-5xl reveal">Why Skill Ai Multimedia?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[{ t: "Studio Access", d: "Full-equipped shooting, editing & podcast studios.", Icon: Camera }, { t: "Industry Briefs", d: "Real campaigns from brand partners every term.", Icon: Users }, { t: "Portfolio Ready", d: "Graduate with a shipped portfolio + showreel.", Icon: Sparkles }].map((b, i) => (
              <div key={b.t} className={`reveal reveal-delay-${i + 1} rounded-2xl border border-border/40 bg-background p-6 hover-lift`}>
                <b.Icon className="h-6 w-6 text-lime" />
                <div className="mt-3 text-xl font-bold">{b.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {applyFor && <ApplyModal program={applyFor} onClose={() => setApplyFor(null)} variant="multimedia" />}
    </div>
  );
}
