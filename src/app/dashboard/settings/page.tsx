'use client';

import React, { useState } from 'react';
import { 
  Settings, 
  Building2, 
  Globe, 
  Mail, 
  Phone, 
  Save, 
  CheckCircle2, 
  Share2 
} from 'lucide-react';
import styles from '../dashboard.module.css';

export default function CompanySettingsPage() {
  const [saved, setSaved] = useState(false);

  // Company State
  const [companyName, setCompanyName] = useState('Infotech Technologies Ltd.');
  const [address, setAddress] = useState('Tech Park Tower, 5th Floor, Silicon Valley, US');
  const [phone, setPhone] = useState('+1 (555) 019-2834');
  const [email, setEmail] = useState('contact@infotech.com');
  const [website, setWebsite] = useState('https://infotech-gamma.vercel.app');
  const [tagline, setTagline] = useState('Empowering businesses through innovative digital solutions and cutting-edge technology.');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className={styles.pageWrap}>
      {/* Top Banner */}
      <div className={styles.welcomeBanner}>
        <div>
          <h1 className={styles.greeting}>Company Branding & Platform Settings (v4) ⚙️</h1>
          <p className={styles.subtext}>Single-source-of-truth for company identity, contact info, generated documents, and footer metadata.</p>
        </div>

        <div className={styles.quickActions}>
          {saved && (
            <span style={{ fontSize: '0.8rem', color: '#00D1B2', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <CheckCircle2 size={16} /> Settings Saved!
            </span>
          )}
        </div>
      </div>

      <form onSubmit={handleSave} className={styles.pageWrap}>
        <div className={styles.contentGrid}>
          {/* Left: General Identity */}
          <div className={styles.cardBox}>
            <div className={styles.boxHeader}>
              <h3 className={styles.boxTitle}>General Company Details</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.3rem' }}>Company Name *</label>
                <input 
                  type="text" 
                  value={companyName} 
                  onChange={(e) => setCompanyName(e.target.value)} 
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }} 
                />
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.3rem' }}>Registered Office Address *</label>
                <input 
                  type="text" 
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)} 
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }} 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.3rem' }}>Support Phone *</label>
                  <input 
                    type="text" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }} 
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.3rem' }}>Support Email *</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }} 
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.3rem' }}>Footer Tagline Text</label>
                <textarea 
                  rows={2} 
                  value={tagline} 
                  onChange={(e) => setTagline(e.target.value)} 
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }} 
                />
              </div>
            </div>
          </div>

          {/* Right: Social Media Handles */}
          <div className={styles.cardBox}>
            <div className={styles.boxHeader}>
              <h3 className={styles.boxTitle}>Social Media Profile Links</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', color: '#94a3b8' }}>LinkedIn URL</label>
                <input type="text" defaultValue="https://linkedin.com/company/infotech" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Instagram Handle</label>
                <input type="text" defaultValue="https://instagram.com/infotech_official" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Twitter / X URL</label>
                <input type="text" defaultValue="https://x.com/infotech_hq" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', color: '#94a3b8' }}>WhatsApp Business Number</label>
                <input type="text" defaultValue="+15550192834" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem' }} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" className={styles.actionBtnPrimary} style={{ padding: '0.75rem 2rem' }}>
            <Save size={16} /> Save Company Settings
          </button>
        </div>
      </form>
    </div>
  );
}
