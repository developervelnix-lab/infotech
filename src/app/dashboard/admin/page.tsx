'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  DollarSign, 
  UserPlus, 
  FileCheck2, 
  Share2, 
  Megaphone,
  ArrowUpRight,
  Clock
} from 'lucide-react';
import styles from '../dashboard.module.css';

export default function AdminDashboardPage() {
  const stats = [
    { title: 'Total Revenue', value: '$124,500', change: '+18.4%', isPos: true, icon: DollarSign, color: '#00D1B2' },
    { title: 'Active Leads (CRM)', value: '48 Leads', change: '+12 this week', isPos: true, icon: Briefcase, color: '#5B8CFF' },
    { title: 'Active Projects', value: '14 Live', change: '3 in review', isPos: true, icon: TrendingUp, color: '#a855f7' },
    { title: 'Team & Interns', value: '28 Active', change: '4 new interns', isPos: true, icon: Users, color: '#f59e0b' },
  ];

  const recentActivity = [
    { type: 'Intern Daily Report', desc: 'Rahul Sharma submitted Daily Report #14', time: '10 mins ago', status: 'Pending Review' },
    { type: 'Certificate Generated', desc: 'Internship Certificate issued for Priya Patel', time: '45 mins ago', status: 'Completed' },
    { type: 'Lead Status Updated', desc: 'Acme Corp moved to "Proposal" stage', time: '2 hours ago', status: 'Updated' },
    { type: 'Attendance Flag', desc: 'Vikram Verma checked in (Late: 10:15 AM)', time: '3 hours ago', status: 'Flagged' },
  ];

  return (
    <div className={styles.pageWrap}>
      {/* Top Banner */}
      <div className={styles.welcomeBanner}>
        <div>
          <h1 className={styles.greeting}>Welcome back, System Admin 👋</h1>
          <p className={styles.subtext}>Here is what is happening across Infotech operations today.</p>
        </div>
        <div className={styles.quickActions}>
          <Link href="/dashboard/employees" className={styles.actionBtn}>
            <UserPlus size={16} /> Add Employee/Intern
          </Link>
          <Link href="/dashboard/certificates" className={styles.actionBtnPrimary}>
            <FileCheck2 size={16} /> Issue Certificate
          </Link>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className={styles.statsGrid}>
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div 
              key={s.title}
              className={styles.statCard}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.statHeader}>
                <span className={styles.statTitle}>{s.title}</span>
                <div className={styles.statIconWrap} style={{ background: `${s.color}20`, color: s.color }}>
                  <Icon size={20} />
                </div>
              </div>
              <div className={styles.statVal}>{s.value}</div>
              <div className={styles.statChange} style={{ color: s.isPos ? '#00D1B2' : '#f43f5e' }}>
                <ArrowUpRight size={14} /> {s.change}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Grid: Chart Mockup + Activity Table */}
      <div className={styles.contentGrid}>
        {/* Left: Performance Visualizer */}
        <div className={styles.cardBox}>
          <div className={styles.boxHeader}>
            <h3 className={styles.boxTitle}>Revenue & CRM Conversion Trend</h3>
            <span className={styles.timeTag}>Last 30 Days</span>
          </div>
          <div className={styles.chartMockup}>
            <div className={styles.chartBars}>
              {[40, 65, 55, 80, 95, 70, 85, 100, 90, 110, 125].map((h, idx) => (
                <div key={idx} className={styles.barCol}>
                  <div className={styles.barFill} style={{ height: `${h}%` }}></div>
                  <span className={styles.barLabel}>Day {idx + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Quick Action Hub */}
        <div className={styles.cardBox}>
          <div className={styles.boxHeader}>
            <h3 className={styles.boxTitle}>Admin Quick Modules</h3>
          </div>
          <div className={styles.moduleList}>
            <Link href="/dashboard/social" className={styles.moduleItem}>
              <div className={styles.modIcon} style={{ background: 'rgba(91,140,255,0.15)', color: '#5B8CFF' }}>
                <Share2 size={20} />
              </div>
              <div>
                <div className={styles.modTitle}>Social Media Composer</div>
                <div className={styles.modDesc}>Schedule & multi-post to 6 platforms</div>
              </div>
            </Link>
            <Link href="/dashboard/crm" className={styles.moduleItem}>
              <div className={styles.modIcon} style={{ background: 'rgba(0,209,178,0.15)', color: '#00D1B2' }}>
                <Briefcase size={20} />
              </div>
              <div>
                <div className={styles.modTitle}>Lead CRM Pipeline</div>
                <div className={styles.modDesc}>48 active client inquiries</div>
              </div>
            </Link>
            <Link href="/dashboard/updates" className={styles.moduleItem}>
              <div className={styles.modIcon} style={{ background: 'rgba(168,85,247,0.15)', color: '#a855f7' }}>
                <Megaphone size={20} />
              </div>
              <div>
                <div className={styles.modTitle}>Announcements Ticker</div>
                <div className={styles.modDesc}>Manage live homepage marquee updates</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className={styles.cardBox}>
        <div className={styles.boxHeader}>
          <h3 className={styles.boxTitle}>Live Audit & Activity Log</h3>
        </div>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Event Type</th>
              <th>Description</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map((act, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 700, color: '#fff' }}>{act.type}</td>
                <td>{act.desc}</td>
                <td style={{ color: '#64748b' }}><Clock size={12} /> {act.time}</td>
                <td>
                  <span className={styles.statusPill}>{act.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
