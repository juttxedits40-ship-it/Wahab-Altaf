import { LucideIcon } from 'lucide-react';

export enum ServiceCategory {
  MARKETING = 'Digital Marketing',
  AI = 'AI Solutions',
  DEVELOPMENT = 'Web & Automation'
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  icon: LucideIcon;
  category: ServiceCategory;
  features: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum GeneratorType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO'
}

export interface GeneratedContent {
  type: GeneratorType;
  content: string; // Text string or Image/Video URL
  timestamp: number;
}
