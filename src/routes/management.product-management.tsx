import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Search, Layers, PenTool, Rocket, Users, Zap, TrendingUp, ClipboardList, Briefcase } from "lucide-react";
import { MultimediaCourseDetail, type MMModule } from "@/components/MultimediaCourseDetail";
import heroImg from "@/assets/mg-pm.jpg";

const MODULES: MMModule[] = [
  { n: 1, icon: ClipboardList, title: "Product Management Foundations", weeks: "Month 1", hours: "40 hrs",
    points: ["PM role & operating model", "Product lifecycle", "Working with eng & design", "Product sense"], color: "from-lime/30 to-emerald-500/10" },
  { n: 2, icon: Search, title: "Discovery & User Research", weeks: "Month 1", hours: "40 hrs",
    points: ["User interviews", "JTBD framework", "Opportunity solution trees", "Problem framing"], color: "from-cyan-500/30 to-blue-500/10" },
  { n: 3, icon: Layers, title: "Strategy, Roadmaps & Prioritisation", weeks: "Month 2", hours: "40 hrs",
    points: ["Product strategy docs", "RICE & prioritisation", "Now-Next-Later roadmaps", "Stakeholder alignment"], color: "from-fuchsia-500/30 to-pink-500/10" },
  { n: 4, icon: PenTool, title: "PRDs, Specs & Design Collaboration", weeks: "Month 3", hours: "40 hrs",
    points: ["Writing crisp PRDs", "User stories & acceptance criteria", "Wireframing in Figma", "Design critique"], color: "from-orange-500/30 to-amber-500/10" },
  { n: 5, icon: Rocket, title: "Agile Delivery & Shipping", weeks: "Month 3", hours: "40 hrs",
    points: ["Scrum & Kanban", "Sprint planning", "Release management", "Risk & scope control"], color: "from-sky-500/30 to-indigo-500/10" },
  { n: 6, icon: BarChart3, title: "Metrics, Analytics & Experimentation", weeks: "Month 4", hours: "40 hrs",
    points: ["North star & input metrics", "Funnels & cohorts", "A/B testing", "Mixpanel / Amplitude"], color: "from-violet-500/30 to-purple-500/10" },
  { n: 7, icon: TrendingUp, title: "Growth & Monetisation", weeks: "Month 5", hours: "40 hrs",
    points: ["Activation & retention loops", "Pricing & packaging", "PLG motions", "Churn reduction"], color: "from-amber-500/30 to-yellow-500/10" },
  { n: 8, icon: Zap, title: "AI Product Management", weeks: "Month 5", hours: "40 hrs",
    points: ["Designing with LLMs", "Evals & guardrails", "AI feature scoping", "AI tooling for PMs"], color: "from-teal-500/30 to-cyan-500/10" },
  { n: 9, icon: Users, title: "Go-To-Market & Product Marketing", weeks: "Month 6", hours: "40 hrs",
    points: ["Launch plans", "Positioning & messaging", "Beta programs", "Sales enablement"], color: "from-rose-500/30 to-red-500/10" },
  { n: 10, icon: Briefcase, title: "Capstone & PM Career Launch", weeks: "Month 6", hours: "20 hrs",
    points: ["End-to-end product case", "Portfolio & case studies", "PM interview drills", "Referral network"], color: "from-orange-500/30 to-red-500/10" },
];

export const Route = createFileRoute("/management/product-management")({
  head: () => ({
    meta: [
      { title: "Product Management Program — Skill Ai" },
      { name: "description", content: "6-month Product Management program: discovery, roadmaps, PRDs, agile delivery, metrics, growth and AI product work." },
      { property: "og:title", content: "Product Management Program — Skill Ai" },
      { property: "og:description", content: "Discovery, roadmaps, metrics and shipping — for SaaS and consumer products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <MultimediaCourseDetail
      eyebrow="Management · Product"
      title="Product Management"
      tagline="Discovery, roadmaps, metrics and shipping — build products people actually use."
      duration="6 Months"
      schedule="2 hrs/day · 6 days"
      sessions="144 Sessions"
      totalHours="288 Hours"
      level="Beginner → Associate PM"
      mode="Hybrid + Live Product Squads"
      heroImage={heroImg}
      overview="A build-first PM program run like a real product org. You'll join a squad, interview users, write PRDs, ship features with engineers and designers, and defend your decisions with data — finishing with an interview-ready product portfolio."
      modules={MODULES}
      tools={["Figma", "Jira", "Linear", "Notion", "Miro", "Amplitude", "Mixpanel", "GA4", "SQL", "ChatGPT", "Lovable"]}
      capstones={["User Research Report", "Product Strategy Doc", "Roadmap & Prioritisation Model", "Shipped Feature with a Squad", "Experiment & Metrics Readout", "GTM Launch Plan"]}
      outcomes={["Run continuous product discovery", "Write PRDs engineers love", "Prioritise with clear frameworks", "Ship in agile squads", "Make decisions from product analytics", "Land APM / PM roles at startups & SaaS"]}
    />
  ),
});
