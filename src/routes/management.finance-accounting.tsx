import { createFileRoute } from "@tanstack/react-router";
import { DollarSign, BookOpen, Calculator, Scale, BarChart3, TrendingUp, Landmark, Zap, ShieldCheck, Briefcase } from "lucide-react";
import { MultimediaCourseDetail, type MMModule } from "@/components/MultimediaCourseDetail";
import heroImg from "@/assets/mg-fin.jpg";

const MODULES: MMModule[] = [
  { n: 1, icon: BookOpen, title: "Accounting Fundamentals", weeks: "Month 1", hours: "40 hrs",
    points: ["Double-entry basics", "Journals & ledgers", "Trial balance", "Chart of accounts"], color: "from-lime/30 to-emerald-500/10" },
  { n: 2, icon: Calculator, title: "Financial Statements", weeks: "Month 1", hours: "40 hrs",
    points: ["P&L, balance sheet, cash flow", "Statement linkages", "Ratio analysis", "Closing the books"], color: "from-cyan-500/30 to-blue-500/10" },
  { n: 3, icon: Zap, title: "Tally, Zoho & Excel Mastery", weeks: "Month 2", hours: "40 hrs",
    points: ["Tally Prime workflows", "Zoho Books", "Advanced Excel & pivot tables", "Automated reporting"], color: "from-fuchsia-500/30 to-pink-500/10" },
  { n: 4, icon: Scale, title: "GST & Indirect Taxation", weeks: "Month 3", hours: "40 hrs",
    points: ["GST registration & returns", "Input tax credit", "E-invoicing & e-way bills", "Compliance calendar"], color: "from-orange-500/30 to-amber-500/10" },
  { n: 5, icon: Landmark, title: "Income Tax & TDS", weeks: "Month 3", hours: "40 hrs",
    points: ["Income heads & slabs", "TDS provisions", "Advance tax", "ITR filing"], color: "from-sky-500/30 to-indigo-500/10" },
  { n: 6, icon: ShieldCheck, title: "Audit, Controls & Compliance", weeks: "Month 4", hours: "40 hrs",
    points: ["Internal controls", "Audit procedures", "ROC & company compliance", "Fraud red flags"], color: "from-rose-500/30 to-red-500/10" },
  { n: 7, icon: BarChart3, title: "FP&A and Budgeting", weeks: "Month 5", hours: "40 hrs",
    points: ["Budgets & forecasts", "Variance analysis", "Cash flow planning", "Management reporting"], color: "from-violet-500/30 to-purple-500/10" },
  { n: 8, icon: TrendingUp, title: "Valuation & Corporate Finance", weeks: "Month 5", hours: "40 hrs",
    points: ["DCF & comparables", "Cost of capital", "Fundraising structures", "M&A basics"], color: "from-amber-500/30 to-yellow-500/10" },
  { n: 9, icon: DollarSign, title: "Fintech & AI in Finance", weeks: "Month 6", hours: "40 hrs",
    points: ["Payments & UPI rails", "Automated bookkeeping", "AI for reconciliation", "Finance dashboards"], color: "from-teal-500/30 to-cyan-500/10" },
  { n: 10, icon: Briefcase, title: "Live Books Project & Career Launch", weeks: "Month 6", hours: "20 hrs",
    points: ["Real client bookkeeping", "Full compliance cycle", "Interview & case prep", "Finance portfolio"], color: "from-orange-500/30 to-red-500/10" },
];

export const Route = createFileRoute("/management/finance-accounting")({
  head: () => ({
    meta: [
      { title: "Finance & Accounting Program — Skill Ai" },
      { name: "description", content: "6-month finance program: accounting, Tally & Zoho, GST, income tax, audit, FP&A, valuation and AI-assisted finance." },
      { property: "og:title", content: "Finance & Accounting Program — Skill Ai" },
      { property: "og:description", content: "Modern finance skills — books, taxation, FP&A and valuation with live client work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <MultimediaCourseDetail
      eyebrow="Management · Finance"
      title="Finance & Accounting"
      tagline="Modern finance — books, taxation, fintech, valuation and FP&A, taught on real company data."
      duration="6 Months"
      schedule="2 hrs/day · 6 days"
      sessions="144 Sessions"
      totalHours="288 Hours"
      level="Beginner → Job-ready"
      mode="Hybrid + Live Client Books"
      heroImage={heroImg}
      overview="A practitioner's finance program. You'll maintain real books, file real compliance cycles, build forecasting models and value businesses — using Tally, Zoho, Excel and AI-assisted finance tooling."
      modules={MODULES}
      tools={["Tally Prime", "Zoho Books", "QuickBooks", "Advanced Excel", "Google Sheets", "GST Portal", "Power BI", "ChatGPT", "Razorpay", "Notion"]}
      capstones={["Full Bookkeeping Cycle", "GST Return Filing Set", "3-Statement Financial Model", "Budget vs Actual Report", "DCF Valuation", "Client Finance Dashboard"]}
      outcomes={["Maintain company books end-to-end", "File GST, TDS and income tax returns", "Build forecasts and FP&A reports", "Value a business with DCF & comps", "Automate finance workflows", "Land accountant, analyst or FP&A roles"]}
    />
  ),
});
