'use client';

import { motion } from 'framer-motion';
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


      </div>
    </section>
  );
}
