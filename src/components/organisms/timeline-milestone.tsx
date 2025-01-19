'use client';

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ListChecksIcon, BriefcaseIcon, GraduationCapIcon, HeartIcon, HomeIcon, StarIcon, HandHelpingIcon, CalendarIcon, MapPinIcon } from 'lucide-react'
import { Milestone } from '@/types/timeline'
import { useYear } from '@/contexts/year-context'
import { useTimelineEntry } from '@/hooks/use-timeline-entry'
import Image from 'next/image'

const typeIcons = {
  career: BriefcaseIcon,
  education: GraduationCapIcon,
  personal: HeartIcon,
  family: HomeIcon,
  volunteer: HandHelpingIcon,
} as const

const typeColors = {
  career: 'bg-blue-100 text-blue-800',
  education: 'bg-purple-100 text-purple-800',
  personal: 'bg-pink-100 text-pink-800',
  family: 'bg-green-100 text-green-800',
  volunteer: 'bg-green-100 text-green-800',
} as const

interface TimelineMilestoneProps {
  milestone: Milestone
  isEven: boolean
}

export default function TimelineMilestone({ milestone, isEven }: TimelineMilestoneProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { setCurrentYear } = useYear()
  const { data: entryDetails, isLoading: isLoadingBullets } = useTimelineEntry(isExpanded ? Number(milestone.id) : null)
  const TypeIcon = typeIcons[milestone.type] || BriefcaseIcon
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = milestone.dateRange.match(/\d{4}/)?.[0] || '2025'
            setCurrentYear(year)
          }
        })
      },
      {
        threshold: 0.7,
        rootMargin: '-20% 0px'
      }
    )

    if (card) {
      observer.observe(card)
    }

    return () => {
      if (card) {
        observer.unobserve(card)
      }
    }
  }, [milestone.dateRange, setCurrentYear])

  const bullets = entryDetails?.result1._timeline_entry_bullets?.sort(
    (a, b) => a.display_order - b.display_order
  ) || []

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div 
      ref={cardRef}
      className={`group relative flex w-full items-start gap-4 ${
        isEven ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className={`rounded-full border-4 border-background p-2 ${typeColors[milestone.type] || typeColors.career}`}>
          <TypeIcon className="h-4 w-4" />
        </div>
      </div>

      {/* Content Card */}
      <div className={`w-[calc(50%-2rem)] ${isEven ? 'pr-8' : 'pl-8'}`}>
        <motion.div
          layout
          onClick={toggleExpand}
          className="relative overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md cursor-pointer"
        >
          {/* Card Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{milestone.title}</h3>
                <span className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
                  <CalendarIcon className="h-4 w-4" />
                  {milestone.dateRange}
                </span>
              </div>
              {milestone.logoUrl && (
                <div className="flex-shrink-0 ml-4">
                  <div className="relative w-12 h-12 rounded-lg border bg-background p-1">
                    <Image
                      src={milestone.logoUrl}
                      alt={`${milestone.company} logo`}
                      fill
                      sizes="(max-width: 48px) 100vw, 48px"
                      className="object-contain p-1"
                    />
                  </div>
                </div>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{milestone.company}</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
              <MapPinIcon className="h-4 w-4" />
              {milestone.location}
            </p>
          </div>

          {/* Description */}
          <p className="mb-4 text-sm">{milestone.description}</p>

          {/* Skills */}
          {milestone.skills?.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {milestone.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-4 border-t pt-4"
              >
                {/* Role & Responsibilities */}
                {milestone.role && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                      <ListChecksIcon className="h-4 w-4" />
                      Role & Responsibilities
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {milestone.role}
                    </p>
                  </div>
                )}

                {/* Bullets */}
                {bullets.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                      <StarIcon className="h-4 w-4" />
                      Highlights
                    </h4>
                    {bullets.map((bullet, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
                        <p className="text-sm text-muted-foreground">{bullet.content}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Loading State */}
                {isLoadingBullets && (
                  <div className="flex justify-center py-4">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
