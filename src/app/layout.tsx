import React, { ReactNode } from "react";
import { Header } from "./(components)/header";
import "./globals.css";
import { Caveat } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${caveat.variable}`}>
        <div className="min-h-screen bg-background text-foreground">
          <Header activeFilter={""} />
          <main className="pt-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
