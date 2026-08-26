'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Search, 
  UserPlus, 
  Filter, 
  FileCheck2, 
  MoreVertical, 
  CheckCircle2, 
  XCircle,
  Mail,
  Phone
} from 'lucide-react';
import styles from '../dashboard.module.css';

export default function HRRegistryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [showAddModal, setShowAddModal] = useState(false);

  const [employees, setEmployees] = useState([
    { id: 'INT-2026-04', name: 'Rahul Sharma', email: 'rahul.s@infotech.com', role: 'Full-Stack Web Intern', dept: 'Engineering', type: 'Intern', date: '2026-08-01', manager: 'Priya Patel', status: 'Active' },
    { id: 'EMP-2025-12', name: 'Priya Patel', email: 'priya.p@infotech.com', role: 'Senior Frontend Lead', dept: 'Engineering', type: 'Full-Time', date: '2025-05-15', manager: 'Director', status: 'Active' },
    { id: 'INT-2026-08', name: 'Vikram Verma', email: 'vikram.v@infotech.com', role: 'UI/UX Design Intern', dept: 'Design', type: 'Intern', date: '2026-08-10', manager: 'Ananya Roy', status: 'Active' },
    { id: 'EMP-2024-03', name: 'Neha Gupta', email: 'neha.g@infotech.com', role: 'AI Engineer', dept: 'AI & Automation', type: 'Full-Time', date: '2024-03-01', manager: 'Director', status: 'Active' },
    { id: 'EMP-2024-09', name: 'Amit Kumar', email: 'amit.k@infotech.com', role: 'Growth Marketer', dept: 'Marketing', type: 'Full-Time', date: '2024-09-20', manager: 'Director', status: 'Deactivated' },
  ]);

  const filtered = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || emp.id.toLowerCase().includes(searchTerm.toLowerCase()) || emp.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'ALL' || emp.dept === selectedDept || (selectedDept === 'INTERN' && emp.type === 'Intern');
    return matchesSearch && matchesDept;
  });

  return (
    <div className={styles.pageWrap}>
      {/* Top Banner */}
      <div className={styles.welcomeBanner}>
        <div>
          <h1 className={styles.greeting}>HR Employee & Intern Registry 👥</h1>
          <p className={styles.subtext}>Manage full-time staff, interns, role assignments, and credential provisioning.</p>
        </div>

        <div className={styles.quickActions}>
          <button onClick={() => setShowAddModal(true)} className={styles.actionBtnPrimary}>
            <UserPlus size={16} /> Add Employee / Intern
          </button>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className={styles.cardBox} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
          <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
          <input 
            type="text"
            placeholder="Search by name, ID, or designation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '99px', padding: '0.6rem 1rem 0.6rem 2.6rem', color: '#fff', fontSize: '0.825rem', outline: 'none' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.775rem', color: '#94a3b8', fontWeight: 600 }}>Filter:</span>
          {['ALL', 'Engineering', 'Design', 'Marketing', 'AI & Automation', 'INTERN'].map(dept => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={styles.actionBtn}
              style={{
                background: selectedDept === dept ? 'rgba(91,140,255,0.2)' : 'rgba(255,255,255,0.04)',
                borderColor: selectedDept === dept ? '#5B8CFF' : 'rgba(255,255,255,0.08)',
                color: selectedDept === dept ? '#fff' : '#94a3b8',
                fontSize: '0.75rem',
                padding: '0.35rem 0.75rem'
              }}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Employees Table */}
      <div className={styles.cardBox}>
        <div className={styles.boxHeader}>
          <h3 className={styles.boxTitle}>Staff Directory ({filtered.length} Records)</h3>
        </div>

        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>ID & Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Type</th>
              <th>Joining Date</th>
              <th>Manager</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(emp => (
              <tr key={emp.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6, #00D1B2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '11px', color: '#fff' }}>
                      {emp.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#fff' }}>{emp.name}</div>
                      <div style={{ fontSize: '10px', color: '#5B8CFF' }}>{emp.id}</div>
                    </div>
                  </div>
                </td>
                <td style={{ color: '#cbd5e1' }}>{emp.role}</td>
                <td>{emp.dept}</td>
                <td>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '6px', background: emp.type === 'Intern' ? 'rgba(168,85,247,0.15)' : 'rgba(91,140,255,0.15)', color: emp.type === 'Intern' ? '#a855f7' : '#5B8CFF' }}>
                    {emp.type}
                  </span>
                </td>
                <td style={{ color: '#64748b' }}>{emp.date}</td>
                <td>{emp.manager}</td>
                <td>
                  <span className={styles.statusPill} style={{ background: emp.status === 'Active' ? 'rgba(0,209,178,0.15)' : 'rgba(244,63,94,0.15)', color: emp.status === 'Active' ? '#00D1B2' : '#f43f5e' }}>
                    {emp.status}
                  </span>
                </td>
                <td>
                  <a href="/dashboard/certificates" className={styles.actionBtn} style={{ padding: '0.3rem 0.6rem', fontSize: '0.725rem' }}>
                    <FileCheck2 size={13} /> Certificate
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
