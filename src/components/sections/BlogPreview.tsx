'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { blogPosts } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import styles from './BlogPreview.module.css';

export default function BlogPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const [title, setTitle] = useState('Knowledge That Drives Growth');
  const [subtitle, setSubtitle] = useState('Tech, marketing, and business insights from the Infotech team.');
  const [items, setItems] = useState(blogPosts);

  useEffect(() => {
    try {
      const savedCMS = localStorage.getItem('infotech_full_cms');
      if (savedCMS) {
        const parsed = JSON.parse(savedCMS);
        if (parsed.blog) {
          if (parsed.blog.title) setTitle(parsed.blog.title);
          if (parsed.blog.subtitle) setSubtitle(parsed.blog.subtitle);
          if (parsed.blog.list && parsed.blog.list.length > 0) {
            const merged = parsed.blog.list.map((b: any, i: number) => {
              const fallback = blogPosts[i % blogPosts.length];
              return {
                slug: fallback.slug,
                title: b.title || fallback.title,
                category: b.tag || fallback.category,
                readTime: b.readTime || fallback.readTime,
                image: b.img || fallback.image,
                date: fallback.date || 'Aug 2026',
                excerpt: fallback.excerpt || 'Deep dive into modern software engineering strategies.'
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
    <section className={styles.section} id="blog">
      <div className="container">
        <SectionTitle
          label="Blog & Insights"
          title={title}
          highlight="Growth"
          subtitle={subtitle}
        />
        <div ref={ref} className={styles.grid}>
          {items.map((post, i) => (
            <motion.a
              key={post.slug + i}
              href={`/blog`}
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
