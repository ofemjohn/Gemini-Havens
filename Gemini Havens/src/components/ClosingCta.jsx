import { ArrowRight } from 'lucide-react'
import MagnetButton from './MagnetButton.jsx'
import { motion } from 'framer-motion'

function ClosingCta() {
  return (
    <section className="section">
      <motion.div
        className="closing-cta"
        whileHover={{ scale: 1.005 }}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      >
        <div>
          <span className="eyebrow">Ready for the next step</span>
          <h2>A supportive environment is just a phone call or click away.</h2>
          <p>
            Whether you are a referral partner, a potential resident, or a family
            member, our team is ready to provide guidance, answer your questions,
            and facilitate a smooth transition into our sober living program.
          </p>
        </div>
        <div className="hero-actions">
          <MagnetButton to="/contact" className="button button-primary">
            Contact Our Intake Team
            <ArrowRight size={18} />
          </MagnetButton>
          <MagnetButton to="/house-rules" className="button button-secondary">
            House Rules
          </MagnetButton>
        </div>
      </motion.div>
    </section>
  )
}

export default ClosingCta
