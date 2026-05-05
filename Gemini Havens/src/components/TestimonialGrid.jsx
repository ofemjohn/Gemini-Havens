import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function TestimonialGrid({ items }) {
  return (
    <motion.div 
      className="testimonial-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((item) => (
        <motion.article 
          key={item.quote} 
          className="testimonial-card"
          variants={itemVariants}
          whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(26, 46, 59, 0.08)' }}
        >
          <p className="testimonial-quote">“{item.quote}”</p>
          <strong>{item.name}</strong>
          <span>{item.role}</span>
        </motion.article>
      ))}
    </motion.div>
  )
}

export default TestimonialGrid
