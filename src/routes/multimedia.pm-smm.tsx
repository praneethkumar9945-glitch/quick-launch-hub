import { createFileRoute } from "@tanstack/react-router";
import { Megaphone, Target, BarChart3, Search, Users, Sparkles, Zap, TrendingUp, Mail, Briefcase } from "lucide-react";
import { MultimediaCourseDetail, type MMModule } from "@/components/MultimediaCourseDetail";
import heroImg from "@/assets/card-mm-pmsmm.jpg";

const MODULES: MMModule[] = [
  { n: 1, icon: Target, title: "Marketing Foundations & Consumer Psychology", weeks: "Week 1", hours: "12 hrs",
    points: ["Positioning & messaging", "Funnel thinking", "Buyer personas", "Brand vs performance marketing"], color: "from-lime/30 to-emerald-500/10" },
  { n: 2, icon: Sparkles, title: "Content Strategy for Social", weeks: "Week 2", hours: "12 hrs",
    points: ["Content pillars & calendars", "Hook writing", "Short-form video strategy", "Creator collaborations"], color: "from-fuchsia-500/30 to-pink-500/10" },
  { n: 3, icon: Users, title: "Instagram, LinkedIn & YouTube Growth", weeks: "Week 3", hours: "12 hrs",
    points: ["Platform algorithms", "Organic growth loops", "Community management", "Analytics deep-dive"], color: "from-orange-500/30 to-amber-500/10" },
  { n: 4, icon: Megaphone, title: "Meta Ads Mastery", weeks: "Week 4", hours: "12 hrs",
    points: ["Campaign structures", "Creative testing", "Advantage+ campaigns", "Retargeting & lookalikes"], color: "from-cyan-500/30 to-blue-500/10" },
  { n: 5, icon: Search, title: "Google Ads & Search Marketing", weeks: "Week 5", hours: "12 hrs",
    points: ["Search, PMax & YouTube ads", "Keyword strategy", "Bid strategies", "Landing page fit"], color: "from-sky-500/30 to-indigo-500/10" },
  { n: 6, icon: TrendingUp, title: "SEO & Content Marketing", weeks: "Week 6", hours: "12 hrs",
    points: ["On-page & technical SEO", "Keyword research", "Content clusters", "Link building"], color: "from-violet-500/30 to-purple-500/10" },
  { n: 7, icon: Mail, title: "Email, WhatsApp & Lifecycle", weeks: "Week 7", hours: "12 hrs",
    points: ["List building", "Automations & flows", "WhatsApp broadcast strategy", "Retention & LTV"], color: "from-rose-500/30 to-red-500/10" },
  { n: 8, icon: BarChart3, title: "Analytics, GA4 & Attribution", weeks: "Week 8", hours: "12 hrs",
    points: ["GA4 events & funnels", "Meta & Google conversion APIs", "UTM discipline", "Attribution models"], color: "from-amber-500/30 to-yellow-500/10" },
  { n: 9, icon: Zap, title: "AI Tools for Marketers", weeks: "Weeks 9–10", hours: "24 hrs",
    points: ["ChatGPT for copy", "Midjourney for creative", "AI video ads", "Automation with n8n / Zapier"], color: "from-teal-500/30 to-cyan-500/10" },
  { n: 10, icon: Briefcase, title: "Full Campaign Sprint & Career Launch", weeks: "Weeks 11–12", hours: "24 hrs",
    points: ["Live client campaign", "Media plan & reporting", "Freelance & agency prep", "Interview & portfolio"], color: "from-orange-500/30 to-red-500/10" },
];

export const Route = createFileRoute("/multimedia/pm-smm")({
  head: () => ({ meta: [{ title: "Performance Marketing & Social Media Marketing — Skill Ai" }, { name: "description", content: "12-week PM & SMM program: Meta Ads, Google Ads, SEO, GA4, content strategy and AI-powered marketing." }] }),
  component: () => (
    <MultimediaCourseDetail
      eyebrow="Multimedia · Marketing"
      title="Performance Marketing & Social Media Marketing"
      tagline="Build, launch and scale brands online — organic content, paid media, SEO and AI-powered marketing."
      duration="3 Months"
      schedule="2 hrs/day · 6 days"
      sessions="72 Sessions"
      totalHours="144 Hours"
      level="Beginner → Advanced"
      mode="Hybrid + Live Campaigns"
      heroImage={heroImg}
      overview="A modern, hands-on program that combines organic social growth, paid media (Meta and Google), SEO, email/WhatsApp lifecycle and AI-powered marketing tools. You'll run real campaigns for live brands and leave with a full-funnel portfolio."
      modules={MODULES}
      tools={["Meta Ads Manager", "Google Ads", "GA4", "Google Tag Manager", "Ahrefs", "SEMrush", "Klaviyo", "Mailchimp", "Notion", "ChatGPT", "Midjourney", "n8n", "Zapier"]}
      capstones={["Live D2C Brand Campaign", "SaaS Lead-Gen Funnel", "Local Business SEO Playbook", "Creator Growth Case Study", "Full-Funnel Media Plan", "Marketing Portfolio Site"]}
      outcomes={["Run profitable Meta & Google ad campaigns", "Grow social accounts organically", "Rank content with modern SEO", "Build email & WhatsApp automations", "Measure with GA4 and attribution models", "Land roles at agencies, brands or freelance"]}
    />
  ),
});
