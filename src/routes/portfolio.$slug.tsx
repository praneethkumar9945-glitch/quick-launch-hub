import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Mail, Award, Sparkles, Target, Briefcase, GraduationCap, Star } from "lucide-react";
import skillAiLogo from "@/assets/skill-ai-logo.png";

import manyaPhoto from "@/assets/bg/manya.png.asset.json";
import meghaPhoto from "@/assets/bg/megha.png.asset.json";
import priyankaAsset from "@/assets/bg/priyanka.png.asset.json";
const priyankaPhoto = priyankaAsset.url;
import sharanyaAsset from "@/assets/bg/sharanya.png.asset.json";
const sharanyaPhoto = sharanyaAsset.url;
import suprabhaAsset from "@/assets/bg/suprabha.png.asset.json";
const suprabhaPhoto = suprabhaAsset.url;
import dishaPhoto from "@/assets/bg/disha.png.asset.json";
import anwithaPhoto from "@/assets/bg/anwitha.png.asset.json";

type Portfolio = {
  name: string;
  role: string;
  photo: string;
  tagline: string;
  expertise: string[];
  skills: string[];
  skillLevels?: { name: string; value: number }[];
  tools?: string[];

  talents: string[];
  qualifications: { title: string; sub: string }[];
  about: string;
  vision: string;
  currentRole: string;
  standOut: string[];
};

