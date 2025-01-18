'use client'

import React, { createContext, useContext, useState } from 'react'

type YearContextType = {
  currentYear: string
  setCurrentYear: (year: string) => void
}

const YearContext = createContext<YearContextType | undefined>(undefined)

export function YearProvider({ children }: { children: React.ReactNode }) {
  const [currentYear, setCurrentYear] = useState('2025')

  return (
    <YearContext.Provider value={{ currentYear, setCurrentYear }}>
      {children}
    </YearContext.Provider>
  )
}

export function useYear() {
  const context = useContext(YearContext)
  if (context === undefined) {
    throw new Error('useYear must be used within a YearProvider')
  }
  return context
}
