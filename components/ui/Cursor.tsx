'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function Cursor() {
  const dotX   = useMotionValue(-20)
  const dotY   = useMotionValue(-20)
  const ringX  = useSpring(useMotionValue(-20), { stiffness: 150, damping: 20 })
  const ringY  = useSpring(useMotionValue(-20), { stiffness: 150, damping: 20 })
  const isHovering = useRef(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      ;(ringX as ReturnType<typeof useSpring>).set(e.clientX)
      ;(ringY as ReturnType<typeof useSpring>).set(e.clientY)
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"]')) {
        isHovering.current = true
        document.documentElement.setAttribute('data-cursor-hover', 'true')
      }
    }
    const onLeave = () => {
      isHovering.current = false
      document.documentElement.removeAttribute('data-cursor-hover')
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onEnter)
    window.addEventListener('mouseout',  onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onEnter)
      window.removeEventListener('mouseout',  onLeave)
    }
  }, [dotX, dotY, ringX, ringY])

  // Hide on touch devices
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference rounded-full bg-gold"
        style={{
          x: dotX, y: dotY,
          translateX: '-50%', translateY: '-50%',
          width: 10, height: 10,
        }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-gold/50"
        style={{
          x: ringX, y: ringY,
          translateX: '-50%', translateY: '-50%',
          width: 36, height: 36,
        }}
      />
    </>
  )
}
