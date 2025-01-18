'use client'

import React from 'react'
import { BaseProps } from '@/types/components'
import { Header } from '@/app/(components)/header'

interface MainLayoutProps extends BaseProps {
  showHeader?: boolean
}

export default function MainLayout({
  children,
  className = '',
  showHeader = true,
}: MainLayoutProps) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      {showHeader && <Header />}
      <main className="flex-1">{children}</main>
    </div>
  )
}
