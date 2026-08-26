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
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', color: '#94a3b8' }}>
      Loading role dashboard...
    </div>
  );
}
