'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  FileCheck2, 
  Briefcase, 
  Clock, 
  DollarSign, 
  Share2, 
  Settings, 
  LogOut, 
  CalendarCheck,
  Building2,
  Bell,
  UserCheck,
  Megaphone
} from 'lucide-react';
import styles from './layout.module.css';

export type UserRole = 'ADMIN' | 'MANAGER' | 'FINANCE' | 'EMPLOYEE' | 'INTERN';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentRole, setCurrentRole] = useState<UserRole>('ADMIN');

  useEffect(() => {
    const savedRole = localStorage.getItem('infotech_role') as UserRole;
    if (savedRole) {
      setCurrentRole(savedRole);
    }
  }, []);

  const handleRoleChange = (newRole: UserRole) => {
    setCurrentRole(newRole);
    localStorage.setItem('infotech_role', newRole);
    // Route to appropriate landing
    switch (newRole) {
      case 'ADMIN': router.push('/dashboard/admin'); break;
      case 'MANAGER': router.push('/dashboard/manager'); break;
      case 'FINANCE': router.push('/dashboard/finance'); break;
      case 'EMPLOYEE': router.push('/dashboard/employee'); break;
      case 'INTERN': router.push('/dashboard/intern'); break;
    }
  };

  const navItems = [
    { label: 'Admin Overview', path: '/dashboard/admin', icon: LayoutDashboard, roles: ['ADMIN'] },
    { label: 'Manager Overview', path: '/dashboard/manager', icon: LayoutDashboard, roles: ['MANAGER'] },
    { label: 'Finance Overview', path: '/dashboard/finance', icon: LayoutDashboard, roles: ['FINANCE'] },
    { label: 'My Portal', path: '/dashboard/employee', icon: LayoutDashboard, roles: ['EMPLOYEE'] },
    { label: 'Intern Portal', path: '/dashboard/intern', icon: UserCheck, roles: ['INTERN'] },

    { label: 'HR & Employees', path: '/dashboard/employees', icon: Users, roles: ['ADMIN', 'MANAGER'] },
    { label: 'Certificates & Letters', path: '/dashboard/certificates', icon: FileCheck2, roles: ['ADMIN', 'MANAGER', 'EMPLOYEE', 'INTERN'] },
    { label: 'Lead CRM', path: '/dashboard/crm', icon: Briefcase, roles: ['ADMIN', 'MANAGER'] },
    { label: 'Attendance & Leave', path: '/dashboard/attendance', icon: Clock, roles: ['ADMIN', 'MANAGER', 'FINANCE', 'EMPLOYEE', 'INTERN'] },
    { label: 'Payroll & Payslips', path: '/dashboard/finance', icon: DollarSign, roles: ['ADMIN', 'FINANCE', 'EMPLOYEE'] },
    { label: 'Social Automation', path: '/dashboard/social', icon: Share2, roles: ['ADMIN'] },
    { label: 'Announcements', path: '/dashboard/updates', icon: Megaphone, roles: ['ADMIN', 'MANAGER'] },
    { label: 'Company Settings', path: '/dashboard/settings', icon: Settings, roles: ['ADMIN'] },
  ];

  const allowedNav = navItems.filter(item => item.roles.includes(currentRole));

  return (
    <div className={styles.wrapper}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.logoMark}>IF</div>
          <span className={styles.brandText}>Infotech</span>
          <span className={styles.badgeOs}>OS v4</span>
        </div>

        <nav className={styles.nav}>
          <div className={styles.navGroupTitle}>Dashboard Modules</div>
          {allowedNav.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
              >
                <Icon size={18} className={styles.navIcon} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className={styles.userProfile}>
          <div className={styles.avatar}>{currentRole[0]}</div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>Active Account</span>
            <span className={styles.userRole}>{currentRole}</span>
          </div>
          <button 
            onClick={() => { localStorage.removeItem('infotech_role'); router.push('/login'); }}
            style={{ marginLeft: 'auto', color: '#64748b', background: 'none', border: 'none', cursor: 'pointer' }} 
            title="Logout"
          >
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headerTitle}>
            {pathname === '/dashboard/admin' && 'Executive Admin Control'}
            {pathname === '/dashboard/intern' && 'Intern Dedicated Portal'}
            {pathname === '/dashboard/manager' && 'Manager Team Command'}
            {pathname === '/dashboard/finance' && 'Finance & Payroll Hub'}
            {pathname === '/dashboard/employee' && 'Employee Self-Service'}
            {pathname === '/dashboard/employees' && 'HR Employee & Intern Registry'}
            {pathname === '/dashboard/certificates' && 'Certificate & Letter Generator'}
            {pathname === '/dashboard/crm' && 'Lead CRM Pipeline'}
            {pathname === '/dashboard/attendance' && 'Attendance & Leave Management'}
            {pathname === '/dashboard/social' && 'Social Media Automation'}
            {pathname === '/dashboard/updates' && 'Announcements & Updates'}
            {pathname === '/dashboard/settings' && 'Company Settings'}
          </div>

          <div className={styles.headerRight}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(91,140,255,0.12)', border: '1px solid rgba(91,140,255,0.25)', padding: '0.3rem 0.75rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)' }}>
              <span>Role: {currentRole}</span>
            </div>
            <button style={{ color: '#94a3b8', position: 'relative' }}>
              <Bell size={18} />
            </button>
          </div>
        </header>

        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}
