'use client'

import React from 'react'
import { BaseProps } from '@/types/components'
import { Button } from '@/lib/components'

interface FilterBarProps extends BaseProps {
  filters: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function FilterBar({
  filters,
  activeFilter,
  onFilterChange,
  className = '',
}: FilterBarProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? 'default' : 'outline'}
          size="sm"
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}
