'use client'

import { motion } from 'framer-motion'
import { Eyebrow }     from '@/components/ui/Eyebrow'
import { PrimaryButton, GhostButton } from '@/components/ui/Buttons'
import { SITE }        from '@/lib/data'
import { fadeUp, stagger, staggerChild, viewport } from '@/lib/motion'

export function BookingSection() {
  return (
    <section id="booking" className="relative bg-void px-10 md:px-[60px] py-40 text-center overflow-hidden">
      {/* Ember radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(139,58,42,0.2)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative flex flex-col items-center"
      >
        <motion.div variants={staggerChild}>
          <Eyebrow center>Begin Your Piece</Eyebrow>
        </motion.div>

        <motion.h2
          variants={staggerChild}
          className="font-display font-light leading-[1.0] text-bone mb-6"
          style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
        >
          Ready to carry<br />
          something <em className="italic text-gold">permanent?</em>
        </motion.h2>

        <motion.p
          variants={staggerChild}
          className="font-sans text-[15px] text-ash max-w-[480px] mb-13 leading-[1.75] font-light"
        >
          I take on a limited number of new clients each season. If you're ready to begin,
          reach out — the best work starts with a real conversation.
        </motion.p>

        <motion.div
          variants={staggerChild}
          className="flex flex-col sm:flex-row items-center gap-8"
        >
          <PrimaryButton href={`mailto:${SITE.email}`} external>
            Start the Conversation
          </PrimaryButton>
          <GhostButton href="#process">
            See the process
          </GhostButton>
        </motion.div>

        <motion.p
          variants={staggerChild}
          className="font-sans text-[11px] text-ash mt-7 tracking-[0.1em]"
        >
          Current wait time: {SITE.waitTime} · London, UK · By appointment only
        </motion.p>
      </motion.div>
    </section>
  )
}
