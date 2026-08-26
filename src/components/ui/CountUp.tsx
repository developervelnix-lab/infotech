'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import styles from './CountUp.module.css';

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({
  end,
  suffix = '',
  duration = 2000,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    const el = ref.current!;
    const start = performance.now();

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(easeOut(progress) * end);
      el.textContent = `${current}${suffix}`;
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [isInView, end, suffix, duration]);

  return (
    <span ref={ref} className={`${styles.countup} ${className}`}>
      0{suffix}
    </span>
  );
}
