import { useQuery } from '@tanstack/react-query'
import { getTimelineItems } from '@/services/timeline'
import { Milestone } from '@/types/timeline'

export function useTimeline() {
  return useQuery<Milestone[], Error>({
    queryKey: ['timeline'],
    queryFn: getTimelineItems,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
