import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

function AnimatedSection({ as: Component = 'section', className = '', children }) {
  return (
    <motion.div className={className} {...fadeUp}>
      <Component>{children}</Component>
    </motion.div>
  )
}

export default AnimatedSection
