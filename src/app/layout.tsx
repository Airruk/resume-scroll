import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// Import Script component removed as we use it in GTM component
import './globals.css'
import './favicon.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { QueryProvider } from '@/components/providers/query-provider'
import { FilterProvider } from '@/contexts/filter-context'
import { Toaster } from '@/components/ui/toaster'
import { YearProvider } from '@/contexts/year-context'
import GtmDebug from '@/components/atoms/gtm-debug'
import GoogleTagManager from '@/components/atoms/gtm'

const inter = Inter({ subsets: ['latin'] })

// Get GTM ID from environment variable
const gtmId = process.env.NEXT_PUBLIC_GTM_ID

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Interactive resume built with Next.js',
  icons: {
    icon: [
      {
        url: '/avatar.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/avatar.png" type="image/png" sizes="32x32" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager Component */}
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <FilterProvider>
              <YearProvider>
                {children}
              </YearProvider>
            </FilterProvider>
            <Toaster />
            <GtmDebug />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
