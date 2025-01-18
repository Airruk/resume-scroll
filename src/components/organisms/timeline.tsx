'use client'

import { useTimeline } from '@/hooks/use-timeline'
import TimelineMilestone from './timeline-milestone'
import { useYear } from '@/contexts/year-context'
import { useFilter } from '@/contexts/filter-context'
import { motion, AnimatePresence } from 'framer-motion'
import { FilterToggle } from '../molecules/filter-toggle'

export default function Timeline() {
  const { data: milestones = [], isLoading, error } = useTimeline()
  const { currentYear } = useYear()
  const { filters } = useFilter()

  return (
    <div className="relative min-h-screen w-full max-w-[976px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      {/* Filter Toggle */}
      <FilterToggle />

      {/* Fixed Year Display */}
      <div className="fixed right-8 top-24 z-50">
        <span className="text-4xl font-bold opacity-20">{currentYear}</span>
      </div>

      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />

      {/* Content */}
      <div className="relative pt-20">
        {isLoading && (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        )}

        {error && (
          <div className="text-red-500 py-8">
            {error instanceof Error ? error.message : 'Failed to load timeline'}
          </div>
        )}

        {!isLoading && !error && (
          <div className="space-y-32">
            <AnimatePresence mode="popLayout">
              {milestones
                .filter(milestone => filters[milestone.type])
                .map((milestone, index) => (
                  <motion.div
                    key={milestone.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <TimelineMilestone 
                      milestone={milestone} 
                      isEven={index % 2 === 0}
                    />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
}
