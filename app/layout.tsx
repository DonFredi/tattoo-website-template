import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nova Ink — Fine Line Tattoo Studio, London',
  description:
    'Custom fine line, illustrative, and blackwork tattoos by Elara Nova. ' +
    'By appointment only in Shoreditch, East London.',
  keywords: ['tattoo', 'fine line tattoo', 'London tattoo artist', 'custom tattoo', 'blackwork'],
  authors: [{ name: 'Elara Nova' }],
  openGraph: {
    title: 'Nova Ink — Fine Line Tattoo Studio',
    description: 'Each piece is a permanent dialogue between your story and my craft.',
    type: 'website',
    locale: 'en_GB',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0806',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-void text-bone font-sans font-light antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
