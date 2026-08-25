'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({
  label,
  title,
  highlight,
  subtitle,
  align = 'center',
}: SectionTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const titleText = highlight
    ? title.replace(highlight, `<mark>${highlight}</mark>`)
    : title;

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${align === 'left' ? styles.left : styles.center}`}
    >
      {label && (
        <motion.span
          className={styles.label}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {label}
        </motion.span>
      )}

      <div className={styles.titleWrap}>
        <motion.h2
          className={styles.title}
          initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
          animate={isInView ? { clipPath: 'inset(0% 0 0 0)', opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          dangerouslySetInnerHTML={{ __html: titleText }}
        />
      </div>

      {subtitle && (
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
