'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, BookOpen, Send, Check } from 'lucide-react';
import { internships } from '@/lib/data';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

const trainingTracks = [
  { title: 'Developer Internship', desc: 'Work directly under senior full-stack devs building core features on client systems.' },
  { title: 'Digital Marketing Training', desc: 'Learn campaign building, client tracking, and ROI analytics hands-on.' },
  { title: 'Real Project Experience', desc: 'No dummy projects. Everything you build is deployed to production pipelines.' },
  { title: 'Certification Programs', desc: 'Gain official competence certifications endorsed by Infotech upon completion.' }
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', portfolio: '', resumeName: '' });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setApplied(true);
    }, 1500);
  };

  const closeModal = () => {
    setSelectedRole(null);
    setApplied(false);
    setFormData({ name: '', email: '', portfolio: '', resumeName: '' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resumeName: e.target.files[0].name });
    }
  };

  return (
    <div className={styles.container}>

      {/* Hero Banner */}
      <div className={`container ${styles.hero}`}>
        <SectionTitle
          label="Careers"
          title="Learn. Build. Grow with Infotech."
          highlight="Grow"
          subtitle="Join our ecosystem. We develop talent by putting you directly on production-grade products, mentoring you to success."
        />
      </div>

      {/* Internship Openings */}
      <div className={`container ${styles.openingsSection}`}>
        <h2 className={styles.sectionTitle}>Open Internship Positions</h2>
        <div className={styles.grid}>
          {internships.map((job) => (
            <motion.div 
              key={job.id} 
              className={`glass-card ${styles.card}`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.roleTitle}>{job.role}</h3>
                <div className={styles.badges}>
                  <span className={styles.badge}>
                    <Clock size={14} /> {job.duration}
                  </span>
                  <span className={styles.badge}>
                    <MapPin size={14} /> {job.location}
                  </span>
                </div>
              </div>

              <p className={styles.cardDesc}>{job.description}</p>

              <div className={styles.skillsWrapper}>
                <h4 className={styles.skillsTitle}>Required Skills:</h4>
                <div className={styles.skills}>
                  {job.skills.map((skill) => (
                    <span key={skill} className={styles.skillTag}>{skill}</span>
                  ))}
                </div>
              </div>

              <Button 
                onClick={() => setSelectedRole(job.role)}
                size="sm"
                style={{ width: '100%' }}
              >
                Apply Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Training Tracks */}
      <div className={styles.tracksSection}>
        <div className={`container ${styles.tracksContainer}`}>
          <div className={styles.tracksHeader}>
            <h2 className={styles.tracksTitle}>Our Professional Training Environment</h2>
            <p className={styles.tracksSubtitle}>Every track is designed to bridge the gap between classroom theory and elite agency execution.</p>
          </div>

          <div className={styles.tracksGrid}>
            {trainingTracks.map((track) => (
              <div key={track.title} className={styles.trackCard}>
                <div className={styles.trackIcon}>
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className={styles.trackCardTitle}>{track.title}</h3>
                  <p className={styles.trackCardDesc}>{track.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Modal Popup */}
      <AnimatePresence>
        {selectedRole && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <motion.div 
              className={`glass-card ${styles.modal}`}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className={styles.closeBtn} onClick={closeModal}>✕</button>

              {applied ? (
                <div className={styles.appliedScreen}>
                  <div className={styles.successIcon}>
                    <Check size={36} />
                  </div>
                  <h3 className={styles.appliedTitle}>Application Received!</h3>
                  <p className={styles.appliedDesc}>
                    Thank you for applying for the <strong>{selectedRole}</strong> track. Our HR coordinators will evaluate your credentials and reply within 3 business days.
                  </p>
                  <Button onClick={closeModal} size="md">Done</Button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className={styles.modalForm}>
                  <h3 className={styles.modalTitle}>Apply for {selectedRole}</h3>
                  <p className={styles.modalSub}>Complete the short application form to submit your profile to HR.</p>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Jane Doe" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={styles.input} 
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="jane@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={styles.input} 
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Portfolio / GitHub URL (Optional)</label>
                    <input 
                      type="url" 
                      placeholder="https://github.com/janedoe" 
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      className={styles.input} 
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Upload Resume (PDF only)</label>
                    <div className={styles.fileDropZone}>
                      <input 
                        type="file" 
                        required
                        accept=".pdf" 
                        onChange={handleFileChange}
                        className={styles.hiddenFileInput} 
                        id="resume-file"
                      />
                      <label htmlFor="resume-file" className={styles.fileLabel}>
                        <Send size={20} className={styles.uploadIcon} />
                        <span>{formData.resumeName || 'Choose PDF File'}</span>
                      </label>
                    </div>
                  </div>

                  <Button type="submit" disabled={loading} size="md" style={{ marginTop: 'var(--space-2)' }}>
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
