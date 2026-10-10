export type PageId = 'home' | 'automation' | 'case-studies' | 'how-it-works' | 'contact' | 'privacy-policy';

export interface WorkflowStep {
  id: string;
  label: string;
  sublabel?: string;
  type: 'trigger' | 'condition' | 'action' | 'system' | 'human';
  system?: string;
  detail?: string;
}

export interface WorkflowExample {
  id: string;
  title: string;
  category: string;
  description: string;
  steps: WorkflowStep[];
  tools: string[];
}

export interface CaseStudyData {
  id: string;
  client: string;
  category: string;
  summary: string;
  technologies: string[];
  workflowVisual: string[];
  features: string[];
  architecture: {
    inputs: string;
    processing: string;
    outputs: string;
    handoff: string;
  };
}
