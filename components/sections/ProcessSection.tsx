'use client'

import { motion } from 'framer-motion'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { PROCESS_STEPS } from '@/lib/data'
import { fadeUp, stagger, staggerChild, viewport } from '@/lib/motion'

export function ProcessSection() {
  return (
    <section id="process" className="bg-void px-10 md:px-[60px] py-36">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-end mb-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="font-display text-display font-light text-bone">
            The path from<br />
            <em className="italic text-gold">idea to skin</em>
          </h2>
        </motion.div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="font-sans text-[15px] leading-[1.85] text-ash font-light"
        >
          I don't pick up the machine until we're both certain. The consultation isn't a formality —
          it's where the real work begins. Most meaningful tattoos take two or three conversations
          before a single line is drawn.
        </motion.p>
      </div>

      {/* Steps */}
      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 relative"
      >
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-7 left-7 right-7 h-px
                        bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {PROCESS_STEPS.map((step) => (
          <motion.div key={step.step} variants={staggerChild} className="pr-8 pb-12 md:pb-0">
            {/* Dot */}
            <div className="relative z-10 w-14 h-14 rounded-full border border-gold/40 bg-void
                            flex items-center justify-center mb-10
                            group-hover:border-gold group-hover:bg-gold/8 transition-colors duration-400">
              <span className="font-display text-[18px] font-light text-gold">{step.step}</span>
            </div>
            <h3 className="font-display text-[22px] font-normal text-bone mb-3.5">{step.title}</h3>
            <p className="font-sans text-[13px] leading-[1.8] text-ash font-light">{step.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
