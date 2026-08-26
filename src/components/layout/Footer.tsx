'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoMark}>IF</div>
              <span className={styles.logoText}>Infotech</span>
            </Link>
            <p className={styles.tagline}>
              Empowering businesses through innovative digital solutions and cutting-edge technology.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
            </div>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <div className={styles.colLinks}>
              <Link href="/about" className={styles.colLink}>About Us</Link>
              <Link href="/careers" className={styles.colLink}>Careers</Link>
              <Link href="/contact" className={styles.colLink}>Contact</Link>
            </div>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <div className={styles.colLinks}>
              <Link href="/services/web" className={styles.colLink}>Web Development</Link>
              <Link href="/services/mobile" className={styles.colLink}>Mobile Apps</Link>
              <Link href="/services/cloud" className={styles.colLink}>Cloud Solutions</Link>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Resources</h4>
            <div className={styles.colLinks}>
              <Link href="/blog" className={styles.colLink}>Blog</Link>
              <Link href="/case-studies" className={styles.colLink}>Case Studies</Link>
              <Link href="/docs" className={styles.colLink}>Documentation</Link>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Legal</h4>
            <div className={styles.colLinks}>
              <Link href="/privacy" className={styles.colLink}>Privacy Policy</Link>
              <Link href="/terms" className={styles.colLink}>Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} Infotech. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy" className={styles.bottomLink}>Privacy</Link>
              <Link href="/terms" className={styles.bottomLink}>Terms</Link>
            </div>
          </div>
        </div>
      </div>

      {showScroll && (
        <button className={styles.scrollTop} onClick={scrollToTop} aria-label="Scroll to top">
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
