'use client';

import React from 'react';
import { DollarSign, FileSpreadsheet, Download, CheckCircle2, AlertCircle } from 'lucide-react';
import styles from '../dashboard.module.css';

export default function FinanceDashboardPage() {
  const payrolls = [
    { id: 'PAY-AUG26-01', name: 'Priya Patel', role: 'Senior Lead', base: '$6,500', allowances: '$500', deductions: '$0', net: '$7,000', status: 'PAID' },
    { id: 'PAY-AUG26-02', name: 'Neha Gupta', role: 'AI Engineer', base: '$5,800', allowances: '$400', deductions: '$0', net: '$6,200', status: 'PAID' },
    { id: 'PAY-AUG26-03', name: 'Rahul Sharma', role: 'Web Intern', base: '$1,200', allowances: '$100', deductions: '$0', net: '$1,300', status: 'PROCESSING' },
  ];

  return (
    <div className={styles.pageWrap}>
      <div className={styles.welcomeBanner}>
        <div>
          <h1 className={styles.greeting}>Finance & Payroll Hub 💳</h1>
          <p className={styles.subtext}>Monthly salary processing, allowance/deduction adjustments, and automated PDF payslip generation.</p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}><span className={styles.statTitle}>Total Monthly Payroll</span><DollarSign size={20} color="#00D1B2" /></div>
          <div className={styles.statVal}>$48,500</div>
          <div className={styles.statChange}>August 2026 Cycle</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}><span className={styles.statTitle}>Paid Payslips</span><CheckCircle2 size={20} color="#5B8CFF" /></div>
          <div className={styles.statVal}>24 Issued</div>
          <div className={styles.statChange}>4 Pending processing</div>
        </div>
      </div>

      <div className={styles.cardBox}>
        <div className={styles.boxHeader}>
          <h3 className={styles.boxTitle}>August 2026 Payroll Register</h3>
        </div>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Role</th>
              <th>Base Salary</th>
              <th>Allowances</th>
              <th>Net Pay</th>
              <th>Status</th>
              <th>Payslip</th>
            </tr>
          </thead>
          <tbody>
            {payrolls.map(p => (
              <tr key={p.id}>
                <td style={{ fontWeight: 700, color: '#fff' }}>{p.name}</td>
                <td>{p.role}</td>
                <td>{p.base}</td>
                <td>{p.allowances}</td>
                <td style={{ fontWeight: 800, color: '#00D1B2' }}>{p.net}</td>
                <td>
                  <span className={styles.statusPill} style={{ background: p.status === 'PAID' ? 'rgba(0,209,178,0.15)' : 'rgba(234,179,8,0.15)', color: p.status === 'PAID' ? '#00D1B2' : '#eab308' }}>
                    {p.status}
                  </span>
                </td>
                <td>
                  <button className={styles.actionBtn} style={{ padding: '0.3rem 0.6rem', fontSize: '0.725rem' }}>
                    <Download size={13} /> PDF Payslip
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
