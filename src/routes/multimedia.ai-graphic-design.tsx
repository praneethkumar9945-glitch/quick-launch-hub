import { createFileRoute } from "@tanstack/react-router";
import { Palette, Sparkles, Layers, Wand2, Image as ImageIcon, PenTool, Package, Film, Printer, Rocket, Briefcase, BookOpen } from "lucide-react";
import { MultimediaCourseDetail, type MMModule } from "@/components/MultimediaCourseDetail";
import heroImg from "@/assets/card-mm-graphic.jpg";

const MODULES: MMModule[] = [
  { n: 1, icon: BookOpen, title: "Foundation: Design Thinking & Visual Communication", weeks: "Module 1", hours: "8 hrs",
    points: [
      "Design principles: balance, contrast, hierarchy, alignment",
      "Colour theory, palettes & typography classification",
      "Creative brief interpretation & concept translation",
      "AI research with ChatGPT Go & Perplexity AI",
      "Mini Project: Mood-board & Concept Board",
    ], color: "from-fuchsia-500/30 to-pink-500/10" },

  { n: 2, icon: ImageIcon, title: "Adobe Photoshop — Photo Editing & Digital Compositing", weeks: "Module 2", hours: "20 hrs",
    points: [
      "Layers, masks, blend modes & non-destructive editing",
      "Retouching, compositing & poster design",
      "Generative Fill / Expand & Neural Filters",
      "Mini Project: Fashion Magazine Cover / Movie Poster",
      "Industry Project: 5-creative social media ad campaign",
    ], color: "from-orange-500/30 to-amber-500/10" },

  { n: 3, icon: PenTool, title: "Adobe Illustrator — Logo, Brand & Vector Design", weeks: "Module 3", hours: "18 hrs",
    points: [
      "Vector geometry, Pen tool & logo construction",
      "Grid, negative space & scalable identity systems",
      "Generative Recolor & Text-to-Vector with Firefly",
      "Mini Project: Complete Brand Identity",
      "Industry Project: Full brand system + client pitch",
    ], color: "from-cyan-500/30 to-blue-500/10" },

  { n: 4, icon: Layers, title: "Adobe InDesign — Publication & Layout Design", weeks: "Module 4", hours: "14 hrs",
    points: [
      "Grid systems, master pages & style sheets",
      "Pre-flight & print packaging workflows",
      "AI copy-fitting with ChatGPT Go",
      "Mini Project: 12-page Digital Magazine",
      "Industry Project: Annual report cover + spreads",
    ], color: "from-violet-500/30 to-purple-500/10" },

  { n: 5, icon: Wand2, title: "Figma — UI/UX Design & Prototyping", weeks: "Module 5", hours: "16 hrs",
    points: [
      "UX fundamentals, user flows & Auto Layout",
      "Design systems & component libraries",
      "Figma AI for layout suggestions",
      "Mini Project: E-commerce UI Kit / SaaS Dashboard",
      "Industry Project: Fully prototyped app + design system",
    ], color: "from-lime/30 to-emerald-500/10" },

  { n: 6, icon: Sparkles, title: "Adobe Lightroom — Photography Editing Workflow", weeks: "Module 6", hours: "12 hrs",
    points: [
      "RAW workflow & non-destructive editing",
      "Colour correction vs. colour grading",
      "AI masking & batch editing systems",
      "Mini Project: Wedding Album / Product Photo Set",
      "Industry Project: Client-ready gallery delivery",
    ], color: "from-rose-500/30 to-red-500/10" },

  { n: 7, icon: Package, title: "Adobe Dimension — 3D Product & Packaging Visualisation", weeks: "Module 7", hours: "14 hrs",
    points: [
      "3D scene composition, lighting & materials",
      "Photorealistic packaging & product renders",
      "AI-assisted backgrounds via Photoshop round-trip",
      "Mini Project: Perfume Bottle / Shoe Box Render",
      "Industry Project: Full packaging brand presentation",
    ], color: "from-amber-500/30 to-yellow-500/10" },

  { n: 8, icon: Film, title: "Adobe Premiere Pro — Video Editing & Motion Content", weeks: "Module 8", hours: "16 hrs",
    points: [
      "Editing rhythm, pacing & colour grading",
      "Motion graphics & audio design basics",
      "AI Caption generation & Speech Enhancement",
      "Mini Project: 30s Product Ad / 60s Instagram Reel",
      "Industry Project: Product Ad, YouTube or Event Reel",
    ], color: "from-sky-500/30 to-indigo-500/10" },

  { n: 9, icon: Printer, title: "CorelDRAW — Regional Print & Signage Design", weeks: "Module 9", hours: "10 hrs",
    points: [
      "CMYK press-ready colour management",
      "Sign-board production standards & vector tracing",
      "AI upscaling & vector clean-up",
      "Mini Project: T-shirt Series / Sign-board Pack",
      "Industry Project: Press-ready portfolio for a client",
    ], color: "from-teal-500/30 to-cyan-500/10" },

  { n: 10, icon: Rocket, title: "AI-Integrated Design Systems (Cross-Platform)", weeks: "Module 10", hours: "12 hrs",
    points: [
      "Prompt engineering & AI-assisted pipelines",
      "AI ethics, originality & disclosure standards",
      "Research → Concept → Asset → Production → Delivery",
      "Firefly · Ideogram · Gemini+ · Perplexity · Designer",
      "Industry Project: Full AI-integrated campaign",
    ], color: "from-purple-500/30 to-fuchsia-500/10" },

  { n: 11, icon: Briefcase, title: "Capstone: Portfolio, Placement & Client Simulation", weeks: "Module 11", hours: "4 hrs",
    points: [
      "Portfolio curation & personal branding",
      "Behance & LinkedIn portfolio build",
      "Professionally designed resume",
      "AI-assisted case-study writing (ChatGPT Go)",
      "Capstone + Final Presentation + Viva",
    ], color: "from-orange-500/30 to-red-500/10" },
];

