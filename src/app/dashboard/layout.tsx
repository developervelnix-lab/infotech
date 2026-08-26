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
    { label: 'Payroll & Payslips', path: '/dashboard/payroll', icon: DollarSign, roles: ['ADMIN', 'FINANCE', 'EMPLOYEE'] },
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
          <Link href="/login" style={{ marginLeft: 'auto', color: '#64748b' }} title="Logout">
            <LogOut size={16} />
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headerTitle}>
            {pathname.includes('admin') && 'Executive Admin Control'}
            {pathname.includes('intern') && 'Intern Dedicated Portal'}
            {pathname.includes('manager') && 'Manager Team Command'}
            {pathname.includes('finance') && 'Finance & Payroll Hub'}
            {pathname.includes('employee') && 'Employee Self-Service'}
            {pathname.includes('employees') && 'HR Employee & Intern Registry'}
            {pathname.includes('certificates') && 'Certificate & Letter Generator'}
            {pathname.includes('crm') && 'Lead CRM Pipeline'}
            {pathname.includes('attendance') && 'Attendance & Leave Management'}
            {pathname.includes('payroll') && 'Payroll & Payslips'}
            {pathname.includes('social') && 'Social Media Automation'}
            {pathname.includes('settings') && 'Company Settings'}
          </div>

          <div className={styles.headerRight}>
            <div className={styles.roleSelector}>
              <span>Viewing Role:</span>
              <select 
                value={currentRole} 
                onChange={(e) => handleRoleChange(e.target.value as UserRole)}
                className={styles.roleSelect}
              >
                <option value="ADMIN">ADMIN</option>
                <option value="MANAGER">MANAGER</option>
                <option value="FINANCE">FINANCE</option>
                <option value="EMPLOYEE">EMPLOYEE</option>
                <option value="INTERN">INTERN</option>
              </select>
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
