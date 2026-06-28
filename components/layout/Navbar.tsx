'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, SITE } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change / resize
  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-between',
          'transition-all duration-400',
          scrolled
            ? 'px-10 md:px-15 py-4 bg-void/92 backdrop-blur-md border-b border-gold/10'
            : 'px-10 md:px-15 py-7',
        )}
        style={{ padding: scrolled ? '18px 60px' : '28px 60px' }}
      >
        {/* Logo */}
        <Link href="/" className="font-display text-xl font-medium tracking-[0.25em] uppercase text-bone">
          Nova<span className="text-gold">.</span>Ink
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-11 list-none">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'font-sans text-2xs font-normal uppercase tracking-[0.2em] text-ash',
                  'relative transition-colors duration-300 hover:text-bone',
                  'after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-gold',
                  'after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100',
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="#booking"
          className={cn(
            'hidden md:inline-block font-sans text-2xs font-medium uppercase tracking-[0.2em]',
            'bg-gold text-void px-7 py-3 transition-colors duration-300 hover:bg-bone',
          )}
        >
          Book a Session
        </Link>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-bone"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-px bg-bone"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-bone"
          />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-void flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl font-light italic text-bone hover:text-gold transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="mt-4 font-sans text-2xs uppercase tracking-[0.25em] bg-gold text-void px-10 py-4"
            >
              Book a Session
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