export const Route = createFileRoute("/multimedia/ai-graphic-design")({
  head: () => ({ meta: [{ title: "AI Integrated Graphic Design — Skill Ai CreateX" }, { name: "description", content: "144-hour AI Integrated Graphic Design course (2027 Edition) — 8 software, 6 AI tools, 11 modules, 30–40 portfolio projects. Photoshop, Illustrator, InDesign, Figma, Lightroom, Dimension, Premiere Pro, CorelDRAW + Firefly, ChatGPT Go, Ideogram, Gemini+, Perplexity, Microsoft Designer." }] }),
  component: () => (
    <MultimediaCourseDetail
      eyebrow="AI Integrated · 2027 Edition · CreateX"
      title="AI Integrated Graphic Design"
      tagline="The Advanced AI-Integrated Graphic Design Professional Course — 8 core design apps + 6 leading AI platforms across 144 hours of project-based learning. Graduate placement-ready with 30–40 real industry projects."
      duration="3 Months (Fast-Track) / 6 Months (Normal)"
      schedule="2 hrs/day · 6 days"
      sessions="72 Sessions"
      totalHours="144 Hours"
      level="Beginner → Advanced"
      mode="Hybrid + Studio"
      heroImage={heroImg}
      overview="The Advanced AI-Integrated Graphic Design Professional Course (2027 Edition) combines eight core design applications with six leading AI platforms across 144 hours of structured, project-based learning. Students move from design fundamentals to a fully AI-integrated professional workflow, graduating with a placement-ready portfolio of 30–40 real projects — benchmarked against national and international multimedia standards and structured for freelance, remote and international opportunities."
      modules={MODULES}
      tools={[
        "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma",
        "Adobe Lightroom", "Adobe Dimension", "Adobe Premiere Pro", "CorelDRAW",
        "ChatGPT Go", "Adobe Firefly", "Ideogram", "Perplexity AI",
        "Google Gemini+", "Microsoft Designer",
      ]}
      capstones={[
        "Full Brand Identity System",
        "12-page Digital Magazine + Annual Report",
        "Prototyped Mobile App / SaaS Dashboard",
        "Photorealistic 3D Packaging Renders",
        "Product Ad / Instagram Reel Video",
        "Press-Ready Regional Print Portfolio",
        "Full AI-Integrated Ad Campaign",
        "Behance + LinkedIn Portfolio & Resume",
      ]}
      outcomes={[
        "Design professional posters & marketing creatives",
        "Develop complete brand identity systems",
        "Plan & design social media campaigns end-to-end",
        "Create packaging & 3D product visualisations",
        "Lay out magazines & multi-page publications",
        "Build UI mockups & interactive prototypes in Figma",
        "Edit and colour-grade professional video ads",
        "Apply a full AI-assisted design workflow ethically",
        "Prepare print-ready files to industry standard",
        "Deliver confident client presentations",
        "Manage freelance & remote-work pipelines",
        "Roles: Graphic · Brand · Packaging · UI · Social · AI Designer",
      ]}
    />
  ),
});
