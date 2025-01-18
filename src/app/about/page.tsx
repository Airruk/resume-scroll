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
              I&apos;m a passionate software engineer with over a decade of experience building innovative solutions 
              that make a difference. My journey in technology has been driven by a desire to create 
              meaningful impact through elegant, efficient code.
            </p>

            <p className="text-gray-600">
              Throughout my career, I&apos;ve had the privilege of working with cutting-edge technologies 
              and brilliant teams. I specialize in full-stack development, with a particular focus 
              on creating scalable, user-centric applications. When I&apos;m not coding, you&apos;ll find me 
              mentoring other developers, contributing to open-source projects, or exploring new 
              technologies.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
