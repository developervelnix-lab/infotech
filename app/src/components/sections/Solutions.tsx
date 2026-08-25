'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Cloud, Code2, BarChart3, Cpu, ArrowRight, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import styles from './Solutions.module.css';

const solutions = [
  {
    id: 'cloud',
    number: '01',
    category: 'Cloud Infrastructure',
    title: 'Cloud Integration',
    subtitle: 'Scalable infrastructure for the future',
    desc: 'Seamlessly migrate and scale your enterprise infrastructure with high-availability multi-cloud architecture, automated CI/CD pipelines, and zero-downtime deployments.',
    Icon: Cloud,
    image: '/images/solutions/cloud.jpg',
    accentColor: '#38BDF8',
    accentGradient: 'linear-gradient(135deg, #38BDF8 0%, #0284C7 100%)',
    glowColor: 'rgba(56, 189, 248, 0.35)',
    features: ['Multi-Cloud Architecture', 'Automated CI/CD', 'Zero-Downtime Migration', 'SOC2 Compliant'],
    stat: { value: '99.99%', label: 'Uptime SLA' },
    badge: 'Enterprise Grade'
  },
  {
    id: 'custom',
    number: '02',
    category: 'Engineering & Development',
    title: 'Custom Software',
    subtitle: 'Tailored to your unique business needs',
    desc: 'We architect and build robust, high-performance custom applications designed specifically to streamline workflows, eliminate bottlenecks, and scale your operations effortlessly.',
    Icon: Code2,
    image: '/images/solutions/software.jpg',
    accentColor: '#818CF8',
    accentGradient: 'linear-gradient(135deg, #818CF8 0%, #6366F1 100%)',
    glowColor: 'rgba(129, 140, 248, 0.35)',
    features: ['Microservices & APIs', 'Full-Stack Modern Web', 'High-Throughput Backends', 'Modular Architecture'],
    stat: { value: '4.8x', label: 'Faster Time-to-Market' },
    badge: 'Tailored Solution'
  },
  {
    id: 'data',
    number: '03',
    category: 'Intelligence & Insights',
    title: 'Data Analytics',
    subtitle: 'Insights that drive strategic decisions',
    desc: 'Transform raw data into real-time business intelligence. Our analytics pipelines offer predictive modeling, automated reporting, and interactive executive dashboards.',
    Icon: BarChart3,
    image: '/images/solutions/analytics.jpg',
    accentColor: '#34D399',
    accentGradient: 'linear-gradient(135deg, #34D399 0%, #059669 100%)',
    glowColor: 'rgba(52, 211, 153, 0.35)',
    features: ['Real-Time Streaming', 'Predictive Modeling', 'Interactive BI Dashboards', 'Data Warehousing'],
    stat: { value: '10x', label: 'Faster Query Speeds' },
    badge: 'Predictive BI'
  },
  {
    id: 'ai',
    number: '04',
    category: 'Artificial Intelligence',
    title: 'AI Solutions',
    subtitle: 'Next-generation machine intelligence',
    desc: 'Supercharge your business with custom LLM integrations, autonomous AI agents, computer vision, and intelligent workflow automations built for exponential efficiency.',
    Icon: Cpu,
    image: '/images/solutions/ai.jpg',
    accentColor: '#F43F5E',
    accentGradient: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)',
    glowColor: 'rgba(244, 63, 94, 0.35)',
    features: ['Custom LLMs & Agents', 'Intelligent Automation', 'Computer Vision & NLP', 'Adaptive AI Systems'],
    stat: { value: '85%', label: 'Efficiency Gain' },
    badge: 'GenAI & Neural Nets'
  }
];

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = Math.floor(latest * solutions.length);
    if (index >= solutions.length) index = solutions.length - 1;
    if (index < 0) index = 0;

    if (index !== activeIndex) {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    }
  });

  const handleSelectTab = (newIndex: number) => {
    if (newIndex === activeIndex) return;
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const containerTop = scrollTop + rect.top;
      const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = containerTop + (newIndex / (solutions.length - 1)) * scrollableDistance;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      handleSelectTab(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < solutions.length - 1) {
      handleSelectTab(activeIndex + 1);
    }
  };

  const activeSolution = solutions[activeIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 40 : -40,
      filter: 'blur(8px)',
      scale: 0.98
    }),
    center: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const
      }
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -40 : 40,
      filter: 'blur(8px)',
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const
      }
    })
  };

  return (
    <section ref={containerRef} className={styles.scrollSection} id="solutions">
      <div className={styles.stickyContainer}>
        {/* Dynamic Ambient Color Aura */}
        <div 
          className={styles.ambientGlow}
          style={{ background: activeSolution.glowColor }}
        />

        <div className={styles.section}>
          <div className="container">
            {/* Header */}
            <div className={styles.titleWrapper}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.badgeHeader}
              >
                <Sparkles size={14} />
                <span>Enterprise Capabilities</span>
              </motion.div>

              <motion.h2 
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our <span className={styles.titleGradient}>Solutions</span>
              </motion.h2>

              <motion.p 
                className={styles.subtitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Empowering your digital transformation journey with cutting-edge technology and unparalleled expertise.
              </motion.p>
            </div>

            <div className={styles.mainWrapper}>
              {/* Segmented Floating Tabs */}
              <div className={styles.tabsContainer}>
                <div className={styles.navTabs}>
                  {solutions.map((sol, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <button
                        key={sol.id}
                        onClick={() => handleSelectTab(index)}
                        className={`${styles.tabButton} ${isActive ? styles.tabButtonActive : ''}`}
                        style={isActive ? { color: '#ffffff' } : {}}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeSolutionTab"
                            className={styles.tabIndicator}
                            style={{ 
                              background: sol.accentGradient,
                              boxShadow: `0 0 25px ${sol.glowColor}`
                            }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span className={styles.tabIconWrapper}>
                          <sol.Icon size={16} color={isActive ? '#ffffff' : sol.accentColor} />
                        </span>
                        <span className={styles.tabText}>{sol.title}</span>
                        <span className={styles.tabIndex}>{sol.number}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Showcase Card Frame */}
              <div className={styles.cardFrame}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeSolution.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className={styles.cardInner}
                  >
                    {/* Left Column: Content */}
                    <div className={styles.contentCol}>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className={styles.pillCategory}
                        style={{ 
                          color: activeSolution.accentColor,
                          background: `${activeSolution.glowColor}`,
                          border: `1px solid ${activeSolution.accentColor}40`
                        }}
                      >
                        <span>{activeSolution.category}</span>
                      </motion.div>

                      <motion.h3 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.45 }}
                        className={styles.slideTitle}
                      >
                        {activeSolution.title}
                      </motion.h3>

                      <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.45 }}
                        className={styles.slideDesc}
                      >
                        {activeSolution.desc}
                      </motion.p>

                      {/* Feature Tags */}
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.45 }}
                        className={styles.featureTags}
                      >
                        {activeSolution.features.map((feat, idx) => (
                          <div key={idx} className={styles.featurePill}>
                            <span 
                              className={styles.featureDot} 
                              style={{ background: activeSolution.accentColor }} 
                            />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </motion.div>

                      {/* Action & Nav Controls */}
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.45 }}
                        className={styles.actionRow}
                      >
                        <button 
                          className={styles.primaryBtn}
                          style={{ background: activeSolution.accentGradient }}
                        >
                          <span>Explore Solution</span>
                          <ArrowRight size={15} />
                        </button>

                        <div className={styles.quickNavArrows}>
                          <button 
                            className={styles.arrowBtn} 
                            onClick={handlePrev}
                            disabled={activeIndex === 0}
                            aria-label="Previous solution"
                          >
                            <ChevronLeft size={18} />
                          </button>
                          <button 
                            className={styles.arrowBtn} 
                            onClick={handleNext}
                            disabled={activeIndex === solutions.length - 1}
                            aria-label="Next solution"
                          >
                            <ChevronRight size={18} />
                          </button>
                        </div>
                      </motion.div>
                    </div>

                    {/* Right Column: Media Frame */}
                    <motion.div 
                      className={styles.mediaCol}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <div className={styles.imageFrame}>
                        <Image 
                          src={activeSolution.image}
                          alt={activeSolution.title}
                          fill
                          className={styles.imageLayer}
                          sizes="(max-width: 900px) 100vw, 50vw"
                          priority
                        />
                        <div className={styles.imageOverlayGradient} />
                      </div>

                      {/* Floating Badge (Top Right) */}
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.4 }}
                        className={styles.floatingPillBadge}
                      >
                        <CheckCircle2 size={13} color={activeSolution.accentColor} />
                        <span>{activeSolution.badge}</span>
                      </motion.div>

                      {/* Floating Stat Badge (Bottom Left) */}
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.45 }}
                        className={styles.floatingStatBadge}
                      >
                        <div>
                          <div 
                            className={styles.statValue}
                            style={{ color: activeSolution.accentColor }}
                          >
                            {activeSolution.stat.value}
                          </div>
                          <div className={styles.statLabel}>
                            {activeSolution.stat.label}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

