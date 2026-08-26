'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { caseStudies } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import styles from './CaseStudies.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className={styles.section} id="case-studies">
      <div className="container">
        <SectionTitle
          label="Our Work"
          title="Results That Speak for Themselves"
          highlight="Results"
          subtitle="Real projects. Real numbers. Real growth for real businesses."
        />
        <motion.div
          ref={ref}
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.id} cs={cs} />
          ))}
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, type: 'spring', bounce: 0.5 }}
        >
          <a href="/case-studies" className={styles.ctaLink}>
            View All Case Studies →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' 
  },
  show: { 
    opacity: 1, 
    y: 0, 
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const // Apple-like smooth ease out
    }
  }
};

function CaseStudyCard({ cs }: { cs: typeof caseStudies[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.imageWrap}>
        <Image
          src={cs.image}
          alt={cs.title}
          fill
          className={styles.image}
          style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)', transition: 'transform 0.5s ease' }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className={`${styles.overlay} ${hovered ? styles.overlayVisible : ''}`}>
          <a href={`/case-studies/${cs.id}`} className={styles.viewBtn}>
            View Case Study →
          </a>
        </div>
        <div className={styles.category}>{cs.category}</div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{cs.title}</h3>
        <p className={styles.description}>{cs.description}</p>
        <div className={styles.metrics}>
          {cs.metrics.map((m) => (
            <span key={m} className={styles.metric}>{m}</span>
          ))}
        </div>
        <div className={styles.tags}>
          {cs.tags.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
