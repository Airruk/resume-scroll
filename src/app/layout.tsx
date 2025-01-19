import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { QueryProvider } from '@/components/providers/query-provider'
import { FilterProvider } from '@/contexts/filter-context'
import { Toaster } from '@/components/ui/toaster'
import { YearProvider } from '@/contexts/year-context'

const inter = Inter({ subsets: ['latin'] })

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
        <style>
          {`
            link[rel="icon"] {
              border-radius: 50%;
              -webkit-mask-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='50%25' cy='50%25' r='50%25' fill='black'/%3e%3c/svg%3e");
              mask-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='50%25' cy='50%25' r='50%25' fill='black'/%3e%3c/svg%3e");
            }
          `}
        </style>
      </head>
      <body className={inter.className}>
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
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
