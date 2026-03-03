import type { Metadata } from 'next'
import { Inter, Instrument_Sans, DM_Serif_Display, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const instrumentSans = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument', display: 'swap' })
const dmSerifDisplay = DM_Serif_Display({ weight: ['400'], subsets: ['latin'], variable: '--font-dm-serif', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' })

export const metadata: Metadata = {
  title: 'Growth Engine X - B2B Lead Generation',
  description: 'We send 8 million+ emails per month. B2B lead generation for companies with $1M+ in revenue.',
  icons: {
    icon: '/images/gex-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.variable} ${instrumentSans.variable} ${dmSerifDisplay.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  )
}
