'use client';

import React from "react";
import { Header } from "./(components)/header";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html>
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
