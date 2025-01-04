'use client';

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      const timer = setTimeout(() => setMounted(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
  };

  if (!mounted) return null;

  return (
    <>
      {/* Portal the modal to the body to ensure proper positioning */}
      <div 
        className={cn(
          "fixed inset-0 z-50",
          "flex items-center justify-center",
          "transition-all duration-200",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        {/* Backdrop */}
        <div 
          className={cn(
            "fixed inset-0",
            "bg-black/50 backdrop-blur-sm",
            "transition-opacity duration-200",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={onClose}
        />

        {/* Modal */}
        <div 
          className={cn(
            "relative z-50",
            "w-full max-w-lg mx-4",
            "bg-background border rounded-lg shadow-lg",
            "p-6",
            "transition-all duration-200",
            isOpen 
              ? "translate-y-0 scale-100 opacity-100" 
              : "translate-y-4 scale-95 opacity-0"
          )}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Contact Me</h2>
            <button
              onClick={onClose}
              className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Your name" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="Your email" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
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
        </div>
      </div>
    </>
  );
}
