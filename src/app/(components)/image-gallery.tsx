'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export function ImageGallery({ 
  images, 
  open, 
  onOpenChange, 
  initialIndex = 0,
  milestoneId 
}: { 
  images: string[], 
  open: boolean, 
  onOpenChange: (open: boolean) => void, 
  initialIndex?: number,
  milestoneId?: string 
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

  // Reset index when gallery opens
  useEffect(() => {
    if (open) {
      setCurrentImageIndex(initialIndex);
    }
  }, [open, initialIndex]);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Gallery {milestoneId && `- ${milestoneId}`}</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video">
          <Image
            src={images[currentImageIndex]}
            alt={`Gallery image ${currentImageIndex + 1}`}
            fill
            className="rounded-lg object-cover"
          />

          {images.length > 1 && (
            <>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevious}
                  className="rounded-full bg-background/80 backdrop-blur-sm"
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="rounded-full bg-background/80 backdrop-blur-sm"
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex 
                        ? 'bg-primary' 
                        : 'bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
