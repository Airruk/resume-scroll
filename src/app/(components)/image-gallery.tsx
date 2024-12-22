'use client';

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";

export function ImageGallery({ images, open, onOpenChange, milestoneId }) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Gallery</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video">
          <img
            src={`https://picsum.photos/seed/${milestoneId}_${currentImageIndex}/1200/675`}
            alt={`Gallery image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />

          <div
            className="absolute inset-0 flex items-center justify-between p-4"
          >
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
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <Button
              key={index}
              variant={index === currentImageIndex ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentImageIndex(index)}
              className="w-8 h-8 p-0 rounded-full"
              id={`m0sm33_${index}`}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
