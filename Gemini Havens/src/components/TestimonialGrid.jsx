function TestimonialGrid({ items }) {
  return (
    <div className="testimonial-grid">
      {items.map((item) => (
        <article key={item.quote} className="testimonial-card">
          <p className="testimonial-quote">“{item.quote}”</p>
          <strong>{item.name}</strong>
          <span>{item.role}</span>
        </article>
      ))}
    </div>
  )
}

export default TestimonialGrid
