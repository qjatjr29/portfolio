import {
  Server,
  Monitor,
  Database,
  Cloud,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

export interface Skill {
  name: string;
  isMain?: boolean; 
}

export interface SkillCategory {
  title: string;
  gradient: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Back-End",
    gradient: "from-[#2b7fff] to-[#155dfc]",
    icon: Server,
    skills: [
      { name: "Java", isMain: true },
      { name: "Kotlin", isMain: true },
      { name: "Spring Boot", isMain: true },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Nestjs" },
      { name: "Junit5" },
      { name: "Python" },
      { name: "FastAPI" },
    ],
  },
  {
    title: "Front-End",
    gradient: "from-[#00b8db] to-[#0092b8]",
    icon: Monitor,
    skills: [
      { name: "React" },
      { name: "HTML / CSS" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Database",
    gradient: "from-[#00c950] to-[#00a63e]",
    icon: Database,
    skills: [
      { name: "MySQL", isMain: true },
      { name: "PostgreSQL", isMain: true },
      { name: "Redis" },
      { name: "Neo4j" },
    ],
  },
  {
    title: "Infra & CI/CD",
    gradient: "from-[#ad46ff] to-[#9810fa]",
    icon: Cloud,
    skills: [
      { name: "AWS", isMain: true },
      { name: "Naver Cloud Platform" },
      { name: "Kafka" },
      { name: "Docker" },
      { name: "Jenkins" },
      { name: "AWS CodeDeploy" },
      { name: "Github Actions", isMain: true },
    ],
  },
  {
    title: "Communication & Tools",
    gradient: "from-[#ff6900] to-[#f54900]",
    icon: MessageSquare,
    skills: [
      { name: "Git", isMain: true },
      { name: "Jira" },
      { name: "Slack" },
      { name: "Notion" },
    ],
  },
];
