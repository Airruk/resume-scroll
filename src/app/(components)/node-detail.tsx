'use client';

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NodeDetail({ node, onClose }) {
  if (!node?.details) return null;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader
        className="flex flex-row items-center justify-between"
      >
        <CardTitle>{node.details.title}</CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          {node.details.description}
        </p>
        <div className="space-y-2">
          <h4 className="font-semibold">
            Key Achievements
          </h4>
          <div className="flex flex-wrap gap-2">
            {node.details.achievements.map((achievement, index) => (
              <Badge key={index} variant="secondary" id={`5ib9sa_${index}`}>
                {achievement}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
