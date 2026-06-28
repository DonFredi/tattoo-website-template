'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

export function PrimaryButton({ href, children, className, external }: ButtonProps) {
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Link
      href={href}
      {...props}
      className={cn(
        'relative inline-block overflow-hidden font-sans text-2xs font-medium uppercase tracking-[0.25em]',
        'bg-gold text-void px-12 py-[18px]',
        'transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(201,169,110,0.25)] hover:-translate-y-0.5',
        'btn-shimmer',
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  )
}

export function GhostButton({ href, children, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-3 font-sans text-2xs font-normal uppercase tracking-[0.2em]',
        'text-ash hover:text-bone transition-colors duration-300 group',
        className,
      )}
    >
      {children}
      <svg
        width="16" height="16" viewBox="0 0 16 16" fill="none"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2"
              strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  )
}
