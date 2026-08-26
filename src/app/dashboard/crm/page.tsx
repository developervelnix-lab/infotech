'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Plus, 
  DollarSign, 
  Phone, 
  Mail, 
  User, 
  MoreHorizontal, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import styles from '../dashboard.module.css';

export default function LeadCRMPage() {
  const columns = [
    { id: 'NEW', title: 'New Enquiries', color: '#5B8CFF' },
    { id: 'CONTACTED', title: 'Contacted', color: '#a855f7' },
    { id: 'PROPOSAL', title: 'Proposal Sent', color: '#eab308' },
    { id: 'NEGOTIATION', title: 'Negotiation', color: '#f97316' },
    { id: 'WON', title: 'Won Deals 🎉', color: '#00D1B2' },
  ];

  const leads = [
    { id: 'L-101', name: 'Apex Global Ltd', contact: 'John Miller', service: 'Custom Software ERP', budget: '$25,000', stage: 'NEW', assigned: 'Priya Patel' },
    { id: 'L-102', name: 'Zeta Innovations', contact: 'Sarah Jenkins', service: 'AI Chatbot & Automation', budget: '$12,000', stage: 'CONTACTED', assigned: 'Neha Gupta' },
    { id: 'L-103', name: 'Nexa Retail Group', contact: 'Devendra Rao', service: 'Full E-commerce Rebuild', budget: '$35,000', stage: 'PROPOSAL', assigned: 'Priya Patel' },
    { id: 'L-104', name: 'Starlight Tech', contact: 'Emily Zhang', service: 'Mobile App (iOS & Android)', budget: '$18,000', stage: 'NEGOTIATION', assigned: 'Director' },
    { id: 'L-105', name: 'Vanguard Capital', contact: 'Marcus Vance', service: 'Growth Marketing & SEO', budget: '$8,500/mo', stage: 'WON', assigned: 'Amit Kumar' },
  ];

  return (
    <div className={styles.pageWrap}>
      {/* Top Banner */}
      <div className={styles.welcomeBanner}>
        <div>
          <h1 className={styles.greeting}>Lead CRM & Sales Pipeline 💼</h1>
          <p className={styles.subtext}>Track inbound website enquiries, manage client negotiations, and monitor deal value.</p>
        </div>

        <div className={styles.quickActions}>
          <button className={styles.actionBtnPrimary}>
            <Plus size={16} /> Add New Inbound Lead
          </button>
        </div>
      </div>

      {/* Pipeline Kanban Board */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
        {columns.map(col => {
          const colLeads = leads.filter(l => l.stage === col.id);
          return (
            <div 
              key={col.id}
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                minWidth: '220px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `2px solid ${col.color}`, paddingBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#fff' }}>{col.title}</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, background: 'rgba(255,255,255,0.08)', padding: '0.15rem 0.5rem', borderRadius: '99px', color: col.color }}>
                  {colLeads.length}
                </span>
              </div>

              {colLeads.map(lead => (
                <motion.div 
                  key={lead.id}
                  whileHover={{ y: -2 }}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    padding: '0.85rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.3)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#5B8CFF' }}>{lead.id}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00D1B2' }}>{lead.budget}</span>
                  </div>

                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#fff' }}>{lead.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Contact: {lead.contact}</div>

                  <div style={{ fontSize: '0.7rem', background: 'rgba(91,140,255,0.1)', border: '1px solid rgba(91,140,255,0.2)', padding: '0.2rem 0.5rem', borderRadius: '6px', color: '#93c5fd', width: 'fit-content' }}>
                    {lead.service}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.4rem', paddingTop: '0.4rem', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.7rem', color: '#64748b' }}>
                    <span>Rep: {lead.assigned}</span>
                    <MoreHorizontal size={14} style={{ cursor: 'pointer' }} />
                  </div>
                </motion.div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
