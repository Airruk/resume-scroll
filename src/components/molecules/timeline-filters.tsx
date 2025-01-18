'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { MilestoneType } from '@/types/milestone'
import { cn } from '@/lib/utils'

interface TimelineFiltersProps {
  activeFilter: MilestoneType | null
  onFilterChange: (filter: MilestoneType | null) => void
  className?: string
}

const filters: { label: string; value: MilestoneType | null }[] = [
  { label: 'All', value: null },
  { label: 'Career', value: 'career' },
  { label: 'Education', value: 'education' },
  { label: 'Personal', value: 'personal' },
  { label: 'Family', value: 'family' },
]

export function TimelineFilters({
  activeFilter,
  onFilterChange,
  className,
}: TimelineFiltersProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {filters.map(({ label, value }) => (
        <Button
          key={value ?? 'all'}
          variant={activeFilter === value ? 'default' : 'outline'}
          onClick={() => onFilterChange(value)}
          className="rounded-full"
          size="sm"
        >
          {label}
        </Button>
      ))}
    </div>
  )
}
