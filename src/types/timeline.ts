export type MilestoneType = 'career' | 'education' | 'volunteer' | 'personal' | 'family'

export interface XanoTimelineItem {
  id: number
  title: string
  startDate: string
  endDate?: string
  displayDate: string
  type: string
  description: string
  location: string
  role: string
  company: string
  company_logo_hosted_url: string
  companySize: number
  directReports: number
  institution: string | null
  field: string | null
  created_at: string
  updated_at: string
  company_logo?: {
    access: string
    path: string
    name: string
    type: string
    size: number
    mime: string
    meta: {
      width: number
      height: number
    }
    url: string
  }
  _timeline_entry_skills: Array<{
    id: number
    timeline_entry_id: number
    skill_id: number
    _skills: Array<{
      id: number
      name: string
      created_at: string
    }>
  }>
}

export interface Milestone {
  id: number
  title: string
  role: string
  company: string
  location: string
  description: string
  dateRange: string
  startDate: string
  type: MilestoneType
  skills: string[]
  logoUrl?: string
}
