
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  tags?: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  date?: string;
  creator?: {
    name: string;
    url: string;
  };
  stats?: {
    stars?: number;
    forks?: number;
    views?: number;
  };
}

export enum ProjectCategory {
  WEB = 'Web Development',
  MOBILE = 'Mobile Apps',
  AI = 'Artificial Intelligence',
  DESIGN = 'UI/UX Design',
  CRYPTO = 'Blockchain'
}

export interface AIChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface GeneratedProject {
  title: string;
  description: string;
  tags: string[];
  features: string[];
}
