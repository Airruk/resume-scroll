'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { AspectRatio } from '@/components/ui/aspect-ratio'

interface ImageGalleryProps {
  images: { url: string; alt: string }[]
  open: boolean
  onOpenChange: (open: boolean) => void
  initialIndex?: number
}

export function ImageGallery({
  images,
  open,
  onOpenChange,
  initialIndex = 0,
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 z-10"
            onClick={() => onOpenChange(false)}
          >
            <XIcon className="h-4 w-4" />
          </Button>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
            />
          </AspectRatio>
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2"
                onClick={handlePrevious}
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={handleNext}
              >
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                <div className="flex gap-1">
                  {images.map((_, idx) => (
                    <Button
                      key={idx}
                      variant="ghost"
                      size="sm"
                      className={`h-2 w-2 rounded-full p-0 ${
                        idx === currentIndex
                          ? 'bg-primary'
                          : 'bg-primary/20'
                      }`}
                      onClick={() => setCurrentIndex(idx)}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
