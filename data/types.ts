export type PortfolioLocale = "vi" | "en";

export type ProjectIcon =
  | "book"
  | "search"
  | "sparkles"
  | "video"
  | "graduation-cap"
  | "wallet";

export interface HeroContent {
  role: string;
  summary: string;
  facts: string[];
  contactLinks: {
    github: string;
    email: string;
    cv: string;
  };
}

export interface CapabilityContent {
  title: string;
  summary?: string;
  evidencePoints: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  stack: string[];
  active?: boolean;
}

export interface ProfessionalProjectItem {
  id: string;
  name: string;
  period: string;
  company: string;
  role: string;
  description: string;
  stack: string[];
  highlights: string[];
}

export interface PublicProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  icon?: ProjectIcon;
  accentTextClass?: string;
  accentBgClass?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  items: string[];
}

export interface EducationContent {
  title: string;
  university: string;
  degree: string;
  period: string;
  badge: string;
  achievements: string[];
}

export interface ContactContent {
  email: string;
  phone: string;
  website: string;
  githubUrl: string;
  githubText: string;
}

export interface PortfolioData {
  hero: HeroContent;
  capabilities: {
    title: string;
    blocks: CapabilityContent[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  professionalProjects: {
    title: string;
    items: ProfessionalProjectItem[];
  };
  publicProjects: {
    title: string;
    items: PublicProjectItem[];
  };
  skills: {
    title: string;
    categories: SkillCategory[];
  };
  education: EducationContent;
  contact: ContactContent;
}
