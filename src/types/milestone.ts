export interface Milestone {
  id: number | string;
  title: string;
  type: 'career' | 'education' | 'family' | 'personal' | string;
  date: string;
  company?: string;
  institution?: string;
  location?: string;
  role?: string;
  description?: string;
  field?: string;
  achievements?: string[];
  highlights?: string[];
  skills?: string[];
  tags?: string[];
  images?: string[];
  startDate?: Date;
  endDate?: Date;
} 