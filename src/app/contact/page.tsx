'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ArrowLeft, 
  ArrowRight, 
  MonitorSmartphone, 
  Bot, 
  TrendingUp, 
  Settings, 
  Mail, 
  Phone, 
  User, 
  Building 
} from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

const services = [
  { id: 'web-platform', label: 'Web & Platform Development', icon: <MonitorSmartphone size={24} /> },
  { id: 'ai-automation', label: 'AI & Automation Systems', icon: <Bot size={24} /> },
  { id: 'growth-marketing', label: 'Growth Marketing', icon: <TrendingUp size={24} /> },
  { id: 'custom-software', label: 'Custom Software', icon: <Settings size={24} /> }
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  // Form states
  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [budget, setBudget] = useState(15000);
  const [requirements, setRequirements] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => {
    if (step === 1 && !selectedService) return;
    if (step === 2 && (!name || !email || !phone || !businessType)) return;
    
    setDirection(1);
    setStep(step + 1);
  };

  const prevStep = () => {
    setDirection(-1);
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requirements) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const formatCurrency = (val: number) => {
    if (val >= 100000) return '$100k+';
    return `$${(val / 1000).toFixed(0)}k`;
  };

  // Variants for sliding animations
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.3 }
    })
  };

  return (
    <div className={styles.container}>

      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <h1 className={styles.title}>Let's Build Something Great</h1>
          <p className={styles.subtitle}>Fill out the smart enquiry funnel and our team will get in touch within 24 hours.</p>
        </div>

        <div className={styles.funnelContainer}>
          {/* Progress Indicators */}
          {!isSuccess && (
            <div className={styles.progress}>
              {[1, 2, 3, 4].map((s) => (
                <div 
                  key={s} 
                  className={`${styles.progressStep} ${step >= s ? styles.progressActive : ''} ${step > s ? styles.progressCompleted : ''}`}
                >
                  <div className={styles.stepNum}>
                    {step > s ? <Check size={14} /> : s}
                  </div>
                  <span className={styles.stepLabel}>
                    {s === 1 && 'Service'}
                    {s === 2 && 'Details'}
                    {s === 3 && 'Budget'}
                    {s === 4 && 'Details'}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className={styles.funnelCard}>
            <AnimatePresence custom={direction} mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  className={styles.successScreen}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.successIcon}>
                    <Check size={40} />
                  </div>
                  <h2 className={styles.successTitle}>Enquiry Submitted!</h2>
                  <p className={styles.successDesc}>
                    Thank you, <strong>{name}</strong>. We've received your request for <strong>{services.find(s => s.id === selectedService)?.label}</strong>.
                  </p>
                  <p className={styles.successFollowUp}>Our consulting team is already reviewing your details. We will contact you at <strong>{email}</strong> within 24 hours.</p>
                  
                  <Button href="/" size="md" style={{ marginTop: 'var(--space-4)' }}>
                    Return Home
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className={styles.stepContent}
                >
                  {/* STEP 1: Select Service */}
                  {step === 1 && (
                    <div className={styles.stepForm}>
                      <h3 className={styles.stepTitle}>What project are we building?</h3>
                      <div className={styles.servicesGrid}>
                        {services.map((item) => (
                          <div
                            key={item.id}
                            className={`${styles.serviceCard} ${selectedService === item.id ? styles.serviceActive : ''}`}
                            onClick={() => setSelectedService(item.id)}
                          >
                            <div className={styles.serviceIcon}>{item.icon}</div>
                            <span className={styles.serviceLabel}>{item.label}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className={styles.actions}>
                        <div />
                        <Button 
                          onClick={nextStep} 
                          disabled={!selectedService}
                          size="md"
                        >
                          Continue <ArrowRight size={16} />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Enter Details */}
                  {step === 2 && (
                    <div className={styles.stepForm}>
                      <h3 className={styles.stepTitle}>Tell us about yourself</h3>
                      <div className={styles.inputsGrid}>
                        <div className={styles.inputGroup}>
                          <label className={styles.label}>Your Name</label>
                          <div className={styles.inputWrapper}>
                            <User className={styles.inputIcon} size={18} />
                            <input 
                              type="text" 
                              placeholder="John Doe" 
                              value={name} 
                              onChange={(e) => setName(e.target.value)}
                              className={styles.input} 
                            />
                          </div>
                        </div>

                        <div className={styles.inputGroup}>
                          <label className={styles.label}>Work Email</label>
                          <div className={styles.inputWrapper}>
                            <Mail className={styles.inputIcon} size={18} />
                            <input 
                              type="email" 
                              placeholder="john@company.com" 
                              value={email} 
                              onChange={(e) => setEmail(e.target.value)}
                              className={styles.input} 
                            />
                          </div>
                        </div>

                        <div className={styles.inputGroup}>
                          <label className={styles.label}>Phone Number</label>
                          <div className={styles.inputWrapper}>
                            <Phone className={styles.inputIcon} size={18} />
                            <input 
                              type="tel" 
                              placeholder="+1 (555) 000-0000" 
                              value={phone} 
                              onChange={(e) => setPhone(e.target.value)}
                              className={styles.input} 
                            />
                          </div>
                        </div>

                        <div className={styles.inputGroup}>
                          <label className={styles.label}>Business Type</label>
                          <div className={styles.inputWrapper}>
                            <Building className={styles.inputIcon} size={18} />
                            <input 
                              type="text" 
                              placeholder="E-commerce, SaaS, Startup..." 
                              value={businessType} 
                              onChange={(e) => setBusinessType(e.target.value)}
                              className={styles.input} 
                            />
                          </div>
                        </div>
                      </div>

                      <div className={styles.actions}>
                        <Button onClick={prevStep} variant="secondary" size="md">
                          <ArrowLeft size={16} /> Back
                        </Button>
                        <Button 
                          onClick={nextStep} 
                          disabled={!name || !email || !phone || !businessType}
                          size="md"
                        >
                          Continue <ArrowRight size={16} />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Choose Budget */}
                  {step === 3 && (
                    <div className={styles.stepForm}>
                      <h3 className={styles.stepTitle}>What is your approximate budget?</h3>
                      <div className={styles.sliderContainer}>
                        <div className={styles.budgetValue}>
                          {formatCurrency(budget)}
                        </div>
                        <input
                          type="range"
                          min="5000"
                          max="100000"
                          step="5000"
                          value={budget}
                          onChange={(e) => setBudget(Number(e.target.value))}
                          className={styles.slider}
                        />
                        <div className={styles.sliderLabels}>
                          <span>$5k</span>
                          <span>$25k</span>
                          <span>$50k</span>
                          <span>$75k</span>
                          <span>$100k+</span>
                        </div>
                      </div>

                      <div className={styles.actions}>
                        <Button onClick={prevStep} variant="secondary" size="md">
                          <ArrowLeft size={16} /> Back
                        </Button>
                        <Button onClick={nextStep} size="md">
                          Continue <ArrowRight size={16} />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Project Description */}
                  {step === 4 && (
                    <form onSubmit={handleSubmit} className={styles.stepForm}>
                      <h3 className={styles.stepTitle}>Describe your project requirements</h3>
                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Requirements & Goals</label>
                        <textarea
                          placeholder="Please provide details about what you want to achieve, core features, timeline expectations..."
                          rows={6}
                          value={requirements}
                          onChange={(e) => setRequirements(e.target.value)}
                          className={styles.textarea}
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className={styles.actions}>
                        <Button onClick={prevStep} variant="secondary" size="md" disabled={isSubmitting}>
                          <ArrowLeft size={16} /> Back
                        </Button>
                        <Button 
                          type="submit" 
                          disabled={!requirements || isSubmitting}
                          size="md"
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Project Enquiry'}
                        </Button>
                      </div>
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
