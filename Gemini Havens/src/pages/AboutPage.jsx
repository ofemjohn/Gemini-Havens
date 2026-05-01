import AnimatedSection from '../components/AnimatedSection.jsx'
import PageHero from '../components/PageHero.jsx'
import communityImg from '../assets/community-support.png'
import { timeline, values } from '../data/siteContent.js'

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
        <section className="section story-grid">
          <article className="story-card">
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
          </article>
          <article className="story-card">
            <span className="eyebrow">Who we serve</span>
            <h2>Hospitals, detox facilities, courts, case managers, residents, and families.</h2>
            <p>
              We partner with hospitals, detox facilities, courts, and case
              managers to ensure smooth, reliable placements. Whether you are a
              professional referral source or someone looking for a supportive
              next step after treatment, Gemini Havens is here to help.
            </p>
          </article>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <div className="showcase-banner">
            <img
              src={communityImg}
              alt="Community support session at Gemini Havens"
            />
            <div className="showcase-overlay">
              <span className="eyebrow">Our community</span>
              <h3>Recovery is stronger together.</h3>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Our values</span>
            <h2>Confidence, warmth, and professional clarity in everything we do.</h2>
          </div>

          <div className="difference-grid difference-grid-three">
            {values.map(({ icon: Icon, title, text }) => (
              <article key={title} className="glass-card">
                <div className="icon-wrap">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection className="section-wrap">
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Our journey</span>
            <h2>From post-treatment uncertainty to long-term stability.</h2>
          </div>
          <div className="timeline-grid">
            {timeline.map((item) => (
              <article key={item.title} className="timeline-card">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </>
  )
}

export default AboutPage
