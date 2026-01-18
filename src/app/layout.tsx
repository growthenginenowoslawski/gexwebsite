import type { Metadata } from 'next'
import { Inter, Instrument_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const instrumentSans = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument' })

export const metadata: Metadata = {
  title: 'Growth Engine X - B2B Lead Generation',
  description: 'We send 8 million+ emails per month. B2B lead generation for companies with $1M+ in revenue.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSans.variable}`}>{children}</body>
    </html>
  )
}
