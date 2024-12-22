'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import {
  BrainCircuitIcon,
  UsersIcon,
  LightbulbIcon,
  CodeIcon,
} from "lucide-react";

export function FilterBar({ activeFilter, onFilterChange }) {
  const filters = [
    { id: "all", label: "All", icon: BrainCircuitIcon },
    { id: "leadership", label: "Leadership", icon: UsersIcon },
    { id: "strategy", label: "Strategy", icon: LightbulbIcon },
    { id: "technical", label: "Technical", icon: CodeIcon },
  ];

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {filters.map((filter, index) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          onClick={() => onFilterChange(filter.id)}
          className="min-w-[120px]"
          id={`5laz7n_${index}`}
        >
          <filter.icon className="w-4 h-4 mr-2" id={`bcfxd3_${index}`} />
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