const portfolios: Record<string, Portfolio> = {
  manya: {
    name: "Manya M",
    role: "Project Lead",
    photo: manyaPhoto.url,
    tagline: "Leading with purpose. Building with research.",
    expertise: [
      "Product Research",
      "LMS Research",
      "Requirements Gathering",
      "Project Documentation",
      "Artificial Intelligence",
      "Data Analytics",
    ],
    skills: [
      "Market & Competitor Research",
      "Requirement Gathering",
      "Data Analysis & Reporting",
      "Presentation & Documentation",
      "Leadership & Team Coordination",
      "Communication & Public Speaking",
      "Python, Java, C",
      "HTML, CSS, SQL",
    ],
    skillLevels: [
      { name: "Market & Competitor Research", value: 92 },
      { name: "Requirement Gathering", value: 90 },
      { name: "Project Documentation", value: 90 },
      { name: "Leadership & Team Coordination", value: 88 },
      { name: "Data Analysis & Reporting", value: 86 },
      { name: "Communication & Public Speaking", value: 85 },
      { name: "Python / Java / C", value: 80 },
    ],
    tools: [
      "Python", "Java", "C", "SQL", "HTML", "CSS",
      "MS Excel", "Power BI", "Google Workspace", "Notion", "Jira", "ChatGPT",
    ],
    talents: [
      "Leadership & organization",
      "Analytical problem-solving",
      "Presentation abilities",
      "Research-driven decisions",
      "Fast technology learner",
      "Event & team management",
    ],
    qualifications: [
      { title: "BCA — Final Year Graduate", sub: "Sridevi College of Information Science, Mangalore University" },
      { title: "AI, ML & Big Data Analytics Certification", sub: "Pursued alongside BCA" },
    ],
    about:
      "I am a passionate Project Leader with strong leadership, communication, and problem solving skills. I enjoy collaborating with teams, managing projects, and turning ideas into practical solutions while continuously learning and growing as a professional.",
    vision:
      "My vision is to lead with purpose, inspire teamwork, and contribute innovative ideas that drive successful projects and create long-term value for the company while growing alongside the organization.",
    currentRole:
      "Project Lead — leading cross-functional teams through research, requirements gathering, and project documentation to deliver practical, data-informed solutions.",
    standOut: [
      "Research-driven mindset backed by hands-on AI, ML & Big Data Analytics training",
      "Bridges technical skills (Python, Java, C, SQL, HTML/CSS) with business and product research",
      "Turns complex requirements into clear, actionable documentation",
      "Natural leader who enjoys organizing teams and events toward a shared goal",
    ],
  },
  megha: {
    name: "Megha Shree",
    role: "Digital Marketing Executive",
    photo: meghaPhoto.url,
    tagline: "SEO-first growth. Data-driven campaigns. AI-accelerated marketing.",
    expertise: [
      "Search Engine Optimization (SEO)",
      "Google Ads & Paid Search",
      "Meta Ads & Paid Social",
      "Social Media Marketing",
      "Content Strategy & Creative Design",
      "Video Editing & Motion Content",
      "AI-Powered Marketing",
    ],
    skills: [
      "Search Engine Optimization (SEO)",
      "Canva / Design Execution",
      "Social Media Marketing",
      "Google Ads",
      "Content Marketing",
      "Meta Ads",
      "AI Tools (ChatGPT, Claude, Gemini)",
      "Google Analytics & Search Console",
    ],
    skillLevels: [
      { name: "Search Engine Optimization (SEO)", value: 92 },
      { name: "Canva / Design Execution", value: 92 },
      { name: "Social Media Marketing", value: 90 },
      { name: "Google Ads", value: 88 },
      { name: "Content Marketing", value: 87 },
      { name: "Meta Ads", value: 85 },
      { name: "AI Tools (ChatGPT, Claude, Gemini)", value: 85 },
    ],
    tools: [
      "Google Ads", "Google Analytics", "Google Search Console", "Meta Business Suite",
      "Canva", "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro",
      "CapCut", "ChatGPT", "Claude", "Gemini",
    ],

    talents: [
      "Keyword research & on-page optimisation",
      "Technical SEO & Core Web Vitals",
      "Campaign testing & performance analysis",
      "Digital branding & creative execution",
      "Video editing (CapCut, Premiere Pro)",
      "Mentoring interns on live projects",
    ],
    qualifications: [
      { title: "Bachelor of Commerce (B.Com)", sub: "Government First Grade College for Women, Balmatta, Mangalore" },
      { title: "Professional Diploma in Digital Marketing (PDM)", sub: "Sree Sankaracharya Institute of Advanced Skill, Mangalore — SEO, paid media, content strategy" },
    ],
    about:
      "Meghashree is a Digital Marketing Executive with a strong SEO-first approach to growth — she treats organic search as the foundation that every other channel builds on, structuring keyword research, on-page optimisation, technical SEO, and content strategy around long-term, sustainable visibility rather than short-term ranking spikes. Around that SEO core, she runs Google Ads and Meta Ads campaigns engineered to convert search and social intent into qualified leads, and produces the social and creative output that keeps a brand consistent across every touchpoint. She has folded AI tools — ChatGPT, Claude, and Gemini — into her SEO and content workflow to accelerate research, ideation, copywriting, and campaign analysis, without losing the strategic judgement that comes from hands-on marketing experience. Beyond her own campaigns, she mentors interns through live SEO and marketing projects rather than theoretical exercises.",
    vision:
      "To create innovative digital marketing strategies that strengthen brand presence, drive business growth, and inspire aspiring digital marketers through practical learning, creativity, and continuous innovation.",
    currentRole:
      "Digital Marketing Executive — owning SEO end-to-end (keyword strategy, on-page, technical and content SEO), planning and optimising Google Ads for lead generation, managing Meta Ads across Facebook and Instagram, developing social media content strategies, designing campaign creatives in Canva, building brand awareness across paid and organic channels, mentoring internship students on live projects, and continuously analysing campaign performance data.",
    standOut: [
      "SEO as a core specialisation — keyword, on-page, technical, content, local, and analytics",
      "Full-funnel marketer across paid search, paid social, organic, and creative",
      "Tooling depth: Google Ads, Analytics, Search Console, Meta Business Suite, Canva, Photoshop, Illustrator, Premiere Pro, CapCut",
      "Applied AI fluency with ChatGPT, Claude, and Gemini across research, copy, and analysis",
      "Mentors interns through real, live marketing projects",
    ],

  },
  priyanka: {
    name: "Priyanka K Poojary",
    role: "AI EXPERT & TRAINER",
    photo: priyankaPhoto,
    tagline: "Empowering minds. Building skills. Driving futures.",
    expertise: [
      "Full-Stack Web Development (MERN)",
      "Data Science & Analytics",
      "Database Management",
      "Machine Learning",
      "Data Visualization",
      "Teaching & Mentoring",
    ],
    skills: [
      "Python",
      "React.js & Node.js",
      "MongoDB & MySQL",
      "Power BI & Tableau",
      "Excel & Exploratory Data Analysis",
      "HTML & CSS",
      "Software Engineering & QA",
      "Business Process Understanding",
    ],
    skillLevels: [
      { name: "Python", value: 92 },
      { name: "React.js & Node.js", value: 90 },
      { name: "MongoDB & MySQL", value: 88 },
      { name: "Power BI & Tableau", value: 86 },
      { name: "Exploratory Data Analysis", value: 85 },
      { name: "HTML & CSS", value: 90 },
      { name: "Teaching & Mentoring", value: 92 },
    ],
    tools: [
      "Python", "React.js", "Node.js", "Express", "MongoDB", "MySQL",
      "Power BI", "Tableau", "Excel", "Git & GitHub", "VS Code", "AWS",
    ],
    talents: [
      "Clear communication & presentation",
      "Leadership & team collaboration",
      "Problem solving",
      "Time management",
      "Quick learner",
      "Teaching complex topics simply",
    ],
    qualifications: [
      { title: "Master of Computer Applications (MCA)", sub: "Shree Devi Institute of Technology" },
      { title: "Bachelor of Computer Applications (BCA)", sub: "St. Aloysius (Deemed to be University)" },
      { title: "AWS Cloud Practitioner Essentials", sub: "Certification" },
      { title: "Data Analytics & Visualization Job Simulation", sub: "Certification" },
    ],
    about:
      "MCA graduate with hands-on experience in Full-Stack Web Development (MERN Stack), Data Analysis, and Database Management. Strong foundation in software engineering, analytics, quality assurance, and business process understanding — currently focused on teaching, mentoring, and turning real-world problems into working products.",
    vision:
      "To empower individuals with industry-relevant skills and help them achieve their career goals, while continuously growing as a developer, analyst, and mentor.",
    currentRole:
      "AI EXPERT & TRAINER — building MERN applications, analyzing data with Python/SQL/Power BI, and mentoring students on real-world projects.",
    standOut: [
      "20+ projects guided & delivered end-to-end",
      "100+ students trained and empowered in modern tech",
      "Comfortable across the full stack: frontend, backend, database, analytics",
      "Committed to practical knowledge, innovation, and learner-first teaching",
    ],
  },
  sharanya: {
    name: "Sharanya V K",
    role: "Human Resources & Management Officer",
    photo: sharanyaPhoto,
    tagline: "Building people. Developing organizations. Driving performance.",
    expertise: [
      "HR Management",
      "Recruitment & Selection",
      "Payroll Management",
      "Employee Documentation",
      "Attendance & Records",
      "Administrative Coordination",
    ],
    skills: [
      "HR Management",
      "Recruitment & Hiring",
      "Payroll Processing",
      "Employee Documentation",
      "MS Excel & MS Word",
      "Power BI",
      "Adobe Photoshop & Illustrator",
      "HR Reporting",
    ],
    skillLevels: [
      { name: "HR Management", value: 92 },
      { name: "Recruitment & Hiring", value: 90 },
      { name: "Payroll Processing", value: 88 },
      { name: "Employee Documentation", value: 90 },
      { name: "MS Excel & MS Word", value: 88 },
      { name: "Power BI Reporting", value: 80 },
      { name: "Photoshop & Illustrator", value: 78 },
    ],
    tools: [
      "MS Excel", "MS Word", "Power BI", "Google Workspace", "HRMS Portals",
      "Payroll Software", "Adobe Photoshop", "Adobe Illustrator", "Canva", "LinkedIn Recruiter",
    ],
    talents: [
      "Strong communication",
      "Team leadership",
      "Decision-making",
      "Creativity",
      "Problem-solving under pressure",
      "Quick learner with initiative",
    ],
    qualifications: [
      { title: "Master of Arts in Economics", sub: "Kannur University" },
      { title: "Bachelor of Arts in Economics", sub: "Kannur University" },
      { title: "Diploma in Digital Marketing & Graphic Design", sub: "GTEC Education" },
    ],
    about:
      "I am a Human Resources and Management Officer passionate about creating efficient HR systems that enhance employee performance and organizational growth. With practical experience in recruitment, payroll processing, HR documentation, attendance, and administrative coordination, I focus on delivering structured HR operations that support business objectives.",
    vision:
      "To build a successful and rewarding career in Human Resources and Management by continuously developing my professional skills and contributing to effective HR practices, employee development, and organizational growth.",
    currentRole:
      "HR & Management Officer — handling recruitment, payroll, employee documentation, attendance, and day-to-day HR operations while supporting leadership with reporting and coordination.",
    standOut: [
      "3+ years of learning and HR experience",
      "15+ HR documents & templates created",
      "100+ employee records managed accurately",
      "Combines HR ops with design tools (Photoshop, Illustrator) for branded internal comms",
    ],
  },
  suprabha: {
    name: "Suprabha Y",
    role: "CRM Executive",
    photo: suprabhaPhoto,
    tagline: "Building relationships. Creating trust. Driving admissions.",
    expertise: [
      "Customer Relationship Management",
      "Student Counseling",
      "Lead Management",
      "Admissions Support",
      "Customer Handling",
      "Follow-up & Coordination",
    ],
    skills: [
      "Communication",
      "CRM Management",
      "Student Counseling",
      "Customer Handling",
      "Teamwork",
      "Problem Solving",
      "Negotiation",
      "Record Keeping",
    ],
    skillLevels: [
      { name: "Communication", value: 94 },
      { name: "CRM Management", value: 90 },
      { name: "Student Counseling", value: 92 },
      { name: "Customer Handling", value: 90 },
      { name: "Negotiation", value: 85 },
      { name: "Record Keeping", value: 88 },
      { name: "Teamwork", value: 90 },
    ],
    tools: [
      "CRM Software", "MS Excel", "Google Sheets", "WhatsApp Business",
      "Email Campaigns", "Calling Systems", "Google Forms", "Canva",
    ],
    talents: [
      "Empathy & active listening",
      "Time management",
      "Relationship building",
      "Trust development",
      "Quick learner",
      "Positive, service-first attitude",
    ],
    qualifications: [
      { title: "Bachelor's Degree in English", sub: "Undergraduate" },
      { title: "CRM & Counseling — On-the-job Training", sub: "Sree Sankaracharya Institution" },
    ],
    about:
      "I am Suprabha Y, a passionate CRM Executive with a Bachelor's degree in English. Currently working at Sree Sankaracharya Institution, I handle student enquiries, maintain CRM records, provide career counseling, manage follow-ups, and support the complete admission process.",
    vision:
      "To become a trusted CRM and counseling professional who builds long-term customer relationships and drives organizational success through empathy, communication, and consistent service excellence.",
    currentRole:
      "CRM Executive at Sree Sankaracharya Institution — handling student enquiries, maintaining CRM records, providing career counseling, and supporting the end-to-end admission process.",
    standOut: [
      "100+ student enquiries handled professionally",
      "50+ leads managed effectively through the CRM",
      "95% customer satisfaction across counseling interactions",
      "Coordinates smoothly across internal departments for admissions",
    ],
  },
  disha: {
    name: "Disha",
    role: "Multimedia Trainer",
    photo: dishaPhoto.url,
    tagline: "Inspiring creativity. Building careers.",
    expertise: [
      "Graphic Design",
      "Video Editing",
      "Motion Graphics",
      "Digital Marketing",
      "Social Media Management",
      "Content Creation",
    ],
    skills: [
      "Graphic Design",
      "Video Editing",
      "Motion Graphics",
      "Digital Marketing",
      "Social Media Management",
      "Content Creation",
      "Presentation & Communication",
    ],
    skillLevels: [
      { name: "Graphic Design", value: 92 },
      { name: "Video Editing", value: 90 },
      { name: "Motion Graphics", value: 86 },
      { name: "Digital Marketing", value: 85 },
      { name: "Social Media Management", value: 88 },
      { name: "Content Creation", value: 90 },
      { name: "Presentation & Communication", value: 92 },
    ],
    tools: [
      "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "After Effects",
      "Canva", "CapCut", "Figma", "Meta Business Suite", "ChatGPT",
    ],
    talents: [
      "Creative thinker",
      "Passionate trainer",
      "Student-centric approach",
      "Results driven",
      "Conceptual & practical teaching",
      "Hands-on project mentoring",
    ],
    qualifications: [
      { title: "BSc in Computer Science and Mathematics", sub: "Undergraduate" },
      { title: "Certified Digital Marketing Course", sub: "Certification" },
    ],
    about:
      "Creative Multimedia Trainer passionate about designing, teaching, and inspiring future creatives. Dedicated to delivering industry-relevant training and empowering students with practical skills and creative confidence.",
    vision:
      "To empower minds to turn creativity into careers by combining creative thinking, hands-on training, and modern digital skills.",
    currentRole:
      "Multimedia Trainer — training students in industry-relevant multimedia skills, designing creative visuals, producing videos and motion graphics, and guiding learners on digital marketing tools and strategies.",
    standOut: [
      "Blends design, video, and marketing into one practical curriculum",
      "Student-first, project-based teaching approach",
      "Bridges creative craft with digital marketing outcomes",
      "Focused on real career growth, not just tools training",
    ],
  },
  anwitha: {
    name: "Anwitha",
    role: "Multimedia Trainer",
    photo: anwithaPhoto.url,
    tagline: "Teaching design that tells a story.",
    expertise: [
      "Graphic Design",
      "Video Editing",
      "Motion Graphics",
      "Visual Storytelling",
      "Content Creation",
      "Social Media Creatives",
    ],
    skills: [
      "Adobe Photoshop & Illustrator",
      "Premiere Pro & After Effects",
      "Branding & Layout Design",
      "Short-form Video Production",
      "Creative Direction",
      "Classroom Training & Mentoring",
      "Presentation & Communication",
    ],
    skillLevels: [
      { name: "Adobe Photoshop & Illustrator", value: 92 },
      { name: "Premiere Pro & After Effects", value: 88 },
      { name: "Branding & Layout Design", value: 90 },
      { name: "Short-form Video Production", value: 88 },
      { name: "Creative Direction", value: 85 },
      { name: "Classroom Training & Mentoring", value: 90 },
    ],
    tools: [
      "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "After Effects",
      "Figma", "Canva", "CapCut", "Blender", "ChatGPT",
    ],
    talents: [
      "Strong visual sense",
      "Patient, hands-on trainer",
      "Detail-oriented editor",
      "Fast tool learner",
      "Collaborative team player",
      "Deadline-driven delivery",
    ],
    qualifications: [
      { title: "Degree in Multimedia / Design", sub: "Undergraduate" },
      { title: "Certified Multimedia & Design Training", sub: "Certification" },
    ],
    about:
      "Multimedia Trainer with a passion for design, editing, and visual storytelling. I help students build a strong creative foundation and translate ideas into polished, industry-ready work.",
    vision:
      "To nurture confident creators who can take an idea from concept to a finished, professional-grade visual product.",
    currentRole:
      "Multimedia Trainer — teaching graphic design, video editing, and motion graphics through practical, project-based sessions.",
    standOut: [
      "Project-first teaching with real client-style briefs",
      "Comfortable across both design and video pipelines",
      "Strong eye for composition, colour, and typography",
      "Mentors students through portfolio building",
    ],
  },
};


