'use client';

import React, { useState } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  Calendar, 
  Send, 
  AlertTriangle,
  UserCheck,
  FileSpreadsheet
} from 'lucide-react';
import styles from '../dashboard.module.css';

export default function AttendancePage() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [showLeaveForm, setShowLeaveForm] = useState(false);

  const logs = [
    { id: '1', name: 'Rahul Sharma', role: 'Web Intern', date: '2026-08-26', inTime: '10:02 AM', outTime: '--:--', totalHours: 'Running...', status: 'ON_TIME' },
    { id: '2', name: 'Priya Patel', role: 'Frontend Lead', date: '2026-08-26', inTime: '09:55 AM', outTime: '--:--', totalHours: 'Running...', status: 'ON_TIME' },
    { id: '3', name: 'Vikram Verma', role: 'UI/UX Intern', date: '2026-08-26', inTime: '10:24 AM', outTime: '--:--', totalHours: 'Running...', status: 'LATE' },
    { id: '4', name: 'Neha Gupta', role: 'AI Engineer', date: '2026-08-26', inTime: '09:48 AM', outTime: '--:--', totalHours: 'Running...', status: 'ON_TIME' },
    { id: '5', name: 'Amit Kumar', role: 'Growth Marketer', date: '2026-08-26', inTime: '--:--', outTime: '--:--', totalHours: '0.0 hrs', status: 'ON_LEAVE' },
  ];

  return (
    <div className={styles.pageWrap}>
      {/* Top Banner */}
      <div className={styles.welcomeBanner}>
        <div>
          <h1 className={styles.greeting}>Attendance & Leave Management ⏰</h1>
          <p className={styles.subtext}>Timestamp capture, automatic hour calculation, and leave requests.</p>
        </div>

        <div className={styles.quickActions}>
          <button 
            onClick={() => setIsCheckedIn(!isCheckedIn)}
            className={styles.actionBtnPrimary}
            style={{ background: isCheckedIn ? '#f43f5e' : 'linear-gradient(135deg, #00D1B2, #3b82f6)' }}
          >
            <Clock size={16} /> {isCheckedIn ? 'Check Out' : 'Check In Now'}
          </button>
          <button onClick={() => setShowLeaveForm(!showLeaveForm)} className={styles.actionBtn}>
            <Calendar size={16} /> Apply for Leave
          </button>
        </div>
      </div>

      {/* Leave Form Modal / Expandable */}
      {showLeaveForm && (
        <div className={styles.cardBox} style={{ border: '1px solid rgba(91,140,255,0.3)' }}>
          <div className={styles.boxHeader}>
            <h3 className={styles.boxTitle}>Submit Leave Request</h3>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setShowLeaveForm(false); }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.775rem', color: '#94a3b8', display: 'block', marginBottom: '0.3rem' }}>Leave Type</label>
              <select style={{ width: '100%', background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', padding: '0.6rem', borderRadius: '8px', color: '#fff', fontSize: '0.8rem' }}>
                <option>Casual Leave</option>
                <option>Sick Leave</option>
                <option>Internship Academic Leave</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '0.775rem', color: '#94a3b8', display: 'block', marginBottom: '0.3rem' }}>Start Date</label>
              <input type="date" required style={{ width: '100%', background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', padding: '0.6rem', borderRadius: '8px', color: '#fff', fontSize: '0.8rem' }} />
            </div>
            <div>
              <label style={{ fontSize: '0.775rem', color: '#94a3b8', display: 'block', marginBottom: '0.3rem' }}>End Date</label>
              <input type="date" required style={{ width: '100%', background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', padding: '0.6rem', borderRadius: '8px', color: '#fff', fontSize: '0.8rem' }} />
            </div>
            <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
              <button type="button" onClick={() => setShowLeaveForm(false)} className={styles.actionBtn}>Cancel</button>
              <button type="submit" className={styles.actionBtnPrimary}><Send size={14} /> Submit Leave Request</button>
            </div>
          </form>
        </div>
      )}

      {/* Attendance Table */}
      <div className={styles.cardBox}>
        <div className={styles.boxHeader}>
          <h3 className={styles.boxTitle}>Today's Live Attendance Feed</h3>
        </div>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Employee / Intern</th>
              <th>Role</th>
              <th>Date</th>
              <th>In Time</th>
              <th>Out Time</th>
              <th>Total Hours</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log.id}>
                <td style={{ fontWeight: 700, color: '#fff' }}>{log.name}</td>
                <td>{log.role}</td>
                <td style={{ color: '#64748b' }}>{log.date}</td>
                <td style={{ color: '#00D1B2', fontWeight: 600 }}>{log.inTime}</td>
                <td>{log.outTime}</td>
                <td>{log.totalHours}</td>
                <td>
                  <span className={styles.statusPill} style={{
                    background: log.status === 'ON_TIME' ? 'rgba(0,209,178,0.15)' : log.status === 'LATE' ? 'rgba(234,179,8,0.15)' : 'rgba(244,63,94,0.15)',
                    color: log.status === 'ON_TIME' ? '#00D1B2' : log.status === 'LATE' ? '#eab308' : '#f43f5e'
                  }}>
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
