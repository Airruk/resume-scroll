import { MilestoneType } from '@/types/milestone'

export const typeColors = {
  career: 'text-blue-500 dark:text-blue-400',
  education: 'text-green-500 dark:text-green-400',
  personal: 'text-purple-500 dark:text-purple-400',
  family: 'text-red-500 dark:text-red-400',
  award: 'text-yellow-500 dark:text-yellow-400',
  research: 'text-indigo-500 dark:text-indigo-400',
  social: 'text-pink-500 dark:text-pink-400'
} as const

export type ColorType = typeof typeColors[MilestoneType]

export const timelineData = [
  {
    id: 1,
    type: 'career' as MilestoneType,
    date: '2023 - Present',
    title: 'Senior Product Manager',
    description: `Leading product strategy and development for our enterprise SaaS platform. Driving innovation through data-driven decision making and close collaboration with engineering, design, and customer success teams.

Key Achievements:
• Launched 3 major product features that increased user engagement by 45%
• Reduced customer churn by 30% through targeted feature improvements
• Led cross-functional team of 15 members across 3 time zones
• Implemented agile methodologies that improved delivery speed by 60%`,
    skills: ['Product Strategy', 'Agile', 'User Research', 'Data Analytics', 'Team Leadership'],
    images: []
  },
  {
    id: 2,
    type: 'education' as MilestoneType,
    date: '2021',
    title: 'MBA, Product Management',
    description: `Completed MBA with focus on Product Management and Technology Innovation. 
    
Key Achievements:
• Graduated with Distinction (3.8 GPA)
• Led product development workshop for 30+ students
• Published research paper on AI in Product Management
• Won Innovation Challenge 2021`,
    skills: ['Business Strategy', 'Product Development', 'Market Analysis', 'Leadership'],
    images: []
  },
  {
    id: 3,
    type: 'career' as MilestoneType,
    date: '2019 - 2021',
    title: 'Product Manager',
    description: `Managed full product lifecycle for B2B SaaS platform serving 50,000+ users.

Key Achievements:
• Increased monthly recurring revenue by 40%
• Launched mobile app with 100,000+ downloads
• Reduced technical debt by 35%
• Implemented customer feedback loop that improved satisfaction scores by 25%`,
    skills: ['Product Management', 'UX Design', 'B2B SaaS', 'Mobile Strategy'],
    images: []
  },
  {
    id: 4,
    type: 'personal' as MilestoneType,
    date: '2020',
    title: 'Tech Community Leader',
    description: `Founded local product management meetup group with 500+ members.

Key Achievements:
• Organized 12 successful events with industry speakers
• Mentored 10+ aspiring product managers
• Built strong network of product professionals
• Created online resource library for community`,
    skills: ['Community Building', 'Event Management', 'Mentoring', 'Public Speaking'],
    images: []
  },
  {
    id: 5,
    type: 'career' as MilestoneType,
    date: '2017 - 2019',
    title: 'Associate Product Manager',
    description: `Started career in product management, focusing on user research and feature development.

Key Achievements:
• Launched 5 new features that increased user retention by 25%
• Conducted 100+ user interviews
• Created product analytics dashboard used company-wide
• Improved sprint planning efficiency by 40%`,
    skills: ['Product Analytics', 'User Research', 'Agile Methodologies', 'Feature Specification'],
    images: []
  },
  {
    id: 6,
    type: 'education' as MilestoneType,
    date: '2017',
    title: 'BS, Computer Science',
    description: `Graduated with honors in Computer Science with minor in Business Administration.

Key Achievements:
• Dean's List all semesters
• Led Computer Science Society
• Completed 3 internships
• Senior project featured at university showcase`,
    skills: ['Software Development', 'Algorithms', 'Data Structures', 'Project Management'],
    images: []
  }
]
