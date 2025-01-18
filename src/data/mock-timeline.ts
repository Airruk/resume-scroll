import { XanoTimelineItem } from '@/types/timeline'

export const mockTimelineData: XanoTimelineItem[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    startDate: "2023-01-01",
    displayDate: "Jan 2023 - Present",
    type: "career",
    description: "Leading development of cloud-native applications",
    location: "San Francisco, CA",
    role: "Tech lead for cloud infrastructure team",
    company: "Tech Corp",
    companySize: 500,
    directReports: 3,
    institution: "",
    field: "",
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2023-01-01T00:00:00Z",
    _timeline_entry_skills: [
      {
        id: 1,
        timeline_entry_id: 1,
        skill_id: 1,
        _skills: [
          {
            id: 1,
            name: "Kubernetes",
            created_at: "2023-01-01T00:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Master of Computer Science",
    startDate: "2019-09-01",
    displayDate: "Sep 2019 - Dec 2020",
    type: "education",
    description: "Specialized in Machine Learning and Distributed Systems",
    location: "Stanford, CA",
    role: "Graduate Student",
    company: "",
    companySize: 0,
    directReports: 0,
    institution: "Stanford University",
    field: "Computer Science",
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2023-01-01T00:00:00Z",
    _timeline_entry_skills: [
      {
        id: 2,
        timeline_entry_id: 2,
        skill_id: 2,
        _skills: [
          {
            id: 2,
            name: "Machine Learning",
            created_at: "2023-01-01T00:00:00Z"
          }
        ]
      },
      {
        id: 3,
        timeline_entry_id: 2,
        skill_id: 3,
        _skills: [
          {
            id: 3,
            name: "Distributed Systems",
            created_at: "2023-01-01T00:00:00Z"
          }
        ]
      }
    ]
  }
]
