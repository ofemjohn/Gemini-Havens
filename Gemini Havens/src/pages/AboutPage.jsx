import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection.jsx'
import PageHero from '../components/PageHero.jsx'
import TiltCard from '../components/TiltCard.jsx'
import communityImg from '../assets/community-support.png'
import { timeline, values } from '../data/siteContent.js'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Gemini Havens"
        title="Stability, credibility, and human-centered recovery."
        description="Gemini Havens is more than housing. We are a sober living partner that helps referral sources place confidently and helps residents step into a more supported next chapter."
        compact
      />

      <AnimatedSection className="section-wrap">
        <motion.section
          className="section story-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.article
            className="story-card"
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(26, 46, 59, 0.1)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <span className="eyebrow">What we do</span>
            <h2>Structured, supportive sober living that bridges treatment and independent recovery.</h2>
            <p>
              At Gemini Havens, we adopt a holistic approach to recovery,
              ensuring that each resident receives tailored support. Our program
              emphasizes accountability and community, offering 24/7 structure
              and peer assistance. We focus on guiding individuals through the
              critical post-treatment phase, helping them navigate work,
              outpatient commitments, and legal responsibilities while promoting
              personal growth.
            </p>
          </motion.article>
          <motion.article
            className="story-card"
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(26, 46, 59, 0.1)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <span className="eyebrow">Who we serve</span>
            <h2>Hospitals, detox facilities, courts, case managers, residents, and families.</h2>
            <p>
              We partner with hospitals, detox facilities, courts, and case
              managers to ensure smooth, reliable placements. Whether you are a
              professional referral source or someone looking for a supportive
              next step after treatment, Gemini Havens is here to help.
            </p>
          </motion.article>
        </motion.section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <motion.div
            className="showcase-banner"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          >
            <img
              src={communityImg}
              alt="Community support session at Gemini Havens"
            />
            <div className="showcase-overlay">
              <span className="eyebrow">Our community</span>
              <h3>Recovery is stronger together.</h3>
            </div>
          </motion.div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Our values</span>
            <h2>Confidence, warmth, and professional clarity in everything we do.</h2>
          </div>

          <motion.div
            className="difference-grid difference-grid-three"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map(({ icon: Icon, title, text }) => (
              <TiltCard key={title} className="glass-card" variants={itemVariants} tiltMax={8}>
                <div className="icon-wrap icon-wrap-interactive">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </TiltCard>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Our journey</span>
            <h2>From post-treatment uncertainty to long-term stability.</h2>
          </div>
          <motion.div
            className="timeline-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {timeline.map((item) => (
              <motion.article
                key={item.title}
                className="timeline-card"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: '0 12px 30px rgba(26, 46, 59, 0.1)',
                  borderColor: 'rgba(61, 139, 110, 0.2)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>
    </>
  )
}

export default AboutPage
