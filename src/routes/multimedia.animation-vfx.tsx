import { createFileRoute } from "@tanstack/react-router";
import { Wand2, Layers, Box, Film, Sparkles, Zap, Cpu, PenTool, Rocket, Briefcase } from "lucide-react";
import { MultimediaCourseDetail, type MMModule } from "@/components/MultimediaCourseDetail";
import heroImg from "@/assets/card-mm-anim.jpg";

const MODULES: MMModule[] = [
  { n: 1, icon: PenTool, title: "Animation Principles & Storyboarding", weeks: "Week 1", hours: "12 hrs",
    points: ["12 principles of animation", "Storyboarding & animatics", "Character silhouette design", "Timing & spacing"], color: "from-violet-500/30 to-purple-500/10" },
  { n: 2, icon: Layers, title: "2D Motion in After Effects", weeks: "Week 2", hours: "12 hrs",
    points: ["Shape layers & masks", "Rigging with Duik", "Kinetic typography", "Explainer video workflow"], color: "from-cyan-500/30 to-blue-500/10" },
  { n: 3, icon: Box, title: "3D Modelling with Blender", weeks: "Week 3", hours: "12 hrs",
    points: ["Poly modelling", "UV unwrapping & texturing", "Material & shader nodes", "Lighting basics"], color: "from-orange-500/30 to-amber-500/10" },
  { n: 4, icon: Wand2, title: "Character Rigging & Animation", weeks: "Week 4", hours: "12 hrs",
    points: ["Armature & weight painting", "IK/FK setups", "Walk cycles", "Facial rigs"], color: "from-fuchsia-500/30 to-pink-500/10" },
  { n: 5, icon: Sparkles, title: "Cinema 4D & Motion Graphics", weeks: "Week 5", hours: "12 hrs",
    points: ["MoGraph module", "Cloners & effectors", "Redshift rendering", "Broadcast-grade motion"], color: "from-lime/30 to-emerald-500/10" },
  { n: 6, icon: Zap, title: "Houdini for FX", weeks: "Week 6", hours: "12 hrs",
    points: ["Procedural workflows", "Pyro (fire/smoke)", "FLIP fluids", "Rigid body destruction"], color: "from-rose-500/30 to-red-500/10" },
  { n: 7, icon: Film, title: "Nuke Compositing", weeks: "Week 7", hours: "12 hrs",
    points: ["Node-based compositing", "Keying & rotoscoping", "3D camera projection", "Multi-pass integration"], color: "from-sky-500/30 to-indigo-500/10" },
  { n: 8, icon: Cpu, title: "AI-Assisted Animation & VFX", weeks: "Week 8", hours: "12 hrs",
    points: ["AI mocap & retargeting", "Runway rotoscoping", "AI upscaling for renders", "Style transfer for animation"], color: "from-amber-500/30 to-yellow-500/10" },
  { n: 9, icon: Rocket, title: "Full VFX Pipeline Project", weeks: "Weeks 9–10", hours: "24 hrs",
    points: ["Pre-production planning", "Shoot with VFX in mind", "Composite hero shots", "Final delivery"], color: "from-teal-500/30 to-cyan-500/10" },
  { n: 10, icon: Briefcase, title: "Showreel & Studio Career Prep", weeks: "Weeks 11–12", hours: "24 hrs",
    points: ["Reel curation", "ArtStation portfolio", "Studio interview prep", "Pipeline & version control"], color: "from-orange-500/30 to-red-500/10" },
];

export const Route = createFileRoute("/multimedia/animation-vfx")({
  head: () => ({ meta: [{ title: "Animation & VFX — Skill Ai" }, { name: "description", content: "12-week Animation & VFX program: Blender, Cinema 4D, Houdini, Nuke and AI-assisted pipelines for film and streaming." }] }),
  component: () => (
    <MultimediaCourseDetail
      eyebrow="Multimedia · Animation & VFX"
      title="Animation & VFX"
      tagline="2D/3D animation, motion graphics and blockbuster-grade VFX pipelines — with AI-accelerated tools."
      duration="3 Months"
      schedule="2 hrs/day · 6 days"
      sessions="72 Sessions"
      totalHours="144 Hours"
      level="Beginner → Advanced"
      mode="Hybrid + Studio"
      heroImage={heroImg}
      overview="A studio-style program that walks you from animation principles and 2D motion to full 3D pipelines in Blender, Cinema 4D, Houdini and Nuke — with modern AI acceleration for mocap, rotoscoping and upscaling."
      modules={MODULES}
      tools={["After Effects", "Duik", "Blender", "Cinema 4D", "Redshift", "Houdini", "Nuke", "Substance", "ZBrush", "Runway", "Topaz"]}
      capstones={["Animated Short Film", "Explainer Video Series", "Product 3D Ad", "VFX Hero Shot Breakdown", "Motion Design Reel", "Full Studio Pipeline Project"]}
      outcomes={["Animate characters & motion graphics", "Model, texture and light in 3D", "Build FX with Houdini", "Composite VFX in Nuke", "Integrate AI into your pipeline", "Break into animation & VFX studios"]}
    />
  ),
});
