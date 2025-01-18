'use client'

import React from 'react';
import MainLayout from '@/components/templates/main-layout';

interface DesignLayoutProps {
  children: React.ReactNode;
}

export default function DesignLayout({ children }: DesignLayoutProps) {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">{children}</div>
    </MainLayout>
  );
}
