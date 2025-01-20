'use client'

import Image from 'next/image'
import MainLayout from '@/components/templates/main-layout'

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 relative w-48 h-48 mx-auto">
            <Image
              src="https://avatars.githubusercontent.com/u/868011"
              alt="Eric Doster"
              fill
              className="rounded-full shadow-lg object-cover"
            />
          </div>
          
          <div className="space-y-6 prose prose-gray mx-auto">
            <h1 className="text-4xl font-bold">Eric Doster</h1>
            <h3 className="text-4xl font-italic">Air-ruk Daw-ster</h3>
            
            <p className="text-xl text-gray-600">
            Hi, I&apos;m Eric.<br />I&apos;m a product leader and curious builder who loves solving tricky problems and creating things that make life better. <br />I believe the best solutions come from listening deeply, asking thoughtful questions, and not being afraid to try (and fail at) something new.
Over the years, I&apos;ve learned that great teams are built on trust, creativity thrives with collaboration, and success often hides in the small, unglamorous steps along the way. <br />Outside of work, I&apos;m a dad, a tinkerer, and someone who&apos;s endlessly fascinated by how technology can reshape the world in surprising ways.
If that sounds like your vibe, let&apos;s connect—I&apos;m always up for the next great challenge.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
