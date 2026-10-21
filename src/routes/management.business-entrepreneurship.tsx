import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Lightbulb, DollarSign, Users, BarChart3, Rocket, Scale, Target, Megaphone, Handshake } from "lucide-react";
import { MultimediaCourseDetail, type MMModule } from "@/components/MultimediaCourseDetail";
import heroImg from "@/assets/mg-biz.jpg";

const MODULES: MMModule[] = [
  { n: 1, icon: Lightbulb, title: "Idea, Problem & Opportunity", weeks: "Month 1", hours: "40 hrs",
    points: ["Problem discovery interviews", "Market sizing (TAM/SAM/SOM)", "Idea validation sprints", "Competitive landscape"], color: "from-lime/30 to-emerald-500/10" },
  { n: 2, icon: Target, title: "Business Models & Strategy", weeks: "Month 2", hours: "40 hrs",
    points: ["Business model canvas", "Unit economics", "Pricing strategy", "Moats & positioning"], color: "from-cyan-500/30 to-blue-500/10" },
  { n: 3, icon: Rocket, title: "Building the MVP", weeks: "Month 3", hours: "40 hrs",
    points: ["No-code & AI tooling", "Rapid prototyping", "Customer feedback loops", "Iteration cadence"], color: "from-fuchsia-500/30 to-pink-500/10" },
  { n: 4, icon: Megaphone, title: "Go-To-Market", weeks: "Month 4", hours: "40 hrs",
    points: ["First 100 customers", "Channel strategy", "Sales playbooks", "Growth experiments"], color: "from-orange-500/30 to-amber-500/10" },
  { n: 5, icon: DollarSign, title: "Startup Finance", weeks: "Month 5", hours: "40 hrs",
    points: ["Financial modelling", "Cash flow & runway", "Burn & CAC/LTV", "Investor metrics"], color: "from-violet-500/30 to-purple-500/10" },
  { n: 6, icon: Users, title: "Team, Hiring & Culture", weeks: "Month 6", hours: "40 hrs",
    points: ["Founding team design", "Hiring first 10", "ESOPs & compensation", "Operating rhythms"], color: "from-sky-500/30 to-indigo-500/10" },
  { n: 7, icon: Scale, title: "Legal, Compliance & Ops", weeks: "Month 7", hours: "40 hrs",
    points: ["Company incorporation", "Contracts & IP", "GST & compliance basics", "Operational SOPs"], color: "from-rose-500/30 to-red-500/10" },
  { n: 8, icon: BarChart3, title: "Scaling & Operations", weeks: "Month 8", hours: "40 hrs",
    points: ["Process design", "Dashboards & OKRs", "Supply chain / delivery", "Automation with AI"], color: "from-teal-500/30 to-cyan-500/10" },
  { n: 9, icon: Handshake, title: "Fundraising & Investor Relations", weeks: "Month 9", hours: "40 hrs",
    points: ["Pitch deck craft", "Valuation & term sheets", "Investor pipeline", "Due diligence prep"], color: "from-amber-500/30 to-yellow-500/10" },
  { n: 10, icon: Briefcase, title: "Demo Day & Launch", weeks: "Month 9", hours: "20 hrs",
    points: ["Live pitch to industry experts", "1:1 investor feedback", "Launch plan", "Incubation next steps"], color: "from-orange-500/30 to-red-500/10" },
];

export const Route = createFileRoute("/management/business-entrepreneurship")({
  head: () => ({
    meta: [
      { title: "Business & Entrepreneurship Program — Skill Ai" },
      { name: "description", content: "9-month Business & Entrepreneurship program: strategy, MVP, GTM, finance, fundraising and a live Demo Day pitch." },
      { property: "og:title", content: "Business & Entrepreneurship Program — Skill Ai" },
      { property: "og:description", content: "Build, run and scale a venture with operators, live projects and a Demo Day pitch." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <MultimediaCourseDetail
      eyebrow="Management · Entrepreneurship"
      title="Business & Entrepreneurship"
      tagline="Build, run and scale a real venture — strategy, finance, operations and fundraising taught by operators."
      duration="9 Months"
      schedule="2 hrs/day · 6 days"
      sessions="216 Sessions"
      totalHours="420 Hours"
      level="Beginner → Founder"
      mode="Hybrid + Startup Lab"
      heroImage={heroImg}
      overview="A founder-first program where you build an actual business, not a case study. You'll validate a problem, ship an MVP, acquire paying customers, model your finances and pitch at Demo Day in front of industry experts and investors."
      modules={MODULES}
      tools={["Notion", "Figma", "Excel / Google Sheets", "Stripe / Razorpay", "HubSpot", "Canva", "ChatGPT", "Zapier", "Shopify", "Metabase"]}
      capstones={["Validated Problem Report", "Working MVP", "First Revenue Milestone", "3-Year Financial Model", "Investor Pitch Deck", "Demo Day Pitch"]}
      outcomes={["Launch and run your own venture", "Model unit economics and runway", "Build repeatable GTM motions", "Raise pre-seed / seed capital", "Hire and lead a small team", "Join SKILL AI's incubation network"]}
    />
  ),
});
