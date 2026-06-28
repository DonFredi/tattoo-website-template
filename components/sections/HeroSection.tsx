'use client'

import { motion } from 'framer-motion'
import { PrimaryButton, GhostButton } from '@/components/ui/Buttons'
import { inkLetter, fadeUp } from '@/lib/motion'

const HEADLINE = ['Where skin', 'becomes art']

export function HeroSection() {
  // Split words into individual characters for the ink-bleed animation
  let charIndex = 0
  const lines = HEADLINE.map(line =>
    line.split('').map(char => ({ char, index: charIndex++ })),
  )

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end px-10 md:px-[60px] pb-20"
    >
      {/* Layered background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(139,58,42,0.18)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_20%_80%,rgba(201,169,110,0.06)_0%,transparent_60%)]" />
        {/* Vertical accent line */}
        <div className="absolute top-0 bottom-0 left-[58%] w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent opacity-50" />
      </div>

      {/* Eyebrow */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative inline-flex items-center gap-4 mb-7"
      >
        <span className="block w-12 h-px bg-gold flex-shrink-0" />
        <span className="font-sans text-2xs text-gold uppercase tracking-[0.3em]">
          Fine Line &amp; Illustrative Tattoo
        </span>
      </motion.div>

      {/* Ink-bleed headline */}
      <h1 className="relative font-display font-light leading-[0.92] text-hero text-bone max-w-[820px] mb-10">
        {lines.map((chars, li) => (
          <span key={li} className="block">
            {chars.map(({ char, index }) =>
              char === ' ' ? (
                <span key={index}>&nbsp;</span>
              ) : li === 1 && char !== 'a' && char !== 'r' && char !== 't' ? (
                // "becomes" — plain gold italic
                <motion.em
                  key={index}
                  className="font-display not-italic text-bone"
                  variants={inkLetter}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  {char}
                </motion.em>
              ) : li === 1 ? (
                // "art" in gold italic
                <motion.em
                  key={index}
                  className="font-display italic text-gold"
                  variants={inkLetter}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  {char}
                </motion.em>
              ) : (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={inkLetter}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  {char}
                </motion.span>
              )
            )}
          </span>
        ))}
      </h1>

      {/* Sub-row */}
      <motion.div
        className="relative flex flex-col md:flex-row items-start gap-12 md:gap-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-sans text-[15px] leading-[1.75] text-ash max-w-[340px] font-light">
          Each piece is a permanent dialogue between your story and my craft — drawn with
          deliberate restraint, inked with obsessive precision. No flash, no templates.
          Only work that means something.
        </p>
        <div className="flex flex-col gap-4">
          <PrimaryButton href="#booking">Request a Consultation</PrimaryButton>
          <GhostButton   href="#gallery">View Portfolio</GhostButton>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute right-10 md:right-[60px] bottom-20 flex flex-col items-center gap-3"
      >
        <div className="w-px h-[60px] bg-gradient-to-b from-gold to-transparent animate-scrollPulse" />
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-ash writing-vertical">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
