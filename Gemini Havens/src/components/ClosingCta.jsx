import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function ClosingCta() {
  return (
    <section className="section">
      <div className="closing-cta">
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
          <Link className="button button-primary" to="/contact">
            Contact admissions
            <ArrowRight size={18} />
          </Link>
          <Link className="button button-secondary" to="/services">
            Explore services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ClosingCta
