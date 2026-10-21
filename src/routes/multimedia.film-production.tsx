import { createFileRoute } from "@tanstack/react-router";
import { Clapperboard, Camera, Mic, Film, Users, PenTool, Sparkles, Sun, Scissors, Briefcase } from "lucide-react";
import { MultimediaCourseDetail, type MMModule } from "@/components/MultimediaCourseDetail";
import heroImg from "@/assets/card-mm-film.jpg";

const MODULES: MMModule[] = [
  { n: 1, icon: PenTool, title: "Screenwriting & Story Development", weeks: "Week 1", hours: "12 hrs",
    points: ["Three-act structure", "Character arcs", "Scene construction", "Feature vs short form"], color: "from-amber-500/30 to-red-500/10" },
  { n: 2, icon: Users, title: "Pre-Production & Producing", weeks: "Week 2", hours: "12 hrs",
    points: ["Breakdown & scheduling", "Budgeting basics", "Location & talent scouting", "Legal & permits"], color: "from-orange-500/30 to-amber-500/10" },
  { n: 3, icon: Clapperboard, title: "Directing for Screen", weeks: "Week 3", hours: "12 hrs",
    points: ["Directing actors", "Blocking & staging", "Coverage & shot lists", "On-set decision making"], color: "from-fuchsia-500/30 to-pink-500/10" },
  { n: 4, icon: Camera, title: "Cinematography Fundamentals", weeks: "Week 4", hours: "12 hrs",
    points: ["Camera & lens language", "Composition & movement", "Exposure & dynamic range", "Formats & recording"], color: "from-cyan-500/30 to-blue-500/10" },
  { n: 5, icon: Sun, title: "Lighting for Film", weeks: "Week 5", hours: "12 hrs",
    points: ["Three-point & motivated lighting", "Interiors vs exteriors", "Colour & mood", "LED, tungsten, HMI kits"], color: "from-yellow-500/30 to-amber-500/10" },
  { n: 6, icon: Mic, title: "Production Sound & Design", weeks: "Week 6", hours: "12 hrs",
    points: ["On-set audio capture", "Booming & lav mics", "Room tone & sync", "Dialogue-first mindset"], color: "from-sky-500/30 to-indigo-500/10" },
  { n: 7, icon: Sparkles, title: "Art Direction & Production Design", weeks: "Week 7", hours: "12 hrs",
    points: ["Visual world-building", "Set dressing & props", "Costume & makeup", "Continuity mgmt"], color: "from-violet-500/30 to-purple-500/10" },
  { n: 8, icon: Scissors, title: "Editing & Post-Production", weeks: "Week 8", hours: "12 hrs",
    points: ["Assembly to fine cut", "Rhythm & pacing", "Colour handoff", "Sound mix & mastering"], color: "from-lime/30 to-emerald-500/10" },
  { n: 9, icon: Film, title: "Short Film Production Sprint", weeks: "Weeks 9–10", hours: "24 hrs",
    points: ["Full pre-pro pipeline", "3-day shoot", "Post & delivery", "Festival packaging"], color: "from-teal-500/30 to-cyan-500/10" },
  { n: 10, icon: Briefcase, title: "Distribution, Festivals & Career", weeks: "Weeks 11–12", hours: "24 hrs",
    points: ["Festival strategy", "OTT & YouTube distribution", "Pitching & networking", "Building your director's kit"], color: "from-orange-500/30 to-red-500/10" },
];

export const Route = createFileRoute("/multimedia/film-production")({
  head: () => ({ meta: [{ title: "Film Production — Skill Ai" }, { name: "description", content: "12-week end-to-end Film Production program: writing, directing, cinematography, sound and post — from script to festival." }] }),
  component: () => (
    <MultimediaCourseDetail
      eyebrow="Multimedia · Filmmaking"
      title="Film Production"
      tagline="End-to-end filmmaking — direction, cinematography, sound and post — from script to screen."
      duration="3 Months"
      schedule="2 hrs/day · 6 days"
      sessions="72 Sessions"
      totalHours="144 Hours"
      level="Beginner → Advanced"
      mode="On-Campus Studio"
      heroImage={heroImg}
      overview="A hands-on filmmaking journey that takes you through the full craft — writing, producing, directing, shooting, sound and post — culminating in a real short film shot on professional gear and taken through a festival-ready delivery."
      modules={MODULES}
      tools={["Final Draft", "StudioBinder", "Blackmagic URSA", "Sony FX3", "DaVinci Resolve", "Premiere Pro", "Pro Tools", "Frame.io", "Milanote"]}
      capstones={["Short Film (5–10 min)", "Music Video", "Documentary Short", "Ad Commercial", "Festival Submission Pack", "Director's Portfolio Reel"]}
      outcomes={["Write and pitch feature-ready shorts", "Direct actors and lead a crew", "Shoot cinematic footage", "Deliver clean production sound", "Post-produce to broadcast standards", "Submit and travel to festivals"]}
    />
  ),
});
