'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import dynamic from 'next/dynamic';
import Button from '@/components/ui/Button';
import ScrambleText from '@/components/ui/ScrambleText';
import CountUp from '@/components/ui/CountUp';
import { stats } from '@/lib/data';
import { fadeUp, staggerContainer } from '@/lib/animations';
import styles from './Hero.module.css';

export default function Hero() {
  const [badge, setBadge] = useState('AI-Powered Digital Agency — 2026');
  const [title, setTitle] = useState('Build Smarter. Scale Faster.');
  const [subtext, setSubtext] = useState('We help businesses transform digitally with AI-powered solutions, modern development, and growth-focused strategies.');
  const [cta1, setCta1] = useState('Start Your Project');
  const [cta2, setCta2] = useState('Get Free Consultation');
  const [heroBg, setHeroBg] = useState('/hero-bg.jpg');

  useEffect(() => {
    try {
      const savedCMS = localStorage.getItem('infotech_full_cms');
      if (savedCMS) {
        const parsed = JSON.parse(savedCMS);
        if (parsed.hero) {
          if (parsed.hero.badge) setBadge(parsed.hero.badge);
          if (parsed.hero.title) setTitle(parsed.hero.title);
          if (parsed.hero.subtext) setSubtext(parsed.hero.subtext);
          if (parsed.hero.cta1) setCta1(parsed.hero.cta1);
          if (parsed.hero.cta2) setCta2(parsed.hero.cta2);
          if (parsed.hero.bgImg) setHeroBg(parsed.hero.bgImg);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <section className={styles.hero} id="home" style={{ position: 'relative' }}>
      {/* Dynamic Background Image Overlay */}
      {heroBg && (
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.4,
            zIndex: 0,
            pointerEvents: 'none'
          }} 
        />
      )}

      {/* Decorative blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />

      {/* Floating rings */}
      <div className={styles.ring1} />
      <div className={styles.ring2} />

      <div className={`container ${styles.inner}`}>
        {/* Left Column */}
        <motion.div
          className={styles.left}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className={styles.badge}>
            <span className={styles.badgeDot} />
            {badge}
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} className={styles.headline}>
            Build{' '}
            <span className={styles.gradientWord}>Smarter.</span>
            <br />
            Scale{' '}
            <span className={styles.gradientWord2}>Faster.</span>
            <br />
            <ScrambleText text="Grow with Infotech." className={styles.scramble} />
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={fadeUp} className={styles.subtext}>
            {subtext}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className={styles.ctas}>
            <Button href="/contact" size="lg">
              {cta1} <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" size="lg" href="/contact">
              <Play size={16} /> {cta2}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className={styles.statsRow}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statValue}>
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column — Dashboard Illustration */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 60, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <DashboardIllustration />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}

function DashboardIllustration() {
  return (
    <div className={styles.dashboard}>
      {/* Header bar */}
      <div className={styles.dbHeader}>
        <div className={styles.dbDots}>
          <span className={styles.dbDot} style={{ background: '#FF5F57' }} />
          <span className={styles.dbDot} style={{ background: '#FFBD2E' }} />
          <span className={styles.dbDot} style={{ background: '#28C840' }} />
        </div>
        <span className={styles.dbTitle}>Infotech Dashboard</span>
      </div>

      {/* Stat cards */}
      <div className={styles.dbCards}>
        {[
          { label: 'Revenue', value: '$48.2K', trend: '+24%', color: 'var(--color-accent)' },
          { label: 'Clients', value: '128', trend: '+12%', color: 'var(--color-teal)' },
          { label: 'Projects', value: '34', trend: '+8%', color: '#a78bfa' },
        ].map((card) => (
          <motion.div
            key={card.label}
            className={styles.dbCard}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className={styles.dbCardLabel}>{card.label}</span>
            <span className={styles.dbCardValue} style={{ color: card.color }}>{card.value}</span>
            <span className={styles.dbCardTrend}>↑ {card.trend}</span>
          </motion.div>
        ))}
      </div>

      {/* Mini chart */}
      <div className={styles.dbChart}>
        <div className={styles.dbChartLabel}>Monthly Growth</div>
        <div className={styles.chartBars}>
          {[40, 65, 45, 80, 60, 90, 75, 95, 70, 100, 85, 110].map((h, i) => (
            <motion.div
              key={i}
              className={styles.chartBar}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1 + i * 0.05, duration: 0.4, ease: 'easeOut' }}
              style={{ height: `${h * 0.7}px`, opacity: i === 11 ? 1 : 0.5 + i * 0.04 }}
            />
          ))}
        </div>
      </div>

      {/* Activity list */}
      <div className={styles.dbActivity}>
        {['New lead from Dubai', 'Project milestone reached', 'Report ready for review'].map((item, i) => (
          <motion.div
            key={i}
            className={styles.dbActivityItem}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.1 }}
          >
            <span className={styles.activityDot} />
            <span>{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
