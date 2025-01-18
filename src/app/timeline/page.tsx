'use client'

import React, { useEffect, useState } from 'react'
import Timeline from '@/components/organisms/timeline'
import { getTimelineItems } from '@/services/timeline'

export default function TimelinePage() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        setError(null)
        await getTimelineItems()
      } catch (err) {
        console.error('Error fetching timeline data:', err)
        setError(err instanceof Error ? err.message : 'Failed to fetch timeline data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto p-8">
        <div>Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto p-8">
        <div>Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-8">
      <Timeline />
    </div>
  )
}
