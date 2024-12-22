'use client';

import React, { useState } from "react";
import { MindMapCanvas } from "../(components)/mind-map-canvas";
import { FilterBar } from "../(components)/filter-bar";
import { NodeDetail } from "../(components)/node-detail";
import { mindMapData } from "../(components)/mind-map-data";

export default function MindMap() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedNode, setSelectedNode] = useState(null);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setSelectedNode(null);
  };

  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Product Leadership Journey
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore my career path through an interactive mind map
        </p>
      </div>

      <FilterBar
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      <div
        className="relative min-h-[600px] bg-card rounded-xl shadow-lg p-4"
      >
        <MindMapCanvas
          data={mindMapData}
          activeFilter={activeFilter}
          onNodeClick={handleNodeClick}
        />
      </div>

      {selectedNode && (
        <NodeDetail
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
        />
      )}
    </div>
  );
}
