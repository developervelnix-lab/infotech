'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  FileText, 
  Image as ImageIcon, 
  Wrench, 
  Save, 
  CheckCircle2, 
  RefreshCw, 
  Eye, 
  Sliders, 
  AlertTriangle,
  Upload,
  Globe,
  Sparkles,
  Zap,
  Lock,
  Clock
} from 'lucide-react';
import styles from '../dashboard.module.css';

export default function WebsiteStudioPage() {
  const [activeTab, setActiveTab] = useState<'content' | 'theme' | 'media' | 'maintenance'>('content');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // --- TAB 1: Content CMS State ---
  const [heroBadge, setHeroBadge] = useState('✨ Next-Generation Digital Agency');
  const [heroTitle, setHeroTitle] = useState('Build Smarter. Scale Faster.');
  const [heroSubtext, setHeroSubtext] = useState('We engineer high-performance web platforms, custom enterprise software, and AI-driven growth systems tailored for modern scale.');
  const [primaryCtaText, setPrimaryCtaText] = useState('Explore Solutions');
  const [secondaryCtaText, setSecondaryCtaText] = useState('Book a Strategy Call');

  // --- TAB 2: Theme & Color Combination State ---
  const [primaryAccent, setPrimaryAccent] = useState('#5B8CFF');
  const [secondaryTeal, setSecondaryTeal] = useState('#00D1B2');
  const [bgPrimary, setBgPrimary] = useState('#070A11');
  const [bgSurface, setBgSurface] = useState('#0B0F19');
  const [activePreset, setActivePreset] = useState('Electric Blue');

  const presets = [
    { name: 'Electric Blue', accent: '#5B8CFF', teal: '#00D1B2', bg: '#070A11', surface: '#0B0F19' },
    { name: 'Neon Emerald', accent: '#10b981', teal: '#06b6d4', bg: '#06130d', surface: '#0d2218' },
    { name: 'Cyber Violet', accent: '#a855f7', teal: '#ec4899', bg: '#0d0714', surface: '#170f24' },
    { name: 'Sunset Amber', accent: '#f97316', teal: '#eab308', bg: '#140c06', surface: '#22160d' },
    { name: 'Obsidian Gold', accent: '#eab308', teal: '#38bdf8', bg: '#0a0a0a', surface: '#141414' },
  ];

  // --- TAB 3: Media & Images State ---
  const [logoUrl, setLogoUrl] = useState('/logo.svg');
  const [heroImgUrl, setHeroImgUrl] = useState('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop');
  const [ogImageUrl, setOgImageUrl] = useState('/og-image.png');

  // --- TAB 4: Maintenance Mode State ---
  const [isMaintenanceActive, setIsMaintenanceActive] = useState(false);
  const [maintenanceHeadline, setMaintenanceHeadline] = useState('Scheduled System Optimization in Progress');
  const [maintenanceMessage, setMaintenanceMessage] = useState('We are upgrading our cloud infrastructure to bring you lightning-fast performance. We will be back shortly.');
  const [estimatedReturn, setEstimatedReturn] = useState('2026-08-26T18:00');
  const [bypassKey, setBypassKey] = useState('INFOTECH-ADMIN-2026');

  // Load existing configurations from localStorage on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('infotech_custom_theme');
      if (savedTheme) {
        const parsed = JSON.parse(savedTheme);
        if (parsed.accent) setPrimaryAccent(parsed.accent);
        if (parsed.teal) setSecondaryTeal(parsed.teal);
        if (parsed.bg) setBgPrimary(parsed.bg);
        if (parsed.surface) setBgSurface(parsed.surface);
        if (parsed.preset) setActivePreset(parsed.preset);
      }

      const savedMaint = localStorage.getItem('infotech_maintenance_mode');
      if (savedMaint) {
        const parsed = JSON.parse(savedMaint);
        setIsMaintenanceActive(parsed.active || false);
        if (parsed.headline) setMaintenanceHeadline(parsed.headline);
        if (parsed.message) setMaintenanceMessage(parsed.message);
        if (parsed.returnTime) setEstimatedReturn(parsed.returnTime);
      }

      const savedContent = localStorage.getItem('infotech_site_content');
      if (savedContent) {
        const parsed = JSON.parse(savedContent);
        if (parsed.heroBadge) setHeroBadge(parsed.heroBadge);
        if (parsed.heroTitle) setHeroTitle(parsed.heroTitle);
        if (parsed.heroSubtext) setHeroSubtext(parsed.heroSubtext);
        if (parsed.primaryCtaText) setPrimaryCtaText(parsed.primaryCtaText);
        if (parsed.secondaryCtaText) setSecondaryCtaText(parsed.secondaryCtaText);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleApplyPreset = (preset: typeof presets[0]) => {
    setActivePreset(preset.name);
    setPrimaryAccent(preset.accent);
    setSecondaryTeal(preset.teal);
    setBgPrimary(preset.bg);
    setBgSurface(preset.surface);
    applyThemeToDOM(preset.accent, preset.teal, preset.bg, preset.surface);
  };

  const applyThemeToDOM = (accent: string, teal: string, bg: string, surface: string) => {
    document.documentElement.style.setProperty('--color-accent', accent);
    document.documentElement.style.setProperty('--color-teal', teal);
    document.documentElement.style.setProperty('--color-bg-primary', bg);
    document.documentElement.style.setProperty('--color-bg-surface', surface);
  };

  const handleSaveAll = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Save Content
    const contentPayload = {
      heroBadge,
      heroTitle,
      heroSubtext,
      primaryCtaText,
      secondaryCtaText,
    };
    localStorage.setItem('infotech_site_content', JSON.stringify(contentPayload));

    // 2. Save Theme
    const themePayload = {
      accent: primaryAccent,
      teal: secondaryTeal,
      bg: bgPrimary,
      surface: bgSurface,
      preset: activePreset,
    };
    localStorage.setItem('infotech_custom_theme', JSON.stringify(themePayload));
    applyThemeToDOM(primaryAccent, secondaryTeal, bgPrimary, bgSurface);

    // 3. Save Maintenance
    const maintPayload = {
      active: isMaintenanceActive,
      headline: maintenanceHeadline,
      message: maintenanceMessage,
      returnTime: estimatedReturn,
      bypassKey,
    };
    localStorage.setItem('infotech_maintenance_mode', JSON.stringify(maintPayload));

    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3500);
  };

  return (
    <div className={styles.pageWrap}>
      {/* Top Banner */}
      <div className={styles.welcomeBanner}>
        <div>
          <h1 className={styles.greeting}>Website Studio & Maintenance Control 🎨</h1>
          <p className={styles.subtext}>Live control center for website copy, color combinations, media assets, and maintenance mode.</p>
        </div>

        <div className={styles.quickActions}>
          {saveSuccess && (
            <span style={{ fontSize: '0.825rem', color: '#00D1B2', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <CheckCircle2 size={16} /> Changes Published Live!
            </span>
          )}
          <button onClick={handleSaveAll} className={styles.actionBtnPrimary}>
            <Save size={16} /> Save & Publish Live
          </button>
        </div>
      </div>

      {/* Studio Navigation Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem', flexWrap: 'wrap' }}>
        {[
          { id: 'content', label: 'Page Content CMS', icon: FileText },
          { id: 'theme', label: 'Color & Theme Customizer', icon: Palette },
          { id: 'media', label: 'Media & Image Assets', icon: ImageIcon },
          { id: 'maintenance', label: 'Website Maintenance Mode', icon: Wrench },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={styles.actionBtn}
              style={{
                background: isActive ? 'rgba(91,140,255,0.18)' : 'rgba(255,255,255,0.03)',
                borderColor: isActive ? '#5B8CFF' : 'rgba(255,255,255,0.08)',
                color: isActive ? '#fff' : '#94a3b8',
                fontWeight: isActive ? 700 : 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1rem',
                fontSize: '0.825rem',
              }}
            >
              <Icon size={16} color={isActive ? '#5B8CFF' : '#64748b'} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: CONTENT CMS */}
      {activeTab === 'content' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={styles.contentGrid}>
          {/* Left: Hero Copy Editor */}
          <div className={styles.cardBox}>
            <div className={styles.boxHeader}>
              <h3 className={styles.boxTitle}>Hero Section Content</h3>
              <span className={styles.timeTag}>Homepage Top Banner</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                  Hero Top Badge Text
                </label>
                <input
                  type="text"
                  value={heroBadge}
                  onChange={(e) => setHeroBadge(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                  Main Headline (H1)
                </label>
                <input
                  type="text"
                  value={heroTitle}
                  onChange={(e) => setHeroTitle(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                  Subtext Description
                </label>
                <textarea
                  rows={3}
                  value={heroSubtext}
                  onChange={(e) => setHeroSubtext(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                    Primary CTA Button Text
                  </label>
                  <input
                    type="text"
                    value={primaryCtaText}
                    onChange={(e) => setPrimaryCtaText(e.target.value)}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                    Secondary CTA Button Text
                  </label>
                  <input
                    type="text"
                    value={secondaryCtaText}
                    onChange={(e) => setSecondaryCtaText(e.target.value)}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Preview Simulation */}
          <div className={styles.cardBox}>
            <div className={styles.boxHeader}>
              <h3 className={styles.boxTitle}>Live Copy Preview</h3>
              <span className={styles.timeTag}>Desktop Mockup</span>
            </div>

            <div style={{ background: bgPrimary, border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'inline-flex', padding: '0.3rem 0.75rem', borderRadius: '99px', background: `${primaryAccent}20`, border: `1px solid ${primaryAccent}40`, color: primaryAccent, fontSize: '0.75rem', fontWeight: 700, width: 'fit-content' }}>
                {heroBadge}
              </div>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                {heroTitle}
              </h2>

              <p style={{ fontSize: '0.825rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                {heroSubtext}
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <div style={{ background: primaryAccent, color: '#fff', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700 }}>
                  {primaryCtaText}
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600 }}>
                  {secondaryCtaText}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* TAB 2: THEME & COLOR COMBINATION */}
      {activeTab === 'theme' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={styles.contentGrid}>
          {/* Left: Color Palette Pickers */}
          <div className={styles.cardBox}>
            <div className={styles.boxHeader}>
              <h3 className={styles.boxTitle}>Color Combinations & Accents</h3>
              <span className={styles.timeTag}>Preset: {activePreset}</span>
            </div>

            {/* Presets Grid */}
            <div>
              <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.5rem' }}>
                1-Click Curated Color Themes
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.5rem' }}>
                {presets.map((p) => {
                  const isCur = activePreset === p.name;
                  return (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => handleApplyPreset(p)}
                      style={{
                        padding: '0.5rem 0.6rem',
                        borderRadius: '10px',
                        background: isCur ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)',
                        border: isCur ? `2px solid ${p.accent}` : '1px solid rgba(255,255,255,0.08)',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <div style={{ display: 'flex', gap: '4px', marginBottom: '0.35rem' }}>
                        <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: p.accent }}></span>
                        <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: p.teal }}></span>
                        <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: p.surface, border: '1px solid rgba(255,255,255,0.2)' }}></span>
                      </div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: isCur ? '#fff' : '#94a3b8' }}>{p.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Hex Inputs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.75rem' }}>
              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                  Primary Brand Accent
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="color"
                    value={primaryAccent}
                    onChange={(e) => { setPrimaryAccent(e.target.value); applyThemeToDOM(e.target.value, secondaryTeal, bgPrimary, bgSurface); }}
                    style={{ width: '36px', height: '36px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: 'none' }}
                  />
                  <input
                    type="text"
                    value={primaryAccent}
                    onChange={(e) => { setPrimaryAccent(e.target.value); applyThemeToDOM(e.target.value, secondaryTeal, bgPrimary, bgSurface); }}
                    style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                  Secondary Teal / Glow
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="color"
                    value={secondaryTeal}
                    onChange={(e) => { setSecondaryTeal(e.target.value); applyThemeToDOM(primaryAccent, e.target.value, bgPrimary, bgSurface); }}
                    style={{ width: '36px', height: '36px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: 'none' }}
                  />
                  <input
                    type="text"
                    value={secondaryTeal}
                    onChange={(e) => { setSecondaryTeal(e.target.value); applyThemeToDOM(primaryAccent, e.target.value, bgPrimary, bgSurface); }}
                    style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                  Primary Dark Background
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="color"
                    value={bgPrimary}
                    onChange={(e) => { setBgPrimary(e.target.value); applyThemeToDOM(primaryAccent, secondaryTeal, e.target.value, bgSurface); }}
                    style={{ width: '36px', height: '36px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: 'none' }}
                  />
                  <input
                    type="text"
                    value={bgPrimary}
                    onChange={(e) => { setBgPrimary(e.target.value); applyThemeToDOM(primaryAccent, secondaryTeal, e.target.value, bgSurface); }}
                    style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                  Card Surface Background
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="color"
                    value={bgSurface}
                    onChange={(e) => { setBgSurface(e.target.value); applyThemeToDOM(primaryAccent, secondaryTeal, bgPrimary, e.target.value); }}
                    style={{ width: '36px', height: '36px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: 'none' }}
                  />
                  <input
                    type="text"
                    value={bgSurface}
                    onChange={(e) => { setBgSurface(e.target.value); applyThemeToDOM(primaryAccent, secondaryTeal, bgPrimary, e.target.value); }}
                    style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem', outline: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Theme Visualizer */}
          <div className={styles.cardBox}>
            <div className={styles.boxHeader}>
              <h3 className={styles.boxTitle}>Palette Real-Time Visualizer</h3>
            </div>

            <div style={{ background: bgSurface, border: `1px solid ${primaryAccent}40`, borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: `0 8px 30px ${primaryAccent}15` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: secondaryTeal }}>● PALETTE LIVE</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>CSS Token Engine</span>
              </div>

              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                Enterprise Cloud Automation
              </h4>

              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                High-throughput workflows styled automatically using dynamic brand tokens.
              </p>

              <div style={{ display: 'flex', gap: '0.65rem', marginTop: '0.5rem' }}>
                <button style={{ background: `linear-gradient(135deg, ${primaryAccent}, ${secondaryTeal})`, border: 'none', color: '#fff', padding: '0.55rem 1.1rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>
                  Primary Action
                </button>
                <button style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${primaryAccent}30`, color: '#fff', padding: '0.55rem 1.1rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600 }}>
                  Secondary Outline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* TAB 3: MEDIA & IMAGES */}
      {activeTab === 'media' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={styles.contentGrid}>
          {/* Left: Media URLs */}
          <div className={styles.cardBox}>
            <div className={styles.boxHeader}>
              <h3 className={styles.boxTitle}>Brand Assets & Visual Media</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                  Hero Visual Showcase Image URL
                </label>
                <input
                  type="text"
                  value={heroImgUrl}
                  onChange={(e) => setHeroImgUrl(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                  OpenGraph Social Media Banner (1200x630) URL
                </label>
                <input
                  type="text"
                  value={ogImageUrl}
                  onChange={(e) => setOgImageUrl(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                  Upload New Visual Asset
                </label>
                <div style={{ border: '2px dashed rgba(255,255,255,0.15)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', background: 'rgba(255,255,255,0.02)', cursor: 'pointer' }}>
                  <Upload size={24} color="#5B8CFF" style={{ margin: '0 auto 0.5rem auto' }} />
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff' }}>Click to Browse or Drag Image Here</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.2rem' }}>PNG, JPG, WebP, SVG up to 5MB</div>
                  <input type="file" style={{ display: 'none' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Media Live Preview */}
          <div className={styles.cardBox}>
            <div className={styles.boxHeader}>
              <h3 className={styles.boxTitle}>Asset Preview</h3>
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#000', maxHeight: '260px' }}>
              <img src={heroImgUrl} alt="Hero Asset Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </motion.div>
      )}

      {/* TAB 4: MAINTENANCE MODE */}
      {activeTab === 'maintenance' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={styles.contentGrid}>
          {/* Left: Maintenance Controls */}
          <div className={styles.cardBox}>
            <div className={styles.boxHeader}>
              <h3 className={styles.boxTitle}>Website Maintenance Mode Control</h3>
              <span className={styles.statusPill} style={{ background: isMaintenanceActive ? 'rgba(244,63,94,0.15)' : 'rgba(0,209,178,0.15)', color: isMaintenanceActive ? '#f43f5e' : '#00D1B2' }}>
                {isMaintenanceActive ? '🔴 MAINTENANCE ACTIVE' : '🟢 WEBSITE LIVE'}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Switch Box */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div>
                  <div style={{ fontWeight: 800, color: '#fff', fontSize: '0.9rem' }}>Enable Maintenance Barrier</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>When enabled, non-admin visitors will see the maintenance countdown page.</div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsMaintenanceActive(!isMaintenanceActive)}
                  style={{
                    padding: '0.55rem 1.25rem',
                    borderRadius: '99px',
                    border: 'none',
                    background: isMaintenanceActive ? '#f43f5e' : 'rgba(255,255,255,0.1)',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                  }}
                >
                  {isMaintenanceActive ? 'Disable Maintenance' : 'Activate Maintenance'}
                </button>
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                  Public Maintenance Headline
                </label>
                <input
                  type="text"
                  value={maintenanceHeadline}
                  onChange={(e) => setMaintenanceHeadline(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                  Public Explanation Message
                </label>
                <textarea
                  rows={2}
                  value={maintenanceMessage}
                  onChange={(e) => setMaintenanceMessage(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                    Estimated Return Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    value={estimatedReturn}
                    onChange={(e) => setEstimatedReturn(e.target.value)}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                    Emergency Admin Bypass Key
                  </label>
                  <input
                    type="text"
                    value={bypassKey}
                    onChange={(e) => setBypassKey(e.target.value)}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Public Maintenance Page Mockup */}
          <div className={styles.cardBox}>
            <div className={styles.boxHeader}>
              <h3 className={styles.boxTitle}>Visitor Maintenance Screen Preview</h3>
            </div>

            <div style={{ background: '#05070D', border: '1px solid rgba(244,63,94,0.3)', borderRadius: '16px', padding: '2rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(244,63,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f43f5e' }}>
                <Wrench size={24} />
              </div>

              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                {maintenanceHeadline}
              </h4>

              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6, maxWidth: '320px', margin: 0 }}>
                {maintenanceMessage}
              </p>

              <div style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.75rem', color: '#00D1B2', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={14} /> Back online by: {new Date(estimatedReturn).toLocaleString()}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
