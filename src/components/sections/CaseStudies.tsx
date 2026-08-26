'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
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

  const [title, setTitle] = useState('Results That Speak for Themselves');
  const [subtitle, setSubtitle] = useState('Real projects. Real numbers. Real growth for real businesses.');
  const [items, setItems] = useState(caseStudies);

  useEffect(() => {
    try {
      const savedCMS = localStorage.getItem('infotech_full_cms');
      if (savedCMS) {
        const parsed = JSON.parse(savedCMS);
        if (parsed.cases) {
          if (parsed.cases.title) setTitle(parsed.cases.title);
          if (parsed.cases.subtitle) setSubtitle(parsed.cases.subtitle);
          if (parsed.cases.list && parsed.cases.list.length > 0) {
            const merged = parsed.cases.list.map((c: any, i: number) => {
              const fallback = caseStudies[i % caseStudies.length];
              return {
                id: c.id || fallback.id,
                title: c.client || fallback.title,
                category: c.tag || fallback.category,
                description: c.desc || fallback.description,
                image: c.img || fallback.image,
                metrics: [c.metric || fallback.metrics[0]],
                tags: fallback.tags || ['Next.js', 'Cloud', 'AI']
              };
            });
            setItems(merged);
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <section className={styles.section} id="case-studies">
      <div className="container">
        <SectionTitle
          label="Our Work"
          title={title}
          highlight="Results"
          subtitle={subtitle}
        />
        <motion.div
          ref={ref}
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {items.map((cs) => (
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
    clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' 
  },
  show: { 
    opacity: 1, 
    y: 0, 
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const
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
          <a href={`/case-studies`} className={styles.viewBtn}>
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
