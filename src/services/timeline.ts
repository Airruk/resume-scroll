import { Milestone } from '@/types/timeline'

const API_BASE_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:iPX4-MHX'

interface XanoTimelineItem {
  id: number
  title: string
  startDate: string
  displayDate: string
  type: string
  description: string
  location: string
  role: string
  company: string
  companySize: number
  directReports: number
  institution: string
  field: string
  created_at: string
  updated_at: string
  logo_url?: string
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
  company_logo?: {
    url: string
  }
}

function transformXanoItem(item: XanoTimelineItem): Milestone {
  return {
    id: item.id,
    title: item.title,
    role: item.role || '',
    company: item.company || '',
    location: item.location || '',
    description: item.description || '',
    dateRange: item.displayDate || '',
    startDate: item.startDate,
    type: item.type?.toLowerCase() as 'career' | 'education' | 'volunteer' | 'personal',
    skills: item._timeline_entry_skills?.map(skill => skill._skills[0]?.name || '') || [],
    logoUrl: item.company_logo?.url
  }
}

async function handleXanoResponse(response: Response) {
  if (response.status === 429) {
    throw new Error('Rate limit exceeded. Please try again later.')
  }
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`)
  }
  return response.json()
}

export async function getTimelineItems(): Promise<Milestone[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/timeline_entries`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    const data = await handleXanoResponse(response)
    
    // Handle different response structures
    const items = data.items || data.timeline_entries || data
    if (!Array.isArray(items)) {
      console.error('Unexpected API response structure:', data)
      throw new Error('Invalid API response format')
    }
    
    // Transform and sort items by start date in descending order
    return items
      .map(item => transformXanoItem(item))
      .sort((a, b) => {
        const dateA = new Date(a.startDate).getTime()
        const dateB = new Date(b.startDate).getTime()
        return dateB - dateA
      })
  } catch (error) {
    console.error('Failed to fetch timeline items:', error)
    throw error instanceof Error ? error : new Error('Failed to fetch timeline items')
  }
}

export async function getTimelineItem(id: number): Promise<Milestone | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/timeline_entries/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    const data = await handleXanoResponse(response)
    return transformXanoItem(data)
  } catch (error) {
    console.error(`Failed to fetch timeline item ${id}:`, error)
    return null
  }
}
