import React, { ReactNode } from "react";
import { Header } from "./(components)/header";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main className="pt-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
