import { useQuery } from '@tanstack/react-query'

interface TimelineEntryBullet {
  id: number
  timeline_entry_id: number
  content: string
  type: string
  display_order: number
  created_at: string
}

interface TimelineEntryDetails {
  result1: {
    id: number
    _timeline_entry_bullets: TimelineEntryBullet[]
    // ... other fields we might need later
  }
}

export function useTimelineEntry(id: number | null) {
  return useQuery({
    queryKey: ['timeline-entry', id],
    queryFn: async () => {
      if (!id) return null
      const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:iPX4-MHX/timeline_entries/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch timeline entry')
      }
      return response.json() as Promise<TimelineEntryDetails>
    },
    enabled: !!id,
  })
}
