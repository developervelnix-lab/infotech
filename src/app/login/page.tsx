'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, Eye, EyeOff } from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const demoAccounts = [
    { role: 'ADMIN', label: 'Admin', email: 'admin@infotech.com', pass: 'admin123', path: '/dashboard/admin' },
    { role: 'MANAGER', label: 'Manager', email: 'manager@infotech.com', pass: 'manager123', path: '/dashboard/manager' },
    { role: 'FINANCE', label: 'Finance', email: 'finance@infotech.com', pass: 'finance123', path: '/dashboard/finance' },
    { role: 'EMPLOYEE', label: 'Employee', email: 'employee@infotech.com', pass: 'emp123', path: '/dashboard/employee' },
    { role: 'INTERN', label: 'Intern', email: 'intern@infotech.com', pass: 'intern123', path: '/dashboard/intern' },
  ];

  const handleRoleLogin = (acc: typeof demoAccounts[0]) => {
    setEmail(acc.email);
    setPassword(acc.pass);
    setIsLoading(true);
    setError('');

    localStorage.setItem('infotech_role', acc.role);

    setTimeout(() => {
      setIsLoading(false);
      router.push(acc.path);
    }, 600);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const matched = demoAccounts.find(a => a.email === email);
      if (matched && password === matched.pass) {
        localStorage.setItem('infotech_role', matched.role);
        router.push(matched.path);
      } else {
        setError('Invalid email or password. Please use one of the demo accounts below.');
      }
    }, 800);
  };

  return (
    <div className={styles.container}>
      <motion.div 
        className={`glass-card ${styles.card}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.header}>
          <div className={styles.logoMark}>IT</div>
          <h2 className={styles.title}>Welcome Back</h2>
          <p className={styles.subtitle}>Enter your credentials or click any demo role to access the portal</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {error && (
            <motion.div 
              className={styles.errorMessage}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.div>
          )}

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address</label>
            <div className={styles.inputWrapper}>
              <Mail className={styles.inputIcon} size={18} />
              <input
                type="email"
                placeholder="admin@infotech.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.passwordHeader}>
              <label className={styles.label}>Password</label>
              <a href="#" className={styles.forgotLink} onClick={(e) => e.preventDefault()}>Forgot?</a>
            </div>
            <div className={styles.inputWrapper}>
              <Lock className={styles.inputIcon} size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                disabled={isLoading}
              />
              <button
                type="button"
                className={styles.togglePassword}
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button type="submit" size="md" style={{ width: '100%', marginTop: 'var(--space-2)' }} disabled={isLoading}>
            {isLoading ? (
              <span className={styles.loader}>Authenticating...</span>
            ) : (
              <span className={styles.btnContent}>
                Sign In <ArrowRight size={16} />
              </span>
            )}
          </Button>
        </form>

        <div className={styles.footer} style={{ marginTop: '1.25rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.5rem' }}>
            ⚡ Quick 1-Click Role Login:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center' }}>
            {demoAccounts.map(acc => (
              <button
                key={acc.role}
                type="button"
                onClick={() => handleRoleLogin(acc)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: '99px',
                  background: 'rgba(91,140,255,0.12)',
                  border: '1px solid rgba(91,140,255,0.25)',
                  color: '#5B8CFF',
                  fontSize: '0.725rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Login as {acc.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
