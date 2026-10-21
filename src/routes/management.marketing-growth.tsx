import { createFileRoute } from "@tanstack/react-router";
import { Target, Sparkles, Megaphone, Search, TrendingUp, Mail, BarChart3, Zap, Users, Briefcase } from "lucide-react";
import { MultimediaCourseDetail, type MMModule } from "@/components/MultimediaCourseDetail";
import heroImg from "@/assets/mg-mkt.jpg";

const MODULES: MMModule[] = [
  { n: 1, icon: Target, title: "Marketing Strategy & Positioning", weeks: "Weeks 1–2", hours: "24 hrs",
    points: ["Positioning & messaging", "Category design", "Customer research", "Marketing plans"], color: "from-lime/30 to-emerald-500/10" },
  { n: 2, icon: Sparkles, title: "Brand Building", weeks: "Weeks 3–4", hours: "24 hrs",
    points: ["Brand identity & voice", "Storytelling frameworks", "Creative briefs", "Brand campaigns"], color: "from-fuchsia-500/30 to-pink-500/10" },
  { n: 3, icon: Users, title: "Content & Social Growth", weeks: "Weeks 5–6", hours: "24 hrs",
    points: ["Content pillars & calendars", "Short-form video", "Community building", "Creator partnerships"], color: "from-orange-500/30 to-amber-500/10" },
  { n: 4, icon: Megaphone, title: "Performance Marketing — Meta", weeks: "Weeks 7–8", hours: "24 hrs",
    points: ["Campaign structures", "Creative testing", "Retargeting & lookalikes", "Budget scaling"], color: "from-cyan-500/30 to-blue-500/10" },
  { n: 5, icon: Search, title: "Google Ads & Search", weeks: "Weeks 9–10", hours: "24 hrs",
    points: ["Search & PMax", "Keyword strategy", "Bidding & budgets", "Landing page fit"], color: "from-sky-500/30 to-indigo-500/10" },
  { n: 6, icon: TrendingUp, title: "SEO & Organic Acquisition", weeks: "Weeks 11–12", hours: "24 hrs",
    points: ["Technical & on-page SEO", "Keyword clusters", "Content engines", "Link building"], color: "from-violet-500/30 to-purple-500/10" },
  { n: 7, icon: Mail, title: "Lifecycle, Email & Retention", weeks: "Weeks 13–14", hours: "24 hrs",
    points: ["Automations & flows", "WhatsApp marketing", "Cohort retention", "LTV expansion"], color: "from-rose-500/30 to-red-500/10" },
  { n: 8, icon: BarChart3, title: "Analytics, GA4 & Attribution", weeks: "Weeks 15–16", hours: "24 hrs",
    points: ["GA4 events & funnels", "Dashboards", "UTM discipline", "Attribution models"], color: "from-amber-500/30 to-yellow-500/10" },
  { n: 9, icon: Zap, title: "Growth Experiments & AI Marketing", weeks: "Weeks 17–18", hours: "24 hrs",
    points: ["Experiment design & CRO", "Growth loops", "AI copy & creative", "Marketing automation"], color: "from-teal-500/30 to-cyan-500/10" },
  { n: 10, icon: Briefcase, title: "Live Campaign & Career Launch", weeks: "Weeks 19–20", hours: "24 hrs",
    points: ["Full-funnel client campaign", "Media plan & reporting", "Portfolio build", "Interview prep"], color: "from-orange-500/30 to-red-500/10" },
];

export const Route = createFileRoute("/management/marketing-growth")({
  head: () => ({
    meta: [
      { title: "Marketing & Growth Program — Skill Ai" },
      { name: "description", content: "5-month marketing program: brand, performance marketing, SEO, lifecycle, analytics and AI-powered growth experiments." },
      { property: "og:title", content: "Marketing & Growth Program — Skill Ai" },
      { property: "og:description", content: "Brand, performance, SEO and growth — with real campaigns for partner brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <MultimediaCourseDetail
      eyebrow="Management · Growth"
      title="Marketing & Growth"
      tagline="Performance marketing, brand, content and growth experiments — powered by modern AI tooling."
      duration="5 Months"
      schedule="2 hrs/day · 6 days"
      sessions="120 Sessions"
      totalHours="240 Hours"
      level="Beginner → Advanced"
      mode="Hybrid + Live Campaigns"
      heroImage={heroImg}
      overview="A full-funnel marketing program covering brand and demand. You'll run paid campaigns with real budgets, build SEO and content engines, wire up analytics and design growth experiments for live partner brands."
      modules={MODULES}
      tools={["Meta Ads Manager", "Google Ads", "GA4", "Google Tag Manager", "Ahrefs", "SEMrush", "Klaviyo", "HubSpot", "Figma", "Canva", "ChatGPT", "Midjourney"]}
      capstones={["Brand Positioning Doc", "Paid Media Plan", "SEO Content Engine", "Lifecycle Automation Build", "GA4 Growth Dashboard", "Full-Funnel Client Campaign"]}
      outcomes={["Run profitable paid campaigns", "Build a brand people remember", "Rank and scale organic traffic", "Design and read growth experiments", "Report with GA4 and attribution", "Land growth/marketing roles or freelance"]}
    />
  ),
});
