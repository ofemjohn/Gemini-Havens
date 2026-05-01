import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

function PageHero({ eyebrow, title, description, compact = false }) {
  return (
    <section className={`page-hero ${compact ? 'page-hero-compact' : ''}`}>
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="page-hero-inner">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/contact">
            Start a referral
            <ArrowRight size={18} />
          </Link>
          <a className="button button-secondary" href="tel:4046927070">
            <Phone size={18} />
            404 692 7070
          </a>
        </div>
      </div>
    </section>
  )
}

export default PageHero
