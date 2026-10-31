export interface PersonalInfo {
  name: string;
  role: string;
  phone: string;
  email: string;
  collegeEmail: string;
  github: string;
  linkedin: string;
  portfolio: string;
  tagline: string;
  about: string;
}

export interface EducationInfo {
  degree: string;
  duration: string;
  institution: string;
}

export interface ProjectInfo {
  title: string;
  status?: string | null;
  description: string;
  techStack: string[];
  features: string[];
  github: string | null;
  live: string | null;
}

export interface ExperienceInfo {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface TechStackInfo {
  programming: string[];
  ml_ai: string[];
  frameworks: string[];
  web: string[];
  databases: string[];
  tools: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  education: EducationInfo;
  techStack: TechStackInfo;
  projects: ProjectInfo[];
  experience: ExperienceInfo[];
  achievements: string[];
  certifications: string[];
  coursework: string[];
}
