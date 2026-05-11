import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection.jsx'
import Accordion from '../components/Accordion.jsx'
import PageHero from '../components/PageHero.jsx'
import TiltCard from '../components/TiltCard.jsx'
import livingSpaceImg from '../assets/living-space.png'
import {
  admissionsCriteria,
  faqItems,
  houseRules,
  supportPillars,
} from '../data/siteContent.js'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function HouseRulesPage() {
  return (
    <>
      <PageHero
        eyebrow="House Rules"
        title="A safe, supportive environment built on mutual respect and accountability."
        description="Our house rules exist to protect the peace of our community and provide the structure necessary for lasting recovery and personal growth."
        compact
      />

      <AnimatedSection className="section-wrap">
        <section className="section">
          <motion.div
            className="pillars-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {supportPillars.map(({ icon: Icon, title, text }) => (
              <TiltCard key={title} className="pillar-card" variants={itemVariants} tiltMax={6}>
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: 'inline-block' }}
                >
                  <Icon size={22} />
                </motion.div>
                <h3>{title}</h3>
                <p>{text}</p>
              </TiltCard>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <motion.div
            className="showcase-banner"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          >
            <img
              src={livingSpaceImg}
              alt="Clean, structured living space at Gemini Havens"
            />
            <div className="showcase-overlay">
              <span className="eyebrow">Our living spaces</span>
              <h3>Structure meets comfort.</h3>
            </div>
          </motion.div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Our Guidelines</span>
            <h2>Core rules that maintain our sanctuary.</h2>
          </div>

          <motion.div
            className="service-stack"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {houseRules.map((rule) => (
              <motion.article
                key={rule.title}
                className="service-row"
                variants={itemVariants}
                whileHover={{
                  x: 8,
                  boxShadow: '0 8px 28px rgba(26, 46, 59, 0.1)',
                  borderColor: 'rgba(61, 139, 110, 0.15)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <h3>{rule.title}</h3>
                <p>{rule.body}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Intake</span>
            <h2>Clear expectations to ensure the right fit for every resident.</h2>
          </div>
          <motion.div
            className="difference-grid difference-grid-three"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {admissionsCriteria.map(({ icon: Icon, title, items }) => (
              <TiltCard key={title} className="glass-card" variants={itemVariants} tiltMax={7}>
                <div className="icon-wrap icon-wrap-interactive">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <ul className="bullet-list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </TiltCard>
            ))}
          </motion.div>
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

export default HouseRulesPage
