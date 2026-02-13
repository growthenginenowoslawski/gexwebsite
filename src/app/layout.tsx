import type { Metadata } from 'next'
import { Inter, Instrument_Sans, DM_Serif_Display, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const instrumentSans = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument', display: 'swap' })
const dmSerifDisplay = DM_Serif_Display({ weight: ['400'], subsets: ['latin'], variable: '--font-dm-serif', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://coldoutbound.com'),
  title: 'Growth Engine X - B2B Lead Generation',
  description: 'We send 8 million+ emails per month. B2B lead generation for companies with $1M+ in revenue.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/images/gex-logo.png',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Growth Engine X',
    title: 'Growth Engine X - B2B Lead Generation',
    description: 'We send 8 million+ emails per month. B2B lead generation for companies with $1M+ in revenue.',
    images: [
      {
        // Not ideal dimensions for social, but it is stable and on-domain.
        url: '/images/gex-logo.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Engine X - B2B Lead Generation',
    description: 'We send 8 million+ emails per month. B2B lead generation for companies with $1M+ in revenue.',
    images: ['/images/gex-logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Growth Engine X',
    url: 'https://coldoutbound.com',
    logo: 'https://coldoutbound.com/images/gex-logo.png',
    sameAs: [
      'https://www.linkedin.com/company/growth-engine-x/',
      'https://youtube.com/@ericnowoslawski?si=OPUItbyVWt_LB7XC',
    ],
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Growth Engine X',
    url: 'https://coldoutbound.com',
    publisher: {
      '@type': 'Organization',
      name: 'Growth Engine X',
      url: 'https://coldoutbound.com',
    },
  }

  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSans.variable} ${dmSerifDisplay.variable} ${spaceGrotesk.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
