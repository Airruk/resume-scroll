'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { 
  ContactIcon, 
  FileTextIcon, 
  PaletteIcon,
  PlayCircleIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ContactModal } from "@/components/organisms/contact-modal";
import { ThemeToggle } from "@/components/molecules/theme-toggle";

interface HeaderProps {
  className?: string;
}

export function Header({ className = '' }: HeaderProps) {
  const [contactOpen, setContactOpen] = React.useState(false);

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-200
        bg-background/80 backdrop-blur-sm border-b
        ${className}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage 
                src="https://github.com/airruk.png" 
                alt="Profile picture" 
              />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
            <nav className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="/">Career History</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="/about">About</a>
              </Button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              asChild
            >
              <a href="https://intro.doster.fyi" target="_blank" rel="noopener noreferrer">
                <PlayCircleIcon className="mr-2 h-4 w-4" />
                Intro
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setContactOpen(true)}
            >
              <ContactIcon className="mr-2 h-4 w-4" />
              Contact
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="/resume">
                <FileTextIcon className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="/design">
                <PaletteIcon className="mr-2 h-4 w-4" />
                Design
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <ContactModal
        open={contactOpen}
        onOpenChange={setContactOpen}
      />
    </header>
  );
}
