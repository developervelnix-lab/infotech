'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { pageTransition } from '@/lib/animations';
import { getLenis } from '@/lib/lenis';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    // Reset window scroll position immediately
    window.scrollTo(0, 0);
    
    // Reset Lenis smooth scroll offset immediately
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={isHome ? '' : 'subpageBg'}
        style={{ minHeight: isHome ? 'auto' : 'calc(100vh - var(--navbar-h) - var(--ticker-h))' }}
      >
        {!isHome && (
          <div className="subpageGlows">
            <div className="subpageGlow1" />
            <div className="subpageGlow2" />
            <div className="subpageGlow3" />
          </div>
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
