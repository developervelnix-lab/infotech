'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Share2, 
  Send, 
  Calendar, 
  Image as ImageIcon, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  RefreshCw,
  Sparkles
} from 'lucide-react';
import styles from '../dashboard.module.css';

export default function SocialAutomationPage() {
  const [caption, setCaption] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['LinkedIn', 'Instagram', 'X']);
  const [isPublished, setIsPublished] = useState(false);

  const platforms = [
    { name: 'LinkedIn', color: '#0A66C2' },
    { name: 'Instagram', color: '#E4405F' },
    { name: 'X / Twitter', color: '#1DA1F2' },
    { name: 'Facebook', color: '#1877F2' },
    { name: 'WhatsApp', color: '#25D366' },
    { name: 'Telegram', color: '#0088cc' },
  ];

  const togglePlatform = (p: string) => {
    if (selectedPlatforms.includes(p)) {
      setSelectedPlatforms(selectedPlatforms.filter(x => x !== p));
    } else {
      setSelectedPlatforms([...selectedPlatforms, p]);
    }
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPublished(true);
  };

  const history = [
    { id: 'POST-402', text: '🚀 Infotech v4 Platform Blueprint launched with multi-channel automation!', date: '2026-08-26 14:00', platforms: ['LinkedIn', 'X'], status: 'PUBLISHED' },
    { id: 'POST-398', text: 'Internship cohort 2026 applications now open. Apply today!', date: '2026-08-25 10:30', platforms: ['Instagram', 'LinkedIn', 'Facebook'], status: 'PUBLISHED' },
    { id: 'POST-391', text: 'How AI Automation is Reshaping Tech in 2026.', date: '2026-08-24 16:00', platforms: ['Telegram'], status: 'FAILED' },
  ];

  return (
    <div className={styles.pageWrap}>
      {/* Top Banner */}
      <div className={styles.welcomeBanner}>
        <div>
          <h1 className={styles.greeting}>Social Media Management & Automation (v4) 📲</h1>
          <p className={styles.subtext}>Compose one post and publish/schedule simultaneously across 6 connected company platforms.</p>
        </div>
      </div>

      <div className={styles.contentGrid}>
        {/* Left: Multi-Post Composer */}
        <div className={styles.cardBox}>
          <div className={styles.boxHeader}>
            <h3 className={styles.boxTitle}>Multi-Platform Post Composer</h3>
          </div>

          <form onSubmit={handlePublish} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Select Platforms */}
            <div>
              <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.5rem' }}>
                Select Target Channels ({selectedPlatforms.length} selected) *
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {platforms.map(p => {
                  const isSelected = selectedPlatforms.includes(p.name);
                  return (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => togglePlatform(p.name)}
                      style={{
                        padding: '0.4rem 0.85rem',
                        borderRadius: '99px',
                        border: isSelected ? `1px solid ${p.color}` : '1px solid rgba(255,255,255,0.1)',
                        background: isSelected ? `${p.color}25` : 'rgba(255,255,255,0.04)',
                        color: isSelected ? '#fff' : '#94a3b8',
                        fontSize: '0.775rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {p.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Post Content */}
            <div>
              <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                Post Caption / Body Text *
              </label>
              <textarea 
                required
                rows={4}
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Write your announcement or post content here... #Infotech #AI #Tech2026"
                style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '0.75rem 0.9rem', color: '#fff', fontSize: '0.85rem', outline: 'none' }}
              />
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.775rem', color: '#5B8CFF', fontWeight: 600 }}>
                <ImageIcon size={16} /> Attach Media Image/Video
                <input type="file" style={{ display: 'none' }} />
              </label>

              <button type="submit" className={styles.actionBtnPrimary}>
                <Send size={15} /> Publish Multi-Platform
              </button>
            </div>
          </form>
        </div>

        {/* Right: Connected Status & History */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className={styles.cardBox}>
            <div className={styles.boxHeader}>
              <h3 className={styles.boxTitle}>Connected Accounts</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {platforms.map(p => (
                <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', fontSize: '0.8rem' }}>
                  <span style={{ fontWeight: 700, color: '#fff' }}>{p.name}</span>
                  <span style={{ color: '#00D1B2', fontSize: '0.7rem', fontWeight: 700 }}>● CONNECTED</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Publishing History Log */}
      <div className={styles.cardBox}>
        <div className={styles.boxHeader}>
          <h3 className={styles.boxTitle}>Publishing History & Log</h3>
        </div>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Content Excerpt</th>
              <th>Platforms</th>
              <th>Date & Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map(h => (
              <tr key={h.id}>
                <td style={{ fontWeight: 700, color: '#5B8CFF' }}>{h.id}</td>
                <td style={{ color: '#fff', maxWidth: '300px' }}>{h.text}</td>
                <td>{h.platforms.join(', ')}</td>
                <td style={{ color: '#64748b' }}>{h.date}</td>
                <td>
                  <span className={styles.statusPill} style={{ background: h.status === 'PUBLISHED' ? 'rgba(0,209,178,0.15)' : 'rgba(244,63,94,0.15)', color: h.status === 'PUBLISHED' ? '#00D1B2' : '#f43f5e' }}>
                    {h.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
