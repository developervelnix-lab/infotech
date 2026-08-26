'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  Star, 
  FileText, 
  MessageSquare 
} from 'lucide-react';
import styles from '../dashboard.module.css';

export default function ManagerDashboardPage() {
  const pendingReports = [
    { id: 'REP-14', intern: 'Rahul Sharma', role: 'Web Intern', date: '2026-08-26', hours: '7.5 hrs', tasks: 'CaseStudies mobile slider & Lenis FPS optimization', status: 'Pending Review' },
    { id: 'REP-12', intern: 'Vikram Verma', role: 'UI/UX Intern', date: '2026-08-26', hours: '6.0 hrs', tasks: 'Figma wireframes for social automation panel', status: 'Pending Review' },
  ];

  return (
    <div className={styles.pageWrap}>
      <div className={styles.welcomeBanner}>
        <div>
          <h1 className={styles.greeting}>Manager Team Command 👔</h1>
          <p className={styles.subtext}>Welcome back, Engineering Lead · Managing 8 developers & 3 interns</p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}><span className={styles.statTitle}>My Team Members</span><Users size={20} color="#5B8CFF" /></div>
          <div className={styles.statVal}>11 Active</div>
          <div className={styles.statChange}>8 Staff · 3 Interns</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}><span className={styles.statTitle}>Pending Daily Reports</span><FileText size={20} color="#eab308" /></div>
          <div className={styles.statVal} style={{ color: '#eab308' }}>2 Reports</div>
          <div className={styles.statChange}>Requires manager review</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}><span className={styles.statTitle}>Team Attendance Today</span><CheckCircle2 size={20} color="#00D1B2" /></div>
          <div className={styles.statVal} style={{ color: '#00D1B2' }}>100% Present</div>
          <div className={styles.statChange}>0 Absences today</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}><span className={styles.statTitle}>Active Sprint Tasks</span><Briefcase size={20} color="#a855f7" /></div>
          <div className={styles.statVal}>18 In Progress</div>
          <div className={styles.statChange}>2 Blockers flagged</div>
        </div>
      </div>

      {/* Intern Reports Review Table */}
      <div className={styles.cardBox}>
        <div className={styles.boxHeader}>
          <h3 className={styles.boxTitle}>Pending Intern Daily Reports for Review</h3>
        </div>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Intern Name</th>
              <th>Role</th>
              <th>Report Date</th>
              <th>Hours Spent</th>
              <th>Tasks Excerpt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingReports.map(rep => (
              <tr key={rep.id}>
                <td style={{ fontWeight: 700, color: '#fff' }}>{rep.intern}</td>
                <td>{rep.role}</td>
                <td style={{ color: '#64748b' }}>{rep.date}</td>
                <td style={{ color: '#00D1B2', fontWeight: 600 }}>{rep.hours}</td>
                <td style={{ color: '#cbd5e1', maxWidth: '300px' }}>{rep.tasks}</td>
                <td>
                  <button className={styles.actionBtnPrimary} style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}>
                    <MessageSquare size={13} /> Add Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
