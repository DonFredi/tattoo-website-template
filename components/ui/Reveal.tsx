'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { fadeUp, viewport as defaultViewport } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  variants?: Variants
  delay?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={variants}
      custom={delay}
      className={cn(className)}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  )
}
