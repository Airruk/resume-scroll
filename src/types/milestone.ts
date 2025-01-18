export type MilestoneType = 'career' | 'education' | 'personal' | 'family'

interface TimelineEntryBullet {
  id: number
  timeline_entry_id: number
  content: string
  type: string
  display_order: number
  created_at: string
}

export interface Milestone {
  id: string
  title: string
  type: MilestoneType
  description: string
  location: string
  company: string
  role: string
  institution: string
  field: string
  companySize: string
  directReports: number
  startDate: string
  date: string
  dateRange: string
  hasImages: boolean
  images: string[]
  isExpanded: boolean
  highlights: string[]
  bullets: string[]
  skills: string[]
  technologies: string[]
  achievements: string[]
  key_responsibilities: string[]
  project_highlights: string[]
  certifications: string[]
  awards: string[]
  tags: string[]
  url?: string
  github_url?: string
  demo_url?: string
  _timeline_entry_bullets?: TimelineEntryBullet[]
}