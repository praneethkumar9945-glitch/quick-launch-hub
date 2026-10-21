import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Phone, Users, Search, Handshake, BarChart3, Mail, Briefcase, Target, Zap } from "lucide-react";
import { MultimediaCourseDetail, type MMModule } from "@/components/MultimediaCourseDetail";
import heroImg from "@/assets/mg-sales.jpg";

const MODULES: MMModule[] = [
  { n: 1, icon: Target, title: "Sales Foundations & Buyer Psychology", weeks: "Weeks 1–2", hours: "24 hrs",
    points: ["B2B vs B2C motions", "Buyer journey mapping", "ICP & persona building", "Value-based selling"], color: "from-lime/30 to-emerald-500/10" },
  { n: 2, icon: Search, title: "Prospecting & Lead Generation", weeks: "Weeks 3–4", hours: "24 hrs",
    points: ["LinkedIn Sales Navigator", "List building & enrichment", "Cold email sequences", "Social selling"], color: "from-cyan-500/30 to-blue-500/10" },
  { n: 3, icon: Phone, title: "Cold Calling & Outreach", weeks: "Weeks 5–6", hours: "24 hrs",
    points: ["Call scripts & openers", "Objection handling", "Voicemail & follow-up", "Multi-channel cadences"], color: "from-orange-500/30 to-amber-500/10" },
  { n: 4, icon: Users, title: "Discovery & Solution Selling", weeks: "Weeks 7–8", hours: "24 hrs",
    points: ["SPIN & MEDDIC frameworks", "Needs discovery", "Demo storytelling", "Stakeholder mapping"], color: "from-fuchsia-500/30 to-pink-500/10" },
  { n: 5, icon: Handshake, title: "Negotiation & Closing", weeks: "Weeks 9–10", hours: "24 hrs",
    points: ["Pricing conversations", "Concession strategy", "Contract & procurement", "Closing techniques"], color: "from-violet-500/30 to-purple-500/10" },
  { n: 6, icon: Briefcase, title: "Key Account Management", weeks: "Weeks 11–12", hours: "24 hrs",
    points: ["Account planning", "Upsell & cross-sell", "QBRs & retention", "Churn prevention"], color: "from-sky-500/30 to-indigo-500/10" },
  { n: 7, icon: Mail, title: "CRM & Sales Operations", weeks: "Weeks 13–14", hours: "24 hrs",
    points: ["HubSpot / Salesforce", "Pipeline hygiene", "Forecasting", "Sales dashboards"], color: "from-rose-500/30 to-red-500/10" },
  { n: 8, icon: Zap, title: "AI for Sales", weeks: "Weeks 15–16", hours: "24 hrs",
    points: ["AI research & personalisation", "Call recording insights", "Automated follow-ups", "AI proposal drafting"], color: "from-teal-500/30 to-cyan-500/10" },
  { n: 9, icon: TrendingUp, title: "Partnerships & Business Development", weeks: "Weeks 17–18", hours: "24 hrs",
    points: ["Channel partnerships", "Alliance deals", "Revenue-share models", "Market expansion"], color: "from-amber-500/30 to-yellow-500/10" },
  { n: 10, icon: BarChart3, title: "Live Sales Sprint & Career Launch", weeks: "Weeks 19–20", hours: "24 hrs",
    points: ["Real pipeline with partner brands", "Closed-won targets", "Mock interviews", "Portfolio of deals"], color: "from-orange-500/30 to-red-500/10" },
];

export const Route = createFileRoute("/management/sales-business-development")({
  head: () => ({
    meta: [
      { title: "Sales & Business Development Program — Skill Ai" },
      { name: "description", content: "5-month sales program: prospecting, cold outreach, discovery, negotiation, CRM, AI selling and key account management." },
      { property: "og:title", content: "Sales & Business Development Program — Skill Ai" },
      { property: "og:description", content: "Learn B2B and B2C selling with a live pipeline and real closed deals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <MultimediaCourseDetail
      eyebrow="Management · Revenue"
      title="Sales & Business Development"
      tagline="Master B2B and B2C selling — pipeline, discovery, negotiation and key accounts, with real deals on the board."
      duration="5 Months"
      schedule="2 hrs/day · 6 days"
      sessions="120 Sessions"
      totalHours="240 Hours"
      level="Beginner → Advanced"
      mode="Hybrid + Live Pipeline"
      heroImage={heroImg}
      overview="A hands-on revenue program that puts you on a live pipeline from week one. You'll prospect, call, demo, negotiate and close real opportunities for partner companies while mastering modern CRM and AI-assisted selling."
      modules={MODULES}
      tools={["HubSpot", "Salesforce", "LinkedIn Sales Navigator", "Apollo", "Lusha", "Gong-style call tools", "Notion", "ChatGPT", "Google Sheets", "Slack"]}
      capstones={["ICP & Territory Plan", "Cold Outreach Sequence", "Live Discovery Calls", "Negotiated Deal Simulation", "Key Account Plan", "Closed-Won Deal Portfolio"]}
      outcomes={["Build and run a healthy pipeline", "Run confident discovery and demos", "Negotiate and close deals", "Manage and grow key accounts", "Forecast accurately in a CRM", "Land SDR/BDR/AE roles at startups & enterprises"]}
    />
  ),
});
