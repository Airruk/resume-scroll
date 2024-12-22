'use client';

export const mindMapData = {
  id: "root",
  label: "Product Leadership",
  type: "root",
  children: [
    {
      id: "leadership",
      label: "Leadership",
      type: "leadership",
      children: [
        {
          id: "team-management",
          label: "Team Management",
          type: "leadership",
          details: {
            title: "Engineering & Product Team Leadership",
            description: "Led cross-functional teams of 15+ members",
            achievements: [
              "Improved team velocity by 40%",
              "Implemented agile methodologies",
              "Mentored 10+ team members to promotion",
            ],
          },
        },
        // Add more leadership nodes
      ],
    },
    {
      id: "strategy",
      label: "Product Strategy",
      type: "strategy",
      children: [
        {
          id: "vision",
          label: "Vision & Roadmap",
          type: "strategy",
          details: {
            title: "Product Vision & Strategy",
            description:
              "Defined and executed product strategy for enterprise solutions",
            achievements: [
              "Launched 3 major product lines",
              "Increased revenue by 200%",
              "Expanded market presence to 5 new regions",
            ],
          },
        },
        // Add more strategy nodes
      ],
    },
    {
      id: "technical",
      label: "Technical Skills",
      type: "technical",
      children: [
        {
          id: "architecture",
          label: "System Architecture",
          type: "technical",
          details: {
            title: "Technical Architecture",
            description: "Designed scalable system architectures",
            achievements: [
              "Reduced system latency by 60%",
              "Implemented microservices architecture",
              "Led cloud migration initiatives",
            ],
          },
        },
        // Add more technical nodes
      ],
    },
  ],
};
