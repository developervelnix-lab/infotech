'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { testimonials } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <SectionTitle
          label="Testimonials"
          title="What Our Clients Say"
          highlight="Clients"
          subtitle="Don't take our word for it — hear from the businesses we've helped grow."
        />

        <div ref={ref} className={styles.sliderWrap}>
          <motion.div
            className={styles.slider}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={`${t.id}-${i}`}
                className={`glass-card ${styles.card}`}
                style={{ display: i === active ? 'flex' : 'none' }}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.feedback}>{testimonials[active].feedback}</p>
                <div className={styles.stars}>
                  {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" color="#FBBF24" />
                  ))}
                </div>
                <div className={styles.author}>
                  <div className={styles.avatarWrap}>
                    <Image
                      src={testimonials[active].avatar}
                      alt={testimonials[active].name}
                      fill
                      className={styles.avatar}
                    />
                  </div>
                  <div>
                    <div className={styles.authorName}>{testimonials[active].name}</div>
                    <div className={styles.authorRole}>{testimonials[active].role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Controls */}
          <div className={styles.controls}>
            <button onClick={prev} className={styles.arrow} aria-label="Previous" data-magnetic>
              <ChevronLeft size={20} />
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className={styles.arrow} aria-label="Next" data-magnetic>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
