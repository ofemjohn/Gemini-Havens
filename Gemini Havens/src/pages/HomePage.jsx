import { startTransition, useMemo, useState } from 'react'
import { BadgeCheck, HeartHandshake } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/gemini-havens-logo.jpg'
import structuredSupportImg from '../assets/structured_support.png'
import pathwayPlacementImg from '../assets/pathway_placement.png'
import AnimatedSection from '../components/AnimatedSection.jsx'
import TestimonialGrid from '../components/TestimonialGrid.jsx'
import {
  partnerTypes,
  proofPoints,
  audienceContent,
  differenceCards,
  placementSteps,
  supportPillars,
  testimonials,
  trustMetrics,
} from '../data/siteContent.js'

function HomePage() {
  const prefersReducedMotion = useReducedMotion()
  const [activeAudience, setActiveAudience] = useState(audienceContent[0].id)

  const activePanel = useMemo(
    () =>
      audienceContent.find((audience) => audience.id === activeAudience) ??
      audienceContent[0],
    [activeAudience],
  )

  const orbitTransition = prefersReducedMotion
    ? {}
    : {
        animate: { rotate: 360 },
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 28,
          ease: 'linear',
        },
      }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <>
      <section className="hero-section">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-grid">
          <motion.div 
            className="hero-copy"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="eyebrow" variants={heroItemVariants}>
              Atlanta sober living designed for trust, structure, and stability
            </motion.span>
            <motion.h1 variants={heroItemVariants}>
              The next step after treatment should feel structured, responsive,
              and deeply human.
            </motion.h1>
            <motion.p className="hero-text" variants={heroItemVariants}>
              At Gemini Havens, we adopt a holistic approach to recovery,
              ensuring that each resident receives tailored support. Our program
              emphasizes accountability and community, offering 24/7 structure
              and peer assistance.
            </motion.p>

            <motion.div className="hero-actions" variants={heroItemVariants}>
              <Link className="button button-primary" to="/contact">
                Submit a referral
              </Link>
              <Link className="button button-secondary" to="/house-rules">
                House Rules
              </Link>
            </motion.div>

            <motion.div className="hero-metrics" variants={containerVariants}>
              {trustMetrics.map((metric) => (
                <motion.div key={metric.label} className="metric-card" variants={heroItemVariants}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="hero-visual">
            <motion.div className="orbital-ring" {...orbitTransition} />
            <motion.div
              className="hero-panel hero-panel-main"
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="logo-frame">
                <img src={logo} alt="Gemini Havens Sober Living" />
              </div>
              <div className="panel-copy">
                <span className="mini-label">Experience the Gemini Difference</span>
                <h2>Modern recovery living with clarity at every touchpoint.</h2>
              </div>
            </motion.div>

            <motion.div
              className="floating-note floating-note-top"
              initial={{ opacity: 0, x: 24, y: -12 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.65 }}
            >
              <BadgeCheck size={18} />
              Fast placement turnaround
            </motion.div>

            <motion.div
              className="floating-note floating-note-bottom"
              initial={{ opacity: 0, x: -24, y: 12 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.65 }}
            >
              <HeartHandshake size={18} />
              Community, structure, accountability
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedSection className="section-wrap">
        <section className="section partner-strip-section">
          <div className="partner-strip">
            {partnerTypes.map((partner) => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section audience-section">
          <div className="section-heading">
            <span className="eyebrow">Who we serve</span>
            <h2>Built to reassure referral partners and support residents every step of the way.</h2>
          </div>

          <div className="audience-layout">
            <div className="audience-tabs" role="tablist" aria-label="Audience groups">
              {audienceContent.map((audience) => (
                <button
                  key={audience.id}
                  type="button"
                  className={audience.id === activeAudience ? 'is-active' : ''}
                  onClick={() =>
                    startTransition(() => {
                      setActiveAudience(audience.id)
                    })
                  }
                >
                  {audience.label}
                </button>
              ))}
            </div>

            <motion.article
              key={activePanel.id}
              className="audience-panel"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              role="tabpanel"
            >
              <h3>{activePanel.title}</h3>
              <p>{activePanel.description}</p>
              <ul className="check-list">
                {activePanel.highlights.map((item) => (
                  <li key={item}>
                    <BadgeCheck size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Why Gemini stands out</span>
            <h2>A premium, trust-first environment focused on your long-term stability and success.</h2>
          </div>

          <motion.div 
            className="difference-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {differenceCards.map(({ icon: Icon, title, text }) => (
              <motion.article 
                key={title} 
                className="glass-card" 
                variants={itemVariants}
                whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(26, 46, 59, 0.08)' }}
              >
                <div className="icon-wrap">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </motion.div>

          <motion.div 
            className="proof-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {proofPoints.map((item) => (
              <motion.article 
                key={item.title} 
                className="proof-card"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>



      <AnimatedSection className="section-wrap">
        <section className="section support-section">
          <div className="split-layout">
            <motion.div 
              className="split-visual"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src={structuredSupportImg} alt="Modern, clean sober living environment" />
            </motion.div>
            
            <div className="split-content">
              <div className="section-heading" style={{ textAlign: 'left', marginInline: 0 }}>
                <span className="eyebrow">Core services</span>
                <h2 style={{ fontSize: '2.4rem' }}>Structured support that bridges treatment and independent recovery.</h2>
                <p style={{ marginTop: '1.25rem', fontSize: '1.05rem' }}>
                  Gemini Havens exists to provide structured, supportive sober living that bridges the gap between treatment and independent recovery. We partner with hospitals, courts, and case managers to ensure smooth, reliable placements and promote long-term stability for every individual we serve.
                </p>
              </div>

              <motion.div 
                className="pillars-grid"
                style={{ gridTemplateColumns: '1fr', gap: '1.25rem' }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {supportPillars.map(({ icon: Icon, title, text }) => (
                  <motion.article 
                    key={title} 
                    className="pillar-card"
                    variants={itemVariants}
                    whileHover={{ x: 6, boxShadow: '0 8px 24px rgba(26, 46, 59, 0.08)' }}
                    style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.5rem', textAlign: 'left' }}
                  >
                    <Icon size={28} color="var(--gold-700)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <div>
                      <h3 style={{ margin: 0, fontSize: '1.15rem' }}>{title}</h3>
                      <p style={{ margin: '0.4rem 0 0', fontSize: '0.9rem' }}>{text}</p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section pathway-section">
          <div className="split-layout split-layout-reverse">
            <motion.div 
              className="split-visual"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src={pathwayPlacementImg} alt="Professional desk representing structure and planning" />
            </motion.div>

            <div className="split-content">
              <div className="section-heading" style={{ textAlign: 'left', marginInline: 0 }}>
                <span className="eyebrow">Referral flow</span>
                <h2 style={{ fontSize: '2.4rem' }}>A cleaner, faster path from inquiry to placement.</h2>
              </div>

              <motion.div 
                className="steps-grid"
                style={{ gridTemplateColumns: '1fr', gap: '1.25rem' }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {placementSteps.map((step) => (
                  <motion.article 
                    key={step.step} 
                    className="step-card"
                    variants={itemVariants}
                    whileHover={{ x: 6, boxShadow: '0 8px 24px rgba(26, 46, 59, 0.08)' }}
                    style={{ padding: '1.5rem', textAlign: 'left', borderLeft: '3px solid var(--gold-700)' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.85rem' }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold-700)' }}>{step.step}</span>
                      <h3 style={{ margin: 0, fontSize: '1.15rem' }}>{step.title}</h3>
                    </div>
                    <p style={{ margin: '0.4rem 0 0 1.95rem', fontSize: '0.9rem' }}>{step.text}</p>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Success Stories</span>
            <h2>Hear from our residents and partners.</h2>
          </div>
          <TestimonialGrid items={testimonials} />
        </section>
      </AnimatedSection>
    </>
  )
}

export default HomePage
