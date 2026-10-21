import type { ProfileId } from "./questions";

export const roadmaps: Record<ProfileId, string[]> = {
  "ai-innovator": [
    "Python",
    "AI Fundamentals",
    "Generative AI",
    "Prompt Engineering",
    "RAG / AI Applications",
    "AI Agents",
    "🤖 AI Career Opportunities",
  ],
  "data-explorer": [
    "Excel & Statistics",
    "SQL",
    "Python for Data",
    "Power BI / Visualization",
    "Machine Learning Basics",
    "Analytics Projects",
    "📊 Data Career Opportunities",
  ],
  "tech-builder": [
    "Programming Basics",
    "HTML • CSS • JavaScript",
    "React",
    "Backend & APIs",
    "Databases",
    "Cloud & Deployment",
    "💻 Developer Career Opportunities",
  ],
  "cyber-guardian": [
    "Networking Basics",
    "Linux",
    "Security Fundamentals",
    "Ethical Hacking",
    "Threat Detection & SOC",
    "Digital Forensics",
    "🔐 Cybersecurity Career Opportunities",
  ],
  "business-strategist": [
    "Business Fundamentals",
    "Excel & SQL",
    "Marketing & Growth",
    "Business Analytics",
    "Dashboards & Reporting",
    "Strategy & Case Studies",
    "📈 Business Career Opportunities",
  ],
};

export const programs = [
  { emoji: "🤖", label: "Artificial Intelligence" },
  { emoji: "📊", label: "Data Analytics" },
  { emoji: "💻", label: "Software Development" },
  { emoji: "🔐", label: "Cybersecurity" },
  { emoji: "📈", label: "Business Analytics" },
];
