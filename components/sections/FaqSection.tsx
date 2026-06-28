'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { FAQ_ITEMS } from '@/lib/data'
import { fadeUp, viewport } from '@/lib/motion'

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gold/12 pb-8 mb-8">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex justify-between items-center gap-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-display text-[20px] font-normal text-bone group-hover:text-gold transition-colors duration-300">
          {q}
        </span>
        <span className="text-gold text-[18px] flex-shrink-0 transition-transform duration-300"
              style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-[14px] leading-[1.85] text-ash font-light pt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FaqSection() {
  const half = Math.ceil(FAQ_ITEMS.length / 2)
  const col1 = FAQ_ITEMS.slice(0, half)
  const col2 = FAQ_ITEMS.slice(half)

  return (
    <section className="bg-void2 px-10 md:px-[60px] py-32">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
        <Eyebrow>Common Questions</Eyebrow>
        <h2 className="font-display text-display font-light text-bone mb-18">
          Before you <em className="italic text-gold">reach out</em>
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-20">
        <div>{col1.map(item => <FaqItem key={item.q} {...item} />)}</div>
        <div>{col2.map(item => <FaqItem key={item.q} {...item} />)}</div>
      </div>
    </section>
  )
}
