'use client';

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Define an interface for the node structure
interface NodeDetails {
  id: string;
  label: string;
  type: string;
  details?: {
    description?: string;
    skills?: string[];
    achievements?: string[];
  };
}

// Define props interface
interface NodeDetailProps {
  node: NodeDetails | null;
  onClose: () => void;
}

export function NodeDetail({ node, onClose }: NodeDetailProps) {
  if (!node?.details) return null;

  return (
    <Dialog open={!!node} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{node.label}</DialogTitle>
        </DialogHeader>
        
        {node.details.description && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{node.details.description}</p>
          </div>
        )}

        {node.details.skills && node.details.skills.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside">
              {node.details.skills.map((skill, index) => (
                <li key={index} className="text-muted-foreground">{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {node.details.achievements && node.details.achievements.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Achievements</h3>
            <ul className="list-disc list-inside">
              {node.details.achievements.map((achievement, index) => (
                <li key={index} className="text-muted-foreground">{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 flex justify-end">
          <Button onClick={onClose} variant="outline">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
