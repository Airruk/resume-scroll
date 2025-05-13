'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import MainLayout from '@/components/templates/main-layout'

export default function LandingPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to me page
    router.push('/me')
  }, [])

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome</h1>
          <p className="text-xl">Redirecting to personal information...</p>
        </div>
      </div>
    </MainLayout>
  )
}