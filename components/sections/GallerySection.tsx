'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eyebrow }    from '@/components/ui/Eyebrow'
import { GalleryArt } from '@/components/ui/TattooArt'
import { GALLERY_ITEMS } from '@/lib/data'
import { stagger, staggerChild, fadeUp, viewport } from '@/lib/motion'

// Grid column/row assignments for the 6 gallery pieces
const GRID_SPANS = [
  'md:col-span-5 aspect-[3/4]',
  'md:col-span-3 aspect-[2/3]',
  'md:col-span-4 aspect-square',
  'md:col-span-3 aspect-square',
  'md:col-span-5 aspect-[16/9]',
  'md:col-span-4 aspect-[3/4]',
]

export function GallerySection() {
  return (
    <section id="gallery" className="bg-void px-10 md:px-[60px] py-32">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6"
      >
        <div>
          <Eyebrow>Selected Work</Eyebrow>
          <h2 className="font-display text-display font-light text-bone">
            The portfolio —<br />
            <em className="italic text-gold">recent pieces</em>
          </h2>
        </div>
        <Link
          href="#booking"
          className="inline-flex items-center gap-3 font-sans text-2xs uppercase tracking-[0.2em] text-ash hover:text-gold transition-colors duration-300 group flex-shrink-0"
        >
          Commission a piece
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
               className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="1.2"
                  strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4"
      >
        {GALLERY_ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            variants={staggerChild}
            className={`relative overflow-hidden bg-void3 group cursor-pointer ${GRID_SPANS[i]}`}
          >
            {/* Art */}
            <div className="absolute inset-0">
              <GalleryArt index={i} />
            </div>

            {/* Gold shimmer on hover */}
            <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/[0.06] transition-colors duration-500" />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-400
                            flex items-end p-6">
              <div>
                <p className="font-display text-[18px] font-light italic text-bone">
                  {item.title}
                </p>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold block mt-1">
                  {item.tag}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
