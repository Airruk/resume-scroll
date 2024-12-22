'use client';

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export function MindMapCanvas({ data, activeFilter, onNodeClick }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const tree = d3
      .tree()
      .size([2 * Math.PI, Math.min(width, height) / 3])
      .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth);

    const root = d3.hierarchy(data);
    const links = tree(root).links();
    const nodes = root.descendants();

    // Create links
    const link = svg
      .append("g")
      .selectAll("path")
      .data(links)
      .join("path")
      .attr(
        "d",
        d3
          .linkRadial()
          .angle((d) => d.x)
          .radius((d) => d.y),
      )
      .attr("class", "stroke-muted-foreground/20")
      .attr("fill", "none")
      .attr("stroke-width", 1.5);

    // Create nodes
    const node = svg
      .append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr(
        "transform",
        (d) => `
 rotate(${(d.x * 180) / Math.PI - 90})
 translate(${d.y},0)
 `,
      );

    // Add circles for nodes
    node
      .append("circle")
      .attr("r", 6)
      .attr(
        "class",
        (d) => `
 fill-background
 stroke-2
 ${
   activeFilter === "all" || d.data.type === activeFilter
     ? "stroke-primary"
     : "stroke-muted-foreground/20"
 }
 transition-colors
 duration-300
 cursor-pointer
 hover:stroke-primary
 `,
      )
      .on("click", (event, d) => {
        onNodeClick(d.data);
      });

    // Add labels
    node
      .append("text")
      .attr("dy", "0.31em")
      .attr("x", (d) => (d.x < Math.PI === !d.children ? 6 : -6))
      .attr("text-anchor", (d) =>
        d.x < Math.PI === !d.children ? "start" : "end",
      )
      .attr("transform", (d) => (d.x >= Math.PI ? "rotate(180)" : null))
      .text((d) => d.data.label)
      .attr("class", "text-sm fill-foreground");
  }, [data, activeFilter, onNodeClick]);

  return (
    <svg
      ref={svgRef}
      className="w-full h-full"
      style={{ minHeight: "600px" }}
    />
  );
}
