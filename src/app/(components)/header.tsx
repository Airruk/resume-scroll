'use client';

import React from "react";
import { useScroll } from "framer-motion";
import { timelineData } from "./timeline-data";
import { Button } from "@/components/ui/button";
import { ContactIcon, FileTextIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ContactForm } from "./contact-form";
import { 
  GraduationCapIcon,
  HeartIcon,
  BrainCircuitIcon, 
  BriefcaseIcon, 
  StarIcon, 
} from "lucide-react";
import { typeColors } from "./timeline-data";
import { ThemeToggle } from "./theme-toggle";

interface HeaderProps {
  activeFilter: string;
}

const categoryIcons = {
  all: BrainCircuitIcon,
  career: BriefcaseIcon,
  education: GraduationCapIcon,
  family: HeartIcon,
  personal: StarIcon,
};

const getCategoryColor = (type: string) => {
  const colorClass = typeColors[type as keyof typeof typeColors];
  if (!colorClass) return "bg-primary/20 text-primary";
  return colorClass; // Use the full color class string
};

export function Header({ activeFilter }: HeaderProps) {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = React.useState(100);
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());
  const [contactOpen, setContactOpen] = React.useState(false);
  const [showCallout, setShowCallout] = React.useState(true);

  // Hide callout after 5 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowCallout(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Filter timeline data based on active filter
  const filteredData = React.useMemo(() => {
    return timelineData.filter(
      (milestone) => activeFilter === "all" || milestone.type === activeFilter
    ).sort((a, b) => b.endDate.getTime() - a.endDate.getTime());
  }, [activeFilter]);

  const startYear = React.useMemo(() => 
    Math.min(...filteredData.map(item => item.startDate.getFullYear())),
    [filteredData]
  );
  
  const endYear = new Date().getFullYear();
  
  const years = React.useMemo(() => 
    Array.from(
      { length: endYear - startYear + 1 },
      (_, i) => endYear - i,
    ).reverse(),
    [startYear, endYear]
  );

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      // Find the current milestone based on scroll position
      const milestoneIndex = Math.floor(value * filteredData.length);
      const currentMilestone = filteredData[filteredData.length - 1 - milestoneIndex];
      
      if (currentMilestone) {
        const milestoneEndYear = currentMilestone.endDate.getFullYear();
        // Invert the progress calculation so 100% is at the right (newest) and 0% is at the left (oldest)
        const progressPercentage = 100 - ((milestoneEndYear - startYear) / (endYear - startYear)) * 100;
        setProgress(100 - progressPercentage); // Invert again to make the cursor move right to left
        setCurrentYear(milestoneEndYear);
      } else {
        // If no milestone is found (at the very start), set to the most recent year
        setProgress(100);
        setCurrentYear(endYear);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, startYear, endYear, filteredData]);

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b z-50"
    >
      <div className="container mx-auto px-4 py-12">
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

      <div className="relative pb-24 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Timeline cursor */}
            <div className="relative h-1">
              <div className="absolute left-0 right-0 h-full bg-muted/50" />
              <div className="absolute transform -translate-x-1/2 transition-all duration-200"
                style={{ 
                  left: `${progress}%`,
                }}
              >
                {/* Current year display */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 font-medium text-green-800 dark:text-green-400">
                  {currentYear}
                  
                  {/* Callout */}
                  {showCallout && (
                    <>
                      {/* Circle */}
                      <div className="absolute -inset-4 border-2 border-dashed border-green-800 dark:border-green-400 rounded-full animate-[spin_10s_linear_infinite]" />
                      
                      {/* "You Are Here" text */}
                      <div 
                        className="absolute -right-24 top-0 font-handwritten text-lg text-green-800 dark:text-green-400 transform -rotate-12 animate-bounce"
                      >
                        You Are Here
                      </div>
                    </>
                  )}
                </div>
                
                {/* Cursor line */}
                <div className="h-4 w-px bg-green-800 dark:bg-green-400 -top-1.5" />
              </div>
            </div>

            {/* Year markers */}
            <div
              className="absolute left-0 right-0 flex justify-between px-4 text-xs text-muted-foreground"
            >
              {years
                .filter((_, i) => i % 5 === 0)
                .map((year) => (
                  <div
                    key={year}
                    className="relative"
                    style={{
                      position: 'absolute',
                      left: `${((year - startYear) / (endYear - startYear)) * 100}%`,
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <div
                      className="absolute top-1 w-px h-2 bg-muted-foreground/20"
                    />
                    <div
                      className="absolute -top-6 transform -translate-x-1/2"
                    >
                      {year}
                    </div>
                  </div>
                ))}
            </div>

            {/* Milestone marker icons */}
            <div className="absolute top-4 left-0 right-0">
              {Object.entries(
                filteredData.reduce((acc, milestone) => {
                  const startYear = milestone.startDate.getFullYear();
                  const position = ((startYear - Math.min(...years)) / (Math.max(...years) - Math.min(...years))) * 100;
                  const positionKey = position.toFixed(2);
                  
                  if (!acc[positionKey]) {
                    acc[positionKey] = [];
                  }
                  acc[positionKey].push(milestone);
                  return acc;
                }, {} as Record<string, typeof filteredData>)
              ).map(([position, milestones]) => (
                <div
                  key={position}
                  className="absolute transform -translate-x-1/2"
                  style={{
                    left: `${parseFloat(position)}%`,
                  }}
                >
                  {milestones.map((milestone, index) => {
                    const Icon = categoryIcons[milestone.type as keyof typeof categoryIcons];
                    const colorClass = getCategoryColor(milestone.type);
                    
                    return (
                      <div
                        key={milestone.id}
                        className={`rounded-sm p-0.5 mb-1 ${colorClass}`}
                        style={{
                          transform: `translateY(${index * 2}px)`,
                        }}
                        title={`${milestone.title} (${milestone.startDate.getFullYear()})`}
                      >
                        <Icon className="w-[9px] h-[9px]" />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ContactForm
        open={contactOpen}
        onOpenChange={setContactOpen}
      />
    </header>
  );
}
