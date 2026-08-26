'use client';

import React, { useState } from 'react';
import { Megaphone, Plus, Pin, Trash2, Calendar, CheckCircle2 } from 'lucide-react';
import styles from '../dashboard.module.css';

export default function AnnouncementsAdminPage() {
  const [title, setTitle] = useState('');
  const [isPinned, setIsPinned] = useState(false);

  const announcements = [
    { id: '1', title: 'Infotech Ranked Top 10 Digital Agency 2026', date: '2026-08-26', pinned: true, status: 'PUBLISHED' },
    { id: '2', title: 'Internship Applications Now Open — Apply Today!', date: '2026-08-24', pinned: true, status: 'PUBLISHED' },
    { id: '3', title: '100+ Projects Delivered Milestone Reached', date: '2026-08-20', pinned: false, status: 'PUBLISHED' },
    { id: '4', title: 'New AI Automation Package Launched', date: '2026-08-15', pinned: false, status: 'PUBLISHED' },
  ];

  return (
    <div className={styles.pageWrap}>
      <div className={styles.welcomeBanner}>
        <div>
          <h1 className={styles.greeting}>Announcements & Updates Management (v4) 📢</h1>
          <p className={styles.subtext}>Manage live company announcements feeding directly into the homepage ticker marquee and public /updates page.</p>
        </div>
      </div>

      <div className={styles.contentGrid}>
        {/* Create Announcement Form */}
        <div className={styles.cardBox}>
          <div className={styles.boxHeader}>
            <h3 className={styles.boxTitle}>Publish New Announcement</h3>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setTitle(''); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.775rem', color: '#cbd5e1', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>
                Announcement Headline / Title *
              </label>
              <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Free Website Audit — Limited Slots Available!"
                style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <input 
                type="checkbox"
                id="pinned"
                checked={isPinned}
                onChange={(e) => setIsPinned(e.target.checked)}
                style={{ accentColor: '#5B8CFF', width: '16px', height: '16px' }}
              />
              <label htmlFor="pinned" style={{ fontSize: '0.8rem', color: '#fff', cursor: 'pointer' }}>
                Pin to top of homepage ticker marquee
              </label>
            </div>

            <button type="submit" className={styles.actionBtnPrimary} style={{ marginTop: '0.5rem' }}>
              <Megaphone size={16} /> Publish Live Announcement
            </button>
          </form>
        </div>

        {/* Live List */}
        <div className={styles.cardBox}>
          <div className={styles.boxHeader}>
            <h3 className={styles.boxTitle}>Active Announcements Feed</h3>
          </div>

          <div className={styles.moduleList}>
            {announcements.map(item => (
              <div key={item.id} className={styles.moduleItem}>
                <div className={styles.modIcon} style={{ background: item.pinned ? 'rgba(234,179,8,0.15)' : 'rgba(91,140,255,0.15)', color: item.pinned ? '#eab308' : '#5B8CFF' }}>
                  {item.pinned ? <Pin size={18} /> : <Megaphone size={18} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div className={styles.modTitle}>{item.title}</div>
                  <div className={styles.modDesc}>Published: {item.date} {item.pinned && '· PINNED'}</div>
                </div>
                <button className={styles.actionBtn} style={{ color: '#f43f5e' }}>
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
