'use client';

import { announcements } from '@/lib/data';
import styles from './AnnouncementTicker.module.css';

export default function AnnouncementTicker() {
  const pinned = announcements.filter((a) => a.pinned);
  const rest = announcements.filter((a) => !a.pinned);
  const all = [...pinned, ...rest];

  // duplicate for seamless loop
  const items = [...all, ...all];

  return (
    <div className={styles.ticker}>
      <div className={styles.label}>
        <span>LIVE</span>
      </div>
      <div className={styles.overflow}>
        <div className={styles.track}>
          {items.map((item, i) => (
            <a
              key={`${item.id}-${i}`}
              href={item.link}
              className={styles.item}
            >
              {item.pinned && <span className={styles.pin}>📌</span>}
              <span className={styles.itemText}>{item.title}</span>
              <span className={styles.divider}>·</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
