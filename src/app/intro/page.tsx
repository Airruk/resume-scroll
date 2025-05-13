'use client'

import MainLayout from '@/components/templates/main-layout'

export default function IntroPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Video Introduction</h1>
          <div className="aspect-video w-full">
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe 
                src="https://www.loom.com/embed/cd467045f1aa4f87b1314e8b2f5f247c?sid=1c80c119-0335-45d7-a7e6-fd8b5c9c52c3" 
                frameBorder="0" 
                allowFullScreen 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
