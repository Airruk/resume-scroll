'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import {
  GraduationCapIcon,
  HeartIcon,
  HomeIcon,
  BrainCircuitIcon,
  BriefcaseIcon,
  UsersIcon,
  StarIcon,
} from "lucide-react";

export function TimelineFilters({
  activeFilter,
  onFilterChange,
  className = "",
}) {
  const filters = [
    { id: "all", label: "All", icon: BrainCircuitIcon },
    { id: "career", label: "Career", icon: BriefcaseIcon },
    { id: "education", label: "Education", icon: GraduationCapIcon },
    { id: "family", label: "Family", icon: HeartIcon },
    { id: "personal", label: "Personal", icon: StarIcon },
  ];

  return (
    <div className={className}>
      <div className="flex justify-center gap-4 flex-wrap">
        {filters.map((filter, index) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            onClick={() => onFilterChange(filter.id)}
            className={`rounded-full px-6 py-2 transition-all duration-300 ${
              activeFilter === filter.id
                ? "bg-primary text-primary-foreground shadow-lg"
                : "hover:bg-primary/10"
            }`}
            id={`jmypxp_${index}`}
          >
            <filter.icon className="w-4 h-4 mr-3" id={`u88ccd_${index}`} />
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
