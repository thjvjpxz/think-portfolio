export type PortfolioLocale = "vi" | "en";

export type ProjectIcon =
  | "book"
  | "search"
  | "sparkles"
  | "video"
  | "graduation-cap"
  | "wallet";

export interface ProjectLink {
  href: string;
  ariaLabel: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: ProjectIcon;
  accentTextClass: string;
  accentBgClass: string;
  metaLabel?: string;
  links?: ProjectLink[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  active: boolean;
}

export interface ContactContent {
  email: string;
  githubUrl: string;
  githubText: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
  stats: AboutStat[];
}

export interface SkillCategory {
  id: string;
  title: string;
  items: string[];
}

export interface SkillsContent {
  title: string;
  categories: SkillCategory[];
}

export interface EducationContent {
  title: string;
  university: string;
  degree: string;
  period: string;
  badge: string;
  achievements: string[];
}

export interface PortfolioData {
  about: AboutContent;
  projects: {
    title: string;
    items: ProjectItem[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  skills: SkillsContent;
  education: EducationContent;
  contact: ContactContent;
}
