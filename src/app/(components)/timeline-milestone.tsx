'use client';

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  ChevronDownIcon,
  CalendarIcon,
  GraduationCapIcon,
  HeartIcon,
  HomeIcon,
  BriefcaseIcon,
  ArrowUpRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ImageGallery } from "./image-gallery";
import { typeColors } from "./timeline-data";
import { Milestone } from "@/types/milestone";

export function TimelineMilestone({ 
  milestone, 
  index 
}: { 
  milestone: Milestone, 
  index: number 
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const isEven = index % 2 === 0;

  const getIcon = (type: string) => {
    switch (type) {
      case "career":
        return BriefcaseIcon;
      case "education":
        return GraduationCapIcon;
      case "family":
        return HeartIcon;
      case "personal":
        return HomeIcon;
      default:
        return BriefcaseIcon;
    }
  };

  const Icon = getIcon(milestone.type);

  const skillsOrTags = (milestone.skills || milestone.tags || []);

  // Helper function to format the date display
  const formatDateDisplay = () => {
    // Check if both startDate and endDate exist before comparing
    if (milestone.startDate && milestone.endDate && milestone.startDate.getTime() === milestone.endDate.getTime()) {
      // Format as a specific date
      return new Intl.DateTimeFormat('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: milestone.startDate.getDate() !== 1 ? 'numeric' : undefined 
      }).format(milestone.startDate);
    }
    
    // If it's a range of dates
    return milestone.date; // Fallback to original date string
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-center gap-12 ${
        isEven ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div
        className={`w-1/2 ${isEven ? "text-right pr-8" : "text-left pl-8"}`}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
        >
          {milestone.title}
        </motion.h3>
        {milestone.company || milestone.institution || milestone.location ? (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg font-medium mb-4"
          >
            {milestone.company || milestone.institution || milestone.location}
          </motion.p>
        ) : null}
        <div
          className={`flex items-center gap-3 text-sm text-muted-foreground ${
            isEven ? "justify-end" : "justify-start"
          }`}
        >
          <CalendarIcon className="h-4 w-4" />
          <span>{formatDateDisplay()}</span>
        </div>
        {milestone.field && (
          <div
            className={`flex items-center gap-3 mt-3 text-sm text-muted-foreground ${
              isEven ? "justify-end" : "justify-start"
            }`}
          >
            <GraduationCapIcon className="h-4 w-4" />
            <span>{milestone.field}</span>
          </div>
        )}
      </div>

      <div
        className="relative w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="w-4 h-4 rounded-full bg-primary"
        />
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="w-1/2"
      >
        <Card
          className="transition-all duration-300 hover:shadow-lg border-primary/10"
        >
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between mb-4">
              <Badge className={typeColors[milestone.type as keyof typeof typeColors]}>
                <Icon className="w-4 h-4 mr-2" />
                {milestone.type.charAt(0).toUpperCase() +
                  milestone.type.slice(1)}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-muted-foreground hover:text-primary"
              >
                {isExpanded ? "Show Less" : "Show More"}
                <ChevronDownIcon
                  className={`h-4 w-4 ml-2 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </div>
            {milestone.role && (
              <CardTitle className="text-xl mb-4">
                {milestone.role}
              </CardTitle>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              {milestone.description}
            </p>

            {milestone.images && milestone.images.length > 0 && (
              <div className={`grid ${isExpanded ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
                {(isExpanded ? milestone.images : [milestone.images[0]]).map((image: string, idx: number) => {
                  // Determine if this is the main (larger) image
                  const isMainImage = !isExpanded || idx === 0;
                  
                  return (
                    <AspectRatio 
                      key={idx} 
                      ratio={16 / 9} 
                      className={`w-full ${isMainImage ? 'col-span-2' : 'col-span-1'}`}
                    >
                      <div className="group relative w-full h-full">
                        <Image
                          src={image}
                          alt={`${milestone.type} visual ${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="rounded-lg transition-transform duration-300 group-hover:scale-105 object-cover"
                          onClick={() => {
                            // When expanded, clicking any image will make it the main image
                            if (isExpanded && milestone.images) {
                              // Swap the clicked image with the first image
                              const newImages = [...milestone.images];
                              [newImages[0], newImages[idx]] = [newImages[idx], newImages[0]];
                              milestone.images = newImages;
                            }
                            setSelectedImageIndex(0); // Always open the first (now main) image
                            setGalleryOpen(true);
                          }}
                        />

                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                          <ArrowUpRightIcon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </AspectRatio>
                  );
                })}
              </div>
            )}

            <motion.div
              initial={false}
              animate={{ 
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
                marginTop: isExpanded ? 24 : 0 // Add some spacing when expanded
              }}
              transition={{ 
                duration: 0.3, 
                ease: "easeInOut" 
              }}
              className="overflow-hidden"
            >
              {isExpanded && (
                <div className="space-y-6 pt-6 border-t">
                  {(milestone.achievements || milestone.highlights) && (
                    <div>
                      <h4 className="font-semibold mb-3">
                        {milestone.achievements
                          ? "Key Achievements"
                          : "Highlights"}
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        {(milestone.achievements || milestone.highlights)?.map(
                          (item: string, idx: number) => (
                            <li key={idx}>
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {(milestone.skills || milestone.tags) && (
                    <div>
                      <h4 className="font-semibold mb-3">
                        {milestone.skills ? "Skills & Technologies" : "Tags"}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillsOrTags.map(
                          (item: string, idx: number) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-primary/5 text-primary hover:bg-primary/10"
                            >
                              {item}
                            </Badge>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      <ImageGallery 
        images={milestone.images || []} 
        open={galleryOpen} 
        onOpenChange={setGalleryOpen}
        initialIndex={selectedImageIndex ? Number(milestone.id) : undefined}
        milestoneId={milestone.id.toString()}
      />
    </motion.div>
  );
}