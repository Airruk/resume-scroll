'use client';

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Define the props type
interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactForm({ open, onOpenChange }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">
              Name
            </Label>
            <Input 
              id="name" 
              name="name" 
              placeholder="Your name" 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">
              Email
            </Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="Your email" 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="min-h-[100px]"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
