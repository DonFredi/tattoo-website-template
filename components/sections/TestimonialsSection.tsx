'use client'

import { motion } from 'framer-motion'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { TESTIMONIALS } from '@/lib/data'
import { fadeUp, stagger, staggerChild, viewport } from '@/lib/motion'

export function TestimonialsSection() {
  return (
    <section className="bg-void2 px-10 md:px-[60px] py-36 overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <Eyebrow>Client Words</Eyebrow>
        <h2 className="font-display text-display font-light text-bone">
          What they <em className="italic text-gold">carry with them</em>
        </h2>
      </motion.div>

      <motion.div
        variants={stagger(0.12, 0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-18"
      >
        {TESTIMONIALS.map((t) => (
          <motion.div
            key={t.name}
            variants={staggerChild}
            className="bg-void3 px-10 py-12"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-gold text-[12px]">★</span>
              ))}
            </div>

            {/* Opening quote mark */}
            <div className="font-display text-[72px] leading-[0.7] text-ember/50 mb-4 select-none">"</div>

            <p className="font-display text-[19px] font-light italic leading-[1.6] text-bone mb-8">
              {t.text}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-3.5 pt-7 border-t border-gold/12">
              <div className="w-10 h-10 rounded-full bg-ember/40 flex-shrink-0" />
              <div>
                <p className="font-sans text-[13px] font-medium text-bone">{t.name}</p>
                <p className="font-sans text-[11px] text-gold mt-0.5 tracking-[0.1em]">{t.piece}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
