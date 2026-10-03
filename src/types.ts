export type Page = 'home' | 'services' | 'work' | 'industries' | 'about' | 'insights' | 'contact';

export type ServicePillar = 'build' | 'attract' | 'convert' | 'grow';

export interface ServiceDetail {
  id: string;
  number: string;
  pillar: ServicePillar;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  businessBenefits: string[];
  exampleUseCases: string[];
}

export type ProjectCategory = 'All' | 'Website' | 'Branding' | 'Marketing' | 'Advertising' | 'CRM' | 'AI' | 'Automation';

export interface Project {
  id: string;
  name: string;
  client: string;
  industry: string;
  location: string;
  categories: ProjectCategory[];
  services: string[];
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  visualAccent: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  commonChallenges: string[];
  solutions: string[];
  keyWorkflows: string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
}

export interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  website: string;
  needs: string[];
  budget: string;
  message: string;
}
