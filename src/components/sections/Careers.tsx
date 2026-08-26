'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { internships } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import styles from './Careers.module.css';

export default function Careers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className={styles.section} id="careers">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <SectionTitle
              label="Careers"
              title="Learn. Build. Grow with Infotech."
              highlight="Grow"
              subtitle="Join our team or kick-start your career with a hands-on internship working on real client projects."
              align="left"
            />
            <div className={styles.tracks}>
              {['Developer Internship', 'Digital Marketing Training', 'Real Project Experience', 'Certification Programs'].map((t) => (
                <div key={t} className={styles.track}>
                  <span className={styles.trackDot} />
                  {t}
                </div>
              ))}
            </div>
            <Button href="/careers" size="lg">View All Openings</Button>
          </div>

          <div ref={ref} className={styles.right}>
            {internships.map((intern, i) => (
              <motion.div
                key={intern.id}
                className={`glass-card ${styles.card}`}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.cardHead}>
                  <div>
                    <h3 className={styles.role}>{intern.role}</h3>
                    <span className={styles.location}>📍 {intern.location}</span>
                  </div>
                  <span className={styles.duration}>{intern.duration}</span>
                </div>
                <p className={styles.desc}>{intern.description}</p>
                <div className={styles.skills}>
                  {intern.skills.map((s) => (
                    <span key={s} className={styles.skill}>{s}</span>
                  ))}
                </div>
                <Button href="/careers" size="sm" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>
                  Apply Now →
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
