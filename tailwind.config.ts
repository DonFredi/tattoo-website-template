import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bone:  '#F0ECE4',
        void:  '#0A0806',
        void2: '#13100D',
        void3: '#1C1714',
        gold:  '#C9A96E',
        ember: '#8B3A2A',
        ash:   '#9B9590',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { letterSpacing: '0.2em' }],
        'hero': ['clamp(4.25rem,9vw,8.125rem)', { lineHeight: '0.92' }],
        'display': ['clamp(2.25rem,4vw,3.375rem)', { lineHeight: '1.1' }],
        'title': ['clamp(1.5rem,2.5vw,2.25rem)', { lineHeight: '1.15' }],
      },
      screens: {
        'xs': '480px',
      },
      backgroundImage: {
        'radial-ember': 'radial-gradient(ellipse 60% 50% at 70% 40%, rgba(139,58,42,0.18) 0%, transparent 70%)',
        'radial-ember-center': 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,58,42,0.2) 0%, transparent 70%)',
        'radial-gold': 'radial-gradient(ellipse 40% 60% at 20% 80%, rgba(201,169,110,0.06) 0%, transparent 60%)',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scaleY(1)' },
          '50%':      { opacity: '1',   transform: 'scaleY(1.2)' },
        },
      },
      animation: {
        marquee:      'marquee 20s linear infinite',
        scrollPulse:  'scrollPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
