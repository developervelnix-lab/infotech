'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  CheckCircle2, 
  Send, 
  FileText, 
  Download, 
  Star, 
  AlertCircle, 
  Award,
  Upload
} from 'lucide-react';
import styles from '../dashboard.module.css';

export default function InternDashboardPage() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState<string | null>(null);
  const [checkOutTime, setCheckOutTime] = useState<string | null>(null);
  const [reportSubmitted, setReportSubmitted] = useState(false);

  // Form State
  const [tasks, setTasks] = useState('');
  const [hours, setHours] = useState('');
  const [blockers, setBlockers] = useState('');
  const [learnings, setLearnings] = useState('');

  const handleCheckIn = () => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (!isCheckedIn) {
      setIsCheckedIn(true);
      setCheckInTime(time);
      setCheckOutTime(null);
    } else {
      setIsCheckedIn(false);
      setCheckOutTime(time);
    }
  };

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    setReportSubmitted(true);
    setTasks('');
    setHours('');
    setBlockers('');
    setLearnings('');
  };

  return (
    <div className={styles.pageWrap}>
      {/* Top Welcome & Check-In Banner */}
      <div className={styles.welcomeBanner}>
        <div>
          <h1 className={styles.greeting}>Intern Daily Command Hub 🎓</h1>
          <p className={styles.subtext}>Welcome Rahul Sharma · Full-Stack Web Engineering Intern</p>
        </div>

        <div className={styles.quickActions}>
          <button 
            onClick={handleCheckIn}
            className={styles.actionBtnPrimary}
            style={{ background: isCheckedIn ? '#f43f5e' : 'linear-gradient(135deg, #00D1B2, #3b82f6)' }}
          >
            <Clock size={16} /> {isCheckedIn ? 'Check Out Now' : 'Check In Today'}
          </button>
        </div>
      </div>

      {/* Attendance & Status Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>Today's Status</span>
            <CheckCircle2 size={20} color={isCheckedIn ? '#00D1B2' : '#64748b'} />
          </div>
          <div className={styles.statVal} style={{ fontSize: '1.2rem', color: isCheckedIn ? '#00D1B2' : '#94a3b8' }}>
            {isCheckedIn ? 'ACTIVE (CHECKED IN)' : 'NOT CHECKED IN'}
          </div>
          <div className={styles.statChange}>Timestamp captured via IP</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>Check-In Time</span>
            <Clock size={20} color="#5B8CFF" />
          </div>
          <div className={styles.statVal}>{checkInTime || '--:--'}</div>
          <div className={styles.statChange}>Scheduled Shift: 10:00 AM</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>Daily Report Status</span>
            <FileText size={20} color="#a855f7" />
          </div>
          <div className={styles.statVal} style={{ fontSize: '1.1rem', color: reportSubmitted ? '#00D1B2' : '#f59e0b' }}>
            {reportSubmitted ? 'SUBMITTED (REVIEW PENDING)' : 'DUE BY 6:00 PM'}
          </div>
          <div className={styles.statChange}>Daily submission required</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>Weekly Rating</span>
            <Star size={20} color="#eab308" />
          </div>
          <div className={styles.statVal} style={{ color: '#eab308' }}>4.8 / 5.0 ⭐</div>
          <div className={styles.statChange}>Evaluated by Lead Manager</div>
        </div>
      </div>

      {/* Form Grid */}
      <div className={styles.contentGrid}>
        {/* Left: Daily Report Form */}
        <div className={styles.cardBox}>
          <div className={styles.boxHeader}>
            <h3 className={styles.boxTitle}>Submit Daily Work Report</h3>
            <span className={styles.timeTag}>Date: {new Date().toLocaleDateString()}</span>
          </div>

          {reportSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '2rem 1rem', background: 'rgba(0,209,178,0.08)', borderRadius: '14px', border: '1px solid rgba(0,209,178,0.2)' }}
            >
              <CheckCircle2 size={42} color="#00D1B2" style={{ margin: '0 auto 0.75rem auto' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '0.35rem' }}>Daily Report Submitted Successfully!</h4>
              <p style={{ fontSize: '0.825rem', color: '#94a3b8', maxWidth: '400px', margin: '0 auto' }}>
                Your report has been logged and sent to your Reporting Manager for review and feedback.
              </p>
              <button 
                onClick={() => setReportSubmitted(false)}
                className={styles.actionBtn} 
                style={{ marginTop: '1.25rem' }}
              >
                Edit Report
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmitReport} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                  Tasks Completed Today *
                </label>
                <textarea 
                  required
                  rows={3}
                  value={tasks}
                  onChange={(e) => setTasks(e.target.value)}
                  placeholder="- Implemented CaseStudies touch slider on mobile&#10;- Fixed Lenis scroll FPS bottleneck&#10;- Integrated auth router"
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                    Hours Spent *
                  </label>
                  <input 
                    type="number"
                    step="0.5"
                    required
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    placeholder="e.g. 7.5"
                    style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                    Blockers / Issues Faced
                  </label>
                  <input 
                    type="text"
                    value={blockers}
                    onChange={(e) => setBlockers(e.target.value)}
                    placeholder="None / Vercel monorepo routing"
                    style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                  Key Learnings Today
                </label>
                <input 
                  type="text"
                  value={learnings}
                  onChange={(e) => setLearnings(e.target.value)}
                  placeholder="Next.js App Router root layout architecture & Turbopack build optimization"
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                <label style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.775rem', color: '#5B8CFF', fontWeight: 600 }}>
                  <Upload size={14} /> Attach Code/Proof (Optional)
                  <input type="file" style={{ display: 'none' }} />
                </label>

                <button type="submit" className={styles.actionBtnPrimary}>
                  <Send size={15} /> Submit Daily Report
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right: Admin Feedback & Certificate Vault */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Admin Feedback Box */}
          <div className={styles.cardBox}>
            <div className={styles.boxHeader}>
              <h3 className={styles.boxTitle}>Admin Review & Comments</h3>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                <span style={{ fontWeight: 700, color: '#00D1B2' }}>Reviewed by Tech Lead</span>
                <span style={{ color: '#64748b' }}>Yesterday</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                "Great work on scaling down the CaseStudies card dimensions and optimizing native touch scrolling! Keep it up."
              </p>
            </div>
          </div>

          {/* Document Vault */}
          <div className={styles.cardBox}>
            <div className={styles.boxHeader}>
              <h3 className={styles.boxTitle}>My Issued Documents</h3>
            </div>
            <div className={styles.moduleList}>
              <div className={styles.moduleItem}>
                <div className={styles.modIcon} style={{ background: 'rgba(91,140,255,0.15)', color: '#5B8CFF' }}>
                  <Award size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className={styles.modTitle}>Internship Offer Letter</div>
                  <div className={styles.modDesc}>Issued: Aug 10, 2026</div>
                </div>
                <button className={styles.actionBtn} style={{ padding: '0.35rem 0.65rem' }}>
                  <Download size={14} />
                </button>
              </div>

              <div className={styles.moduleItem}>
                <div className={styles.modIcon} style={{ background: 'rgba(0,209,178,0.15)', color: '#00D1B2' }}>
                  <Award size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className={styles.modTitle}>Internship Certificate</div>
                  <div className={styles.modDesc}>Completion Cert (PDF)</div>
                </div>
                <button className={styles.actionBtn} style={{ padding: '0.35rem 0.65rem' }}>
                  <Download size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
