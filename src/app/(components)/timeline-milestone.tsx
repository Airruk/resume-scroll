'use client';

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  ChevronDownIcon,
  CalendarIcon,
  MapPinIcon,
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

export function TimelineMilestone({ milestone, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const isEven = index % 2 === 0;

  const getIcon = (type) => {
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
          <span>{milestone.date}</span>
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
              <Badge className={typeColors[milestone.type]}>
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

            {milestone.images && (
              <div className="grid grid-cols-2 gap-4">
                {milestone.images.map((image, idx) => (
                  <AspectRatio key={idx} ratio={16 / 9} id={`nosgt2_${index}`}>
                    <div className="group relative" id={`d75u9z_${index}`}>
                      <img
                        src={`https://picsum.photos/seed/${milestone.id}_${idx}/800/450`}
                        alt={`${milestone.type} visual ${idx + 1}`}
                        className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        onClick={() => setGalleryOpen(true)}
                        id={`07as27_${index}`}
                      />

                      <div
                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"
                        id={`xmwkyd_${index}`}
                      >
                        <ArrowUpRightIcon
                          className="w-6 h-6 text-white"
                          id={`xvg1q0_${index}`}
                        />
                      </div>
                    </div>
                  </AspectRatio>
                ))}
              </div>
            )}

            <motion.div
              animate={{ height: isExpanded ? "auto" : 0 }}
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
                      <ul
                        className="list-disc list-inside space-y-2 text-sm text-muted-foreground"
                      >
                        {(milestone.achievements || milestone.highlights)?.map(
                          (item, idx) => (
                            <li key={idx}>
                              {item}
                            </li>
                          ),
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
                        {(milestone.skills || milestone.tags).map(
                          (item, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-primary/5 text-primary hover:bg-primary/10"
                              id={`5j5wca_${index}`}
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
        milestoneId={milestone.id}
      />
    </motion.div>
  );
}
