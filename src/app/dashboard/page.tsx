'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardRootPage() {
  const router = useRouter();

  useEffect(() => {
    const savedRole = localStorage.getItem('infotech_role') || 'ADMIN';
    switch (savedRole) {
      case 'ADMIN': router.push('/dashboard/admin'); break;
      case 'MANAGER': router.push('/dashboard/manager'); break;
      case 'FINANCE': router.push('/dashboard/finance'); break;
      case 'EMPLOYEE': router.push('/dashboard/employee'); break;
      case 'INTERN': router.push('/dashboard/intern'); break;
      default: router.push('/dashboard/admin'); break;
    }
  }, [router]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', color: '#94a3b8', gap: '1rem' }}>
      <div style={{ width: '32px', height: '32px', border: '3px solid rgba(91,140,255,0.2)', borderTop: '3px solid #5B8CFF', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      <span>Redirecting to your dashboard...</span>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
