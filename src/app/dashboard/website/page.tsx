'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  FileText, 
  Image as ImageIcon, 
  Wrench, 
  Save, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  Eye, 
  Edit3, 
  Briefcase, 
  Sparkles, 
  Award, 
  BookOpen, 
  MessageSquare, 
  Users, 
  ChevronRight,
  Upload,
  Clock,
  Layers,
  ArrowRight
} from 'lucide-react';
import styles from '../dashboard.module.css';

export default function WebsiteStudioPage() {
  const [mainTab, setMainTab] = useState<'cms' | 'theme' | 'media' | 'maintenance'>('cms');
  const [cmsSection, setCmsSection] = useState<'hero' | 'solutions' | 'whyUs' | 'caseStudies' | 'tools' | 'blog' | 'testimonials' | 'careers'>('hero');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // --- 1. HERO CMS ---
  const [heroBadge, setHeroBadge] = useState('✨ Next-Generation Digital Agency');
  const [heroTitle, setHeroTitle] = useState('Build Smarter. Scale Faster.');
  const [heroSubtext, setHeroSubtext] = useState('We engineer high-performance web platforms, custom enterprise software, and AI-driven growth systems tailored for modern scale.');
  const [primaryCtaText, setPrimaryCtaText] = useState('Explore Solutions');
  const [secondaryCtaText, setSecondaryCtaText] = useState('Book a Strategy Call');
  const [heroImgUrl, setHeroImgUrl] = useState('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop');

  // --- 2. SOLUTIONS CMS ---
  const [solutionsTitle, setSolutionsTitle] = useState('Engineering Digital Dominance');
  const [solutionsSubtitle, setSolutionsSubtitle] = useState('Six integrated pillars designed to accelerate growth, optimize operations, and build enduring enterprise value.');
  const [solutionsList, setSolutionsList] = useState([
    { id: '1', title: 'Custom Web & Mobile Apps', tag: 'High-Performance', desc: 'Scalable Next.js & mobile engineering built with enterprise security, sub-second load times, and fluid UX.', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop' },
    { id: '2', title: 'AI & Workflow Automation', tag: 'AI & Automation', desc: 'Custom LLM agents, intelligent CRM workflows, and autonomous bots that eliminate manual tasks.', img: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop' },
    { id: '3', title: 'Enterprise Software & ERP', tag: 'Scalability', desc: 'Robust backend architectures, custom ERP systems, and microservices engineered for high transaction volumes.', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop' },
    { id: '4', title: 'Growth Marketing & SEO', tag: 'Performance ROI', desc: 'Data-backed search engine domination, conversion rate optimization, and multi-channel acquisition funnels.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop' },
  ]);

  // --- 3. WHY CHOOSE US CMS ---
  const [whyTitle, setWhyTitle] = useState('Why Visionary Brands Choose Infotech');
  const [whySubtitle, setWhySubtitle] = useState('We bridge the divide between cutting-edge technology and real commercial revenue.');
  const [whyPillars, setWhyPillars] = useState([
    { id: '1', title: 'Full-Stack Technical Mastery', desc: 'From Next.js and Cloud Native backends to LLM pipelines, we build with modern, future-proof tech stacks.', stat: '99.9% Uptime' },
    { id: '2', title: 'Data-Obsessed Growth Architecture', desc: 'Every line of code and user funnel is instrumented to maximize revenue conversion and retention.', stat: '3.4x Avg ROI' },
    { id: '3', title: 'Rapid Agile Execution', desc: 'Transparent sprint cycles, weekly milestone demos, and continuous delivery with zero downtime.', stat: '2x Speed' },
    { id: '4', title: 'Enterprise Security & Compliance', desc: 'Bank-grade data encryption, automated penetration tests, and SOC2-ready cloud deployments.', stat: '100% Secure' },
  ]);

  // --- 4. CASE STUDIES CMS ("Our Work") ---
  const [caseTitle, setCaseTitle] = useState('Results That Speak for Themselves');
  const [caseSubtitle, setCaseSubtitle] = useState('Real business transformation delivered for ambitious scale-ups and established industry leaders.');
  const [casesList, setCasesList] = useState([
    { id: '1', client: 'NovaPay Global', tag: 'FinTech Platform', metric: '+340% User Growth', desc: 'Architected next-generation payment gateway processing $40M+ ARR with 99.99% availability.', img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop' },
    { id: '2', client: 'AeroLogix Supply', tag: 'AI & Logistics', metric: '65% Time Saved', desc: 'Deployed autonomous route scheduling engine cutting dispatch latency from 4 hours to 8 seconds.', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop' },
    { id: '3', client: 'MediCore Health', tag: 'HealthTech SaaS', metric: '250k+ Patients', desc: 'HIPAA-compliant telemedicine portal with encrypted EHR integration and instant specialist booking.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop' },
  ]);

  // --- 5. INTERACTIVE TOOLS CMS ---
  const [toolsTitle, setToolsTitle] = useState('Try Our Free Business Tools');
  const [toolsSubtitle, setToolsSubtitle] = useState('Interactive calculators and audit engines to evaluate your digital maturity.');
  const [toolsList, setToolsList] = useState([
    { id: '1', name: 'ROI & Tech Investment Calculator', desc: 'Forecast cost savings and revenue uplift from automated workflows and custom software migration.' },
    { id: '2', name: 'Website Speed & SEO Audit Score', desc: 'Instant diagnostic of Core Web Vitals, page weight, security headers, and conversion bottlenecks.' },
    { id: '3', name: 'AI Automation Feasibility Scanner', desc: 'Identify high-value manual processes in your business that can be automated with LLM agents.' },
  ]);

  // --- 6. BLOG & INSIGHTS CMS ---
  const [blogTitle, setBlogTitle] = useState('Knowledge That Drives Growth');
  const [blogSubtitle, setBlogSubtitle] = useState('Deep dives, engineering blueprints, and strategic insights from our digital innovators.');
  const [blogList, setBlogList] = useState([
    { id: '1', title: 'How Modern AI Workflows Eliminate 40+ Hours of Operational Drag', tag: 'AI & Automation', readTime: '5 min read', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop' },
    { id: '2', title: 'Next.js Turbopack vs Legacy Monoliths: A 2026 Engineering Review', tag: 'Web Engineering', readTime: '8 min read', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop' },
    { id: '3', title: 'The Modern SaaS Growth Engine: Combining SEO and Product-Led Funnels', tag: 'Growth Strategy', readTime: '6 min read', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop' },
  ]);

  // --- 7. CAREERS JOB OPENINGS CMS ---
  const [careersList, setCareersList] = useState([
    { id: '1', role: 'Senior Full-Stack Next.js Developer', dept: 'Engineering', type: 'Full-Time · Remote', exp: '3+ Yrs' },
    { id: '2', role: 'AI & Machine Learning Engineer', dept: 'AI & Automation', type: 'Full-Time · Hybrid', exp: '2+ Yrs' },
    { id: '3', role: 'UI/UX Product Designer (Figma)', dept: 'Design', type: 'Full-Time · Remote', exp: '2+ Yrs' },
    { id: '4', role: 'Full-Stack Web Engineering Intern', dept: 'Engineering', type: 'Internship · Remote', exp: 'Freshers / Students' },
  ]);

  // --- THEME & MAINTENANCE STATE ---
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

  const [isMaintenanceActive, setIsMaintenanceActive] = useState(false);
  const [maintenanceHeadline, setMaintenanceHeadline] = useState('Scheduled System Optimization in Progress');
  const [maintenanceMessage, setMaintenanceMessage] = useState('We are upgrading our cloud infrastructure to bring you lightning-fast performance. We will be back shortly.');
  const [estimatedReturn, setEstimatedReturn] = useState('2026-08-26T18:00');

  // Load from LocalStorage
  useEffect(() => {
    try {
      const savedCMS = localStorage.getItem('infotech_full_cms');
      if (savedCMS) {
        const p = JSON.parse(savedCMS);
        if (p.hero) {
          setHeroBadge(p.hero.badge || heroBadge);
          setHeroTitle(p.hero.title || heroTitle);
          setHeroSubtext(p.hero.subtext || heroSubtext);
          setHeroImgUrl(p.hero.img || heroImgUrl);
        }
        if (p.solutions) {
          setSolutionsTitle(p.solutions.title || solutionsTitle);
          setSolutionsSubtitle(p.solutions.subtitle || solutionsSubtitle);
          if (p.solutions.list) setSolutionsList(p.solutions.list);
        }
        if (p.whyUs) {
          setWhyTitle(p.whyUs.title || whyTitle);
          setWhySubtitle(p.whyUs.subtitle || whySubtitle);
          if (p.whyUs.pillars) setWhyPillars(p.whyUs.pillars);
        }
        if (p.cases) {
          setCaseTitle(p.cases.title || caseTitle);
          setCaseSubtitle(p.cases.subtitle || caseSubtitle);
          if (p.cases.list) setCasesList(p.cases.list);
        }
        if (p.tools) {
          setToolsTitle(p.tools.title || toolsTitle);
          setToolsSubtitle(p.tools.subtitle || toolsSubtitle);
          if (p.tools.list) setToolsList(p.tools.list);
        }
        if (p.blog) {
          setBlogTitle(p.blog.title || blogTitle);
          setBlogSubtitle(p.blog.subtitle || blogSubtitle);
          if (p.blog.list) setBlogList(p.blog.list);
        }
        if (p.careers) setCareersList(p.careers);
      }

      const savedTheme = localStorage.getItem('infotech_custom_theme');
      if (savedTheme) {
        const pt = JSON.parse(savedTheme);
        if (pt.accent) setPrimaryAccent(pt.accent);
        if (pt.teal) setSecondaryTeal(pt.teal);
        if (pt.bg) setBgPrimary(pt.bg);
        if (pt.surface) setBgSurface(pt.surface);
        if (pt.preset) setActivePreset(pt.preset);
      }

      const savedMaint = localStorage.getItem('infotech_maintenance_mode');
      if (savedMaint) {
        const pm = JSON.parse(savedMaint);
        setIsMaintenanceActive(pm.active || false);
        if (pm.headline) setMaintenanceHeadline(pm.headline);
        if (pm.message) setMaintenanceMessage(pm.message);
        if (pm.returnTime) setEstimatedReturn(pm.returnTime);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleSaveAll = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // 1. Save Full CMS Data
    const fullCMS = {
      hero: { badge: heroBadge, title: heroTitle, subtext: heroSubtext, cta1: primaryCtaText, cta2: secondaryCtaText, img: heroImgUrl },
      solutions: { title: solutionsTitle, subtitle: solutionsSubtitle, list: solutionsList },
      whyUs: { title: whyTitle, subtitle: whySubtitle, pillars: whyPillars },
      cases: { title: caseTitle, subtitle: caseSubtitle, list: casesList },
      tools: { title: toolsTitle, subtitle: toolsSubtitle, list: toolsList },
      blog: { title: blogTitle, subtitle: blogSubtitle, list: blogList },
      careers: careersList,
    };
    localStorage.setItem('infotech_full_cms', JSON.stringify(fullCMS));

    // 2. Save Theme
    const themePayload = { accent: primaryAccent, teal: secondaryTeal, bg: bgPrimary, surface: bgSurface, preset: activePreset };
    localStorage.setItem('infotech_custom_theme', JSON.stringify(themePayload));
    document.documentElement.style.setProperty('--color-accent', primaryAccent);
    document.documentElement.style.setProperty('--color-teal', secondaryTeal);
    document.documentElement.style.setProperty('--color-bg-primary', bgPrimary);
    document.documentElement.style.setProperty('--color-bg-surface', bgSurface);

    // 3. Save Maintenance
    const maintPayload = { active: isMaintenanceActive, headline: maintenanceHeadline, message: maintenanceMessage, returnTime: estimatedReturn };
    localStorage.setItem('infotech_maintenance_mode', JSON.stringify(maintPayload));

    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3500);
  };

  const handleApplyPreset = (preset: typeof presets[0]) => {
    setActivePreset(preset.name);
    setPrimaryAccent(preset.accent);
    setSecondaryTeal(preset.teal);
    setBgPrimary(preset.bg);
    setBgSurface(preset.surface);
    document.documentElement.style.setProperty('--color-accent', preset.accent);
    document.documentElement.style.setProperty('--color-teal', preset.teal);
    document.documentElement.style.setProperty('--color-bg-primary', preset.bg);
    document.documentElement.style.setProperty('--color-bg-surface', preset.surface);
  };

  return (
    <div className={styles.pageWrap}>
      {/* Top Welcome & Save Bar */}
      <div className={styles.welcomeBanner}>
        <div>
          <h1 className={styles.greeting}>Comprehensive Website CMS & Studio 🎛️</h1>
          <p className={styles.subtext}>Manage all visual sections, copy, showcase images, live color schemes, and website maintenance.</p>
        </div>

        <div className={styles.quickActions}>
          {saveSuccess && (
            <span style={{ fontSize: '0.825rem', color: '#00D1B2', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <CheckCircle2 size={16} /> All CMS Changes Published Live!
            </span>
          )}
          <button onClick={() => handleSaveAll()} className={styles.actionBtnPrimary}>
            <Save size={16} /> Publish All Changes
          </button>
        </div>
      </div>

      {/* Main Mode Switcher */}
      <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem', flexWrap: 'wrap' }}>
        {[
          { id: 'cms', label: 'Full Website Content CMS', icon: Layers },
          { id: 'theme', label: 'Color & Theme Customizer', icon: Palette },
          { id: 'maintenance', label: 'Website Maintenance Control', icon: Wrench },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = mainTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setMainTab(tab.id as any)}
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

      {/* ========================================================================= */}
      {/* 1. FULL WEBSITE CMS TAB */}
      {/* ========================================================================= */}
      {mainTab === 'cms' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Sub-Section Navigation Bar */}
          <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.4rem' }}>
            {[
              { id: 'hero', label: '🌟 Hero Banner' },
              { id: 'solutions', label: '⚡ Our Solutions (Services)' },
              { id: 'whyUs', label: '🏆 Why Choose Us' },
              { id: 'caseStudies', label: '💼 Our Work (Case Studies)' },
              { id: 'tools', label: '🛠️ Interactive Tools' },
              { id: 'blog', label: '📰 Blog & Insights' },
              { id: 'careers', label: '👥 Career Job Postings' },
            ].map((sec) => (
              <button
                key={sec.id}
                onClick={() => setCmsSection(sec.id as any)}
                style={{
                  padding: '0.45rem 0.85rem',
                  borderRadius: '99px',
                  border: cmsSection === sec.id ? '1px solid #5B8CFF' : '1px solid rgba(255,255,255,0.08)',
                  background: cmsSection === sec.id ? 'rgba(91,140,255,0.15)' : 'rgba(255,255,255,0.03)',
                  color: cmsSection === sec.id ? '#fff' : '#94a3b8',
                  fontSize: '0.775rem',
                  fontWeight: cmsSection === sec.id ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {sec.label}
              </button>
            ))}
          </div>

          {/* --- SECTION 1: HERO --- */}
          {cmsSection === 'hero' && (
            <div className={styles.contentGrid}>
              <div className={styles.cardBox}>
                <div className={styles.boxHeader}>
                  <h3 className={styles.boxTitle}>Hero Section Copy & Assets</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Top Badge Text</label>
                    <input type="text" value={heroBadge} onChange={(e) => setHeroBadge(e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem', color: '#fff', fontSize: '0.8rem', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Main Headline (H1)</label>
                    <input type="text" value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem', color: '#fff', fontSize: '0.8rem', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Subtext Description</label>
                    <textarea rows={3} value={heroSubtext} onChange={(e) => setHeroSubtext(e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem', color: '#fff', fontSize: '0.8rem', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Hero Showcase Image URL</label>
                    <input type="text" value={heroImgUrl} onChange={(e) => setHeroImgUrl(e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem', color: '#fff', fontSize: '0.8rem', outline: 'none' }} />
                  </div>
                </div>
              </div>
              <div className={styles.cardBox}>
                <div className={styles.boxHeader}><h3 className={styles.boxTitle}>Hero Image Preview</h3></div>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', height: '260px' }}>
                  <img src={heroImgUrl} alt="Hero Asset" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          )}

          {/* --- SECTION 2: SOLUTIONS --- */}
          {cmsSection === 'solutions' && (
            <div className={styles.cardBox}>
              <div className={styles.boxHeader}>
                <div>
                  <h3 className={styles.boxTitle}>Our Solutions & Services Cards</h3>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0.2rem 0 0 0' }}>Manage service cards, taglines, descriptions, and mockup images.</p>
                </div>
                <button
                  onClick={() => setSolutionsList([...solutionsList, { id: Date.now().toString(), title: 'New Solution Title', tag: 'New Service', desc: 'Custom enterprise software service description.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop' }])}
                  className={styles.actionBtnPrimary}
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}
                >
                  <Plus size={14} /> Add Service Card
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
                {solutionsList.map((sol, idx) => (
                  <div key={sol.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF' }}>Card #{idx + 1}</span>
                      <button onClick={() => setSolutionsList(solutionsList.filter(s => s.id !== sol.id))} style={{ background: 'none', border: 'none', color: '#f43f5e', cursor: 'pointer' }} title="Delete">
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <input
                      type="text"
                      value={sol.title}
                      onChange={(e) => {
                        const next = [...solutionsList];
                        next[idx].title = e.target.value;
                        setSolutionsList(next);
                      }}
                      placeholder="Service Title"
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}
                    />

                    <input
                      type="text"
                      value={sol.tag}
                      onChange={(e) => {
                        const next = [...solutionsList];
                        next[idx].tag = e.target.value;
                        setSolutionsList(next);
                      }}
                      placeholder="Category Tag"
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#00D1B2', fontSize: '0.75rem' }}
                    />

                    <textarea
                      rows={2}
                      value={sol.desc}
                      onChange={(e) => {
                        const next = [...solutionsList];
                        next[idx].desc = e.target.value;
                        setSolutionsList(next);
                      }}
                      placeholder="Description"
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#cbd5e1', fontSize: '0.75rem' }}
                    />

                    <input
                      type="text"
                      value={sol.img}
                      onChange={(e) => {
                        const next = [...solutionsList];
                        next[idx].img = e.target.value;
                        setSolutionsList(next);
                      }}
                      placeholder="Image URL"
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#94a3b8', fontSize: '0.7rem' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- SECTION 3: WHY CHOOSE US --- */}
          {cmsSection === 'whyUs' && (
            <div className={styles.cardBox}>
              <div className={styles.boxHeader}>
                <div>
                  <h3 className={styles.boxTitle}>Why Choose Us (Pillars & Metrics)</h3>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0.2rem 0 0 0' }}>Manage value propositions and metric badges.</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {whyPillars.map((p, idx) => (
                  <div key={p.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF' }}>Pillar #{idx + 1}</span>
                      <input
                        type="text"
                        value={p.stat}
                        onChange={(e) => {
                          const next = [...whyPillars];
                          next[idx].stat = e.target.value;
                          setWhyPillars(next);
                        }}
                        style={{ background: 'rgba(0,209,178,0.15)', border: '1px solid rgba(0,209,178,0.3)', borderRadius: '6px', padding: '0.2rem 0.5rem', color: '#00D1B2', fontSize: '0.7rem', fontWeight: 700, width: '100px', textAlign: 'center' }}
                      />
                    </div>

                    <input
                      type="text"
                      value={p.title}
                      onChange={(e) => {
                        const next = [...whyPillars];
                        next[idx].title = e.target.value;
                        setWhyPillars(next);
                      }}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}
                    />

                    <textarea
                      rows={3}
                      value={p.desc}
                      onChange={(e) => {
                        const next = [...whyPillars];
                        next[idx].desc = e.target.value;
                        setWhyPillars(next);
                      }}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#cbd5e1', fontSize: '0.75rem' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- SECTION 4: CASE STUDIES ("Our Work") --- */}
          {cmsSection === 'caseStudies' && (
            <div className={styles.cardBox}>
              <div className={styles.boxHeader}>
                <div>
                  <h3 className={styles.boxTitle}>Our Work / Case Studies Showcase</h3>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0.2rem 0 0 0' }}>Client outcomes, hero images, and growth metrics.</p>
                </div>
                <button
                  onClick={() => setCasesList([...casesList, { id: Date.now().toString(), client: 'Client Name', tag: 'FinTech', metric: '+150% Scale', desc: 'Case study transformation overview.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop' }])}
                  className={styles.actionBtnPrimary}
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}
                >
                  <Plus size={14} /> Add Case Study
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
                {casesList.map((cs, idx) => (
                  <div key={cs.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF' }}>Project #{idx + 1}</span>
                      <button onClick={() => setCasesList(casesList.filter(c => c.id !== cs.id))} style={{ background: 'none', border: 'none', color: '#f43f5e', cursor: 'pointer' }}>
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <input
                        type="text"
                        value={cs.client}
                        onChange={(e) => {
                          const next = [...casesList];
                          next[idx].client = e.target.value;
                          setCasesList(next);
                        }}
                        placeholder="Client Name"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}
                      />
                      <input
                        type="text"
                        value={cs.metric}
                        onChange={(e) => {
                          const next = [...casesList];
                          next[idx].metric = e.target.value;
                          setCasesList(next);
                        }}
                        placeholder="Metric e.g. +340%"
                        style={{ background: 'rgba(0,209,178,0.15)', border: '1px solid rgba(0,209,178,0.3)', borderRadius: '8px', padding: '0.5rem', color: '#00D1B2', fontSize: '0.75rem', fontWeight: 700 }}
                      />
                    </div>

                    <input
                      type="text"
                      value={cs.tag}
                      onChange={(e) => {
                        const next = [...casesList];
                        next[idx].tag = e.target.value;
                        setCasesList(next);
                      }}
                      placeholder="Industry Tag"
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#cbd5e1', fontSize: '0.75rem' }}
                    />

                    <textarea
                      rows={2}
                      value={cs.desc}
                      onChange={(e) => {
                        const next = [...casesList];
                        next[idx].desc = e.target.value;
                        setCasesList(next);
                      }}
                      placeholder="Case description"
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#cbd5e1', fontSize: '0.75rem' }}
                    />

                    <input
                      type="text"
                      value={cs.img}
                      onChange={(e) => {
                        const next = [...casesList];
                        next[idx].img = e.target.value;
                        setCasesList(next);
                      }}
                      placeholder="Showcase Image URL"
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#94a3b8', fontSize: '0.7rem' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- SECTION 5: INTERACTIVE TOOLS --- */}
          {cmsSection === 'tools' && (
            <div className={styles.cardBox}>
              <div className={styles.boxHeader}>
                <h3 className={styles.boxTitle}>Interactive Business Tools</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                {toolsList.map((t, idx) => (
                  <div key={t.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF' }}>Tool #{idx + 1}</span>
                    <input
                      type="text"
                      value={t.name}
                      onChange={(e) => {
                        const next = [...toolsList];
                        next[idx].name = e.target.value;
                        setToolsList(next);
                      }}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}
                    />
                    <textarea
                      rows={3}
                      value={t.desc}
                      onChange={(e) => {
                        const next = [...toolsList];
                        next[idx].desc = e.target.value;
                        setToolsList(next);
                      }}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#cbd5e1', fontSize: '0.75rem' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- SECTION 6: BLOG & INSIGHTS --- */}
          {cmsSection === 'blog' && (
            <div className={styles.cardBox}>
              <div className={styles.boxHeader}>
                <div>
                  <h3 className={styles.boxTitle}>Blog & Insights Articles</h3>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0.2rem 0 0 0' }}>Article headlines, categories, and cover images.</p>
                </div>
                <button
                  onClick={() => setBlogList([...blogList, { id: Date.now().toString(), title: 'New Article Headline', tag: 'Technology', readTime: '5 min read', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop' }])}
                  className={styles.actionBtnPrimary}
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}
                >
                  <Plus size={14} /> Add Article
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
                {blogList.map((b, idx) => (
                  <div key={b.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF' }}>Post #{idx + 1}</span>
                      <button onClick={() => setBlogList(blogList.filter(x => x.id !== b.id))} style={{ background: 'none', border: 'none', color: '#f43f5e', cursor: 'pointer' }}>
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <input
                      type="text"
                      value={b.title}
                      onChange={(e) => {
                        const next = [...blogList];
                        next[idx].title = e.target.value;
                        setBlogList(next);
                      }}
                      placeholder="Article Title"
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <input
                        type="text"
                        value={b.tag}
                        onChange={(e) => {
                          const next = [...blogList];
                          next[idx].tag = e.target.value;
                          setBlogList(next);
                        }}
                        placeholder="Tag"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#00D1B2', fontSize: '0.75rem' }}
                      />
                      <input
                        type="text"
                        value={b.readTime}
                        onChange={(e) => {
                          const next = [...blogList];
                          next[idx].readTime = e.target.value;
                          setBlogList(next);
                        }}
                        placeholder="Read Time"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#94a3b8', fontSize: '0.75rem' }}
                      />
                    </div>

                    <input
                      type="text"
                      value={b.img}
                      onChange={(e) => {
                        const next = [...blogList];
                        next[idx].img = e.target.value;
                        setBlogList(next);
                      }}
                      placeholder="Article Cover Image URL"
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#94a3b8', fontSize: '0.7rem' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- SECTION 7: CAREERS --- */}
          {cmsSection === 'careers' && (
            <div className={styles.cardBox}>
              <div className={styles.boxHeader}>
                <div>
                  <h3 className={styles.boxTitle}>Careers Job Openings Portal</h3>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0.2rem 0 0 0' }}>Post, edit, or remove open roles on the public /careers page.</p>
                </div>
                <button
                  onClick={() => setCareersList([...careersList, { id: Date.now().toString(), role: 'New Role Title', dept: 'Engineering', type: 'Full-Time · Remote', exp: '2+ Yrs' }])}
                  className={styles.actionBtnPrimary}
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}
                >
                  <Plus size={14} /> Add Job Opening
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
                {careersList.map((job, idx) => (
                  <div key={job.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF' }}>Position #{idx + 1}</span>
                      <button onClick={() => setCareersList(careersList.filter(j => j.id !== job.id))} style={{ background: 'none', border: 'none', color: '#f43f5e', cursor: 'pointer' }}>
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <input
                      type="text"
                      value={job.role}
                      onChange={(e) => {
                        const next = [...careersList];
                        next[idx].role = e.target.value;
                        setCareersList(next);
                      }}
                      placeholder="Role Title"
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <input
                        type="text"
                        value={job.dept}
                        onChange={(e) => {
                          const next = [...careersList];
                          next[idx].dept = e.target.value;
                          setCareersList(next);
                        }}
                        placeholder="Department"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#00D1B2', fontSize: '0.75rem' }}
                      />
                      <input
                        type="text"
                        value={job.exp}
                        onChange={(e) => {
                          const next = [...careersList];
                          next[idx].exp = e.target.value;
                          setCareersList(next);
                        }}
                        placeholder="Experience"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#94a3b8', fontSize: '0.75rem' }}
                      />
                    </div>

                    <input
                      type="text"
                      value={job.type}
                      onChange={(e) => {
                        const next = [...careersList];
                        next[idx].type = e.target.value;
                        setCareersList(next);
                      }}
                      placeholder="Type & Location e.g. Full-Time · Remote"
                      style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#cbd5e1', fontSize: '0.75rem' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. THEME & COLOR CUSTOMIZER TAB */}
      {/* ========================================================================= */}
      {mainTab === 'theme' && (
        <div className={styles.contentGrid}>
          <div className={styles.cardBox}>
            <div className={styles.boxHeader}>
              <h3 className={styles.boxTitle}>1-Click Theme Palettes</h3>
              <span className={styles.timeTag}>Active: {activePreset}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.65rem' }}>
              {presets.map((p) => {
                const isCur = activePreset === p.name;
                return (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => handleApplyPreset(p)}
                    style={{
                      padding: '0.6rem',
                      borderRadius: '12px',
                      background: isCur ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)',
                      border: isCur ? `2px solid ${p.accent}` : '1px solid rgba(255,255,255,0.08)',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '5px', marginBottom: '0.4rem' }}>
                      <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: p.accent }}></span>
                      <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: p.teal }}></span>
                      <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: p.surface, border: '1px solid rgba(255,255,255,0.2)' }}></span>
                    </div>
                    <div style={{ fontSize: '0.775rem', fontWeight: 700, color: isCur ? '#fff' : '#94a3b8' }}>{p.name}</div>
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.25rem' }}>
              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Primary Brand Accent</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="color" value={primaryAccent} onChange={(e) => setPrimaryAccent(e.target.value)} style={{ width: '36px', height: '36px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: 'none' }} />
                  <input type="text" value={primaryAccent} onChange={(e) => setPrimaryAccent(e.target.value)} style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem' }} />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Secondary Glow / Teal</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="color" value={secondaryTeal} onChange={(e) => setSecondaryTeal(e.target.value)} style={{ width: '36px', height: '36px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: 'none' }} />
                  <input type="text" value={secondaryTeal} onChange={(e) => setSecondaryTeal(e.target.value)} style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem' }} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardBox}>
            <div className={styles.boxHeader}><h3 className={styles.boxTitle}>Palette Real-Time Visualizer</h3></div>
            <div style={{ background: bgSurface, border: `1px solid ${primaryAccent}40`, borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: `0 8px 30px ${primaryAccent}15` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: secondaryTeal }}>● PALETTE LIVE</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>CSS Token Engine</span>
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', margin: 0 }}>Enterprise Cloud Automation</h4>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>High-throughput workflows styled automatically using dynamic brand tokens.</p>
              <div style={{ display: 'flex', gap: '0.65rem', marginTop: '0.5rem' }}>
                <button style={{ background: `linear-gradient(135deg, ${primaryAccent}, ${secondaryTeal})`, border: 'none', color: '#fff', padding: '0.55rem 1.1rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700 }}>Primary Action</button>
                <button style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${primaryAccent}30`, color: '#fff', padding: '0.55rem 1.1rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600 }}>Secondary</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. WEBSITE MAINTENANCE CONTROL TAB */}
      {/* ========================================================================= */}
      {mainTab === 'maintenance' && (
        <div className={styles.contentGrid}>
          <div className={styles.cardBox}>
            <div className={styles.boxHeader}>
              <h3 className={styles.boxTitle}>Website Maintenance Mode Barrier</h3>
              <span className={styles.statusPill} style={{ background: isMaintenanceActive ? 'rgba(244,63,94,0.15)' : 'rgba(0,209,178,0.15)', color: isMaintenanceActive ? '#f43f5e' : '#00D1B2' }}>
                {isMaintenanceActive ? '🔴 MAINTENANCE ACTIVE' : '🟢 WEBSITE LIVE'}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Public Maintenance Headline</label>
                <input type="text" value={maintenanceHeadline} onChange={(e) => setMaintenanceHeadline(e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem', color: '#fff', fontSize: '0.8rem' }} />
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Public Explanation Message</label>
                <textarea rows={2} value={maintenanceMessage} onChange={(e) => setMaintenanceMessage(e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem', color: '#fff', fontSize: '0.8rem' }} />
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Estimated Return Date & Time</label>
                <input type="datetime-local" value={estimatedReturn} onChange={(e) => setEstimatedReturn(e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem', color: '#fff', fontSize: '0.8rem' }} />
              </div>
            </div>
          </div>

          <div className={styles.cardBox}>
            <div className={styles.boxHeader}><h3 className={styles.boxTitle}>Visitor Screen Preview</h3></div>
            <div style={{ background: '#05070D', border: '1px solid rgba(244,63,94,0.3)', borderRadius: '16px', padding: '2rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(244,63,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f43f5e' }}>
                <Wrench size={24} />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', margin: 0 }}>{maintenanceHeadline}</h4>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6, maxWidth: '320px', margin: 0 }}>{maintenanceMessage}</p>
              <div style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.75rem', color: '#00D1B2', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={14} /> Back online by: {new Date(estimatedReturn).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
