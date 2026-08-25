'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Sparkles, TrendingUp, Cpu, Globe } from 'lucide-react';
import { caseStudies } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

const iconMap: Record<string, React.ReactNode> = {
  'E-commerce Platform': <Globe size={20} />,
  'Startup Launch': <Sparkles size={20} />,
  'Business Automation': <Cpu size={20} />
};

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'E-commerce', 'Automation', 'Startups'];

  const filteredCaseStudies = caseStudies.filter(cs => {
    if (filter === 'All') return true;
    if (filter === 'E-commerce') return cs.title.toLowerCase().includes('e-commerce');
    if (filter === 'Automation') return cs.title.toLowerCase().includes('automation');
    if (filter === 'Startups') return cs.title.toLowerCase().includes('startup');
    return true;
  });

  return (
    <div className={styles.container}>

      <div className={`container ${styles.inner}`}>
        <SectionTitle
          label="Portfolio"
          title="Proven Execution & Business Results"
          highlight="Results"
          subtitle="Discover how we help fast-growing startups and established companies automate, rebuild, and capture market share."
        />

        {/* Categories Navigation Bar */}
        <div className={styles.toolbar}>
          <div className={styles.tabs}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.tab} ${filter === cat ? styles.tabActive : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Projects Grid */}
        <div className={styles.grid}>
          {filteredCaseStudies.map((cs) => (
            <motion.div
              key={cs.id}
              className={`glass-card ${styles.card}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Image Container */}
              <div className={styles.imgWrapper}>
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className={styles.img}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.imgOverlay} />
                <span className={styles.iconTag}>
                  {iconMap[cs.title] || <Sparkles size={20} />}
                </span>
              </div>

              {/* Text details */}
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{cs.title}</h3>
                
                {/* Result metrics section */}
                <div className={styles.metricsContainer}>
                  <div className={styles.metricsLabel}>
                    <TrendingUp size={14} style={{ marginRight: '4px' }} /> KEY METRICS ACHIEVED
                  </div>
                  <div className={styles.metricsGrid}>
                    {cs.metrics.map((metric) => (
                      <div key={metric} className={styles.metricCard}>
                        <span className={styles.metricText}>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <Button href="/contact" size="sm" variant="secondary" style={{ width: '100%' }}>
                    <span>Request Similar Case <ArrowRight size={14} /></span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
