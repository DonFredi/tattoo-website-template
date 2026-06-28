/** Botanical / rose illustration */
export function BotanicalSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 380 520" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="190" cy="260" r="150" stroke="#C9A96E" strokeWidth="0.5" strokeDasharray="4 6" />
      <circle cx="190" cy="260" r="100" stroke="#C9A96E" strokeWidth="0.3" strokeDasharray="2 8" />
      <path d="M190 110 C190 110 160 170 130 200 C100 230 90 260 130 290 C170 320 190 380 190 380"
            stroke="#C9A96E" strokeWidth="1" fill="none" />
      <path d="M190 110 C190 110 220 170 250 200 C280 230 290 260 250 290 C210 320 190 380 190 380"
            stroke="#C9A96E" strokeWidth="1" fill="none" />
      <path d="M130 200 C100 180 80 160 60 140 C40 120 70 90 90 100 C110 110 130 200 130 200"
            stroke="#C9A96E" strokeWidth="0.7" fill="none" />
      <path d="M250 200 C280 180 300 160 320 140 C340 120 310 90 290 100 C270 110 250 200 250 200"
            stroke="#C9A96E" strokeWidth="0.7" fill="none" />
      <circle cx="190" cy="260" r="8"  stroke="#8B3A2A" strokeWidth="1" fill="none" />
      <circle cx="190" cy="260" r="3"  fill="#C9A96E"   opacity="0.6" />
      <path d="M130 290 C100 310 80 340 90 370 C100 400 130 400 150 380 C170 360 190 380 190 380"
            stroke="#C9A96E" strokeWidth="0.7" fill="none" />
      <path d="M250 290 C280 310 300 340 290 370 C280 400 250 400 230 380 C210 360 190 380 190 380"
            stroke="#C9A96E" strokeWidth="0.7" fill="none" />
      <text x="190" y="470" fontFamily="serif" fontSize="11" fill="#C9A96E"
            textAnchor="middle" letterSpacing="4" opacity="0.5">NOVA INK</text>
    </svg>
  )
}

