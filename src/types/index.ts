export interface PersonalInfo {
  name: string;
  title: string;
  objective: string;
  location: string;
  links: {
    email: string;
    linkedin: string;
    github: string;
    facebook: string;
    resume: string;
  };
}

export interface Experience {
  company: string;
  title: string;
  location: string;
  duration: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface Project {
  title: string;
  stack: string;
  description: string;
  image: string;
  liveSite?: string;
  githubFrontend?: string;
  githubBackend?: string;
  github?: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  tools: string[];
  ai: string[];
  business: string[];
}

export interface Certification {
  id?: number; // Optional for backward compatibility
  certification: string; // For single certification objects
}

export interface LanguageSpoken {
  language: string;
  proficiency: string;
}

export interface Interest {
  id?: number; // Optional
  interest: string; // For single interest objects
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: Skills;
  certifications: string[]; // Array of certification strings from portfolio.md
  languagesSpoken: LanguageSpoken[];
  interests: string[]; // Array of interest strings
}