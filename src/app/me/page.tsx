'use client'

import Image from 'next/image'
// Fix JSX identifier error by using destructured import
import { default as MainLayout } from '@/components/templates/main-layout'

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
            Hi &#128075; 
            <br />
            <br />I&apos;m Eric.
            <br />
          <br />I&apos;m a <strong className="font-highlight">builder</strong> & problem solver who loves creating things <strong className="font-highlight-invert">well</strong>; <strong className="font-highlight">making life better</strong> for <strong className="font-highlight-invert">the team</strong> I&apos;m building with and the users of the things that we create. 
            <br />
            <br />I believe the best solutions come from listening <strong className="font-highlight">deeply</strong>, asking <strong className="font-highlight-invert">thoughtful</strong> questions, and <strong className="font-highlight">not being afraid</strong> to try (and fail at) something new.
            <br />
            <br />Over the years, I&apos;ve learned that great teams are <strong className="font-highlight">built on trust</strong>, <strong className="font-highlight-invert">creativity thrives with collaboration</strong>, and success often hides in the small, unglamorous steps along the way. 
            <br />
            <br />Outside of work, I&apos;m a <strong className="font-highlight">husband</strong>, a <strong className="font-highlight-invert">dad</strong>, a tinkerer, and someone who&apos;s <strong className="font-highlight">endlessly fascinated</strong> by how technology can <strong className="font-highlight-invert">help us reshape</strong> our world to the benefit of all.
            <br />
            <br />If I sound like your vibe,
            <br />
            <br /><a href="https://www.linkedin.com/in/ericcraigdoster?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsjALuwF9T4WuuR6lVejreA%3D%3D">let&apos;s connect! </a>
            <br />or
            
            <style jsx>{`
              .libutton {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 7px;
                text-align: center;
                outline: none;
                text-decoration: none !important;
                color: #ffffff !important;
                width: 200px;
                height: 32px;
                border-radius: 16px;
                background-color: #0A66C2;
                font-family: "SF Pro Text", Helvetica, sans-serif;
                margin-left: auto;
                margin-right: auto;
              }
            `}</style>
            <div className="flex justify-center my-4">
              <a className="libutton" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=ericcraigdoster" target="_blank" rel="noopener noreferrer">Follow on LinkedIn</a>
            </div>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