/** Gallery illustration variants */
export function GalleryArt({ index }: { index: number }) {
  const arts = [
    // 0 – Botanical
    <svg key={0} viewBox="0 0 300 400" fill="none" className="w-full h-full">
      <rect width="300" height="400" fill="#13100D" />
      <circle cx="150" cy="180" r="80"  stroke="#C9A96E" strokeWidth="0.8" opacity="0.4" />
      <path   d="M150 100C120 140 90 160 90 200C90 240 120 270 150 300C180 270 210 240 210 200C210 160 180 140 150 100Z"
              stroke="#C9A96E" strokeWidth="1" fill="none" opacity="0.6" />
      <path   d="M110 160C90 155 70 160 60 175" stroke="#C9A96E" strokeWidth="0.8" opacity="0.5" />
      <path   d="M190 160C210 155 230 160 240 175" stroke="#C9A96E" strokeWidth="0.8" opacity="0.5" />
      <circle cx="150" cy="200" r="15" stroke="#8B3A2A" strokeWidth="0.8" opacity="0.7" />
      <text x="150" y="370" fontFamily="serif" fontSize="9" fill="#9B9590"
            textAnchor="middle" letterSpacing="3" opacity="0.4">BOTANICAL</text>
    </svg>,
    // 1 – Geometric
    <svg key={1} viewBox="0 0 200 300" fill="none" className="w-full h-full">
      <rect width="200" height="300" fill="#1C1714" />
      <polygon points="100,40 160,100 160,200 100,260 40,200 40,100"
               stroke="#C9A96E" strokeWidth="0.8" fill="none" opacity="0.5" />
      <polygon points="100,70 140,115 140,185 100,230 60,185 60,115"
               stroke="#C9A96E" strokeWidth="0.5" fill="none" opacity="0.3" />
      <line x1="100" y1="40"  x2="100" y2="260" stroke="#C9A96E" strokeWidth="0.4" opacity="0.2" />
      <line x1="40"  y1="100" x2="160" y2="200" stroke="#C9A96E" strokeWidth="0.4" opacity="0.2" />
      <line x1="160" y1="100" x2="40"  y2="200" stroke="#C9A96E" strokeWidth="0.4" opacity="0.2" />
      <circle cx="100" cy="150" r="20" stroke="#8B3A2A" strokeWidth="1"   opacity="0.8" />
      <circle cx="100" cy="150" r="5"  fill="#C9A96E"   opacity="0.4" />
    </svg>,
    // 2 – Moth
    <svg key={2} viewBox="0 0 280 280" fill="none" className="w-full h-full">
      <rect width="280" height="280" fill="#0A0806" />
      <path d="M140 40C100 80 60 100 50 140C40 180 70 220 110 240C130 250 150 250 170 240C200 225 230 195 235 160C242 120 220 80 180 60C167 52 154 44 140 40Z"
            stroke="#C9A96E" strokeWidth="1" fill="none" opacity="0.55" />
      <path d="M120 90C105 110 95 130 100 150C105 170 120 185 140 190"
            stroke="#C9A96E" strokeWidth="0.7" fill="none" opacity="0.4" />
      <path d="M160 90C175 110 185 130 180 150C175 170 160 185 140 190"
            stroke="#C9A96E" strokeWidth="0.7" fill="none" opacity="0.4" />
      <ellipse cx="140" cy="140" rx="25" ry="30" stroke="#8B3A2A" strokeWidth="0.8" opacity="0.6" />
      <circle  cx="140" cy="140" r="6"  stroke="#C9A96E" strokeWidth="0.8" fill="none" opacity="0.8" />
    </svg>,
    // 3 – Star
    <svg key={3} viewBox="0 0 240 240" fill="none" className="w-full h-full">
      <rect width="240" height="240" fill="#13100D" />
      <circle cx="120" cy="120" r="70" stroke="#C9A96E" strokeWidth="0.6" opacity="0.3" />
      <circle cx="120" cy="120" r="50" stroke="#C9A96E" strokeWidth="0.4" opacity="0.2" />
      <path   d="M120 50L127 95L170 75L140 108L190 120L140 132L170 165L127 145L120 190L113 145L70 165L100 132L50 120L100 108L70 75L113 95Z"
              stroke="#C9A96E" strokeWidth="0.8" fill="none" opacity="0.5" />
      <circle cx="120" cy="120" r="10" stroke="#8B3A2A" strokeWidth="1" opacity="0.7" />
    </svg>,
    // 4 – Wave
    <svg key={4} viewBox="0 0 500 300" fill="none" className="w-full h-full">
      <rect width="500" height="300" fill="#1C1714" />
      <path d="M50 150C100 80 150 60 200 80C250 100 280 150 320 150C360 150 390 120 440 100C460 90 480 100 490 120"
            stroke="#C9A96E" strokeWidth="1.2" fill="none" opacity="0.5" />
      <path d="M50 170C100 100 150 80 200 100C250 120 280 170 320 170C360 170 390 140 440 120C460 110 480 120 490 140"
            stroke="#C9A96E" strokeWidth="0.6" fill="none" opacity="0.25" />
      <circle cx="200" cy="90"  r="20" stroke="#8B3A2A" strokeWidth="0.8" opacity="0.6" />
      <circle cx="320" cy="155" r="15" stroke="#C9A96E" strokeWidth="0.8" opacity="0.4" />
      <text x="250" y="260" fontFamily="serif" fontSize="11" fill="#9B9590"
            textAnchor="middle" letterSpacing="6" opacity="0.35">WAVE STUDY III</text>
    </svg>,
    // 5 – Heart
    <svg key={5} viewBox="0 0 280 380" fill="none" className="w-full h-full">
      <rect width="280" height="380" fill="#0A0806" />
      <path d="M140 50C160 80 190 90 200 120C215 165 200 200 170 220C155 230 145 245 140 265C135 245 125 230 110 220C80 200 65 165 80 120C90 90 120 80 140 50Z"
            stroke="#C9A96E" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M110 220C90 250 85 280 100 305C115 330 140 335 140 335C140 335 165 330 180 305C195 280 190 250 170 220"
            stroke="#C9A96E" strokeWidth="0.7" fill="none" opacity="0.4" />
      <ellipse cx="140" cy="155" rx="30" ry="40" stroke="#8B3A2A" strokeWidth="0.8" opacity="0.5" />
      <text x="140" y="365" fontFamily="serif" fontSize="9" fill="#9B9590"
            textAnchor="middle" letterSpacing="3" opacity="0.35">ANATOMICAL</text>
    </svg>,
  ]
  return arts[index] ?? arts[0]
}
