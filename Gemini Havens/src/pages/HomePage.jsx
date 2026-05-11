import { startTransition, useMemo, useState } from 'react'
import { ArrowRight, BadgeCheck, HeartHandshake, Mail, Phone } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/gemini-havens-logo.jpg'
import structuredSupportImg from '../assets/structured_support.png'
import pathwayPlacementImg from '../assets/pathway_placement.png'
import AnimatedSection from '../components/AnimatedSection.jsx'
import TestimonialGrid from '../components/TestimonialGrid.jsx'
import TiltCard from '../components/TiltCard.jsx'
import MagnetButton from '../components/MagnetButton.jsx'
import { useParallaxMouse } from '../hooks/useInteractions.js'
import {
  partnerTypes,
  proofPoints,
  audienceContent,
  differenceCards,
  faqItems,
  placementSteps,
  supportPillars,
  testimonials,
  trustMetrics,
  resourceCategories,
  whyPartnerFeatures,
  intakeProcessSteps,
  urgentAccessBanner,
} from '../data/siteContent.js'

function HomePage() {
  const prefersReducedMotion = useReducedMotion()
  const [activeAudience, setActiveAudience] = useState(audienceContent[0].id)
  const [openFaq, setOpenFaq] = useState(null)

  // Parallax mouse tracking for the hero visual
  const heroParallax = useParallaxMouse({ strength: 18 })

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
      {/* ── Hero Section with parallax mouse tracking ── */}
      <section className="hero-section" ref={heroParallax.ref} {...heroParallax.handlers}>
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
              <MagnetButton to="/contact" className="button button-primary">
                Submit a referral
              </MagnetButton>
              <MagnetButton to="/house-rules" className="button button-secondary">
                House Rules
              </MagnetButton>
            </motion.div>

            <motion.div className="hero-metrics" variants={containerVariants}>
              {trustMetrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  className="metric-card"
                  variants={heroItemVariants}
                  whileHover={{ 
                    scale: 1.08, 
                    boxShadow: '0 8px 28px rgba(61, 139, 110, 0.15)',
                    borderColor: 'rgba(61, 139, 110, 0.2)',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
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
              style={!prefersReducedMotion ? {
                transform: `translate(${heroParallax.offset.x * 0.3}px, ${heroParallax.offset.y * 0.3}px)`,
                transition: 'transform 200ms ease-out',
              } : {}}
              whileHover={{ scale: 1.02 }}
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
              style={!prefersReducedMotion ? {
                transform: `translate(${heroParallax.offset.x * -0.6}px, ${heroParallax.offset.y * -0.6}px)`,
                transition: 'transform 150ms ease-out',
              } : {}}
              whileHover={{ scale: 1.06, boxShadow: '0 8px 32px rgba(61, 139, 110, 0.18)' }}
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
              style={!prefersReducedMotion ? {
                transform: `translate(${heroParallax.offset.x * -0.45}px, ${heroParallax.offset.y * -0.45}px)`,
                transition: 'transform 150ms ease-out',
              } : {}}
              whileHover={{ scale: 1.06, boxShadow: '0 8px 32px rgba(61, 139, 110, 0.18)' }}
            >
              <HeartHandshake size={18} />
              Community, structure, accountability
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Partner Strip ── */}
      <AnimatedSection className="section-wrap">
        <section className="section partner-strip-section">
          <div className="partner-strip">
            {partnerTypes.map((partner) => (
              <motion.span
                key={partner}
                whileHover={{ scale: 1.12, color: 'var(--gold-700)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                style={{ cursor: 'default' }}
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ── Audience Section ── */}
      <AnimatedSection className="section-wrap">
        <section className="section audience-section">
          <div className="section-heading">
            <span className="eyebrow">Who we serve</span>
            <h2>Built to reassure referral partners and support residents every step of the way.</h2>
          </div>

          <div className="audience-layout">
            <div className="audience-tabs" role="tablist" aria-label="Audience groups">
              {audienceContent.map((audience) => (
                <motion.button
                  key={audience.id}
                  type="button"
                  className={audience.id === activeAudience ? 'is-active' : ''}
                  onClick={() =>
                    startTransition(() => {
                      setActiveAudience(audience.id)
                    })
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  {audience.label}
                </motion.button>
              ))}
            </div>

            <motion.article
              key={activePanel.id}
              className="audience-panel"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              role="tabpanel"
            >
              <h3>{activePanel.title}</h3>
              <p>{activePanel.description}</p>
              <ul className="check-list">
                {activePanel.highlights.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + idx * 0.1, duration: 0.4 }}
                    whileHover={{ x: 6 }}
                  >
                    <BadgeCheck size={18} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Why Gemini Stands Out — TiltCards ── */}
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
              <TiltCard
                key={title}
                className="glass-card"
                variants={itemVariants}
                tiltMax={8}
              >
                <div className="icon-wrap icon-wrap-interactive">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </TiltCard>
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
              <TiltCard
                key={item.title}
                className="proof-card"
                variants={itemVariants}
                tiltMax={5}
              >
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </TiltCard>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      {/* ── Support Section with interactive pillar cards ── */}
      <AnimatedSection className="section-wrap">
        <section className="section support-section">
          <div className="split-layout">
            <motion.div 
              className="split-visual"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.03, rotate: -0.5 }}
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
                    whileHover={{ 
                      x: 10, 
                      boxShadow: '0 8px 28px rgba(26, 46, 59, 0.1)',
                      borderColor: 'rgba(61, 139, 110, 0.15)',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.5rem', textAlign: 'left' }}
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={28} color="var(--gold-700)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    </motion.div>
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

      {/* ── Pathway / Referral Flow ── */}
      <AnimatedSection className="section-wrap">
        <section className="section pathway-section">
          <div className="split-layout split-layout-reverse">
            <motion.div 
              className="split-visual"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.03, rotate: 0.5 }}
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
                    whileHover={{ 
                      x: 10, 
                      boxShadow: '0 8px 28px rgba(26, 46, 59, 0.1)',
                      borderLeftColor: 'var(--gold-700)',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{ padding: '1.5rem', textAlign: 'left', borderLeft: '3px solid var(--gold-700)' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.85rem' }}>
                      <motion.span 
                        style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold-700)' }}
                        whileHover={{ scale: 1.3 }}
                      >
                        {step.step}
                      </motion.span>
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

      {/* ── Resources with TiltCards ── */}
      <AnimatedSection className="section-wrap">
        <section className="section resource-section">
          <div className="section-heading">
            <span className="eyebrow">Resources</span>
            <h2>Support for every step of the recovery journey.</h2>
          </div>

          <motion.div
            className="resource-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {resourceCategories.map(({ icon: Icon, title, description, items, cta }) => (
              <TiltCard
                key={title}
                className="resource-card"
                variants={itemVariants}
                tiltMax={6}
              >
                <div className="resource-card-header">
                  <div className="icon-wrap icon-wrap-interactive">
                    <Icon size={20} />
                  </div>
                  <h3>{title}</h3>
                </div>
                <p>{description}</p>
                <ul className="resource-list">
                  {items.map((item) => (
                    <li key={item}>
                      <BadgeCheck size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {cta && (
                  <MagnetButton to={cta.to} className="button button-primary resource-cta">
                    {cta.label}
                  </MagnetButton>
                )}
              </TiltCard>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      {/* ── Why Partner With Us — TiltCards ── */}
      <AnimatedSection className="section-wrap">
        <section className="section partner-features-section">
          <div className="section-heading">
            <span className="eyebrow">Why partner with us</span>
            <h2>What makes working with Gemini Havens different?</h2>
            <p className="section-subtext">
              We believe that when someone is ready for the next step, time matters. That's why we're committed to making the transition to structured sober living as smooth and immediate as possible.
            </p>
          </div>

          <motion.div
            className="partner-features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {whyPartnerFeatures.map(({ icon: Icon, title, description }) => (
              <TiltCard
                key={title}
                className="partner-feature-card"
                variants={itemVariants}
                tiltMax={7}
              >
                <div className="partner-feature-icon icon-wrap-interactive">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </TiltCard>
            ))}
          </motion.div>

          <motion.div
            className="partner-cta-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p>Let's partner to make a real difference — starting today.</p>
            <MagnetButton to="/contact" className="button button-primary">
              Refer a Resident <ArrowRight size={16} />
            </MagnetButton>
          </motion.div>
        </section>
      </AnimatedSection>

      {/* ── Intake Process — interactive step cards ── */}
      <AnimatedSection className="section-wrap">
        <section className="section intake-process-section">
          <div className="section-heading">
            <span className="eyebrow">How it works</span>
            <h2>From first call to move-in — a clear, supported path.</h2>
          </div>

          <motion.div
            className="intake-steps-timeline"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {intakeProcessSteps.map(({ step, icon: Icon, title, description }, idx) => (
              <TiltCard
                key={step}
                className="intake-step-card"
                variants={itemVariants}
                tiltMax={6}
              >
                <motion.div
                  className="intake-step-number"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <span>{String(step).padStart(2, '0')}</span>
                </motion.div>
                <div className="intake-step-icon icon-wrap-interactive">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                {idx < intakeProcessSteps.length - 1 && (
                  <div className="intake-step-connector" aria-hidden="true" />
                )}
              </TiltCard>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      {/* ── 24/7 Access Banner ── */}
      <AnimatedSection className="section-wrap">
        <section className="section">
          <motion.div
            className="access-banner"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="access-banner-content">
              <motion.span
                className="access-banner-eyebrow"
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              >
                {urgentAccessBanner.eyebrow}
              </motion.span>
              <h2>{urgentAccessBanner.headline}</h2>
              <p>{urgentAccessBanner.subtext}</p>
            </div>
            <div className="access-banner-actions">
              <motion.a
                href={`tel:${urgentAccessBanner.phone.replace(/-/g, '')}`}
                className="access-action-btn access-action-phone"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <Phone size={20} />
                <div>
                  <strong>Call Now</strong>
                  <span>{urgentAccessBanner.phone}</span>
                </div>
              </motion.a>
              <motion.a
                href={`mailto:${urgentAccessBanner.email}`}
                className="access-action-btn access-action-email"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <Mail size={20} />
                <div>
                  <strong>Email Us</strong>
                  <span>{urgentAccessBanner.email}</span>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </section>
      </AnimatedSection>

      {/* ── FAQ Accordion ── */}
      <AnimatedSection className="section-wrap">
        <section className="section faq-section">
          <div className="section-heading">
            <span className="eyebrow">Frequently asked questions</span>
            <h2>Get answers to common questions about Gemini Havens.</h2>
          </div>

          <motion.div
            className="faq-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                className={`faq-item ${openFaq === idx ? 'is-open' : ''}`}
                variants={itemVariants}
                whileHover={{ x: openFaq === idx ? 0 : 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{item.question}</span>
                  <motion.span
                    className="faq-chevron"
                    aria-hidden="true"
                    animate={{ rotate: openFaq === idx ? 45 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  className="faq-answer"
                  initial={false}
                  animate={{
                    height: openFaq === idx ? 'auto' : 0,
                    opacity: openFaq === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p>{item.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      {/* ── Testimonials ── */}
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
