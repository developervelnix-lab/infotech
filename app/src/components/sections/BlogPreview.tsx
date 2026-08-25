'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { blogPosts } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import styles from './BlogPreview.module.css';

export default function BlogPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className={styles.section} id="blog">
      <div className="container">
        <SectionTitle
          label="Blog & Insights"
          title="Knowledge That Drives Growth"
          highlight="Growth"
          subtitle="Tech, marketing, and business insights from the Infotech team."
        />
        <div ref={ref} className={styles.grid}>
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={styles.card}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.13, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.imageWrap}>
                <Image src={post.image} alt={post.title} fill className={styles.image} sizes="(max-width: 768px) 100vw, 33vw" />
                <span className={styles.category}>{post.category}</span>
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <span className={styles.readMore}>Read More →</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className={styles.viewAll}>
          <a href="/blog" className={styles.viewAllLink}>View All Articles →</a>
        </div>
      </div>
    </section>
  );
}
