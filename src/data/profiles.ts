import type { ProfileId } from "./questions";

export interface Profile {
  id: ProfileId;
  emoji: string;
  name: string;
  tagline: string;
  description: string;
  strengths: { emoji: string; label: string }[];
  enjoy: { emoji: string; label: string }[];
  careers: { emoji: string; label: string }[];
  accent: "primary" | "secondary";
}

export const profiles: Record<ProfileId, Profile> = {
  "ai-innovator": {
    id: "ai-innovator",
    emoji: "🤖",
    name: "AI Innovator",
    tagline: "Generative AI • AI Agents • Automation",
    description:
      "You naturally enjoy experimenting, solving problems and exploring how technology can create new possibilities.",
    strengths: [
      { emoji: "🧠", label: "Curiosity" },
      { emoji: "💡", label: "Creativity" },
      { emoji: "🔧", label: "Experimentation" },
      { emoji: "⚡", label: "Problem Solving" },
      { emoji: "🚀", label: "Innovation" },
    ],
    enjoy: [
      { emoji: "🤖", label: "Generative AI" },
      { emoji: "🧠", label: "AI Applications" },
      { emoji: "⚙️", label: "Automation" },
      { emoji: "💬", label: "Prompt Engineering" },
      { emoji: "🔗", label: "AI Agents" },
    ],
    careers: [
      { emoji: "🤖", label: "AI Specialist" },
      { emoji: "🧠", label: "AI Application Developer" },
      { emoji: "⚙️", label: "Automation Specialist" },
      { emoji: "💬", label: "GenAI Professional" },
    ],
    accent: "secondary",
  },
  "data-explorer": {
    id: "data-explorer",
    emoji: "📊",
    name: "Data Explorer",
    tagline: "Analytics • Statistics • Machine Learning",
    description:
      "You love finding the story hidden inside numbers, spotting patterns and turning raw data into clear decisions.",
    strengths: [
      { emoji: "🧠", label: "Analytical Thinking" },
      { emoji: "📊", label: "Pattern Recognition" },
      { emoji: "🔎", label: "Attention to Detail" },
      { emoji: "📈", label: "Logical Thinking" },
      { emoji: "💡", label: "Insight Generation" },
    ],
    enjoy: [
      { emoji: "📊", label: "Data Analytics" },
      { emoji: "📈", label: "Power BI" },
      { emoji: "🐍", label: "Python" },
      { emoji: "🧠", label: "Machine Learning" },
      { emoji: "📊", label: "Data Visualization" },
    ],
    careers: [
      { emoji: "📊", label: "Data Analyst" },
      { emoji: "📈", label: "Business Intelligence Analyst" },
      { emoji: "🧠", label: "Data Scientist" },
      { emoji: "🤖", label: "Machine Learning Professional" },
    ],
    accent: "secondary",
  },
  "tech-builder": {
    id: "tech-builder",
    emoji: "💻",
    name: "Tech Builder",
    tagline: "Software • Web • Apps • Product",
    description:
      "You like making things real. Give you an idea and you'll turn it into a working product people can actually use.",
    strengths: [
      { emoji: "🔧", label: "Building" },
      { emoji: "💻", label: "Technical Thinking" },
      { emoji: "🧠", label: "Problem Solving" },
      { emoji: "⚡", label: "Execution" },
      { emoji: "🚀", label: "Product Thinking" },
    ],
    enjoy: [
      { emoji: "💻", label: "Web Development" },
      { emoji: "📱", label: "App Development" },
      { emoji: "⚛️", label: "React" },
      { emoji: "🐍", label: "Python" },
      { emoji: "☁️", label: "Cloud Technology" },
    ],
    careers: [
      { emoji: "💻", label: "Full Stack Developer" },
      { emoji: "📱", label: "Application Developer" },
      { emoji: "⚛️", label: "Frontend Developer" },
      { emoji: "⚙️", label: "Software Engineer" },
    ],
    accent: "primary",
  },
  "cyber-guardian": {
    id: "cyber-guardian",
    emoji: "🔐",
    name: "Cyber Guardian",
    tagline: "Security • Ethical Hacking • Threat Detection",
    description:
      "You think like a detective. You notice risk early and enjoy protecting people and systems from what they can't see.",
    strengths: [
      { emoji: "🔐", label: "Security Mindset" },
      { emoji: "🔎", label: "Investigation" },
      { emoji: "🧠", label: "Logical Thinking" },
      { emoji: "⚡", label: "Risk Awareness" },
      { emoji: "🛡️", label: "Problem Solving" },
    ],
    enjoy: [
      { emoji: "🔐", label: "Cybersecurity" },
      { emoji: "🛡️", label: "Ethical Hacking" },
      { emoji: "🌐", label: "Network Security" },
      { emoji: "🔎", label: "Threat Detection" },
      { emoji: "🔒", label: "Digital Forensics" },
    ],
    careers: [
      { emoji: "🔐", label: "Cybersecurity Analyst" },
      { emoji: "🛡️", label: "Security Engineer" },
      { emoji: "🔎", label: "Ethical Hacker" },
      { emoji: "🌐", label: "Security Specialist" },
    ],
    accent: "primary",
  },
  "business-strategist": {
    id: "business-strategist",
    emoji: "📈",
    name: "Business Strategist",
    tagline: "Strategy • Marketing • Growth",
    description:
      "You see the bigger picture. You connect people, numbers and ideas into decisions that move a business forward.",
    strengths: [
      { emoji: "📈", label: "Strategic Thinking" },
      { emoji: "💡", label: "Creativity" },
      { emoji: "🧠", label: "Decision Making" },
      { emoji: "🎯", label: "Goal Orientation" },
      { emoji: "🚀", label: "Leadership" },
    ],
    enjoy: [
      { emoji: "📈", label: "Business Analytics" },
      { emoji: "📣", label: "Marketing" },
      { emoji: "💼", label: "Strategy" },
      { emoji: "🚀", label: "Entrepreneurship" },
      { emoji: "📊", label: "Business Intelligence" },
    ],
    careers: [
      { emoji: "📈", label: "Business Analyst" },
      { emoji: "📊", label: "Marketing Analyst" },
      { emoji: "🚀", label: "Growth Strategist" },
      { emoji: "💼", label: "Business Consultant" },
    ],
    accent: "secondary",
  },
};

export const profileOrder: ProfileId[] = [
  "ai-innovator",
  "data-explorer",
  "tech-builder",
  "cyber-guardian",
  "business-strategist",
];
