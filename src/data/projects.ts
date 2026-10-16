
export type ProjectCategory = "GitHub" | "Kaggle" | "Hackathon";

export type PortfolioProject = {
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  sourceUrl: string;
  demoUrl?: string;
  featured?: boolean;
};

export const projects: PortfolioProject[] = [
  {
    title: "HealthAlert",
    category: "GitHub",
    description:
      "AI-powered emergency health response system with emergency analysis, location features and nearby hospital discovery.",
    technologies: ["Next.js", "TypeScript", "Claude AI", "Google Maps"],
    sourceUrl: "https://github.com/kushwaha-78159/helth-alrt",
    featured: true,
  },
  {
    title: "Manya Public School",
    category: "GitHub",
    description:
      "School website project covering admission enquiries, contact messages, gallery and classes and fees management.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    sourceUrl: "https://github.com/kushwaha-78159/mohit-school",
    featured: true,
  },
  {
    title: "Quiz Master Pro",
    category: "GitHub",
    description:
      "Interactive quiz and trivia platform featuring user progression, leaderboards and game-oriented features.",
    technologies: ["React", "TypeScript", "JavaScript"],
    sourceUrl: "https://github.com/kushwaha-78159/quiz-master-pro.game",
    featured: true,
  },
  {
    title: "ShopHub",
    category: "GitHub",
    description:
      "E-commerce application project featuring product discovery, shopping cart and order-management functionality.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    sourceUrl: "https://github.com/kushwaha-78159/shop-hub",
  },
  {
    title: "Mohit Coaching Centre",
    category: "GitHub",
    description:
      "Coaching website project with student registration and management features.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    sourceUrl: "https://github.com/kushwaha-78159/coaching-web-profesnol",
  },
  {
    title: "PhotoStudio Web",
    category: "GitHub",
    description:
      "Photography portfolio and gallery-management website project.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    sourceUrl: "https://github.com/kushwaha-78159/photostudio-web",
  },
  {
    title: "Kaggle Profile & Notebooks",
    category: "Kaggle",
    description:
      "Explore Abhishek's Kaggle profile and public notebooks. Individual notebook titles can be added after verification.",
    technologies: ["Kaggle", "Data Analysis", "Notebooks"],
    sourceUrl: "https://www.kaggle.com/abhishek1kushwaha1/code",
  },
  {
    title: "PadhaiPath",
    category: "Hackathon",
    description:
      "A study companion with a smart study planner, progress tracking and an AI-powered doubt solver.",
    technologies: ["React", "TypeScript", "Node.js", "tRPC", "AI"],
    sourceUrl: "https://devpost.com/software/padhaipath",
    demoUrl: "https://padhaiapp-daxqd7pk.manus.space",
    featured: true,
  },
  {
    title: "RescueMesh AI",
    category: "Hackathon",
    description:
      "An AI-focused project presented on Devpost. Visit the original submission for its full details.",
    technologies: ["AI", "Web Development"],
    sourceUrl: "https://devpost.com/software/rescuemesh-ai-7mil64",
  },
  {
    title: "ClipStack",
    category: "Hackathon",
    description:
      "A local-first snippet vault for retrieving and organizing code and text.",
    technologies: ["Web Development"],
    sourceUrl: "https://devpost.com/software/clipstack",
  },
  {
    title: "AeroVision V-1",
    category: "Hackathon",
    description:
      "An interactive 3D automotive product showcase with exploded-view mechanics and real-time customization.",
    technologies: ["3D Web", "Interactive UI"],
    sourceUrl: "https://devpost.com/software/aerovision-v-1",
  },
  {
    title: "ResiliCity 2026",
    category: "Hackathon",
    description:
      "A project about real-time traffic and climate risk intelligence for World Cup host cities.",
    technologies: ["Data", "AI", "Web Development"],
    sourceUrl: "https://devpost.com/software/resilicity-2026",
  },
  {
    title: "mock inerview",
    category: "Hackathon",
    description:
      "An AI-powered mock interview project that uses a resume to create interview questions.",
    technologies: ["AI", "Web Development"],
    sourceUrl: "https://devpost.com/software/mock-inerview",
  },
  {
    title: "prepai",
    category: "Hackathon",
    description:
      "An AI-powered preparation project listed on the Devpost portfolio.",
    technologies: ["AI", "Web Development"],
    sourceUrl: "https://devpost.com/software/prepai-8u73bi",
  },
  {
    title: "phishshield-ai-devpost",
    category: "Hackathon",
    description:
      "A project focused on detecting fake versus genuine video and voice content.",
    technologies: ["AI", "Security"],
    sourceUrl: "https://devpost.com/software/phishshield-ai-devpost",
  },
  {
    title: "HealthAlert — Devpost Submission",
    category: "Hackathon",
    description:
      "The Devpost submission for the AI emergency health response project.",
    technologies: ["AI", "Emergency Response", "Web"],
    sourceUrl: "https://devpost.com/ABHISHEK78159",
  },
];
