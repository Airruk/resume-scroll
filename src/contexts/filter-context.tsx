'use client'

import { createContext, useContext, useState } from 'react'

interface FilterContextType {
  filters: Record<string, boolean>
  toggleFilter: (filter: string) => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export const FILTER_TYPES = {
  career: 'Career',
  education: 'Education',
  volunteer: 'Volunteer',
  personal: 'Personal',
  family: 'Family',
} as const

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<Record<string, boolean>>(() => 
    Object.keys(FILTER_TYPES).reduce((acc, key) => ({
      ...acc,
      [key]: true // All enabled by default
    }), {})
  )

  const toggleFilter = (filter: string) => {
    setFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }))
  }

  return (
    <FilterContext.Provider value={{ filters, toggleFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilter() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider')
  }
  return context
}