export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const p = portfolios[params.slug];
    if (!p) throw notFound();
    return { portfolio: p };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Portfolio not found — SKILL AI" }, { name: "robots", content: "noindex" }] };
    }
    const { portfolio } = loaderData;
    const title = `${portfolio.name} — ${portfolio.role} | SKILL AI`;
    const desc = `Professional portfolio of ${portfolio.name}, ${portfolio.role} at SKILL AI.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Portfolio not found</h1>
        <Link to="/" className="mt-4 inline-block text-lime underline">Back to home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <button onClick={reset} className="mt-4 rounded-full bg-lime px-5 py-2 font-semibold text-black">Retry</button>
      </div>
    </div>
  ),
  component: PortfolioPage,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in-view"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function PortfolioPage() {
  const { portfolio: p } = Route.useLoaderData();
  useReveal();

  const stats = [
    { icon: Sparkles, label: "Areas of Expertise", value: `${p.expertise.length}+` },
    { icon: Award, label: "Core Skills", value: `${p.skills.length}+` },
    { icon: GraduationCap, label: "Qualifications", value: `${p.qualifications.length}` },
    { icon: Star, label: "Standout Strengths", value: `${p.standOut.length}+` },
    { icon: Briefcase, label: "Currently", value: p.role },
    { icon: Target, label: "Based At", value: "SKILL AI · Mangalore" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={skillAiLogo} alt="SkillAI - Learn Skill Get Job" className="h-9 w-auto rounded-md bg-white p-1" />
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Life at SKILL AI</Link>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2 text-sm font-bold text-lime-foreground hover:scale-105 transition-transform">
              Connect <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/40 px-6 py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 -left-20 h-[28rem] w-[28rem] rounded-full bg-lime/25 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
          <div className="absolute top-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/25 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground)/0.06)_1px,transparent_0)] [background-size:32px_32px]" />

        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1.3fr_1fr] items-center">
          <div>
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-4 py-1.5 text-xs font-semibold text-lime">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" /> {p.role} · SKILL AI
              </span>
            </div>
            <h1 className="reveal mt-6 text-5xl font-black tracking-tight md:text-7xl leading-[1.05]">
              {p.name.split(" ").map((w: string, i: number) => (
                <span key={i} className="inline-block animate-fade-in mr-3" style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}>{w}</span>
              ))}
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg text-muted-foreground">{p.tagline}</p>

            <div className="reveal reveal-delay-3 mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 max-w-2xl">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} style={{ animationDelay: `${i * 80}ms` }} className="animate-fade-in rounded-2xl border border-border/50 bg-surface/60 backdrop-blur px-4 py-3 hover:border-lime/60 hover:-translate-y-1 transition-all">
                    <Icon className="h-4 w-4 text-lime" />
                    <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                    <div className="text-sm font-bold">{s.value}</div>
                  </div>
                );
              })}
            </div>

            <div className="reveal reveal-delay-4 mt-10 flex flex-wrap gap-3">
              <a href="#about" className="group inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-bold text-lime-foreground shadow-2xl shadow-lime/30 hover:scale-105 hover:shadow-lime/50 transition-all">
                Explore Profile <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#qualification" className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-bold hover:bg-surface transition-colors">
                Education Roadmap
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative lg:p-6">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-lime/30 via-fuchsia-500/20 to-cyan-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-lime/30 bg-surface shadow-2xl shadow-lime/20 hover:scale-[1.02] transition-transform">
              <div className="aspect-square p-4 md:p-6 flex items-end justify-center bg-gradient-to-br from-background via-surface to-background">
                <img src={p.photo} alt={`${p.name} — ${p.role}`} className="max-h-full max-w-full object-contain rounded-2xl drop-shadow-2xl" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-lime">{p.role}</div>
                <div className="mt-1 text-lg font-black">{p.name}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-border/40 px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">About</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Who I am</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{p.about}</p>
          </div>
          <div className="reveal reveal-delay-2 rounded-3xl border border-lime/30 bg-gradient-to-br from-lime/20 to-emerald-500/5 p-8 shadow-2xl shadow-lime/10">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-lime text-lime-foreground shadow-xl animate-[float_4s_ease-in-out_infinite]">
                <Briefcase className="h-7 w-7" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Currently Working As</div>
                <div className="text-lg font-black">{p.role}</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-foreground/85">{p.currentRole}</p>
          </div>
        </div>
      </section>

      {/* EXPERTISE / SKILLS / TALENT */}
      <section id="skills" className="border-b border-border/40 bg-surface/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">Capabilities</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Expertise, skills & talents</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div id="expertise">
              <Card icon={<Sparkles className="h-5 w-5" />} title="Expertise">
                <BulletList items={p.expertise} />
              </Card>
            </div>
            <Card icon={<Award className="h-5 w-5" />} title="Skills">
              <BulletList items={p.skills} />
            </Card>
            <Card icon={<Star className="h-5 w-5" />} title="Talent">
              <BulletList items={p.talents} />
            </Card>
          </div>

          {p.skillLevels && p.skillLevels.length > 0 && (
            <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div className="reveal">
                <span className="text-xs font-bold uppercase tracking-widest text-lime">Proficiency</span>
                <h3 className="mt-2 text-2xl font-black md:text-3xl">Skills at a glance</h3>
                <div className="mt-8 space-y-5">
                  {p.skillLevels.map((s: { name: string; value: number }, i: number) => (
                    <SkillMeter key={s.name} name={s.name} value={s.value} index={i} />
                  ))}
                </div>
              </div>

              {p.tools && p.tools.length > 0 && (
                <div className="reveal reveal-delay-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-lime">Tools & Platforms</span>
                  <h3 className="mt-2 text-2xl font-black md:text-3xl">Daily stack</h3>
                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {p.tools.map((t: string, i: number) => (
                      <span
                        key={t}
                        style={{ animationDelay: `${i * 50}ms` }}
                        className="animate-fade-in group relative inline-flex items-center gap-2 rounded-xl border border-border/60 bg-background px-4 py-2.5 text-sm font-semibold transition-all hover:-translate-y-1 hover:border-lime/60 hover:bg-lime/5"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-lime transition-transform group-hover:scale-150" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      </section>

      {/* EDUCATION ROADMAP */}
      <section id="qualification" className="border-b border-border/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">Education Roadmap</span>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">My journey, step by step</h2>
          </div>
          <ol className="relative mt-12 space-y-8 border-l-2 border-dashed border-lime/40 pl-8">
            {p.qualifications.map((q: { title: string; sub: string }, i: number) => (
              <li key={q.title} className={`reveal reveal-delay-${(i % 4) + 1} relative`}>
                <span className="absolute -left-[43px] flex h-7 w-7 items-center justify-center rounded-full border-2 border-lime bg-surface text-[11px] font-bold text-lime">
                  {i + 1}
                </span>
                <div className="rounded-2xl border border-border bg-surface p-5 transition hover:border-lime/60 hover:-translate-y-1">
                  <div className="font-semibold text-foreground">{q.title}</div>
                  <div className="mt-1 text-sm italic text-muted-foreground">{q.sub}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VISION + STAND OUT */}
      <section id="vision" className="border-b border-border/40 bg-surface/30 px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-2">
          <Card icon={<Target className="h-5 w-5" />} title="My Vision">
            <p className="text-sm leading-relaxed text-foreground/85">{p.vision}</p>
          </Card>
          <Card icon={<Star className="h-5 w-5" />} title="Why I Stand Out">
            <BulletList items={p.standOut} />
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-lime/10 via-orange-500/5 to-transparent" />
        <div className="mx-auto max-w-4xl text-center reveal">
          <h2 className="text-4xl font-black md:text-6xl">Let's build something together</h2>
          <p className="mt-5 text-lg text-muted-foreground">Reach out to {p.name.split(" ")[0]} at SKILL AI, Mangalore.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:info@skillai.in" className="inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-base font-bold text-lime-foreground shadow-xl shadow-lime/30 hover:scale-105 transition-transform">
              <Mail className="h-5 w-5" /> Get in touch
            </a>
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-bold hover:bg-surface transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Life at SKILL AI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="h-full rounded-2xl border border-border bg-surface p-5 transition hover:border-lime/50 sm:p-6">
      <div className="flex items-center gap-2 text-lime">
        {icon}
        <h2 className="text-sm font-bold uppercase tracking-widest">{title}</h2>
      </div>
      <div className="mt-4 text-foreground/90">{children}</div>
    </div>
  );
}

function SkillMeter({ name, value, index }: { name: string; value: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const t = window.setTimeout(() => setShown(value), index * 120);
            io.unobserve(e.target);
            return () => window.clearTimeout(t);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, index]);

  return (
    <div ref={ref} className="group">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-semibold text-foreground/90">{name}</span>
        <span className="text-sm font-black tabular-nums text-lime">{shown}%</span>
      </div>
      <div className="relative mt-2 h-2.5 overflow-hidden rounded-full bg-border/50">
        <div
          className="h-full rounded-full bg-gradient-to-r from-lime via-lime to-orange-400 shadow-[0_0_16px_color-mix(in_oklab,var(--lime)_50%,transparent)] transition-[width] duration-[1200ms] ease-out"
          style={{ width: `${shown}%` }}
        />
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {

  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-2 text-sm leading-relaxed">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}
