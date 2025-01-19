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
              src="https://avatars.githubusercontent.com/u/1234567"
              alt="Eric Diakonia"
              fill
              className="rounded-full shadow-lg object-cover"
            />
          </div>
          
          <div className="space-y-6 prose prose-gray mx-auto">
            <h1 className="text-4xl font-bold">Eric Diakonia</h1>
            
            <p className="text-xl text-gray-600">
            Hi, I’m Eric—a product leader and curious builder who loves solving tricky problems and creating things that make life better. I believe the best solutions come from listening deeply, asking thoughtful questions, and not being afraid to try (and fail at) something new.
Over the years, I’ve learned that great teams are built on trust, creativity thrives with collaboration, and success often hides in the small, unglamorous steps along the way. Outside of work, I’m a dad, a tinkerer, and someone who’s endlessly fascinated by how technology can reshape the world in surprising ways.
If that sounds like your vibe, let’s connect—I’m always up for the next great challenge.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
