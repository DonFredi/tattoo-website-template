'use client'

import { motion } from 'framer-motion'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SERVICES } from '@/lib/data'
import { stagger, staggerChild, fadeUp, viewport } from '@/lib/motion'

export function ServicesSection() {
  return (
    <section id="services" className="bg-void2 px-10 md:px-[60px] py-36">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <Eyebrow>What I Offer</Eyebrow>
        <h2 className="font-display text-display font-light text-bone">
          Services &amp; <em className="italic text-gold">investment</em>
        </h2>
      </motion.div>

      <motion.div
        variants={stagger(0.1, 0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-18"
      >
        {SERVICES.map((service) => (
          <motion.div
            key={service.numeral}
            variants={staggerChild}
            className="relative bg-void3 px-11 py-13 overflow-hidden group
                       hover:bg-[#1a1410] transition-colors duration-400"
            style={{ padding: '52px 44px' }}
          >
            {/* Animated left border */}
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-gold group-hover:h-full transition-all duration-500 ease-out" />

            {/* Ghost numeral */}
            <span className="absolute top-5 right-5 font-display text-[72px] font-light leading-none
                             text-gold/10 group-hover:text-gold/20 transition-colors duration-400 select-none">
              {service.numeral}
            </span>

            <h3 className="font-display text-[26px] font-normal text-bone mb-4 leading-snug relative">
              {service.name}
            </h3>
            <p className="font-sans text-[14px] leading-[1.8] text-ash mb-8 relative font-light">
              {service.description}
            </p>
            <div className="relative">
              <p className="font-display text-[20px] font-light text-gold">{service.price}</p>
              <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-ash mt-1">{service.priceSub}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
