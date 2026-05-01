import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection.jsx'
import Accordion from '../components/Accordion.jsx'
import PageHero from '../components/PageHero.jsx'
import ReferralForm from '../components/ReferralForm.jsx'
import { faqItems } from '../data/siteContent.js'

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Referral"
        title="Get in touch with our admissions team today."
        description="Whether you are a hospital, case manager, court representative, or a family seeking help, we are here to answer your questions and facilitate a smooth placement."
        compact
      />

      <AnimatedSection className="section-wrap">
        <section className="section contact-redesign">
          {/* Left column: quick-action cards */}
          <aside className="contact-sidebar">
            <div className="contact-sidebar-header">
              <span className="eyebrow">Quick contact</span>
              <h3>Need an immediate response?</h3>
              <p>Reach our admissions team directly.</p>
            </div>

            <a href="tel:4046927070" className="contact-action-card">
              <div className="contact-action-icon">
                <Phone size={20} />
              </div>
              <div>
                <strong>Call admissions</strong>
                <span>404-692-7070</span>
              </div>
              <ArrowRight size={16} className="contact-action-arrow" />
            </a>

            <a
              href="mailto:joyce_humphery@geminihavens.com"
              className="contact-action-card"
            >
              <div className="contact-action-icon">
                <Mail size={20} />
              </div>
              <div>
                <strong>Email us</strong>
                <span>joyce_humphery@geminihavens.com</span>
              </div>
              <ArrowRight size={16} className="contact-action-arrow" />
            </a>

            <div className="contact-action-card contact-action-static">
              <div className="contact-action-icon">
                <MapPin size={20} />
              </div>
              <div>
                <strong>Our location</strong>
                <span>Atlanta, Georgia</span>
              </div>
            </div>

            <div className="contact-action-card contact-action-static">
              <div className="contact-action-icon">
                <Clock size={20} />
              </div>
              <div>
                <strong>Response time</strong>
                <span>Within 1 business hour</span>
              </div>
            </div>
          </aside>

          {/* Right column: form */}
          <div className="contact-form-wrap">
            <div className="contact-form-header">
              <span className="eyebrow">Submit a referral</span>
              <h2>Start the placement process in under 60 seconds.</h2>
              <p>
                Complete the form below and our admissions team will follow up
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
