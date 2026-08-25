'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, Info, ArrowUpRight, Search } from 'lucide-react';
import { announcements } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import styles from './page.module.css';

// Expand mock announcements with categories and bodies for detail archive view
const fullAnnouncements = [
  { 
    id: 1, 
    title: '🚀 New AI Automation Package Launched', 
    date: '2026-08-15',
    category: 'Product Launch',
    pinned: true,
    excerpt: 'Leverage trigger chains and robotic workflows to reduce manual workload by up to 70%.',
    body: 'We are thrilled to launch our new end-to-end AI Automation Package. This service allows scaling organizations to map out workflows and substitute manual spreadsheet tracking with active, self-correcting AI trigger chains. The package integrates natively with top CRMs, email servers, and custom database APIs.'
  },
  { 
    id: 2, 
    title: '🏆 Infotech Ranked Top 10 Digital Agency 2026', 
    date: '2026-08-01',
    category: 'Company News',
    pinned: true,
    excerpt: 'Global Digital Agency Registry ranks Infotech in top 10 digital innovators this year.',
    body: 'The annual Digital Agency Registry reports have officially recognized Infotech in the Top 10 digital transformation consultancies for 2026. This award honors our commitment to high-speed agile delivery, custom system engineering, and ROI-centric execution for SaaS, enterprise, and e-commerce clients.'
  },
  { 
    id: 3, 
    title: '📢 Internship Applications Now Open — Apply Today!', 
    date: '2026-07-20',
    category: 'Hiring',
    pinned: false,
    excerpt: 'Kick-start your full-stack dev, marketing, or design career working on production-level code.',
    body: 'Applications for our autumn cohort of the Infotech Professional Internship program are now open! We are hiring interns across three training tracks: Full-Stack Development, Digital Marketing, and UI/UX Design. Interns undergo a comprehensive onboarding program before being embedded directly onto live client systems.'
  },
  { 
    id: 4, 
    title: '🎉 100+ Projects Delivered Milestone Reached', 
    date: '2026-07-10',
    category: 'Milestone',
    pinned: false,
    excerpt: 'We have crossed a major milestone of delivering over 100 successful production systems.',
    body: 'We are proud to announce we have officially delivered our 100th custom client project! Over the past five years, our team has built e-commerce hubs, high-capacity API routing layers, CRM pipelines, and custom administrative management dashboards. We want to thank our clients and partners for their trust.'
  },
  { 
    id: 5, 
    title: '💡 Free Website Audit — Limited Slots Available', 
    date: '2026-06-25',
    category: 'Product Launch',
    pinned: false,
    excerpt: 'Get a full speed audit and basic SEO checklist review by our consulting engineers.',
    body: 'For a limited time, Infotech is opening 15 slots for complimentary digital architecture audits. Our senior engineers will run speed checks, evaluate your SEO readiness, inspect core accessibility parameters, and deliver a visual recommendations checklist. Book yours today through the Interactive Tools module.'
  }
];

export default function UpdatesPage() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedUpdate, setSelectedUpdate] = useState<number | null>(null);

  const categories = ['All', 'Product Launch', 'Company News', 'Hiring', 'Milestone'];

  const filteredAnnouncements = fullAnnouncements
    .filter(a => {
      const matchFilter = filter === 'All' || a.category === filter;
      const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || 
                          a.body.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchSearch;
    });

  return (
    <div className={styles.container}>

      <div className={`container ${styles.inner}`}>
        <SectionTitle
          label="Updates"
          title="Infotech Announcements"
          highlight="Announcements"
          subtitle="Stay updated with our latest product launches, milestone celebrations, and hiring campaigns."
        />

        {/* Filters and Search toolbar */}
        <div className={styles.toolbar}>
          <div className={styles.tabs}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.tab} ${filter === cat ? styles.tabActive : ''}`}
                onClick={() => {
                  setFilter(cat);
                  setSelectedUpdate(null);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} size={16} />
            <input
              type="text"
              placeholder="Search updates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* Master-Detail Layout */}
        <div className={styles.contentLayout}>
          
          {/* Left panel: List */}
          <div className={styles.listPanel}>
            {filteredAnnouncements.length === 0 ? (
              <div className={styles.emptyState}>No updates found matching your search.</div>
            ) : (
              filteredAnnouncements.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.updateCard} ${selectedUpdate === item.id ? styles.updateCardActive : ''} ${item.pinned ? styles.updatePinned : ''}`}
                  onClick={() => setSelectedUpdate(item.id)}
                >
                  <div className={styles.cardMeta}>
                    <span className={styles.cardDate}>
                      <Calendar size={12} style={{ marginRight: '4px' }} /> {item.date}
                    </span>
                    <span className={styles.cardTag}>
                      <Tag size={12} style={{ marginRight: '4px' }} /> {item.category}
                    </span>
                    {item.pinned && <span className={styles.pinIndicator}>Pinned</span>}
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardExcerpt}>{item.excerpt}</p>
                </div>
              ))
            )}
          </div>

          {/* Right panel: Detail */}
          <div className={styles.detailPanel}>
            {selectedUpdate !== null ? (
              (() => {
                const item = fullAnnouncements.find(a => a.id === selectedUpdate)!;
                return (
                  <motion.div 
                    className={`glass-card ${styles.detailView}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.detailHeader}>
                      <span className={styles.detailDate}>
                        <Calendar size={14} style={{ marginRight: '6px' }} /> Published on {item.date}
                      </span>
                      <span className={styles.detailTag}>{item.category}</span>
                    </div>

                    <h2 className={styles.detailTitle}>{item.title}</h2>
                    
                    <div className={styles.detailBody}>
                      <p>{item.body}</p>
                    </div>

                    <div className={styles.detailFooter}>
                      <div className={styles.infoBox}>
                        <Info size={16} />
                        <span>This is an official announcement from Infotech.</span>
                      </div>
                      <a href="/" className={styles.backHomeLink}>
                        Go back to landing <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </motion.div>
                );
              })()
            ) : (
              <div className={styles.detailPlaceholder}>
                <Info size={24} className={styles.placeholderIcon} />
                <p>Select an announcement from the list to view the full details.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
