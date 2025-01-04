import React from "react";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "./(components)/header";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ 
  subsets: ["latin"],
  variable: '--font-caveat',
});

export const metadata = {
  title: "Interactive Resume Timeline",
  description: "An interactive timeline of my professional and personal journey",
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${caveat.variable}`}>
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
