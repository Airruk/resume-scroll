'use client';

import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { ContactIcon, FileTextIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { useScroll } from "framer-motion";
import { ContactForm } from "./contact-form";

export function Header() {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = React.useState(0);
  const [contactOpen, setContactOpen] = React.useState(false);
  const startYear = 1985;
  const endYear = new Date().getFullYear();
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i,
  );

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setProgress(value * 100);
    });
    return () => unsubscribe();
  }, [scrollYProgress, years, endYear]);

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b z-50"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/868011?v=4"
                alt="Profile"
              />

              <AvatarFallback>ED</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-bold text-xl">
                Eric Doster
              </div>
              <div className="text-sm text-muted-foreground">
              Believer | Husband | Father | Builder | Cultivator
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setContactOpen(true)}
            >
              <ContactIcon className="w-4 h-4 mr-2" />
              Contact
            </Button>
            <Button variant="outline" size="sm">
              <FileTextIcon className="w-4 h-4 mr-2" />
              Resume
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="relative pb-4">
        <Progress
          value={progress}
          className="h-1 rounded-none bg-muted/50"
        />

        <div
          className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-muted-foreground"
        >
          {years
            .filter((_, i) => i % 5 === 0)
            .map((year, index) => (
              <div
                key={year}
                className="relative"
                style={{
                  left: `${((year - startYear) / (years.length - 1)) * 100}%`,
                }}
                id={`3jawzp_${index}`}
              >
                <div
                  className="absolute -top-3 w-px h-2 bg-muted-foreground/20"
                  id={`5dc3k2_${index}`}
                />

                <div
                  className="absolute -top-8 transform -translate-x-1/2"
                  id={`rywttr_${index}`}
                >
                  {year}
                </div>
              </div>
            ))}
        </div>
      </div>

      <ContactForm
        open={contactOpen}
        onOpenChange={setContactOpen}
      />
    </header>
  );
}
