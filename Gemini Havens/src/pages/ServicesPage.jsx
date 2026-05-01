import AnimatedSection from '../components/AnimatedSection.jsx'
import Accordion from '../components/Accordion.jsx'
import PageHero from '../components/PageHero.jsx'
import livingSpaceImg from '../assets/living-space.png'
import {
  admissionsCriteria,
  faqItems,
  serviceDetails,
  supportPillars,
} from '../data/siteContent.js'

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive support for placements, recovery, and long-term stability."
        description="We provide structured sober living services designed to help referral partners place confidently and residents transition successfully into independent recovery."
        compact
      />

      <AnimatedSection className="section-wrap">
        <section className="section">
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
        <section className="section">
          <div className="showcase-banner">
            <img
              src={livingSpaceImg}
              alt="Clean, structured living space at Gemini Havens"
            />
            <div className="showcase-overlay">
              <span className="eyebrow">Our living spaces</span>
              <h3>Structure meets comfort.</h3>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">What we offer</span>
            <h2>Everything you need to know about our recovery support programs.</h2>
          </div>

          <div className="service-stack">
            {serviceDetails.map((service) => (
              <article key={service.title} className="service-row">
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </article>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Admissions</span>
            <h2>Clear expectations to ensure the right fit for every resident.</h2>
          </div>
          <div className="difference-grid difference-grid-three">
            {admissionsCriteria.map(({ icon: Icon, title, items }) => (
              <article key={title} className="glass-card">
                <div className="icon-wrap">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <ul className="bullet-list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Frequently asked questions</span>
            <h2>Common questions about our services and programs.</h2>
          </div>
          <Accordion items={faqItems} />
        </section>
      </AnimatedSection>
    </>
  )
}

export default ServicesPage
