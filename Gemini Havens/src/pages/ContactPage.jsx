import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection.jsx'
import Accordion from '../components/Accordion.jsx'
import PageHero from '../components/PageHero.jsx'
import ReferralForm from '../components/ReferralForm.jsx'
import { faqItems } from '../data/siteContent.js'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Referral"
        title="Get in Touch with Our Intake Team Today"
        description="Whether you are a hospital, case manager, court representative, or a family member seeking help, we are here to answer your questions and help facilitate a smooth placement."
        compact
      />

      {/* ── Start a Referral quick-action strip ── */}
      <AnimatedSection className="section-wrap">
        <section className="section">
          <motion.div
            className="referral-start-strip"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="referral-start-header">
              <span className="eyebrow">Start a Referral</span>
              <h2>Reach our intake team directly</h2>
              <p>Choose the method that works best for you.</p>
            </div>
            <motion.div
              className="referral-start-options"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a
                href="tel:4046927070"
                className="referral-option-card"
                variants={itemVariants}
                whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(61, 139, 110, 0.18)', borderColor: 'rgba(61, 139, 110, 0.25)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <motion.div
                  className="referral-option-icon"
                  whileHover={{ scale: 1.15, rotate: [0, -8, 8, -4, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Phone size={24} />
                </motion.div>
                <div>
                  <strong>Phone</strong>
                  <span>404-692-7070</span>
                </div>
                <ArrowRight size={16} className="referral-option-arrow" />
              </motion.a>
              <motion.a
                href="mailto:info@redeemershub.com"
                className="referral-option-card"
                variants={itemVariants}
                whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(61, 139, 110, 0.18)', borderColor: 'rgba(61, 139, 110, 0.25)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <motion.div
                  className="referral-option-icon"
                  whileHover={{ scale: 1.15, rotate: [0, -8, 8, -4, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Mail size={24} />
                </motion.div>
                <div>
                  <strong>Email</strong>
                  <span>info@redeemershub.com</span>
                </div>
                <ArrowRight size={16} className="referral-option-arrow" />
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section contact-redesign">
          {/* Left column: quick-action cards */}
          <aside className="contact-sidebar">
            <div className="contact-sidebar-header">
              <span className="eyebrow">Quick contact</span>
              <h3>Need an immediate response?</h3>
              <p>Reach our intake team directly.</p>
            </div>

            <motion.a
              href="tel:4046927070"
              className="contact-action-card"
              whileHover={{ x: 8, boxShadow: '0 8px 28px rgba(61, 139, 110, 0.15)', borderColor: 'rgba(61, 139, 110, 0.2)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <div className="contact-action-icon">
                <Phone size={20} />
              </div>
              <div>
                <strong>Call Our Intake Team</strong>
                <span>404-692-7070</span>
              </div>
              <ArrowRight size={16} className="contact-action-arrow" />
            </motion.a>

            <motion.a
              href="mailto:info@redeemershub.com"
              className="contact-action-card"
              whileHover={{ x: 8, boxShadow: '0 8px 28px rgba(61, 139, 110, 0.15)', borderColor: 'rgba(61, 139, 110, 0.2)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <div className="contact-action-icon">
                <Mail size={20} />
              </div>
              <div>
                <strong>Email us</strong>
                <span>info@redeemershub.com</span>
              </div>
              <ArrowRight size={16} className="contact-action-arrow" />
            </motion.a>

            <motion.div
              className="contact-action-card contact-action-static"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div className="contact-action-icon">
                <MapPin size={20} />
              </div>
              <div>
                <strong>Our location</strong>
                <span>Atlanta, Georgia</span>
              </div>
            </motion.div>

            <motion.div
              className="contact-action-card contact-action-static"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div className="contact-action-icon">
                <Clock size={20} />
              </div>
              <div>
                <strong>Response time</strong>
                <span>Within 1 business hour</span>
              </div>
            </motion.div>
          </aside>

          {/* Right column: form */}
          <div className="contact-form-wrap">
            <div className="contact-form-header">
              <span className="eyebrow">Submit a referral</span>
              <h2>Start the placement process in under 60 seconds.</h2>
              <p>
                Complete the form below and our intake team will follow up
                promptly to coordinate placement.
              </p>
            </div>
            <ReferralForm />
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>
            <h2>Answers to common questions about our services.</h2>
          </div>
          <Accordion items={faqItems} />
        </section>
      </AnimatedSection>
    </>
  )
}

export default ContactPage
