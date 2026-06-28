import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: React.ReactNode
  className?: string
  center?: boolean
}

export function Eyebrow({ children, className, center }: EyebrowProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-3.5 text-gold text-2xs font-sans font-normal uppercase tracking-[0.3em] mb-6',
        'before:content-[""] before:block before:w-8 before:h-px before:bg-gold before:flex-shrink-0',
        center && 'justify-center',
        className,
      )}
    >
      {children}
    </div>
  )
}
