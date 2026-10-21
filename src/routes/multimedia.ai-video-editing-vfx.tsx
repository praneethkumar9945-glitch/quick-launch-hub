import { createFileRoute } from "@tanstack/react-router";
import { Film, Scissors, Wand2, Sparkles, Palette, Music, Zap, Layers, Briefcase, Rocket } from "lucide-react";
import { MultimediaCourseDetail, type MMModule } from "@/components/MultimediaCourseDetail";
import heroImg from "@/assets/card-mm-video.jpg";

const MODULES: MMModule[] = [
  { n: 1, icon: Film, title: "Foundations of Video Storytelling", weeks: "Week 1", hours: "12 hrs",
    points: ["Story structure & pacing", "Shot language & continuity", "Codec, framerate, resolution basics", "Editing psychology"], color: "from-cyan-500/30 to-blue-500/10" },
  { n: 2, icon: Scissors, title: "Adobe Premiere Pro Mastery", weeks: "Week 2", hours: "12 hrs",
    points: ["Advanced timeline workflow", "Proxy & multi-cam editing", "Keyboard-first editing", "Export presets & delivery"], color: "from-orange-500/30 to-amber-500/10" },
  { n: 3, icon: Palette, title: "DaVinci Resolve & Colour Grading", weeks: "Week 3", hours: "12 hrs",
    points: ["Node-based grading", "LUTs & colour science", "Skin-tone matching", "Cinematic looks"], color: "from-fuchsia-500/30 to-pink-500/10" },
  { n: 4, icon: Layers, title: "After Effects for Motion", weeks: "Week 4", hours: "12 hrs",
    points: ["Kinetic typography", "Shape animation", "Expressions basics", "Compositing fundamentals"], color: "from-violet-500/30 to-purple-500/10" },
  { n: 5, icon: Wand2, title: "AI Video Tools — Runway & Beyond", weeks: "Week 5", hours: "12 hrs",
    points: ["Runway Gen-3 workflows", "AI rotoscoping & inpainting", "Text-to-video generation", "AI voice & lip sync"], color: "from-lime/30 to-emerald-500/10" },
  { n: 6, icon: Sparkles, title: "VFX Fundamentals & Compositing", weeks: "Week 6", hours: "12 hrs",
    points: ["Green screen keying", "Motion tracking", "Rotoscoping", "Sky replacement & set extension"], color: "from-sky-500/30 to-indigo-500/10" },
  { n: 7, icon: Zap, title: "Advanced VFX & AI Compositing", weeks: "Week 7", hours: "12 hrs",
    points: ["Particle systems", "AI-powered clean plates", "Face replacement", "3D camera tracking"], color: "from-rose-500/30 to-red-500/10" },
  { n: 8, icon: Music, title: "Sound Design & Audio Mixing", weeks: "Week 8", hours: "12 hrs",
    points: ["Dialogue cleanup", "Foley & SFX", "Music selection & sync", "Loudness for platforms"], color: "from-amber-500/30 to-yellow-500/10" },
  { n: 9, icon: Rocket, title: "Short-Form & Long-Form Delivery", weeks: "Weeks 9–10", hours: "24 hrs",
    points: ["Reels, Shorts, TikTok craft", "YouTube long-form editing", "Podcast video", "Documentary rhythm"], color: "from-teal-500/30 to-cyan-500/10" },
  { n: 10, icon: Briefcase, title: "Showreel, Freelance & Studio Prep", weeks: "Weeks 11–12", hours: "24 hrs",
    points: ["Build a killer showreel", "Client onboarding", "Studio pipeline etiquette", "Rate cards & contracts"], color: "from-orange-500/30 to-red-500/10" },
];

export const Route = createFileRoute("/multimedia/ai-video-editing-vfx")({
  head: () => ({ meta: [{ title: "AI Integrated Video Editing & VFX — Skill Ai" }, { name: "description", content: "12-week AI-powered video editing and VFX program: Premiere, DaVinci, After Effects, Runway and modern AI compositing." }] }),
  component: () => (
    <MultimediaCourseDetail
      eyebrow="AI Integrated · Multimedia"
      title="AI Integrated Video Editing & VFX"
      tagline="Cinematic editing, colour, motion & AI-powered VFX for creators, brands and studios."
      duration="3 Months"
      schedule="2 hrs/day · 6 days"
      sessions="72 Sessions"
      totalHours="144 Hours"
      level="Beginner → Advanced"
      mode="Hybrid + Studio"
      heroImage={heroImg}
      overview="Master the editor's craft — Premiere, DaVinci, After Effects — then layer on the AI stack (Runway, ElevenLabs, AI rotoscoping and compositing) that top studios and creators use today. Every week ends with a shipped edit for your reel."
      modules={MODULES}
      tools={["Premiere Pro", "DaVinci Resolve", "After Effects", "Audition", "Runway", "ElevenLabs", "Descript", "Topaz Video AI", "Boris FX", "Frame.io"]}
      capstones={["Cinematic Short Film Edit", "Brand Campaign Ad", "AI-VFX Music Video", "Long-Form YouTube Doc", "Reels Content Series", "Full Showreel"]}
      outcomes={["Edit long & short-form content professionally", "Grade footage like a colourist", "Build motion-graphic sequences", "Composite VFX shots with AI acceleration", "Deliver to broadcast & streaming specs", "Land roles at studios or freelance profitably"]}
    />
  ),
});
