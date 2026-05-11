import { motion } from 'framer-motion'
import { useTilt } from '../hooks/useInteractions.js'

/**
 * TiltCard — A card wrapper that tilts toward the cursor and shows a
 * moving shine highlight. Drop-in replacement for <motion.article>.
 *
 * Props:
 *   className  – CSS class (required)
 *   children   – card content
 *   variants   – framer-motion variants
 *   tiltMax    – max tilt degrees (default 6)
 *   ...rest    – forwarded to <motion.article>
 */
function TiltCard({ className = '', children, variants, tiltMax = 6, as = 'article', ...rest }) {
  const { ref, style, shine, handlers } = useTilt({ max: tiltMax, scale: 1.025 })
  const Component = motion[as] || motion.article

  return (
    <Component
      ref={ref}
      className={`tilt-card ${className}`}
      style={style}
      variants={variants}
      {...handlers}
      {...rest}
    >
      {children}
      {/* Shine overlay */}
      <div
        className="tilt-shine"
        style={{
          background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,${shine.opacity}), transparent 60%)`,
        }}
        aria-hidden="true"
      />
    </Component>
  )
}

export default TiltCard
