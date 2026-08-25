import type { Metadata } from 'next';
import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Tech, marketing, and business growth insights from the Infotech team.',
};

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Blog & Insights</span>
          <h1 className={styles.title}>Knowledge That <span className={styles.accent}>Drives Growth</span></h1>
          <p className={styles.subtitle}>Tech, marketing, and business insights from the Infotech team.</p>
        </div>

        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image src={post.image} alt={post.title} fill className={styles.image} sizes="(max-width: 768px) 100vw, 33vw" />
                <span className={styles.category}>{post.category}</span>
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>{post.date} · {post.readTime}</div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <span className={styles.readMore}>Read More →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
