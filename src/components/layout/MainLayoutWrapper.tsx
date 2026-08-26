'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wrench, Clock, Lock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnnouncementTicker from '@/components/layout/AnnouncementTicker';

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');
  const isLogin = pathname?.startsWith('/login');

  const [maintenance, setMaintenance] = useState<{
    active: boolean;
    headline: string;
    message: string;
    returnTime: string;
  } | null>(null);

  // Load custom theme and maintenance state from localStorage
  useEffect(() => {
    try {
      // 1. Inject Custom Theme Colors
      const savedTheme = localStorage.getItem('infotech_custom_theme');
      if (savedTheme) {
        const parsed = JSON.parse(savedTheme);
        if (parsed.accent) document.documentElement.style.setProperty('--color-accent', parsed.accent);
        if (parsed.teal) document.documentElement.style.setProperty('--color-teal', parsed.teal);
        if (parsed.bg) document.documentElement.style.setProperty('--color-bg-primary', parsed.bg);
        if (parsed.surface) document.documentElement.style.setProperty('--color-bg-surface', parsed.surface);
      }

      // 2. Check Maintenance Mode
      const savedMaint = localStorage.getItem('infotech_maintenance_mode');
      if (savedMaint) {
        const parsed = JSON.parse(savedMaint);
        if (parsed.active) {
          setMaintenance(parsed);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [pathname]);

  if (isDashboard) {
    return <main>{children}</main>;
  }

  // If maintenance mode is enabled and visitor is on public pages (not /login or /dashboard)
  if (maintenance?.active && !isLogin) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#070A11',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Radial Glow */}
        <div style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(244,63,94,0.15) 0%, rgba(7,10,17,0) 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none'
        }} />

        <div style={{
          maxWidth: '560px',
          width: '100%',
          background: 'rgba(15, 23, 42, 0.7)',
          border: '1px solid rgba(244,63,94,0.3)',
          borderRadius: '24px',
          padding: '2.5rem 2rem',
          textAlign: 'center',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(244,63,94,0.15)',
            border: '1px solid rgba(244,63,94,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#f43f5e'
          }}>
            <Wrench size={30} />
          </div>

          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#f43f5e', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            System Maintenance
          </span>

          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1.25 }}>
            {maintenance.headline || 'Scheduled Maintenance in Progress'}
          </h1>

          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
            {maintenance.message || 'We are currently performing scheduled maintenance to upgrade system reliability and speed. We will be back online shortly.'}
          </p>

          {maintenance.returnTime && (
            <div style={{
              padding: '0.65rem 1.25rem',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '99px',
              border: '1px solid rgba(255,255,255,0.1)',
              fontSize: '0.8rem',
              color: '#00D1B2',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Clock size={16} /> Estimated return: {new Date(maintenance.returnTime).toLocaleString()}
            </div>
          )}

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', width: '100%', paddingTop: '1.25rem', marginTop: '0.5rem' }}>
            <Link
              href="/login"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.775rem',
                color: '#64748b',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
            >
              <Lock size={13} /> Administrator Portal Login <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    );
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
