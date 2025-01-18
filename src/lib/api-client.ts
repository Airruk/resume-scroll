import { ApiResponse, XanoError, XanoResponse } from '@/types/api'

const XANO_BASE_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:iPX4-MHX'

class ApiError extends Error {
  constructor(public error: XanoError) {
    super(error.message)
    this.name = 'ApiError'
  }
}

export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  if (!XANO_BASE_URL) {
    console.error('XANO_BASE_URL is not defined in environment variables')
    throw new Error('XANO_BASE_URL is not defined')
  }

  const url = `${XANO_BASE_URL}${endpoint}`
  console.log('Fetching from:', url)

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    if (!response.ok) {
      console.error('API Error Response:', response.status, response.statusText)
      const error: XanoError = await response.json()
      throw new ApiError(error)
    }

    const data: T = await response.json()
    console.log('API Response:', data)
    return { data }
  } catch (error) {
    console.error('API Error:', error)
    if (error instanceof ApiError) {
      return { error: error.error }
    }
    
    return {
      error: {
        message: error instanceof Error ? error.message : 'An unknown error occurred',
        status: 500,
      },
    }
  }
}

export async function fetchPaginatedApi<T>(
  endpoint: string,
  page: number = 1,
  limit: number = 10,
  options: RequestInit = {}
): Promise<ApiResponse<XanoResponse<T>>> {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  })

  return fetchApi<XanoResponse<T>>(`${endpoint}?${queryParams}`, options)
}
