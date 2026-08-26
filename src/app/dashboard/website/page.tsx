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
  Star,
  ChevronLeft,
  Cloud,
  Code2,
  BarChart3,
  Cpu
} from 'lucide-react';
import styles from '../dashboard.module.css';

export default function WebsiteStudioPage() {
  const [activeSection, setActiveSection] = useState<
    'hero' | 'solutions' | 'whyUs' | 'caseStudies' | 'tools' | 'blog' | 'careers' | 'theme' | 'maintenance'
  >('hero');

  const [sectionSuccess, setSectionSuccess] = useState<string | null>(null);

  // Active solution tab in preview
  const [selectedSolutionIndex, setSelectedSolutionIndex] = useState(0);

  // --- 1. HERO STATE ---
  const [heroBadge, setHeroBadge] = useState('AI-Powered Digital Agency — 2026');
  const [heroTitle, setHeroTitle] = useState('Build Smarter. Scale Faster.');
  const [heroSubtext, setHeroSubtext] = useState('We help businesses transform digitally with AI-powered solutions, modern development, and growth-focused strategies.');
  const [primaryCtaText, setPrimaryCtaText] = useState('Start Your Project');
  const [secondaryCtaText, setSecondaryCtaText] = useState('Get Free Consultation');

  // --- 2. SOLUTIONS STATE ---
  const [solutionsTitle, setSolutionsTitle] = useState('Our Solutions');
  const [solutionsSubtitle, setSolutionsSubtitle] = useState('Empowering your digital transformation journey with cutting-edge technology and unparalleled expertise.');
  const [solutionsList, setSolutionsList] = useState([
    { 
      id: 'cloud', 
      number: '01', 
      title: 'Cloud Integration', 
      tag: 'Cloud Infrastructure', 
      desc: 'Seamlessly migrate and scale your enterprise infrastructure with high-availability multi-cloud architecture, automated CI/CD pipelines, and zero-downtime deployments.', 
      features: ['Multi-Cloud Architecture', 'Automated CI/CD', 'Zero-Downtime Migration', 'SOC2 Compliant'],
      stat: '99.99%', 
      statLabel: 'UPTIME SLA', 
      badge: 'Enterprise Grade',
      img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 'custom', 
      number: '02', 
      title: 'Custom Software', 
      tag: 'Engineering & Development', 
      desc: 'We architect and build robust, high-performance custom applications designed specifically to streamline workflows, eliminate bottlenecks, and scale your operations effortlessly.', 
      features: ['Microservices & APIs', 'Full-Stack Modern Web', 'High-Throughput Backends', 'Modular Architecture'],
      stat: '4.8x', 
      statLabel: 'FASTER TIME-TO-MARKET', 
      badge: 'Tailored Solution',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 'data', 
      number: '03', 
      title: 'Data Analytics', 
      tag: 'Intelligence & Insights', 
      desc: 'Transform raw data into real-time business intelligence. Our analytics pipelines offer predictive modeling, automated reporting, and interactive executive dashboards.', 
      features: ['Real-Time Streaming', 'Predictive Modeling', 'Interactive BI Dashboards', 'Data Warehousing'],
      stat: '10x', 
      statLabel: 'FASTER QUERY SPEEDS', 
      badge: 'Predictive BI',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 'ai', 
      number: '04', 
      title: 'AI Solutions', 
      tag: 'Artificial Intelligence', 
      desc: 'Harness the power of machine learning and large language models. We build intelligent recommendation engines, automated NLP workflows, and computer vision systems.', 
      features: ['Custom LLM Integration', 'Predictive ML Models', 'Intelligent Chat Agents', 'Automated Workflows'],
      stat: '65%', 
      statLabel: 'OPERATIONAL COST REDUCTION', 
      badge: 'Next-Gen AI',
      img: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop' 
    },
  ]);

  // --- 3. WHY US STATE ---
  const [whyTitle, setWhyTitle] = useState('Why Businesses Trust Infotech');
  const [whySubtitle, setWhySubtitle] = useState('We combine speed, intelligence, and proven results to deliver outcomes your business can feel.');
  const [whyPillars, setWhyPillars] = useState([
    { id: '1', title: 'Full-Stack Technical Mastery', desc: 'From Next.js and Cloud Native backends to LLM pipelines, we build with modern, future-proof tech stacks.', icon: '⚡' },
    { id: '2', title: 'Data-Obsessed Growth Architecture', desc: 'Every line of code and user funnel is instrumented to maximize revenue conversion and retention.', icon: '📈' },
    { id: '3', title: 'Rapid Agile Execution', desc: 'Transparent sprint cycles, weekly milestone demos, and continuous delivery with zero downtime.', icon: '🚀' },
    { id: '4', title: 'Enterprise Security & Compliance', desc: 'Bank-grade data encryption, automated penetration tests, and SOC2-ready cloud deployments.', icon: '🛡️' },
  ]);

  // --- 4. CASE STUDIES STATE ---
  const [caseTitle, setCaseTitle] = useState('Results That Speak for Themselves');
  const [caseSubtitle, setCaseSubtitle] = useState('Real projects. Real numbers. Real growth for real businesses.');
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
        hero: { badge: heroBadge, title: heroTitle, subtext: heroSubtext, cta1: primaryCtaText, cta2: secondaryCtaText },
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

  const currentSolution = solutionsList[selectedSolutionIndex] || solutionsList[0];

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
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1.25fr', gap: '1.5rem', alignItems: 'start' }}>

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
              </div>
            </div>
          )}

          {/* 2. SOLUTIONS SECTION */}
          {activeSection === 'solutions' && (
            <div className={styles.cardBox}>
              <div className={styles.boxHeader}>
                <h3 className={styles.boxTitle}>Edit Solutions & Services ({solutionsList.length} Cards)</h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => setSolutionsList([...solutionsList, { id: Date.now().toString(), number: `0${solutionsList.length + 1}`, title: 'New Custom Solution', tag: 'Enterprise', desc: 'Comprehensive digital engineering solutions tailored for rapid scale.', features: ['Custom Architecture', 'Cloud Integration', '24/7 Monitoring', 'Enterprise Security'], stat: '99.9%', statLabel: 'UPTIME SLA', badge: 'Enterprise Grade', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' }])} className={styles.actionBtn}>
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
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF' }}>Solution #{idx + 1} ({sol.number})</span>
                      <button onClick={() => setSolutionsList(solutionsList.filter(s => s.id !== sol.id))} style={{ background: 'none', border: 'none', color: '#f43f5e', cursor: 'pointer' }}>
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '0.5rem' }}>
                      <input type="text" value={sol.title} onChange={(e) => { const n = [...solutionsList]; n[idx].title = e.target.value; setSolutionsList(n); }} placeholder="Solution Title" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }} />
                      <input type="text" value={sol.tag} onChange={(e) => { const n = [...solutionsList]; n[idx].tag = e.target.value; setSolutionsList(n); }} placeholder="Category Tag" style={{ background: 'rgba(0,209,178,0.1)', border: '1px solid rgba(0,209,178,0.25)', borderRadius: '8px', padding: '0.55rem', color: '#00D1B2', fontSize: '0.75rem', fontWeight: 700 }} />
                    </div>

                    <textarea rows={2} value={sol.desc} onChange={(e) => { const n = [...solutionsList]; n[idx].desc = e.target.value; setSolutionsList(n); }} placeholder="Solution Description" style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#cbd5e1', fontSize: '0.75rem' }} />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <input type="text" value={sol.stat} onChange={(e) => { const n = [...solutionsList]; n[idx].stat = e.target.value; setSolutionsList(n); }} placeholder="Stat (e.g. 99.99%)" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#fff', fontSize: '0.75rem', fontWeight: 700 }} />
                      <input type="text" value={sol.statLabel} onChange={(e) => { const n = [...solutionsList]; n[idx].statLabel = e.target.value; setSolutionsList(n); }} placeholder="Stat Label" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#94a3b8', fontSize: '0.75rem' }} />
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <input type="text" value={sol.img} onChange={(e) => { const n = [...solutionsList]; n[idx].img = e.target.value; setSolutionsList(n); }} placeholder="Showcase Image URL" style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.55rem', color: '#94a3b8', fontSize: '0.75rem' }} />
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
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5B8CFF' }}>Pillar #{idx + 1}</span>
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
        {/* RIGHT COLUMN: EXACT REPLICA OF THE REAL PUBLIC WEBSITE SECTION */}
        {/* ----------------------------------------------------------------------- */}
        <div style={{ position: 'sticky', top: '90px' }}>
          <div className={styles.cardBox} style={{ border: '1px solid rgba(91,140,255,0.3)', background: '#111827' }}>
            <div className={styles.boxHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Monitor size={16} color="#5B8CFF" />
                <h3 className={styles.boxTitle} style={{ fontSize: '0.95rem' }}>Exact Website Replica Demo</h3>
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#00D1B2', background: 'rgba(0,209,178,0.15)', padding: '0.15rem 0.5rem', borderRadius: '99px', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00D1B2' }}></span> 1:1 REPLICA
              </span>
            </div>

            {/* EXACT COMPONENT RENDER CANVAS */}
            <div style={{ background: '#0B0F19', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '1.5rem', minHeight: '440px', display: 'flex', flexDirection: 'column', gap: '1.25rem', overflow: 'hidden' }}>

              {/* DEMO 1: EXACT HERO REPLICA (Matches Homepage with macOS Dashboard Mockup) */}
              {activeSection === 'hero' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1rem', alignItems: 'center' }}>
                    {/* Left Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', borderRadius: '99px', background: 'rgba(91,140,255,0.08)', border: '1px solid rgba(91,140,255,0.25)', color: '#5B8CFF', fontSize: '0.725rem', fontWeight: 700, width: 'fit-content' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00D1B2', boxShadow: '0 0 8px #00D1B2' }} />
                        {heroBadge}
                      </div>

                      <h1 style={{ fontSize: '1.65rem', fontWeight: 900, lineHeight: 1.15, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
                        Build <span style={{ background: 'linear-gradient(135deg, #5B8CFF, #818CF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Smarter.</span>
                        <br />
                        Scale <span style={{ background: 'linear-gradient(135deg, #00D1B2, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Faster.</span>
                        <br />
                        <span style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 800 }}>Grow with Infotech.</span>
                      </h1>

                      <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                        {heroSubtext}
                      </p>

                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <div style={{ background: '#3B82F6', color: '#fff', padding: '0.5rem 1rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                          {primaryCtaText} <ArrowRight size={13} />
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '0.5rem 1rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                          <Play size={12} /> {secondaryCtaText}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: EXACT macOS Dashboard Illustration Mockup */}
                    <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', boxShadow: '0 12px 36px rgba(0,0,0,0.5)' }}>
                      {/* Window Header */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.4rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B' }} />
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
                        <span style={{ fontSize: '9px', color: '#64748b', marginLeft: '0.3rem', fontWeight: 700 }}>Infotech Dashboard</span>
                      </div>

                      {/* 3 Metric Pills */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.35rem' }}>
                        <div style={{ background: '#0B0F19', padding: '0.4rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)' }}>
                          <div style={{ fontSize: '7px', color: '#64748b', textTransform: 'uppercase' }}>Revenue</div>
                          <div style={{ fontSize: '0.75rem', fontWeight: 900, color: '#38BDF8' }}>$48.2K</div>
                          <div style={{ fontSize: '7px', color: '#00D1B2' }}>+24%</div>
                        </div>
                        <div style={{ background: '#0B0F19', padding: '0.4rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)' }}>
                          <div style={{ fontSize: '7px', color: '#64748b', textTransform: 'uppercase' }}>Clients</div>
                          <div style={{ fontSize: '0.75rem', fontWeight: 900, color: '#00D1B2' }}>128</div>
                          <div style={{ fontSize: '7px', color: '#00D1B2' }}>+12%</div>
                        </div>
                        <div style={{ background: '#0B0F19', padding: '0.4rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)' }}>
                          <div style={{ fontSize: '7px', color: '#64748b', textTransform: 'uppercase' }}>Projects</div>
                          <div style={{ fontSize: '0.75rem', fontWeight: 900, color: '#A855F7' }}>34</div>
                          <div style={{ fontSize: '7px', color: '#A855F7' }}>+8%</div>
                        </div>
                      </div>

                      {/* Monthly Growth Chart Bars */}
                      <div>
                        <div style={{ fontSize: '7px', color: '#64748b', marginBottom: '0.2rem' }}>Monthly Growth</div>
                        <div style={{ display: 'flex', alignItems: 'flex-end', height: '40px', gap: '3px', justifyContent: 'space-between' }}>
                          {[30, 45, 60, 40, 75, 90, 70, 85, 100].map((h, i) => (
                            <div key={i} style={{ flex: 1, height: `${h}%`, background: 'linear-gradient(180deg, #00D1B2 0%, #38BDF8 100%)', borderRadius: '2px 2px 0 0' }} />
                          ))}
                        </div>
                      </div>

                      {/* Status Bullets */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '7px', color: '#94a3b8' }}>
                        <div>● New lead from Dubai</div>
                        <div>● Project milestone reached</div>
                        <div>● Report ready for review</div>
                      </div>
                    </div>
                  </div>

                  {/* 4 Bottom Stats Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.85rem' }}>
                    <div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#fff' }}>100+</div>
                      <div style={{ fontSize: '8px', color: '#64748b', textTransform: 'uppercase' }}>Projects Delivered</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#fff' }}>50+</div>
                      <div style={{ fontSize: '8px', color: '#64748b', textTransform: 'uppercase' }}>Happy Clients</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#fff' }}>5+</div>
                      <div style={{ fontSize: '8px', color: '#64748b', textTransform: 'uppercase' }}>Years Experience</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#fff' }}>98%</div>
                      <div style={{ fontSize: '8px', color: '#64748b', textTransform: 'uppercase' }}>Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 2: EXACT SOLUTIONS REPLICA (Matches Homepage with Tab Pills + Showcase Card) */}
              {activeSection === 'solutions' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Center Header */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.75rem', borderRadius: '99px', background: 'rgba(91,140,255,0.08)', border: '1px solid rgba(91,140,255,0.25)', color: '#5B8CFF', fontSize: '0.675rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                      <Sparkles size={11} /> Enterprise Capabilities
                    </div>
                    <h2 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#ffffff', margin: '0 0 0.35rem 0' }}>
                      Our <span style={{ background: 'linear-gradient(135deg, #5B8CFF, #00D1B2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Solutions</span>
                    </h2>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', maxWidth: '420px', margin: '0 auto', lineHeight: 1.5 }}>
                      {solutionsSubtitle}
                    </p>
                  </div>

                  {/* Horizontal Solution Tab Pills */}
                  <div style={{ display: 'flex', gap: '0.35rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {solutionsList.map((sol, i) => {
                      const isSel = selectedSolutionIndex === i;
                      return (
                        <button
                          key={sol.id}
                          type="button"
                          onClick={() => setSelectedSolutionIndex(i)}
                          style={{
                            padding: '0.4rem 0.8rem',
                            borderRadius: '99px',
                            background: isSel ? 'linear-gradient(135deg, #00D1B2, #0284C7)' : 'rgba(255,255,255,0.04)',
                            border: isSel ? 'none' : '1px solid rgba(255,255,255,0.08)',
                            color: '#ffffff',
                            fontSize: '0.725rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            boxShadow: isSel ? '0 4px 14px rgba(0,209,178,0.3)' : 'none'
                          }}
                        >
                          <span>{sol.title}</span>
                          <span style={{ fontSize: '8px', opacity: 0.8 }}>{sol.number}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Showcase 2-Column Card Frame */}
                  <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '18px', padding: '1.25rem', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '1.25rem', alignItems: 'center', boxShadow: '0 12px 36px rgba(0,0,0,0.5)' }}>
                    {/* Left Details */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <div style={{ display: 'inline-flex', padding: '0.2rem 0.6rem', borderRadius: '99px', background: 'rgba(56,189,248,0.15)', border: '1px solid rgba(56,189,248,0.3)', color: '#38BDF8', fontSize: '0.675rem', fontWeight: 800, textTransform: 'uppercase', width: 'fit-content' }}>
                        {currentSolution.tag}
                      </div>

                      <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                        {currentSolution.title}
                      </h3>

                      <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                        {currentSolution.desc}
                      </p>

                      {/* Feature Pills */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {(currentSolution.features || ['Multi-Cloud Architecture', 'Automated CI/CD', 'Zero-Downtime Migration', 'SOC2 Compliant']).map(f => (
                          <span key={f} style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '0.675rem', color: '#cbd5e1', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.5rem', borderRadius: '99px' }}>
                            <Check size={10} color="#00D1B2" /> {f}
                          </span>
                        ))}
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.25rem' }}>
                        <div style={{ background: 'linear-gradient(135deg, #00D1B2, #0284C7)', color: '#fff', padding: '0.45rem 1rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                          Explore Solution <ArrowRight size={13} />
                        </div>
                        <div style={{ display: 'flex', gap: '4px' }}>
                          <button onClick={() => setSelectedSolutionIndex((selectedSolutionIndex - 1 + solutionsList.length) % solutionsList.length)} style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                            <ChevronLeft size={14} />
                          </button>
                          <button onClick={() => setSelectedSolutionIndex((selectedSolutionIndex + 1) % solutionsList.length)} style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Right Tech Image Frame with Badges */}
                    <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', height: '180px', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <img src={currentSolution.img} alt={currentSolution.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      
                      {/* Top Right Enterprise Grade Badge */}
                      <div style={{ position: 'absolute', top: '8px', right: '8px', background: 'rgba(11,15,25,0.85)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '99px', padding: '0.2rem 0.5rem', fontSize: '8px', fontWeight: 700, color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                        <ShieldCheck size={10} color="#00D1B2" /> {currentSolution.badge || 'Enterprise Grade'}
                      </div>

                      {/* Bottom Left Glass Stat Badge */}
                      <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(11,15,25,0.85)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '0.35rem 0.6rem' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#38BDF8' }}>{currentSolution.stat}</div>
                        <div style={{ fontSize: '7px', color: '#94a3b8', textTransform: 'uppercase' }}>{currentSolution.statLabel}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 3: EXACT WHY US REPLICA */}
              {activeSection === 'whyUs' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#5B8CFF', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Why Choose Us</div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#fff', margin: '0.2rem 0' }}>{whyTitle}</h3>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>{whySubtitle}</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    {whyPillars.map((p) => (
                      <div key={p.id} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        <div style={{ fontSize: '1.2rem', marginBottom: '0.1rem' }}>{p.icon || '⚡'}</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#fff' }}>{p.title}</div>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8', lineHeight: 1.5 }}>{p.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DEMO 4: EXACT CASE STUDIES REPLICA */}
              {activeSection === 'caseStudies' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#00D1B2', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Our Work</div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#fff', margin: '0.2rem 0' }}>{caseTitle}</h3>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>{caseSubtitle}</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
                    {casesList.map(c => (
                      <div key={c.id} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <img src={c.img} alt={c.client} style={{ width: '100%', height: '90px', objectFit: 'cover' }} />
                        <div style={{ padding: '0.65rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', flex: 1 }}>
                          <span style={{ fontSize: '0.65rem', color: '#00D1B2', fontWeight: 800 }}>{c.metric}</span>
                          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#fff' }}>{c.client}</div>
                          <div style={{ fontSize: '0.675rem', color: '#94a3b8', lineHeight: 1.4 }}>{c.desc}</div>
                          <div style={{ marginTop: 'auto', paddingTop: '0.4rem', fontSize: '0.675rem', color: '#5B8CFF', fontWeight: 700 }}>
                            View Case Study &rarr;
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DEMO 5: TOOLS */}
              {activeSection === 'tools' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#5B8CFF', textTransform: 'uppercase' }}>Interactive Suite</div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#fff', margin: '0.2rem 0' }}>{toolsTitle}</h3>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
                    {toolsList.map(t => (
                      <div key={t.id} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        <span style={{ fontSize: '0.65rem', color: '#00D1B2', fontWeight: 700 }}>{t.tag}</span>
                        <div style={{ fontSize: '0.775rem', fontWeight: 800, color: '#fff' }}>{t.name}</div>
                        <div style={{ fontSize: '0.675rem', color: '#94a3b8', lineHeight: 1.4 }}>{t.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DEMO 6: BLOG */}
              {activeSection === 'blog' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#00D1B2', textTransform: 'uppercase' }}>Blog & Insights</div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#fff', margin: '0.2rem 0' }}>{blogTitle}</h3>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
                    {blogList.map(b => (
                      <div key={b.id} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', overflow: 'hidden' }}>
                        <img src={b.img} alt={b.title} style={{ width: '100%', height: '80px', objectFit: 'cover' }} />
                        <div style={{ padding: '0.65rem' }}>
                          <div style={{ fontSize: '0.65rem', color: '#00D1B2' }}>{b.tag} · {b.readTime}</div>
                          <div style={{ fontSize: '0.775rem', fontWeight: 800, color: '#fff', margin: '0.2rem 0', lineHeight: 1.3 }}>{b.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DEMO 7: CAREERS */}
              {activeSection === 'careers' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#5B8CFF', textTransform: 'uppercase' }}>Careers</div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#fff', margin: '0.2rem 0' }}>Join Our Team</h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {careersList.map(j => (
                      <div key={j.id} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '0.75rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#fff' }}>{j.role}</div>
                          <div style={{ fontSize: '0.675rem', color: '#94a3b8' }}>{j.dept} · {j.exp}</div>
                        </div>
                        <div style={{ background: '#3B82F6', color: '#fff', padding: '0.3rem 0.75rem', borderRadius: '99px', fontSize: '0.675rem', fontWeight: 700 }}>
                          Apply
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DEMO 8: THEME */}
              {activeSection === 'theme' && (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: `linear-gradient(135deg, ${primaryAccent}, ${secondaryTeal})`, margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '1.3rem' }}>
                    IF
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>Theme: {activePreset}</h3>
                </div>
              )}

              {/* DEMO 9: MAINTENANCE */}
              {activeSection === 'maintenance' && (
                <div style={{ textAlign: 'center', padding: '2rem', background: '#05070D', borderRadius: '16px', border: '1px solid rgba(244,63,94,0.3)' }}>
                  <Wrench size={28} color={isMaintenanceActive ? '#f43f5e' : '#00D1B2'} style={{ margin: '0 auto 0.5rem auto' }} />
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', margin: 0 }}>{maintenanceHeadline}</h4>
                  <p style={{ fontSize: '0.775rem', color: '#94a3b8', marginTop: '0.35rem' }}>{maintenanceMessage}</p>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
