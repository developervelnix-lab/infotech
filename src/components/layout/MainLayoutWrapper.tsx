'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnnouncementTicker from '@/components/layout/AnnouncementTicker';

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  if (isDashboard) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar />
      <AnnouncementTicker />
      <main style={{ paddingTop: 'calc(var(--navbar-h) + var(--ticker-h))' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
