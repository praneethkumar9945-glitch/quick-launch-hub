export type ProfileId =
  | "ai-innovator"
  | "data-explorer"
  | "tech-builder"
  | "cyber-guardian"
  | "business-strategist";

export interface AnswerOption {
  key: "A" | "B" | "C" | "D" | "E";
  emoji: string;
  label: string;
  profile: ProfileId;
}

export interface Question {
  id: number;
  prompt: string;
  sub?: string;
  options: AnswerOption[];
}

const opt = (
  key: AnswerOption["key"],
  emoji: string,
  label: string,
  profile: ProfileId,
): AnswerOption => ({ key, emoji, label, profile });

export const questions: Question[] = [
  {
    id: 1,
    prompt: "You're given ₹1 lakh to build something.",
    sub: "What would you create?",
    options: [
      opt("A", "📊", "A dashboard that explains data", "data-explorer"),
      opt("B", "📱", "A mobile app", "tech-builder"),
      opt("C", "🔐", "A system that protects people from hackers", "cyber-guardian"),
      opt("D", "🤖", "An AI-powered assistant", "ai-innovator"),
      opt("E", "📈", "A tool that helps a business make better decisions", "business-strategist"),
    ],
  },
  {
    id: 2,
    prompt: "Which challenge sounds the most exciting?",
    options: [
      opt("A", "🔍", "Find the hidden pattern in a huge dataset", "data-explorer"),
      opt("B", "🛠️", "Build something from scratch", "tech-builder"),
      opt("C", "🕵️", "Catch a hacker using clues", "cyber-guardian"),
      opt("D", "🤖", "Make AI do something nobody expected", "ai-innovator"),
      opt("E", "📉", "Figure out why a business is losing customers", "business-strategist"),
    ],
  },
  {
    id: 3,
    prompt: "You have 30 minutes of free time.",
    sub: "What would you rather do?",
    options: [
      opt("A", "🔢", "Play with numbers / data", "data-explorer"),
      opt("B", "🧱", "Create or build something", "tech-builder"),
      opt("C", "🧩", "Solve a mystery", "cyber-guardian"),
      opt("D", "⚡", "Experiment with AI", "ai-innovator"),
      opt("E", "💡", "Plan an idea / business", "business-strategist"),
    ],
  },
  {
    id: 4,
    prompt: "Which superpower would you choose?",
    options: [
      opt("A", "👁️", "See patterns nobody else can see", "data-explorer"),
      opt("B", "🏗️", "Build anything instantly", "tech-builder"),
      opt("C", "🛡️", "Detect every security threat", "cyber-guardian"),
      opt("D", "🧠", "Talk to any AI and make it do exactly what you want", "ai-innovator"),
      opt("E", "🔮", "Predict what people will buy", "business-strategist"),
    ],
  },
  {
    id: 5,
    prompt: "Your team gives you a difficult problem.",
    sub: "What is your first reaction?",
    options: [
      opt("A", "📊", "Analyze the information", "data-explorer"),
      opt("B", "⚙️", "Start building a solution", "tech-builder"),
      opt("C", "🔎", "Investigate what went wrong", "cyber-guardian"),
      opt("D", "🤖", "Ask AI for possibilities and experiment", "ai-innovator"),
      opt("E", "💼", "Understand the business impact", "business-strategist"),
    ],
  },
  {
    id: 6,
    prompt: "Which project would you enjoy working on?",
    options: [
      opt("A", "📈", "Predicting future trends using data", "data-explorer"),
      opt("B", "💻", "Building a useful application", "tech-builder"),
      opt("C", "🔐", "Creating a cybersecurity system", "cyber-guardian"),
      opt("D", "💬", "Building an AI chatbot or agent", "ai-innovator"),
      opt("E", "🚀", "Creating a strategy for a growing company", "business-strategist"),
    ],
  },
  {
    id: 7,
    prompt: "Which subject sounds most interesting?",
    options: [
      opt("A", "📊", "Data & Statistics", "data-explorer"),
      opt("B", "💻", "Programming & Technology", "tech-builder"),
      opt("C", "🔐", "Cybersecurity", "cyber-guardian"),
      opt("D", "🤖", "Artificial Intelligence", "ai-innovator"),
      opt("E", "📣", "Business & Marketing", "business-strategist"),
    ],
  },
  {
    id: 8,
    prompt: "Your friend wants to start a startup.",
    sub: "What would you be most interested in doing?",
    options: [
      opt("A", "📊", "Analyze customer data", "data-explorer"),
      opt("B", "🛠️", "Build the product", "tech-builder"),
      opt("C", "🔒", "Secure the platform", "cyber-guardian"),
      opt("D", "🤖", "Add AI capabilities", "ai-innovator"),
      opt("E", "📈", "Create the growth strategy", "business-strategist"),
    ],
  },
  {
    id: 9,
    prompt: "Which achievement would make you most proud?",
    options: [
      opt("A", "🔍", "Discovering an important pattern in data", "data-explorer"),
      opt("B", "📱", "Building an application used by thousands of people", "tech-builder"),
      opt("C", "🛡️", "Stopping a major cyber attack", "cyber-guardian"),
      opt("D", "🤖", "Creating an AI system that solves a real problem", "ai-innovator"),
      opt("E", "🚀", "Helping a company grow dramatically", "business-strategist"),
    ],
  },
  {
    id: 10,
    prompt: "Imagine yourself 5 years from now.",
    sub: "Which sounds most exciting?",
    options: [
      opt("A", "📊", "Working with data and discovering insights", "data-explorer"),
      opt("B", "💻", "Building technology products", "tech-builder"),
      opt("C", "🔐", "Protecting organizations from cyber threats", "cyber-guardian"),
      opt("D", "🤖", "Creating the next generation of AI applications", "ai-innovator"),
      opt("E", "📈", "Leading business and technology strategies", "business-strategist"),
    ],
  },
];
