export interface Project {
  id: string;
  title: string;
  category: 'Personal Finance' | 'FinTech Insights' | 'Academic Systems' | 'Productivity';
  badge: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  myContribution: string;
  githubUrl?: string;
  liveUrl?: string;
  status: 'Live & Production' | 'Live Foundation' | 'Architecture & Planning' | 'Completed Academic PBL';
  verifiedNote: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'programming' | 'tools' | 'finance';
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface EducationMilestone {
  id: string;
  institution: string;
  degreeOrClass: string;
  period: string;
  location: string;
  scoreOrStatus: string;
  highlights: string[];
  focusAreas: string[];
}

export interface JourneyMilestone {
  step: string;
  period: string;
  title: string;
  narrative: string;
  milestones: string[];
  techTags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
