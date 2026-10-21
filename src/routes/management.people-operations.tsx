import { createFileRoute } from "@tanstack/react-router";
import { Users, UserPlus, HeartHandshake, Scale, BarChart3, Sparkles, Zap, Briefcase } from "lucide-react";
import { MultimediaCourseDetail, type MMModule } from "@/components/MultimediaCourseDetail";
import heroImg from "@/assets/mg-ppl.jpg";

const MODULES: MMModule[] = [
  { n: 1, icon: Users, title: "People Function Foundations", weeks: "Weeks 1–2", hours: "24 hrs",
    points: ["HR vs People Ops", "Org design basics", "Employee lifecycle", "HR tech stack"], color: "from-lime/30 to-emerald-500/10" },
  { n: 2, icon: UserPlus, title: "Talent Acquisition", weeks: "Weeks 3–5", hours: "36 hrs",
    points: ["Role scorecards", "Sourcing & outreach", "Structured interviews", "Offer & closing"], color: "from-cyan-500/30 to-blue-500/10" },
  { n: 3, icon: Sparkles, title: "Onboarding & Employer Brand", weeks: "Weeks 6–7", hours: "24 hrs",
    points: ["30-60-90 onboarding", "Careers page & EVP", "Candidate experience", "Referral programs"], color: "from-fuchsia-500/30 to-pink-500/10" },
  { n: 4, icon: HeartHandshake, title: "Culture & Engagement", weeks: "Weeks 8–9", hours: "24 hrs",
    points: ["Values into rituals", "Engagement surveys", "Feedback culture", "Conflict resolution"], color: "from-orange-500/30 to-amber-500/10" },
  { n: 5, icon: BarChart3, title: "Performance & Compensation", weeks: "Weeks 10–11", hours: "24 hrs",
    points: ["OKRs & reviews", "Salary benchmarking", "ESOPs & incentives", "Promotion frameworks"], color: "from-violet-500/30 to-purple-500/10" },
  { n: 6, icon: Scale, title: "HR Compliance & Payroll", weeks: "Weeks 12–13", hours: "24 hrs",
    points: ["Labour law basics", "PF, ESI & gratuity", "Payroll cycles", "Policies & handbooks"], color: "from-rose-500/30 to-red-500/10" },
  { n: 7, icon: Zap, title: "People Analytics & AI Ops", weeks: "Weeks 14–15", hours: "24 hrs",
    points: ["Attrition & hiring metrics", "HR dashboards", "AI screening & workflows", "Automation with HRIS"], color: "from-teal-500/30 to-cyan-500/10" },
  { n: 8, icon: Briefcase, title: "Live People Project & Career Launch", weeks: "Weeks 16", hours: "20 hrs",
    points: ["Run a real hiring drive", "Build a policy handbook", "HR interview prep", "People Ops portfolio"], color: "from-orange-500/30 to-red-500/10" },
];

export const Route = createFileRoute("/management/people-operations")({
  head: () => ({
    meta: [
      { title: "People & Operations Program — Skill Ai" },
      { name: "description", content: "4-month People & Operations program: hiring, onboarding, culture, performance, payroll compliance and people analytics." },
      { property: "og:title", content: "People & Operations Program — Skill Ai" },
      { property: "og:description", content: "HR, talent ops and culture for fast-growing companies, with a live hiring drive." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <MultimediaCourseDetail
      eyebrow="Management · People"
      title="People & Operations"
      tagline="HR, talent ops, culture and the systems that let fast-growing teams scale without breaking."
      duration="4 Months"
      schedule="2 hrs/day · 6 days"
      sessions="96 Sessions"
      totalHours="200 Hours"
      level="Beginner → Job-ready"
      mode="Hybrid + Live Hiring Drive"
      heroImage={heroImg}
      overview="A practical People Ops program built around real hiring and real policy work. You'll source and interview candidates, design onboarding, run performance cycles and build people dashboards for partner startups."
      modules={MODULES}
      tools={["LinkedIn Recruiter", "Naukri", "Keka", "Zoho People", "Greenhouse-style ATS", "Google Workspace", "Notion", "Excel", "ChatGPT", "Slack"]}
      capstones={["Role Scorecard & JD Set", "Live Hiring Drive", "Onboarding Playbook", "Performance Review Cycle", "Employee Handbook", "People Analytics Dashboard"]}
      outcomes={["Run end-to-end recruitment", "Design onboarding and culture rituals", "Operate performance and comp cycles", "Stay compliant on payroll and labour law", "Report people metrics that matter", "Land HR / People Ops roles at startups"]}
    />
  ),
});
