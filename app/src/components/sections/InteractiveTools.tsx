'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { Calculator, Zap, MessageSquare } from 'lucide-react';
import styles from './InteractiveTools.module.css';

export default function InteractiveTools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [roiInputs, setRoiInputs] = useState({ investment: 10000, revenue: 50000, conversion: 3 });
  const [url, setUrl] = useState('');
  const [chatMsg, setChatMsg] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: string; text: string }[]>([
    { role: 'bot', text: 'Hi! I\'m the Infotech AI assistant. Ask me anything about our services, pricing, or how we can help your business! 🚀' },
  ]);

  const roi = (((roiInputs.revenue - roiInputs.investment) / roiInputs.investment) * 100).toFixed(0);

  const tools = [
    {
      id: 'roi',
      icon: <Calculator size={28} />,
      title: 'ROI Calculator',
      desc: 'Estimate your potential return on investment with our digital solutions.',
      color: 'var(--color-accent)',
    },
    {
      id: 'audit',
      icon: <Zap size={28} />,
      title: 'Website Audit',
      desc: 'Get an instant performance & SEO audit for any website in seconds.',
      color: 'var(--color-teal)',
    },
    {
      id: 'chat',
      icon: <MessageSquare size={28} />,
      title: 'AI Assistant',
      desc: 'Chat with our AI to get answers about services, pricing, and more.',
      color: '#a78bfa',
    },
  ];

  const sendChat = () => {
    if (!chatMsg.trim()) return;
    const newHistory = [...chatHistory, { role: 'user', text: chatMsg }];
    const bot = { role: 'bot', text: 'Great question! Our team specialises in exactly that. Would you like to book a free consultation to discuss your needs in detail?' };
    setChatHistory([...newHistory, bot]);
    setChatMsg('');
  };

  return (
    <section className={styles.section} id="tools">
      <div className="container">
        <SectionTitle
          label="Interactive Tools"
          title="Try Our Free Business Tools"
          highlight="Free Business Tools"
          subtitle="Instant insights with zero sign-up — explore what Infotech can do for you."
        />

        <motion.div
          ref={ref}
          className={styles.grid}
        >
          {tools.map((tool, i) => (
            <motion.div
              key={tool.id}
              className={`glass-card ${styles.card}`}
              style={{ '--tool-accent': tool.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              onClick={() => setActiveModal(tool.id)}
            >
              <div className={styles.iconWrap} style={{ color: tool.color, background: `${tool.color}15`, border: `1px solid ${tool.color}30` }}>
                {tool.icon}
              </div>
              <h3 className={styles.toolTitle}>{tool.title}</h3>
              <p className={styles.toolDesc}>{tool.desc}</p>
              
              <div className={styles.launchWrap}>
                <span className={styles.launch} style={{ color: tool.color }}>Launch Tool</span>
                <span className={styles.launchIcon} style={{ background: tool.color }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ROI Modal */}
      {activeModal === 'roi' && (
        <div className={styles.modalOverlay} onClick={() => setActiveModal(null)}>
          <motion.div className={`glass-card ${styles.modal}`} onClick={(e) => e.stopPropagation()} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <h3 className={styles.modalTitle}>ROI Calculator</h3>
            {[
              { label: 'Investment ($)', key: 'investment', min: 1000, max: 100000, step: 1000 },
              { label: 'Expected Revenue ($)', key: 'revenue', min: 1000, max: 500000, step: 5000 },
              { label: 'Conversion Rate (%)', key: 'conversion', min: 0.5, max: 20, step: 0.5 },
            ].map((s) => (
              <div key={s.key} className={styles.sliderGroup}>
                <div className={styles.sliderRow}>
                  <label>{s.label}</label>
                  <span className={styles.sliderVal}>{roiInputs[s.key as keyof typeof roiInputs].toLocaleString()}</span>
                </div>
                <input type="range" min={s.min} max={s.max} step={s.step}
                  value={roiInputs[s.key as keyof typeof roiInputs]}
                  onChange={(e) => setRoiInputs({ ...roiInputs, [s.key]: parseFloat(e.target.value) })}
                  className={styles.rangeInput}
                />
              </div>
            ))}
            <div className={styles.roiResult}>
              <span>Estimated ROI</span>
              <span className={styles.roiNum} style={{ color: +roi > 0 ? 'var(--color-teal)' : '#f87171' }}>{roi}%</span>
            </div>
            <Button href="/contact" size="md" style={{ width: '100%' }}>Get a Detailed Analysis</Button>
            <button className={styles.closeBtn} onClick={() => setActiveModal(null)}>✕</button>
          </motion.div>
        </div>
      )}

      {/* Audit Modal */}
      {activeModal === 'audit' && (
        <div className={styles.modalOverlay} onClick={() => setActiveModal(null)}>
          <motion.div className={`glass-card ${styles.modal}`} onClick={(e) => e.stopPropagation()} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <h3 className={styles.modalTitle}>Website Speed Audit</h3>
            <p className={styles.modalSub}>Enter your website URL to get an instant performance score.</p>
            <input
              type="url"
              placeholder="https://yourwebsite.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className={styles.textInput}
            />
            <Button size="md" style={{ width: '100%' }} onClick={() => window.open(`https://pagespeed.web.dev/analysis?url=${encodeURIComponent(url)}`, '_blank')}>
              Run Audit →
            </Button>
            <button className={styles.closeBtn} onClick={() => setActiveModal(null)}>✕</button>
          </motion.div>
        </div>
      )}

      {/* Chat Modal */}
      {activeModal === 'chat' && (
        <div className={styles.modalOverlay} onClick={() => setActiveModal(null)}>
          <motion.div className={`glass-card ${styles.modal} ${styles.chatModal}`} onClick={(e) => e.stopPropagation()} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <h3 className={styles.modalTitle}>AI Assistant</h3>
            <div className={styles.chatHistory}>
              {chatHistory.map((m, i) => (
                <div key={i} className={`${styles.chatMsg} ${m.role === 'user' ? styles.userMsg : styles.botMsg}`}>
                  {m.text}
                </div>
              ))}
            </div>
            <div className={styles.chatInput}>
              <input
                type="text"
                placeholder="Ask anything..."
                value={chatMsg}
                onChange={(e) => setChatMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendChat()}
                className={styles.textInput}
              />
              <Button size="sm" onClick={sendChat}>Send</Button>
            </div>
            <button className={styles.closeBtn} onClick={() => setActiveModal(null)}>✕</button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
