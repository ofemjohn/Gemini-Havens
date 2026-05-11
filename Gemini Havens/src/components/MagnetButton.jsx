import { Link } from 'react-router-dom'
import { useMagnet } from '../hooks/useInteractions.js'

/**
 * MagnetButton — A button/link that subtly pulls toward the cursor on hover,
 * creating a magnetic "alive" feel.
 */
function MagnetButton({ to, href, className = '', children, ...rest }) {
  const { ref, style, handlers } = useMagnet({ strength: 0.35 })

  if (to) {
    return (
      <div ref={ref} style={{ display: 'inline-block', ...style }} {...handlers}>
        <Link className={className} to={to} {...rest}>
          {children}
        </Link>
      </div>
    )
  }

  if (href) {
    return (
      <div ref={ref} style={{ display: 'inline-block', ...style }} {...handlers}>
        <a className={className} href={href} {...rest}>
          {children}
        </a>
      </div>
    )
  }

  return (
    <div ref={ref} style={{ display: 'inline-block', ...style }} {...handlers}>
      <button className={className} type="button" {...rest}>
        {children}
      </button>
    </div>
  )
}

export default MagnetButton
