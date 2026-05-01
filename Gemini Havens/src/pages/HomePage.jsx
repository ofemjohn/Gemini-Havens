import { startTransition, useMemo, useState } from 'react'
import { BadgeCheck, HeartHandshake } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/gemini-havens-logo.jpg'
import homeExterior from '../assets/home-exterior.png'
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

  return (
    <>
      <section className="hero-section">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              Atlanta sober living designed for trust, speed, and stability
            </span>
            <h1>
              The next step after treatment should feel structured, responsive,
              and deeply human.
            </h1>
            <p className="hero-text">
              At Gemini Havens, we adopt a holistic approach to recovery,
              ensuring that each resident receives tailored support. Our program
              emphasizes accountability and community, offering 24/7 structure
              and peer assistance.
            </p>

            <div className="hero-actions">
              <Link className="button button-primary" to="/contact">
                Submit a referral
              </Link>
              <Link className="button button-secondary" to="/services">
                Explore services
              </Link>
            </div>

            <div className="hero-metrics">
              {trustMetrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

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

          <div className="difference-grid">
            {differenceCards.map(({ icon: Icon, title, text }) => (
              <article key={title} className="glass-card">
                <div className="icon-wrap">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="proof-grid">
            {proofPoints.map((item) => (
              <article key={item.title} className="proof-card">
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <div className="showcase-banner">
            <img
              src={homeExterior}
              alt="Gemini Havens sober living residence in Atlanta"
            />
            <div className="showcase-overlay">
              <span className="eyebrow">Our residence</span>
              <h3>A place built for fresh starts.</h3>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section support-section">
          <div className="section-heading section-heading-split">
            <div>
              <span className="eyebrow">Core services</span>
              <h2>Structured support that bridges treatment and independent recovery.</h2>
            </div>
            <p>
              Gemini Havens exists to provide structured, supportive sober living that bridges the gap between treatment and independent recovery. We partner with hospitals, courts, and case managers to ensure smooth, reliable placements and promote long-term stability for every individual we serve.
            </p>
          </div>

          <div className="pillars-grid">
            {supportPillars.map(({ icon: Icon, title, text }) => (
              <article key={title} className="pillar-card">
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section pathway-section">
          <div className="section-heading">
            <span className="eyebrow">Referral flow</span>
            <h2>A cleaner, faster path from inquiry to placement.</h2>
          </div>

          <div className="steps-grid">
            {placementSteps.map((step) => (
              <article key={step.step} className="step-card">
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
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
