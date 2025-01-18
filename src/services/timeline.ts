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

function transformXanoItem(item: XanoTimelineItem): Milestone {
  return {
    id: item.id,
    title: item.title,
    role: item.role || '',
    company: item.company || '',
    location: item.location || '',
    description: item.description || '',
    dateRange: item.displayDate || '',
    type: item.type?.toLowerCase() as 'career' | 'education' | 'volunteer' | 'personal',
    skills: item._timeline_entry_skills?.map(skill => skill._skills[0]?.name || '') || []
  }
}

async function handleXanoResponse(response: Response) {
  if (response.status === 429) {
    throw new Error('Rate limit exceeded. Please try again later.')
  }
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`)
  }
  const data = await response.json()
  console.log('API Response:', data) // Debug log
  return data
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
    
    return items.map(item => transformXanoItem(item))
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
    const item = data.result1 || data.item || data
    return transformXanoItem(item)
  } catch (error) {
    console.error('Failed to fetch timeline item:', error)
    return null
  }
}
