import { MARQUEE_ITEMS } from '@/lib/data'

export function MarqueeBand() {
  // Duplicate for seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="bg-gold py-3.5 overflow-hidden">
      <div className="flex animate-marquee w-max">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-display text-[13px] font-medium italic uppercase tracking-[0.15em] text-void whitespace-nowrap px-10"
          >
            {item}
            <span className="mx-4 not-italic text-ember">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
