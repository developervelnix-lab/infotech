'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { whyInfotech } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import styles from './WhyInfotech.module.css';

export default function WhyInfotech() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [title, setTitle] = useState('Why Businesses Trust Infotech');
  const [subtitle, setSubtitle] = useState('We combine speed, intelligence, and proven results to deliver outcomes your business can feel.');
  const [items, setItems] = useState(whyInfotech);

  useEffect(() => {
    try {
      const savedCMS = localStorage.getItem('infotech_full_cms');
      if (savedCMS) {
        const parsed = JSON.parse(savedCMS);
        if (parsed.whyUs) {
          if (parsed.whyUs.title) setTitle(parsed.whyUs.title);
          if (parsed.whyUs.subtitle) setSubtitle(parsed.whyUs.subtitle);
          if (parsed.whyUs.pillars && parsed.whyUs.pillars.length > 0) {
            const merged = parsed.whyUs.pillars.map((p: any, i: number) => {
              const fallback = whyInfotech[i % whyInfotech.length];
              return {
                icon: p.icon || fallback.icon,
                title: p.title || fallback.title,
                desc: p.desc || fallback.desc
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
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.inner}>
          {/* Left */}
          <div ref={ref} className={styles.left}>
            <SectionTitle
              label="Why Choose Us"
              title={title}
              highlight="Trust Infotech"
              subtitle={subtitle}
              align="left"
            />

            <div className={styles.list}>
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.item}
                  initial={{ opacity: 0, x: -32 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={styles.itemIcon}>{item.icon}</div>
                  <div>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                    <p className={styles.itemDesc}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Illustration */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 48 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className={styles.illustrationWrap}>
              <div className={styles.illustrationBg} />
              <div className={styles.illustration}>
                {/* Process steps */}
                {['Discovery', 'Design', 'Development', 'Launch', 'Growth'].map((step, i) => (
                  <motion.div
                    key={step}
                    className={styles.step}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.12 }}
                  >
                    <div className={styles.stepNum}>{i + 1}</div>
                    <span>{step}</span>
                    {i < 4 && <div className={styles.stepLine} />}
                  </motion.div>
                ))}
              </div>

              {/* Floating badge */}
              <motion.div
                className={styles.floatingBadge}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className={styles.badgeEmoji}>🏆</span>
                <div>
                  <div className={styles.badgeMain}>Top Agency 2026</div>
                  <div className={styles.badgeSub}>Clutch Verified</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
