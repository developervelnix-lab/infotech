'use client';

import React, { useState } from 'react';
import { Clock, Briefcase, Calendar, Download, Award, CheckCircle2 } from 'lucide-react';
import styles from '../dashboard.module.css';

export default function EmployeeDashboardPage() {
  const [isCheckedIn, setIsCheckedIn] = useState(true);

  return (
    <div className={styles.pageWrap}>
      <div className={styles.welcomeBanner}>
        <div>
          <h1 className={styles.greeting}>Employee Self-Service Portal 💻</h1>
          <p className={styles.subtext}>Welcome Priya Patel · Senior Frontend Engineering Lead</p>
        </div>

        <div className={styles.quickActions}>
          <button 
            onClick={() => setIsCheckedIn(!isCheckedIn)}
            className={styles.actionBtnPrimary}
            style={{ background: isCheckedIn ? '#f43f5e' : 'linear-gradient(135deg, #00D1B2, #3b82f6)' }}
          >
            <Clock size={16} /> {isCheckedIn ? 'Check Out Today' : 'Check In Today'}
          </button>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}><span className={styles.statTitle}>Attendance Status</span><CheckCircle2 size={20} color="#00D1B2" /></div>
          <div className={styles.statVal} style={{ color: '#00D1B2', fontSize: '1.2rem' }}>PRESENT (9:55 AM)</div>
          <div className={styles.statChange}>Total Hours: 5.8 hrs</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}><span className={styles.statTitle}>Leave Balance</span><Calendar size={20} color="#5B8CFF" /></div>
          <div className={styles.statVal}>18 Days</div>
          <div className={styles.statChange}>14 Casual · 4 Sick</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}><span className={styles.statTitle}>Assigned Projects</span><Briefcase size={20} color="#a855f7" /></div>
          <div className={styles.statVal}>3 Active</div>
          <div className={styles.statChange}>E-commerce Rebuild, ERP</div>
        </div>
      </div>

      {/* Employee Quick Vault */}
      <div className={styles.cardBox}>
        <div className={styles.boxHeader}>
          <h3 className={styles.boxTitle}>My Official Documents & Payslips</h3>
        </div>
        <div className={styles.moduleList}>
          <div className={styles.moduleItem}>
            <div className={styles.modIcon} style={{ background: 'rgba(0,209,178,0.15)', color: '#00D1B2' }}>
              <Download size={20} />
            </div>
            <div style={{ flex: 1 }}>
              <div className={styles.modTitle}>August 2026 Salary Payslip</div>
              <div className={styles.modDesc}>Net Pay: $7,000 · Paid</div>
            </div>
            <button className={styles.actionBtn}><Download size={14} /> Download</button>
          </div>

          <div className={styles.moduleItem}>
            <div className={styles.modIcon} style={{ background: 'rgba(91,140,255,0.15)', color: '#5B8CFF' }}>
              <Award size={20} />
            </div>
            <div style={{ flex: 1 }}>
              <div className={styles.modTitle}>Employment Appointment Letter</div>
              <div className={styles.modDesc}>Issued: May 15, 2025</div>
            </div>
            <button className={styles.actionBtn}><Download size={14} /> Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}
