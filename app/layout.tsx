import type { Metadata } from 'next'
import { Montserrat_Alternates } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ToastProvider from '@/components/ToastProvider'

const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://reels.studio'),
  title: {
    default: 'reels.studio - Download Instagram Reels Instantly',
    template: '%s | reels.studio'
  },
  description: 'Download Instagram Reels without watermarks. Fast, free, and easy to use. No registration required. HD quality, instant processing.',
  keywords: ['instagram reels downloader', 'download instagram reels', 'reels downloader', 'instagram video downloader', 'no watermark', 'free reels download', 'HD reels download'],
  authors: [{ name: 'reels.studio', url: 'https://reels.studio' }],
  creator: 'reels.studio',
  publisher: 'reels.studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://reels.studio',
    title: 'reels.studio - Download Instagram Reels Instantly',
    description: 'Download Instagram Reels without watermarks. Fast, free, and easy to use. No registration required.',
    siteName: 'reels.studio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'reels.studio - Instagram Reels Downloader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'reels.studio - Download Instagram Reels Instantly',
    description: 'Download Instagram Reels without watermarks. Fast, free, and easy to use.',
    images: ['/og-image.png'],
    creator: '@reelsstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-screen">
        <ToastProvider />
        <Header />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
