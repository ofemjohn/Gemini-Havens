import AnimatedSection from '../components/AnimatedSection.jsx'
import PageHero from '../components/PageHero.jsx'
import { careerPoints, roleCards } from '../data/siteContent.js'

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join our mission to support recovery, one life at a time."
        description="At Gemini Havens, we are building a team of compassionate, dedicated professionals who care about recovery, accountability, and making a real difference in people's lives."
        compact
      />

      <AnimatedSection className="section-wrap">
        <section className="section careers-showcase">
          <article className="careers-card">
            <div>
              <span className="eyebrow">Why work with us</span>
              <h2>Good care starts with the right team.</h2>
              <p>
                We believe that a strong, mission-driven team is the foundation
                of effective recovery support. At Gemini Havens, you will be part
                of a supportive environment where your work directly impacts
                residents' lives and their path toward long-term stability.
              </p>
            </div>
          </article>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <div className="difference-grid difference-grid-two">
            {careerPoints.map((item) => (
              <article key={item} className="glass-card">
                <h3>{item}</h3>
                <p>
                  We invest in our team members and provide an environment where
                  you can grow professionally while contributing to meaningful work.
                </p>
              </article>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Open positions</span>
            <h2>Current opportunities to make an impact.</h2>
          </div>
          <div className="difference-grid difference-grid-three">
            {roleCards.map((role) => (
              <article key={role.title} className="glass-card role-card">
                <span className="role-type">{role.type}</span>
                <h3>{role.title}</h3>
                <p>{role.body}</p>
              </article>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </>
  )
}

export default CareersPage
