export interface XanoResponse<T> {
  items: T[]
  count: number
  page: number
  total: number
  totalPages: number
}

export interface XanoError {
  message: string
  status: number
}

export interface ApiResponse<T> {
  data?: T
  error?: XanoError
}

export interface TimelineApiItem {
  id: number
  type: string
  start_date: string
  end_date?: string
  title: string
  company?: string
  location?: string
  description: string
  skills: string[]
  images: {
    url: string
    alt: string
  }[]
  role?: string
  company_size?: string
  direct_reports?: number
  achievements?: string[]
  tags?: string[]
  technologies?: string[]
  key_responsibilities?: string[]
  project_highlights?: string[]
  certifications?: string[]
  awards?: string[]
}

// Using TimelineApiItem for both list and detail views since they have the same shape
export type TimelineDetailApiItem = TimelineApiItem
