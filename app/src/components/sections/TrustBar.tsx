'use client';

import { motion } from 'framer-motion';
import { stats } from '@/lib/data';
import CountUp from '@/components/ui/CountUp';
import styles from './TrustBar.module.css';

const logos = ['Google', 'Microsoft', 'Shopify', 'Stripe', 'Vercel', 'Notion', 'Figma', 'Linear'];

export default function TrustBar() {
  const doubled = [...logos, ...logos];

  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.tagline}>Trusted by startups, brands, and growing businesses</p>

        {/* Logo marquee */}
        <div className={styles.marqueeWrap}>
          <div className={styles.marqueeTrack}>
            {doubled.map((name, i) => (
              <div key={`${name}-${i}`} className={styles.logoCard}>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className={styles.statsRow}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <div className={styles.statValue}>
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
