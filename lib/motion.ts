import type { Variants } from 'framer-motion'

/** Fade up — the standard reveal for most content blocks */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Staggered container — wraps items that reveal one after another */
export const stagger = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
})

/** Individual child for stagger containers */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Ink-bleed letter — used for the hero headline */
export const inkLetter: Variants = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: 0.2 + i * 0.04 },
  }),
}

/** Fade in only — for decorative elements */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
}

/** Scale up from 0.95 — cards, panels */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Slide in from left */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Slide in from right */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Shared viewport settings for useInView / whileInView */
export const viewport = {
  once: true,
  margin: '0px 0px -60px 0px',
  amount: 0.12,
} as const
