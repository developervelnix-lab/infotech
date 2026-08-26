'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileCheck2, 
  Download, 
  Plus, 
  Search, 
  Printer, 
  Award, 
  User, 
  Calendar, 
  Building,
  CheckCircle2
} from 'lucide-react';
import styles from '../dashboard.module.css';

export default function CertificatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState('INTERNSHIP_CERT');
  const [selectedUser, setSelectedUser] = useState('Rahul Sharma (INT-2026-04)');
  const [isGenerated, setIsGenerated] = useState(false);

  // Form Fields
  const [issueDate, setIssueDate] = useState('2026-08-26');
  const [signatory, setSignatory] = useState('Director of Technology');

  const history = [
    { id: 'CERT-9041', name: 'Rahul Sharma', type: 'Internship Certificate', date: '2026-08-26', status: 'Active' },
    { id: 'LTR-8812', name: 'Priya Patel', type: 'Offer Letter', date: '2026-08-15', status: 'Active' },
    { id: 'CERT-7610', name: 'Amit Kumar', type: 'Experience & Relieving Letter', date: '2026-07-30', status: 'Active' },
    { id: 'SLR-4419', name: 'Neha Gupta', type: 'Salary Certificate', date: '2026-07-12', status: 'Revoked' },
  ];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerated(true);
  };

  return (
    <div className={styles.pageWrap}>
      {/* Top Banner */}
      <div className={styles.welcomeBanner}>
        <div>
          <h1 className={styles.greeting}>Certificate & Letter Generator (v4) 📜</h1>
          <p className={styles.subtext}>Produce branded PDF documents for employees & interns with automated Company Settings merge fields.</p>
        </div>
      </div>

      <div className={styles.contentGrid}>
        {/* Left: Generator Form */}
        <div className={styles.cardBox}>
          <div className={styles.boxHeader}>
            <h3 className={styles.boxTitle}>Generate New Branded Document</h3>
          </div>

          <form onSubmit={handleGenerate} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <div>
              <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                Select Employee / Intern *
              </label>
              <select 
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                style={{ width: '100%', background: '#0f172a', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
              >
                <option value="Rahul Sharma (INT-2026-04)">Rahul Sharma (INT-2026-04) — Web Engineering Intern</option>
                <option value="Priya Patel (EMP-2025-12)">Priya Patel (EMP-2025-12) — Senior Frontend Developer</option>
                <option value="Vikram Verma (INT-2026-08)">Vikram Verma (INT-2026-08) — UI/UX Design Intern</option>
                <option value="Neha Gupta (EMP-2024-03)">Neha Gupta (EMP-2024-03) — AI Engineer</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                Document Template Type *
              </label>
              <select 
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                style={{ width: '100%', background: '#0f172a', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
              >
                <option value="INTERNSHIP_CERT">Internship Completion Certificate</option>
                <option value="OFFER_LETTER">Employment / Internship Offer Letter</option>
                <option value="APPOINTMENT_LETTER">Official Appointment Letter</option>
                <option value="RELIEVING_LETTER">Employee Experience & Relieving Letter</option>
                <option value="SALARY_CERT">Salary Certificate</option>
                <option value="CUSTOM_LETTER">Custom Admin Letter</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                  Issue Date
                </label>
                <input 
                  type="date"
                  value={issueDate}
                  onChange={(e) => setIssueDate(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.775rem', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '0.35rem' }}>
                  Authorized Signatory
                </label>
                <input 
                  type="text"
                  value={signatory}
                  onChange={(e) => setSignatory(e.target.value)}
                  placeholder="Director of Technology"
                  style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.65rem 0.85rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
                />
              </div>
            </div>

            {isGenerated && (
              <div style={{ background: 'rgba(0,209,178,0.1)', border: '1px solid rgba(0,209,178,0.3)', borderRadius: '10px', padding: '0.75rem 1rem', color: '#00D1B2', fontSize: '0.825rem', fontWeight: 700 }}>
                ✅ Document generated successfully! Preview is shown on the right.
              </div>
            )}

            <button type="submit" className={styles.actionBtnPrimary} style={{ marginTop: '0.5rem' }}>
              <Printer size={16} /> Generate Branded PDF Document
            </button>
          </form>
        </div>

        {/* Right: Live Document Preview */}
        <div className={styles.cardBox}>
          <div className={styles.boxHeader}>
            <h3 className={styles.boxTitle}>Document Live Preview Pane</h3>
          </div>

          <div style={{ background: '#131A2B', color: '#ffffff', borderRadius: '12px', border: '1px solid rgba(91,140,255,0.3)', padding: '1.5rem', minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <div>
              {/* Document Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #5B8CFF', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ fontWeight: 900, fontSize: '1.2rem', color: '#5B8CFF' }}>INFOTECH</div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8', textAlign: 'right' }}>Official Certificate & Letterhead</div>
              </div>

              {/* Title */}
              <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff' }}>
                  {selectedTemplate === 'INTERNSHIP_CERT' && 'INTERNSHIP CERTIFICATE OF COMPLETION'}
                  {selectedTemplate === 'OFFER_LETTER' && 'EMPLOYMENT OFFER LETTER'}
                  {selectedTemplate === 'APPOINTMENT_LETTER' && 'LETTER OF APPOINTMENT'}
                  {selectedTemplate === 'RELIEVING_LETTER' && 'EXPERIENCE & RELIEVING CERTIFICATE'}
                  {selectedTemplate === 'SALARY_CERT' && 'SALARY CERTIFICATE'}
                  {selectedTemplate === 'CUSTOM_LETTER' && 'OFFICIAL COMPANY LETTER'}
                </h4>
              </div>

              {/* Body text */}
              <p style={{ fontSize: '0.825rem', lineHeight: '1.6', color: '#e2e8f0', marginTop: '1rem' }}>
                This is to certify that <strong style={{ color: '#00D1B2' }}>{selectedUser.split(' (')[0]}</strong> has successfully completed their stint at Infotech. During this period, their performance was evaluated as <strong style={{ color: '#fff' }}>Exemplary</strong>.
              </p>
            </div>

            {/* Document Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px dashed rgba(255,255,255,0.15)', paddingTop: '0.75rem', marginTop: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ffffff' }}>{signatory}</div>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Infotech Technologies Ltd.</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5B8CFF' }}>Date: {issueDate}</div>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Verify ID: {selectedUser.split('(')[1]?.replace(')', '') || 'VERIFIED'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History Log Table */}
      <div className={styles.cardBox}>
        <div className={styles.boxHeader}>
          <h3 className={styles.boxTitle}>Issued Documents History & Audit Log</h3>
        </div>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Document ID</th>
              <th>Recipient Name</th>
              <th>Template Type</th>
              <th>Issue Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {history.map((h) => (
              <tr key={h.id}>
                <td style={{ fontWeight: 700, color: '#5B8CFF' }}>{h.id}</td>
                <td style={{ fontWeight: 700, color: '#fff' }}>{h.name}</td>
                <td>{h.type}</td>
                <td style={{ color: '#64748b' }}>{h.date}</td>
                <td>
                  <span className={styles.statusPill} style={{ background: h.status === 'Active' ? 'rgba(0,209,178,0.15)' : 'rgba(244,63,94,0.15)', color: h.status === 'Active' ? '#00D1B2' : '#f43f5e' }}>
                    {h.status}
                  </span>
                </td>
                <td>
                  <button className={styles.actionBtn} style={{ padding: '0.3rem 0.6rem', fontSize: '0.725rem' }}>
                    <Download size={13} /> Download PDF
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
