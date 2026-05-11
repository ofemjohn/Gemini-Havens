import { motion } from 'framer-motion'
import TiltCard from './TiltCard.jsx'

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
        <TiltCard
          key={item.quote}
          className="testimonial-card"
          variants={itemVariants}
          tiltMax={5}
        >
          <p className="testimonial-quote">"{item.quote}"</p>
          <strong>{item.name}</strong>
          <span>{item.role}</span>
        </TiltCard>
      ))}
    </motion.div>
  )
}

export default TestimonialGrid
