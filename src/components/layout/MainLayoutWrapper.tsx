'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnnouncementTicker from '@/components/layout/AnnouncementTicker';

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');
  const isLogin = pathname?.startsWith('/login');

  if (isDashboard || isLogin) {
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
