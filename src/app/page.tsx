'use client';

import React, { useState, useEffect } from "react";
import { TimelineFilters } from "./(components)/timeline-filters";
import { TimelineMilestone } from "./(components)/timeline-milestone";
import { timelineData } from "./(components)/timeline-data";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import { Milestone } from "@/types/milestone";
import { Header } from "./(components)/header";

export default function Timeline() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [visibleMilestones, setVisibleMilestones] = useState<Milestone[]>([]);
  const [page, setPage] = useState<number>(1);
  
  const milestonesPerPage = 50;

  const sortedTimelineData: Milestone[] = [...timelineData].sort((a, b) => {
    const aYear = parseInt(a.date.split(" ")[0]);
    const bYear = parseInt(b.date.split(" ")[0]);
    return bYear - aYear;
  });

  const filteredMilestones: Milestone[] = sortedTimelineData.filter(
    (milestone) => activeFilter === "all" || milestone.type === activeFilter,
  );

  useEffect(() => {
    setPage(1);
    setVisibleMilestones(
      filteredMilestones.slice(0, milestonesPerPage).map(milestone => ({
        ...milestone,
        id: milestone.id.toString()
      }))
    );
  }, [activeFilter, filteredMilestones]);

  const loadMore = () => {
    const nextPage = page + 1;
    const start = (nextPage - 1) * milestonesPerPage;
    const end = start + milestonesPerPage;

    setVisibleMilestones((prevVisibleMilestones) => [
      ...prevVisibleMilestones,
      ...filteredMilestones.slice(start, end).map(milestone => ({
        ...milestone,
        id: milestone.id.toString()
      })),
    ]);
    setPage(nextPage);
  };

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="w-full">
        <Header activeFilter={activeFilter} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8 pt-64"
      >
        <div>
          <h1
            className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            Product Leadership Journey
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Explore my career progression through key milestones, achievements,
            and contributions to product development and team leadership interwoven with some key tidbits about my personal journey.
          </p>
        </div>

        <TimelineFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          className="bg-background/95 backdrop-blur-md py-3 px-6 rounded-full border shadow-lg inline-flex"
        />
      </motion.div>

      <div className="relative mt-24">
        <div
          className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-primary/50 to-primary/5 -translate-x-1/2"
        />

        <div className="space-y-24">
          {visibleMilestones.map((milestone) => (
            <TimelineMilestone
              key={milestone.id}
              milestone={milestone}
              index={Number(milestone.id)}
            />
          ))}
        </div>

        {visibleMilestones.length < filteredMilestones.length && (
          <div className="flex justify-center mt-16">
            <Button
              onClick={loadMore}
              variant="outline"
              className="group"
              size="lg"
            >
              Load More
              <ArrowDownIcon
                className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform"
              />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}