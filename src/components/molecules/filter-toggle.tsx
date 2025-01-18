'use client'

import { Switch } from '@/components/ui/switch'
import { useFilter, FILTER_TYPES } from '@/contexts/filter-context'
import { BriefcaseIcon, GraduationCapIcon, HeartIcon, HomeIcon } from 'lucide-react'
import { motion } from 'framer-motion'

const FILTER_ICONS = {
  career: BriefcaseIcon,
  education: GraduationCapIcon,
  volunteer: HeartIcon,
  personal: HomeIcon,
} as const

export function FilterToggle() {
  const { filters, toggleFilter } = useFilter()

  return (
    <div className="fixed left-1/2 -translate-x-1/2 top-20 z-50 bg-background/80 backdrop-blur-sm rounded-full border px-6 py-3 flex gap-4">
      {Object.entries(FILTER_TYPES).map(([key, label]) => {
        const Icon = FILTER_ICONS[key as keyof typeof FILTER_ICONS]
        return (
          <motion.div
            key={key}
            className="flex items-center gap-2"
            whileTap={{ scale: 0.95 }}
          >
            <Switch
              checked={filters[key]}
              onCheckedChange={() => toggleFilter(key)}
              className="data-[state=checked]:bg-primary"
            />
            <label className="text-sm font-medium flex items-center gap-1.5 cursor-pointer select-none">
              <Icon className="h-4 w-4" />
              {label}
            </label>
          </motion.div>
        )
      })}
    </div>
  )
}
