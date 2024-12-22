'use client';

export const timelineData = [
  {
    id: 1,
    date: "2022 - Present",
    title: "Senior Product Leader",
    company: "Tech Innovation Co",
    role: "Head of Product Strategy",
    type: "career",
    companySize: "5000+",
    directReports: "25",
    description:
      "Led cross-functional teams in developing and launching enterprise SaaS solutions, resulting in 200% revenue growth.",
    achievements: [
      "Spearheaded the development and launch of 3 major product lines",
      "Grew revenue from $2M to $6M in 18 months",
      "Built and mentored a team of 15 product managers",
      "Established product strategy framework used across the organization",
    ],

    images: [
      "team-meeting-1",
      "product-launch-1",
      "team-celebration-1",
      "conference-talk-1",
    ],

    skills: [
      "Product Strategy",
      "Team Leadership",
      "Enterprise SaaS",
      "Agile",
      "Innovation",
      "Go-to-Market Strategy",
      "Product Vision",
    ],
  },
  {
    id: 2,
    date: "2020",
    title: "Wedding Day",
    location: "Central Park, New York",
    type: "family",
    description: "Married my best friend and partner in life's adventures.",
    highlights: [
      "Beautiful outdoor ceremony",
      "Surrounded by family and friends",
      "Started our new chapter together",
    ],

    images: ["wedding-ceremony", "first-dance", "family-photo", "celebration"],
    tags: ["Love", "Family", "Celebration", "New Beginnings"],
  },
  {
    id: 3,
    date: "2015",
    title: "Master's Degree",
    institution: "Stanford University",
    type: "education",
    field: "Computer Science",
    description: "Specialized in Machine Learning and AI applications",
    achievements: [
      "Graduated with honors",
      "Published research paper on ML applications",
      "Led student research group",
      "Teaching Assistant for undergraduate courses",
    ],

    images: [
      "graduation",
      "research-presentation",
      "campus-life",
      "thesis-defense",
    ],

    skills: ["Machine Learning", "AI", "Research", "Academic Leadership"],
  },
  {
    id: 4,
    date: "2022",
    title: "First Home",
    location: "San Francisco Bay Area",
    type: "personal",
    description: "Achieved the milestone of purchasing our first home",
    highlights: [
      "Modern three-bedroom house",
      "Started home renovation project",
      "Created home office space",
      "Established roots in the community",
    ],

    images: ["house-front", "renovation-progress", "home-office", "garden"],
    tags: ["Home Ownership", "Investment", "Lifestyle", "Achievement"],
  },
  {
    id: 5,
    date: "2023",
    title: "Welcomed Our First Child",
    type: "family",
    description: "Became parents to our beautiful daughter Emma",
    highlights: [
      "Life-changing moment",
      "New perspective on work-life balance",
      "Learning to be parents",
      "Growing our family",
    ],

    images: ["baby-announcement", "family-photo", "nursery", "first-smile"],
    tags: ["Parenthood", "Family", "Love", "Growth"],
  },
  // ... More milestones
];

export const typeColors = {
  career: "bg-blue-100 text-blue-800 dark:bg-blue-400/20 dark:text-blue-400",
  education:
    "bg-purple-100 text-purple-800 dark:bg-purple-400/20 dark:text-purple-400",
  family: "bg-pink-100 text-pink-800 dark:bg-pink-400/20 dark:text-pink-400",
  personal:
    "bg-green-100 text-green-800 dark:bg-green-400/20 dark:text-green-400",
};
