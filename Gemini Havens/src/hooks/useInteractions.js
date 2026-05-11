import { useCallback, useRef, useState } from 'react'

/**
 * useTilt – gives any card a 3D tilt + shine effect that follows the cursor.
 *
 * Returns { ref, style, handlers } – spread handlers onto the element and
 * apply style as inline CSS.
 */
export function useTilt({ max = 8, scale = 1.02, speed = 400 } = {}) {
  const ref = useRef(null)
  const [style, setStyle] = useState({
    transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)',
    transition: `transform ${speed}ms cubic-bezier(0.22,1,0.36,1)`,
  })
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -max
      const rotateY = ((x - centerX) / centerX) * max

      setStyle({
        transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transition: 'transform 80ms ease-out',
      })
      setShine({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.12 })
    },
    [max, scale],
  )

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: `transform ${speed}ms cubic-bezier(0.22,1,0.36,1)`,
    })
    setShine({ x: 50, y: 50, opacity: 0 })
  }, [speed])

  return {
    ref,
    style,
    shine,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  }
}

/**
 * useMagnet – makes an element subtly "pull" toward the cursor on hover.
 * Great for buttons and CTAs.
 */
export function useMagnet({ strength = 0.3 } = {}) {
  const ref = useRef(null)
  const [transform, setTransform] = useState('translate(0, 0)')

  const handleMouseMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      setTransform(`translate(${x * strength}px, ${y * strength}px)`)
    },
    [strength],
  )

  const handleMouseLeave = useCallback(() => {
    setTransform('translate(0, 0)')
  }, [])

  return {
    ref,
    style: { transform, transition: 'transform 350ms cubic-bezier(0.22,1,0.36,1)' },
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  }
}

/**
 * useParallaxMouse – tracks mouse position within a container
 * and returns x/y offsets to use for parallax layers.
 */
export function useParallaxMouse({ strength = 20 } = {}) {
  const ref = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const x = ((e.clientX - centerX) / (rect.width / 2)) * strength
      const y = ((e.clientY - centerY) / (rect.height / 2)) * strength
      setOffset({ x, y })
    },
    [strength],
  )

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 })
  }, [])

  return {
    ref,
    offset,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  }
}
