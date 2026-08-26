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
  Upload, 
  Layers, 
  Briefcase, 
  Sparkles, 
  Award, 
  BookOpen, 
  Clock, 
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Monitor,
  Play,
  TrendingUp,
  Check,
  ShieldCheck,
  Zap,
  Star
} from 'lucide-react';
import styles from '../dashboard.module.css';

export default function WebsiteStudioPage() {
  const [activeSection, setActiveSection] = useState<
    'hero' | 'solutions' | 'whyUs' | 'caseStudies' | 'tools' | 'blog' | 'careers' | 'theme' | 'maintenance'
  >('hero');

  const [sectionSuccess, setSectionSuccess] = useState<string | null>(null);

  // --- 1. HERO STATE ---
  const [heroBadge, setHeroBadge] = useState('✨ AI-Powered Digital Agency — 2026');
  const [heroTitle, setHeroTitle] = useState('Build Smarter. Scale Faster.');
  const [heroSubtext, setHeroSubtext] = useState('We help businesses transform digitally with AI-powered solutions, modern development, and growth-focused strategies.');
  const [primaryCtaText, setPrimaryCtaText] = useState('Start Your Project');
  const [secondaryCtaText, setSecondaryCtaText] = useState('Get Free Consultation');
  const [heroImgUrl, setHeroImgUrl] = useState('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop');

  // --- 2. SOLUTIONS STATE ---
  const [solutionsTitle, setSolutionsTitle] = useState('Engineering Digital Dominance');
  const [solutionsSubtitle, setSolutionsSubtitle] = useState('Six integrated pillars designed to accelerate growth, optimize operations, and build enduring enterprise value.');
  const [solutionsList, setSolutionsList] = useState([
    { id: '1', number: '01', title: 'Custom Web & Mobile Apps', tag: 'High-Performance', subtitle: 'Scalable infrastructure for modern scale', desc: 'Scalable Next.js & mobile engineering built with enterprise security, sub-second load times, and fluid UX.', stat: '99.99%', statLabel: 'Uptime SLA', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop' },
    { id: '2', number: '02', title: 'AI & Workflow Automation', tag: 'AI & Automation', subtitle: 'Autonomous efficiency for business', desc: 'Custom LLM agents, intelligent CRM workflows, and autonomous bots that eliminate manual tasks.', stat: '4.8x', statLabel: 'Faster Ops', img: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop' },
    { id: '3', number: '03', title: 'Enterprise Software & ERP', tag: 'Scalability', subtitle: 'Tailored to unique business needs', desc: 'Robust backend architectures, custom ERP systems, and microservices engineered for high transaction volumes.', stat: '10x', statLabel: 'Query Speed', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop' },
    { id: '4', number: '04', title: 'Growth Marketing & SEO', tag: 'Performance ROI', subtitle: 'Insights that drive strategic decisions', desc: 'Data-backed search engine domination, conversion rate optimization, and multi-channel acquisition funnels.', stat: '3.4x', statLabel: 'Avg ROI', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop' },
  ]);

  // --- 3. WHY US STATE ---
  const [whyTitle, setWhyTitle] = useState('Why Visionary Brands Choose Infotech');
  const [whySubtitle, setWhySubtitle] = useState('We bridge the divide between cutting-edge technology and real commercial revenue.');
  const [whyPillars, setWhyPillars] = useState([
    { id: '1', title: 'Full-Stack Technical Mastery', desc: 'From Next.js and Cloud Native backends to LLM pipelines, we build with modern, future-proof tech stacks.', stat: '99.9% Uptime' },
    { id: '2', title: 'Data-Obsessed Growth Architecture', desc: 'Every line of code and user funnel is instrumented to maximize revenue conversion and retention.', stat: '3.4x Avg ROI' },
    { id: '3', title: 'Rapid Agile Execution', desc: 'Transparent sprint cycles, weekly milestone demos, and continuous delivery with zero downtime.', stat: '2x Speed' },
    { id: '4', title: 'Enterprise Security & Compliance', desc: 'Bank-grade data encryption, automated penetration tests, and SOC2-ready cloud deployments.', stat: '100% Secure' },
  ]);

  // --- 4. CASE STUDIES STATE ---
  const [caseTitle, setCaseTitle] = useState('Results That Speak for Themselves');
  const [caseSubtitle, setCaseSubtitle] = useState('Real business transformation delivered for ambitious scale-ups and established industry leaders.');
  const [casesList, setCasesList] = useState([
    { id: '1', client: 'NovaPay Global', tag: 'FinTech Platform', metric: '+340% User Growth', desc: 'Architected next-generation payment gateway processing $40M+ ARR with 99.99% availability.', img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop' },
    { id: '2', client: 'AeroLogix Supply', tag: 'AI & Logistics', metric: '65% Time Saved', desc: 'Deployed autonomous route scheduling engine cutting dispatch latency from 4 hours to 8 seconds.', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop' },
    { id: '3', client: 'MediCore Health', tag: 'HealthTech SaaS', metric: '250k+ Patients', desc: 'HIPAA-compliant telemedicine portal with encrypted EHR integration and instant specialist booking.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop' },
  ]);

  // --- 5. TOOLS STATE ---
  const [toolsTitle, setToolsTitle] = useState('Try Our Free Business Tools');
  const [toolsSubtitle, setToolsSubtitle] = useState('Interactive calculators and audit engines to evaluate your digital maturity.');
  const [toolsList, setToolsList] = useState([
    { id: '1', name: 'ROI & Tech Investment Calculator', tag: 'Financial Modeling', desc: 'Forecast cost savings and revenue uplift from automated workflows and custom software migration.' },
    { id: '2', name: 'Website Speed & SEO Audit Score', tag: 'Engineering Diagnostic', desc: 'Instant diagnostic of Core Web Vitals, page weight, security headers, and conversion bottlenecks.' },
    { id: '3', name: 'AI Automation Feasibility Scanner', tag: 'AI Workflow Audit', desc: 'Identify high-value manual processes in your business that can be automated with LLM agents.' },
  ]);

  // --- 6. BLOG STATE ---
  const [blogTitle, setBlogTitle] = useState('Knowledge That Drives Growth');
  const [blogSubtitle, setBlogSubtitle] = useState('Deep dives, engineering blueprints, and strategic insights from our digital innovators.');
  const [blogList, setBlogList] = useState([
    { id: '1', title: 'How Modern AI Workflows Eliminate 40+ Hours of Operational Drag', tag: 'AI & Automation', readTime: '5 min read', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop' },
    { id: '2', title: 'Next.js Turbopack vs Legacy Monoliths: A 2026 Engineering Review', tag: 'Web Engineering', readTime: '8 min read', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop' },
    { id: '3', title: 'The Modern SaaS Growth Engine: Combining SEO and Product-Led Funnels', tag: 'Growth Strategy', readTime: '6 min read', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop' },
  ]);

  // --- 7. CAREERS STATE ---
  const [careersList, setCareersList] = useState([
    { id: '1', role: 'Senior Full-Stack Next.js Developer', dept: 'Engineering', type: 'Full-Time · Remote', exp: '3+ Yrs' },
    { id: '2', role: 'AI & Machine Learning Engineer', dept: 'AI & Automation', type: 'Full-Time · Hybrid', exp: '2+ Yrs' },
    { id: '3', role: 'UI/UX Product Designer (Figma)', dept: 'Design', type: 'Full-Time · Remote', exp: '2+ Yrs' },
    { id: '4', role: 'Full-Stack Web Engineering Intern', dept: 'Engineering', type: 'Internship · Remote', exp: 'Freshers / Students' },
  ]);

  // --- 8. THEME STATE ---
  const [primaryAccent, setPrimaryAccent] = useState('#5B8CFF');
  const [secondaryTeal, setSecondaryTeal] = useState('#00D1B2');
  const [activePreset, setActivePreset] = useState('Electric Blue');

  const presets = [
    { name: 'Electric Blue', accent: '#5B8CFF', teal: '#00D1B2' },
    { name: 'Neon Emerald', accent: '#10b981', teal: '#06b6d4' },
    { name: 'Cyber Violet', accent: '#a855f7', teal: '#ec4899' },
    { name: 'Sunset Amber', accent: '#f97316', teal: '#eab308' },
    { name: 'Obsidian Gold', accent: '#eab308', teal: '#38bdf8' },
  ];

  // --- 9. MAINTENANCE STATE ---
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
          if (p.hero.cta1) setPrimaryCtaText(p.hero.cta1);
          if (p.hero.cta2) setSecondaryCtaText(p.hero.cta2);
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

  // Helper for uploading local images directly as DataURL
  const handleLocalImageUpload = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setter(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Dedicated Save Function for each section
  const handlePublishSection = (sectionName: string) => {
    try {
      const existing = localStorage.getItem('infotech_full_cms');
      const current = existing ? JSON.parse(existing) : {};

      const updated = {
        ...current,
        hero: { badge: heroBadge, title: heroTitle, subtext: heroSubtext, cta1: primaryCtaText, cta2: secondaryCtaText, img: heroImgUrl },
        solutions: { title: solutionsTitle, subtitle: solutionsSubtitle, list: solutionsList },
        whyUs: { title: whyTitle, subtitle: whySubtitle, pillars: whyPillars },
        cases: { title: caseTitle, subtitle: caseSubtitle, list: casesList },
        tools: { title: toolsTitle, subtitle: toolsSubtitle, list: toolsList },
        blog: { title: blogTitle, subtitle: blogSubtitle, list: blogList },
        careers: careersList,
      };

      localStorage.setItem('infotech_full_cms', JSON.stringify(updated));

      // Theme
      if (sectionName === 'Theme & Colors') {
        const themePayload = { accent: primaryAccent, teal: secondaryTeal, preset: activePreset };
        localStorage.setItem('infotech_custom_theme', JSON.stringify(themePayload));
        document.documentElement.style.setProperty('--color-accent', primaryAccent);
        document.documentElement.style.setProperty('--color-teal', secondaryTeal);
      }

      // Maintenance
      if (sectionName === 'Maintenance Mode') {
        const maintPayload = { active: isMaintenanceActive, headline: maintenanceHeadline, message: maintenanceMessage, returnTime: estimatedReturn };
        localStorage.setItem('infotech_maintenance_mode', JSON.stringify(maintPayload));
      }

      setSectionSuccess(`✅ ${sectionName} successfully published live!`);
      setTimeout(() => setSectionSuccess(null), 3500);
    } catch (err) {
      console.error(err);
    }
  };

  const handleApplyPreset = (preset: typeof presets[0]) => {
    setActivePreset(preset.name);
    setPrimaryAccent(preset.accent);
    setSecondaryTeal(preset.teal);
    document.documentElement.style.setProperty('--color-accent', preset.accent);
    document.documentElement.style.setProperty('--color-teal', preset.teal);
  };

  return (
    <div className={styles.pageWrap}>
      {/* Top Banner */}
      <div className={styles.welcomeBanner}>
        <div>
          <h1 className={styles.greeting}>Website Content Studio & Visual Manager 🎨</h1>
          <p className={styles.subtext}>Edit any section, upload local image assets, and preview real-time results exactly as they appear on the live website.</p>
        </div>

        <div className={styles.quickActions}>
          <a href="/" target="_blank" className={styles.actionBtn}>
            <ExternalLink size={15} /> Open Live Website
          </a>
        </div>
      </div>

      {/* Global Success Notification */}
      {sectionSuccess && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          style={{ background: 'rgba(0,209,178,0.15)', border: '1px solid rgba(0,209,178,0.4)', borderRadius: '12px', padding: '0.85rem 1.25rem', color: '#00D1B2', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <CheckCircle2 size={18} /> {sectionSuccess}
        </motion.div>
      )}

      {/* Section Navigation Tabs */}
      <div style={{ display: 'flex', gap: '0.45rem', overflowX: 'auto', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        {[
          { id: 'hero', label: '🌟 Hero Banner' },
          { id: 'solutions', label: '⚡ Our Solutions' },
          { id: 'whyUs', label: '🏆 Why Choose Us' },
          { id: 'caseStudies', label: '💼 Our Work (Cases)' },
          { id: 'tools', label: '🛠️ Interactive Tools' },
          { id: 'blog', label: '📰 Blog & Insights' },
          { id: 'careers', label: '👥 Career Job Postings' },
          { id: 'theme', label: '🎨 Colors & Theme' },
          { id: 'maintenance', label: '🛠️ Maintenance Mode' },
        ].map((sec) => (
          <button
            key={sec.id}
            onClick={() => setActiveSection(sec.id as any)}
            style={{
              padding: '0.55rem 1rem',
              borderRadius: '99px',
              border: activeSection === sec.id ? '1px solid #5B8CFF' : '1px solid rgba(255,255,255,0.08)',
              background: activeSection === sec.id ? 'linear-gradient(135deg, rgba(91,140,255,0.2) 0%, rgba(0,209,178,0.1) 100%)' : 'rgba(255,255,255,0.03)',
              color: activeSection === sec.id ? '#ffffff' : '#94a3b8',
              fontSize: '0.8rem',
              fontWeight: activeSection === sec.id ? 700 : 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
            }}
          >
            {sec.label}
          </button>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 2-COLUMN WORKSPACE: LEFT EDITOR | RIGHT EXACT PIXEL-PERFECT LIVE DEMO */}
      {/* ========================================================================= */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.15fr', gap: '1.5rem', alignItems: 'start' }}>

        {/* ----------------------------------------------------------------------- */}
        {/* LEFT COLUMN: EDITING CONTROLS */}
        {/* ----------------------------------------------------------------------- */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* 1. HERO SECTION */}
          {activeSection === 'hero' && (
            <div className={styles.cardBox}>
              <div className={styles.boxHeader}>
                <h3 className={styles.boxTitle}>Edit Hero Banner</h3>
                <button onClick={() => handlePublishSection('Hero Banner')} className={styles.actionBtnPrimary}>
                  <Save size={15} /> Publish Hero
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Top Badge Text</label>
                  <input type="text" value={heroBadge} onChange={(e) => setHeroBadge(e.target.value)} style={{ width: '100%', background: '#070A11', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.65rem', color: '#fff', fontSize: '0.825rem' }} />
                </div>

                <div>
                  <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Main Headline (H1)</label>
                  <input type="text" value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} style={{ width: '100%', background: '#070A11', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.65rem', color: '#fff', fontSize: '0.825rem', fontWeight: 700 }} />
                </div>

                <div>
                  <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Subtext Description</label>
                  <textarea rows={3} value={heroSubtext} onChange={(e) => setHeroSubtext(e.target.value)} style={{ width: '100%', background: '#070A11', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.65rem', color: '#fff', fontSize: '0.825rem' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Primary CTA Button</label>
                    <input type="text" value={primaryCtaText} onChange={(e) => setPrimaryCtaText(e.target.value)} style={{ width: '100%', background: '#070A11', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.65rem', color: '#fff', fontSize: '0.825rem' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Secondary CTA Button</label>
                    <input type="text" value={secondaryCtaText} onChange={(e) => setSecondaryCtaText(e.target.value)} style={{ width: '100%', background: '#070A11', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.65rem', color: '#fff', fontSize: '0.825rem' }} />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Hero Showcase Image</label>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input type="text" value={heroImgUrl} onChange={(e) => setHeroImgUrl(e.target.value)} placeholder="Or paste image URL" style={{ flex: 1, background: '#070A11', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.65rem', color: '#fff', fontSize: '0.8rem' }} />
                    <label style={{ padding: '0.65rem 1rem', borderRadius: '8px', background: 'rgba(91,140,255,0.15)', border: '1px solid rgba(91,140,255,0.3)', color: '#5B8CFF', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Upload size={14} /> Upload Local
                      <input type="file" accept="image/*" onChange={(e) => handleLocalImageUpload(e, setHeroImgUrl)} style={{ display: 'none' }} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. SOLUTIONS SECTION */}
          {activeSection === 'solutions' && (
            <div className={styles.cardBox}>
              <div className={styles.boxHeader}>
                <h3 className={styles.boxTitle}>Edit Solutions & Services ({solutionsList.length} Cards)</h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => setSolutionsList([...solutionsList, { id: Date.now().toString(), number: `0${solutionsList.length + 1}`, title: 'New Custom Solution', tag: 'Enterprise', subtitle: 'Tailored enterprise software', desc: 'Comprehensive digital engineering solutions tailored for rapid scale.', stat: '99.9%', statLabel: 'Uptime SLA', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop' }])} className={styles.actionBtn}>
                    <Plus size={14} /> Add Card
                  </button>
                  <button onClick={() => handlePublishSection('Our Solutions')} className={styles.actionBtnPrimary}>
                    <Save size={15} /> Publish Solutions
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {solutionsList.map((sol, idx) => (
                  <div key={sol.id} style={{ background: '#070A11', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF' }}>Service Card #{idx + 1} ({sol.number})</span>
                      <button onClick={() => setSolutionsList(solutionsList.filter(s => s.id !== sol.id))} style={{ background: 'none', border: 'none', color: '#f43f5e', cursor: 'pointer' }}>
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '0.5rem' }}>
                      <input type="text" value={sol.title} onChange={(e) => { const n = [...solutionsList]; n[idx].title = e.target.value; setSolutionsList(n); }} placeholder="Service Title" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }} />
                      <input type="text" value={sol.tag} onChange={(e) => { const n = [...solutionsList]; n[idx].tag = e.target.value; setSolutionsList(n); }} placeholder="Tag" style={{ background: 'rgba(0,209,178,0.1)', border: '1px solid rgba(0,209,178,0.25)', borderRadius: '8px', padding: '0.55rem', color: '#00D1B2', fontSize: '0.75rem', fontWeight: 700 }} />
                    </div>

                    <input type="text" value={sol.subtitle} onChange={(e) => { const n = [...solutionsList]; n[idx].subtitle = e.target.value; setSolutionsList(n); }} placeholder="Subtitle" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#94a3b8', fontSize: '0.75rem' }} />
                    <textarea rows={2} value={sol.desc} onChange={(e) => { const n = [...solutionsList]; n[idx].desc = e.target.value; setSolutionsList(n); }} placeholder="Service Description" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#cbd5e1', fontSize: '0.75rem' }} />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <input type="text" value={sol.stat} onChange={(e) => { const n = [...solutionsList]; n[idx].stat = e.target.value; setSolutionsList(n); }} placeholder="Stat e.g. 99.9%" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.75rem' }} />
                      <input type="text" value={sol.statLabel} onChange={(e) => { const n = [...solutionsList]; n[idx].statLabel = e.target.value; setSolutionsList(n); }} placeholder="Stat Label" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#94a3b8', fontSize: '0.75rem' }} />
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <input type="text" value={sol.img} onChange={(e) => { const n = [...solutionsList]; n[idx].img = e.target.value; setSolutionsList(n); }} placeholder="Card Image URL" style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#94a3b8', fontSize: '0.75rem' }} />
                      <label style={{ padding: '0.55rem 0.85rem', borderRadius: '8px', background: 'rgba(91,140,255,0.15)', border: '1px solid rgba(91,140,255,0.3)', color: '#5B8CFF', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Upload size={13} /> Local Image
                        <input type="file" accept="image/*" onChange={(e) => handleLocalImageUpload(e, (val) => { const n = [...solutionsList]; n[idx].img = val; setSolutionsList(n); })} style={{ display: 'none' }} />
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. WHY CHOOSE US SECTION */}
          {activeSection === 'whyUs' && (
            <div className={styles.cardBox}>
              <div className={styles.boxHeader}>
                <h3 className={styles.boxTitle}>Edit Why Choose Us (Pillars & Stats)</h3>
                <button onClick={() => handlePublishSection('Why Choose Us')} className={styles.actionBtnPrimary}>
                  <Save size={15} /> Publish Why Us
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {whyPillars.map((p, idx) => (
                  <div key={p.id} style={{ background: '#070A11', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF' }}>Pillar #{idx + 1}</span>
                      <input type="text" value={p.stat} onChange={(e) => { const n = [...whyPillars]; n[idx].stat = e.target.value; setWhyPillars(n); }} placeholder="Stat Badge" style={{ background: 'rgba(0,209,178,0.12)', border: '1px solid rgba(0,209,178,0.3)', borderRadius: '6px', padding: '0.25rem 0.6rem', color: '#00D1B2', fontSize: '0.725rem', fontWeight: 700, width: '120px', textAlign: 'center' }} />
                    </div>

                    <input type="text" value={p.title} onChange={(e) => { const n = [...whyPillars]; n[idx].title = e.target.value; setWhyPillars(n); }} placeholder="Pillar Title" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }} />
                    <textarea rows={2} value={p.desc} onChange={(e) => { const n = [...whyPillars]; n[idx].desc = e.target.value; setWhyPillars(n); }} placeholder="Pillar Description" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#cbd5e1', fontSize: '0.75rem' }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. CASE STUDIES SECTION */}
          {activeSection === 'caseStudies' && (
            <div className={styles.cardBox}>
              <div className={styles.boxHeader}>
                <h3 className={styles.boxTitle}>Edit Case Studies & Our Work ({casesList.length} Projects)</h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => setCasesList([...casesList, { id: Date.now().toString(), client: 'New Client Project', tag: 'FinTech', metric: '+180% Growth', desc: 'Engineered custom software transforming operational efficiency.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop' }])} className={styles.actionBtn}>
                    <Plus size={14} /> Add Project
                  </button>
                  <button onClick={() => handlePublishSection('Our Work & Cases')} className={styles.actionBtnPrimary}>
                    <Save size={15} /> Publish Cases
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {casesList.map((cs, idx) => (
                  <div key={cs.id} style={{ background: '#070A11', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF' }}>Case #{idx + 1}</span>
                      <button onClick={() => setCasesList(casesList.filter(c => c.id !== cs.id))} style={{ background: 'none', border: 'none', color: '#f43f5e', cursor: 'pointer' }}>
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.5rem' }}>
                      <input type="text" value={cs.client} onChange={(e) => { const n = [...casesList]; n[idx].client = e.target.value; setCasesList(n); }} placeholder="Client Name" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }} />
                      <input type="text" value={cs.metric} onChange={(e) => { const n = [...casesList]; n[idx].metric = e.target.value; setCasesList(n); }} placeholder="Metric (+340%)" style={{ background: 'rgba(0,209,178,0.12)', border: '1px solid rgba(0,209,178,0.3)', borderRadius: '8px', padding: '0.55rem', color: '#00D1B2', fontSize: '0.75rem', fontWeight: 700 }} />
                    </div>

                    <input type="text" value={cs.tag} onChange={(e) => { const n = [...casesList]; n[idx].tag = e.target.value; setCasesList(n); }} placeholder="Industry Tag" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#cbd5e1', fontSize: '0.75rem' }} />
                    <textarea rows={2} value={cs.desc} onChange={(e) => { const n = [...casesList]; n[idx].desc = e.target.value; setCasesList(n); }} placeholder="Outcome description" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#cbd5e1', fontSize: '0.75rem' }} />

                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <input type="text" value={cs.img} onChange={(e) => { const n = [...casesList]; n[idx].img = e.target.value; setCasesList(n); }} placeholder="Image URL" style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#94a3b8', fontSize: '0.75rem' }} />
                      <label style={{ padding: '0.55rem 0.85rem', borderRadius: '8px', background: 'rgba(91,140,255,0.15)', border: '1px solid rgba(91,140,255,0.3)', color: '#5B8CFF', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Upload size={13} /> Local Image
                        <input type="file" accept="image/*" onChange={(e) => handleLocalImageUpload(e, (val) => { const n = [...casesList]; n[idx].img = val; setCasesList(n); })} style={{ display: 'none' }} />
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. INTERACTIVE TOOLS SECTION */}
          {activeSection === 'tools' && (
            <div className={styles.cardBox}>
              <div className={styles.boxHeader}>
                <h3 className={styles.boxTitle}>Edit Interactive Free Tools</h3>
                <button onClick={() => handlePublishSection('Interactive Tools')} className={styles.actionBtnPrimary}>
                  <Save size={15} /> Publish Tools
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {toolsList.map((tool, idx) => (
                  <div key={tool.id} style={{ background: '#070A11', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF' }}>Tool #{idx + 1}</span>
                    <input type="text" value={tool.name} onChange={(e) => { const n = [...toolsList]; n[idx].name = e.target.value; setToolsList(n); }} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }} />
                    <textarea rows={2} value={tool.desc} onChange={(e) => { const n = [...toolsList]; n[idx].desc = e.target.value; setToolsList(n); }} style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#cbd5e1', fontSize: '0.75rem' }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. BLOG SECTION */}
          {activeSection === 'blog' && (
            <div className={styles.cardBox}>
              <div className={styles.boxHeader}>
                <h3 className={styles.boxTitle}>Edit Blog & Insights</h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => setBlogList([...blogList, { id: Date.now().toString(), title: 'New Digital Insights Post', tag: 'Engineering', readTime: '5 min read', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop' }])} className={styles.actionBtn}>
                    <Plus size={14} /> Add Article
                  </button>
                  <button onClick={() => handlePublishSection('Blog & Insights')} className={styles.actionBtnPrimary}>
                    <Save size={15} /> Publish Blog
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {blogList.map((b, idx) => (
                  <div key={b.id} style={{ background: '#070A11', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF' }}>Post #{idx + 1}</span>
                      <button onClick={() => setBlogList(blogList.filter(x => x.id !== b.id))} style={{ background: 'none', border: 'none', color: '#f43f5e', cursor: 'pointer' }}>
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <input type="text" value={b.title} onChange={(e) => { const n = [...blogList]; n[idx].title = e.target.value; setBlogList(n); }} placeholder="Article Headline" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }} />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <input type="text" value={b.tag} onChange={(e) => { const n = [...blogList]; n[idx].tag = e.target.value; setBlogList(n); }} placeholder="Category Tag" style={{ background: 'rgba(0,209,178,0.1)', border: '1px solid rgba(0,209,178,0.25)', borderRadius: '8px', padding: '0.55rem', color: '#00D1B2', fontSize: '0.75rem' }} />
                      <input type="text" value={b.readTime} onChange={(e) => { const n = [...blogList]; n[idx].readTime = e.target.value; setBlogList(n); }} placeholder="Read time" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#94a3b8', fontSize: '0.75rem' }} />
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <input type="text" value={b.img} onChange={(e) => { const n = [...blogList]; n[idx].img = e.target.value; setBlogList(n); }} placeholder="Cover Image URL" style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#94a3b8', fontSize: '0.75rem' }} />
                      <label style={{ padding: '0.55rem 0.85rem', borderRadius: '8px', background: 'rgba(91,140,255,0.15)', border: '1px solid rgba(91,140,255,0.3)', color: '#5B8CFF', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Upload size={13} /> Local Image
                        <input type="file" accept="image/*" onChange={(e) => handleLocalImageUpload(e, (val) => { const n = [...blogList]; n[idx].img = val; setBlogList(n); })} style={{ display: 'none' }} />
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. CAREERS SECTION */}
          {activeSection === 'careers' && (
            <div className={styles.cardBox}>
              <div className={styles.boxHeader}>
                <h3 className={styles.boxTitle}>Edit Career Job Openings</h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => setCareersList([...careersList, { id: Date.now().toString(), role: 'New Role Title', dept: 'Engineering', type: 'Full-Time · Remote', exp: '2+ Yrs' }])} className={styles.actionBtn}>
                    <Plus size={14} /> Add Role
                  </button>
                  <button onClick={() => handlePublishSection('Careers Portal')} className={styles.actionBtnPrimary}>
                    <Save size={15} /> Publish Careers
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {careersList.map((job, idx) => (
                  <div key={job.id} style={{ background: '#070A11', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF' }}>Position #{idx + 1}</span>
                      <button onClick={() => setCareersList(careersList.filter(j => j.id !== job.id))} style={{ background: 'none', border: 'none', color: '#f43f5e', cursor: 'pointer' }}>
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <input type="text" value={job.role} onChange={(e) => { const n = [...careersList]; n[idx].role = e.target.value; setCareersList(n); }} placeholder="Role Title" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }} />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <input type="text" value={job.dept} onChange={(e) => { const n = [...careersList]; n[idx].dept = e.target.value; setCareersList(n); }} placeholder="Department" style={{ background: 'rgba(0,209,178,0.1)', border: '1px solid rgba(0,209,178,0.25)', borderRadius: '8px', padding: '0.55rem', color: '#00D1B2', fontSize: '0.75rem' }} />
                      <input type="text" value={job.exp} onChange={(e) => { const n = [...careersList]; n[idx].exp = e.target.value; setCareersList(n); }} placeholder="Experience" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#94a3b8', fontSize: '0.75rem' }} />
                    </div>

                    <input type="text" value={job.type} onChange={(e) => { const n = [...careersList]; n[idx].type = e.target.value; setCareersList(n); }} placeholder="Type e.g. Full-Time · Remote" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#cbd5e1', fontSize: '0.75rem' }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. THEME SECTION */}
          {activeSection === 'theme' && (
            <div className={styles.cardBox}>
              <div className={styles.boxHeader}>
                <h3 className={styles.boxTitle}>Color Palette & Theme Presets</h3>
                <button onClick={() => handlePublishSection('Theme & Colors')} className={styles.actionBtnPrimary}>
                  <Save size={15} /> Publish Theme
                </button>
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.5rem' }}>1-Click Brand Themes</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.5rem' }}>
                  {presets.map((p) => (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => handleApplyPreset(p)}
                      style={{
                        padding: '0.6rem',
                        borderRadius: '12px',
                        background: activePreset === p.name ? 'rgba(91,140,255,0.15)' : '#070A11',
                        border: activePreset === p.name ? `2px solid ${p.accent}` : '1px solid rgba(255,255,255,0.08)',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ display: 'flex', gap: '4px', marginBottom: '0.4rem' }}>
                        <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: p.accent }}></span>
                        <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: p.teal }}></span>
                      </div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: activePreset === p.name ? '#fff' : '#94a3b8' }}>{p.name}</div>
                    </button>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.25rem' }}>
                  <div>
                    <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Primary Accent Hex</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input type="color" value={primaryAccent} onChange={(e) => setPrimaryAccent(e.target.value)} style={{ width: '36px', height: '36px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: 'none' }} />
                      <input type="text" value={primaryAccent} onChange={(e) => setPrimaryAccent(e.target.value)} style={{ flex: 1, background: '#070A11', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#fff', fontSize: '0.8rem' }} />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Secondary Teal Hex</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input type="color" value={secondaryTeal} onChange={(e) => setSecondaryTeal(e.target.value)} style={{ width: '36px', height: '36px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: 'none' }} />
                      <input type="text" value={secondaryTeal} onChange={(e) => setSecondaryTeal(e.target.value)} style={{ flex: 1, background: '#070A11', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.5rem', color: '#fff', fontSize: '0.8rem' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 9. MAINTENANCE SECTION */}
          {activeSection === 'maintenance' && (
            <div className={styles.cardBox}>
              <div className={styles.boxHeader}>
                <h3 className={styles.boxTitle}>Website Maintenance Barrier Control</h3>
                <button onClick={() => handlePublishSection('Maintenance Mode')} className={styles.actionBtnPrimary}>
                  <Save size={15} /> Publish Status
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#070A11', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div>
                    <div style={{ fontWeight: 800, color: '#fff', fontSize: '0.9rem' }}>Maintenance Mode Barrier</div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>When active, non-admin visitors see the maintenance screen.</div>
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
                  <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Public Headline</label>
                  <input type="text" value={maintenanceHeadline} onChange={(e) => setMaintenanceHeadline(e.target.value)} style={{ width: '100%', background: '#070A11', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem', color: '#fff', fontSize: '0.8rem' }} />
                </div>

                <div>
                  <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Explanation Message</label>
                  <textarea rows={2} value={maintenanceMessage} onChange={(e) => setMaintenanceMessage(e.target.value)} style={{ width: '100%', background: '#070A11', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem', color: '#fff', fontSize: '0.8rem' }} />
                </div>

                <div>
                  <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>Estimated Return Time</label>
                  <input type="datetime-local" value={estimatedReturn} onChange={(e) => setEstimatedReturn(e.target.value)} style={{ width: '100%', background: '#070A11', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem', color: '#fff', fontSize: '0.8rem' }} />
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* RIGHT COLUMN: EXACT PIXEL-PERFECT LIVE WEBSITE COMPONENT PREVIEW */}
        {/* ----------------------------------------------------------------------- */}
        <div style={{ position: 'sticky', top: '90px' }}>
          <div className={styles.cardBox} style={{ border: '1px solid rgba(91,140,255,0.3)', background: '#111827' }}>
            <div className={styles.boxHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Monitor size={16} color="#5B8CFF" />
                <h3 className={styles.boxTitle} style={{ fontSize: '0.95rem' }}>Exact Live Component Demo</h3>
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#00D1B2', background: 'rgba(0,209,178,0.15)', padding: '0.15rem 0.5rem', borderRadius: '99px', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00D1B2' }}></span> LIVE PREVIEW
              </span>
            </div>

            {/* EXACT COMPONENT RENDER CANVAS */}
            <div style={{ background: '#0B0F19', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '1.5rem', minHeight: '440px', display: 'flex', flexDirection: 'column', gap: '1.25rem', overflow: 'hidden' }}>

              {/* DEMO 1: EXACT HERO COMPONENT */}
              {activeSection === 'hero' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Badge */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', borderRadius: '99px', background: 'rgba(91,140,255,0.1)', border: '1px solid rgba(91,140,255,0.3)', color: '#5B8CFF', fontSize: '0.75rem', fontWeight: 700, width: 'fit-content' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00D1B2', boxShadow: '0 0 8px #00D1B2' }} />
                    {heroBadge}
                  </div>

                  {/* Headline */}
                  <h1 style={{ fontSize: '1.85rem', fontWeight: 900, lineHeight: 1.15, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
                    Build <span style={{ background: 'linear-gradient(135deg, #5B8CFF, #00D1B2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Smarter.</span>
                    <br />
                    Scale <span style={{ background: 'linear-gradient(135deg, #00D1B2, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Faster.</span>
                    <br />
                    <span style={{ fontSize: '1.25rem', color: '#94a3b8', fontWeight: 600 }}>Grow with Infotech.</span>
                  </h1>

                  {/* Subtext */}
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                    {heroSubtext}
                  </p>

                  {/* CTAs */}
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <div style={{ background: 'linear-gradient(135deg, #5B8CFF 0%, #00D1B2 100%)', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', boxShadow: '0 4px 18px rgba(91,140,255,0.35)' }}>
                      {primaryCtaText} <ArrowRight size={14} />
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Play size={13} /> {secondaryCtaText}
                    </div>
                  </div>

                  {/* Stats Bar */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', marginTop: '0.25rem' }}>
                    <div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#fff' }}>150+</div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Projects Done</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#00D1B2' }}>99.9%</div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Uptime SLA</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#5B8CFF' }}>4.9/5</div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Client Rating</div>
                    </div>
                  </div>

                  {/* Hero Showcase Image */}
                  {heroImgUrl && (
                    <div style={{ borderRadius: '12px', overflow: 'hidden', height: '160px', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}>
                      <img src={heroImgUrl} alt="Hero Live Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  )}
                </div>
              )}

              {/* DEMO 2: EXACT SOLUTIONS COMPONENT */}
              {activeSection === 'solutions' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00D1B2', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Our Solutions</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', margin: '0.2rem 0' }}>{solutionsTitle}</h3>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>{solutionsSubtitle}</p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxHeight: '420px', overflowY: 'auto' }}>
                    {solutionsList.map(s => (
                      <div key={s.id} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#5B8CFF', background: 'rgba(91,140,255,0.12)', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>{s.number || '01'}</span>
                          <span style={{ fontSize: '0.7rem', color: '#00D1B2', fontWeight: 700, background: 'rgba(0,209,178,0.12)', padding: '0.2rem 0.6rem', borderRadius: '99px' }}>{s.tag}</span>
                        </div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff' }}>{s.title}</div>
                        <div style={{ fontSize: '0.75rem', color: '#00D1B2', fontWeight: 600 }}>{s.subtitle}</div>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5 }}>{s.desc}</div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                          <div>
                            <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#fff' }}>{s.stat}</span>
                            <span style={{ fontSize: '0.675rem', color: '#64748b', marginLeft: '0.35rem' }}>{s.statLabel}</span>
                          </div>
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5B8CFF', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                            Learn More <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DEMO 3: EXACT WHY US COMPONENT */}
              {activeSection === 'whyUs' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Why Choose Us</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', margin: '0.2rem 0' }}>{whyTitle}</h3>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>{whySubtitle}</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    {whyPillars.map((p, i) => (
                      <div key={p.id} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        <div style={{ display: 'inline-flex', padding: '0.2rem 0.5rem', borderRadius: '6px', background: 'rgba(0,209,178,0.12)', color: '#00D1B2', fontSize: '0.7rem', fontWeight: 800, width: 'fit-content' }}>
                          {p.stat}
                        </div>
                        <div style={{ fontSize: '0.825rem', fontWeight: 800, color: '#fff' }}>{p.title}</div>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8', lineHeight: 1.5 }}>{p.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DEMO 4: EXACT CASE STUDIES COMPONENT */}
              {activeSection === 'caseStudies' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00D1B2', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Case Studies</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', margin: '0.2rem 0' }}>{caseTitle}</h3>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>{caseSubtitle}</p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxHeight: '420px', overflowY: 'auto' }}>
                    {casesList.map(c => (
                      <div key={c.id} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', overflow: 'hidden' }}>
                        <img src={c.img} alt={c.client} style={{ width: '100%', height: '110px', objectFit: 'cover' }} />
                        <div style={{ padding: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.7rem', color: '#5B8CFF', fontWeight: 700 }}>{c.tag}</span>
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#00D1B2', background: 'rgba(0,209,178,0.12)', padding: '0.15rem 0.5rem', borderRadius: '99px' }}>{c.metric}</span>
                          </div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#fff' }}>{c.client}</div>
                          <div style={{ fontSize: '0.725rem', color: '#94a3b8', lineHeight: 1.5 }}>{c.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DEMO 5: EXACT TOOLS COMPONENT */}
              {activeSection === 'tools' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Interactive Suite</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', margin: '0.2rem 0' }}>{toolsTitle}</h3>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>{toolsSubtitle}</p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {toolsList.map(t => (
                      <div key={t.id} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <span style={{ fontSize: '0.7rem', color: '#00D1B2', fontWeight: 700 }}>{t.tag || 'Tool Engine'}</span>
                        <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#fff' }}>{t.name}</div>
                        <div style={{ fontSize: '0.725rem', color: '#94a3b8', lineHeight: 1.5 }}>{t.desc}</div>
                        <div style={{ marginTop: '0.4rem' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5B8CFF', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                            Launch Tool <ArrowRight size={13} />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DEMO 6: EXACT BLOG COMPONENT */}
              {activeSection === 'blog' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00D1B2', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Blog & Insights</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', margin: '0.2rem 0' }}>{blogTitle}</h3>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>{blogSubtitle}</p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '420px', overflowY: 'auto' }}>
                    {blogList.map(b => (
                      <div key={b.id} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <img src={b.img} alt={b.title} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: '0.675rem', color: '#00D1B2', fontWeight: 700 }}>{b.tag} · {b.readTime}</div>
                          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#fff', margin: '0.15rem 0', lineHeight: 1.3 }}>{b.title}</div>
                          <span style={{ fontSize: '0.7rem', color: '#5B8CFF', fontWeight: 600 }}>Read Full Story &rarr;</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DEMO 7: EXACT CAREERS COMPONENT */}
              {activeSection === 'careers' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Careers at Infotech</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', margin: '0.2rem 0' }}>Join Our Engineering & AI Team</h3>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>Build the future of software with world-class talent.</p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {careersList.map(j => (
                      <div key={j.id} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '0.85rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '0.825rem', fontWeight: 800, color: '#fff' }}>{j.role}</div>
                          <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.2rem' }}>{j.dept} · {j.exp}</div>
                        </div>
                        <div style={{ background: 'linear-gradient(135deg, #5B8CFF, #00D1B2)', color: '#fff', padding: '0.35rem 0.8rem', borderRadius: '99px', fontSize: '0.7rem', fontWeight: 700 }}>
                          Apply Now
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DEMO 8: EXACT THEME COMPONENT */}
              {activeSection === 'theme' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: `linear-gradient(135deg, ${primaryAccent}, ${secondaryTeal})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '1.3rem', boxShadow: `0 8px 24px ${primaryAccent}40` }}>
                    IF
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', margin: 0 }}>Active Theme: {activePreset}</h3>
                    <p style={{ fontSize: '0.775rem', color: '#94a3b8', margin: '0.35rem 0 0 0' }}>Dynamic CSS token engine rendering across public buttons, glows, and badges.</p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <div style={{ background: `linear-gradient(135deg, ${primaryAccent}, ${secondaryTeal})`, color: '#fff', padding: '0.55rem 1.1rem', borderRadius: '99px', fontSize: '0.775rem', fontWeight: 700, boxShadow: `0 4px 14px ${primaryAccent}40` }}>
                      Primary Brand Gradient
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${primaryAccent}40`, color: '#fff', padding: '0.55rem 1.1rem', borderRadius: '99px', fontSize: '0.775rem', fontWeight: 600 }}>
                      Secondary Outline
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 9: EXACT MAINTENANCE COMPONENT */}
              {activeSection === 'maintenance' && (
                <div style={{ textAlign: 'center', padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', background: '#05070D', borderRadius: '16px', border: '1px solid rgba(244,63,94,0.3)' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(244,63,94,0.15)', border: '1px solid rgba(244,63,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f43f5e' }}>
                    <Wrench size={26} />
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#f43f5e', textTransform: 'uppercase', letterSpacing: '0.08em' }}>System Status</span>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1.3 }}>{maintenanceHeadline}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6, maxWidth: '280px', margin: 0 }}>{maintenanceMessage}</p>
                  <div style={{ padding: '0.45rem 1rem', background: 'rgba(255,255,255,0.04)', borderRadius: '99px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.75rem', color: '#00D1B2', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Clock size={14} /> Back by: {new Date(estimatedReturn).toLocaleString()}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
