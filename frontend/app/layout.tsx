import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ServiceWorker } from '@/components/ServiceWorker'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Providers } from '@/components/Providers'

/* ---------------- VIEWPORT ---------------- */

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0a14',
}

/* ---------------- METADATA ---------------- */

export const metadata: Metadata = {
  metadataBase: new URL('https://www.himalayanaitech.com.np'),

  title: {
    default: 'Himalayan AI Tech | AI Chatbots & Automation',
    template: '%s | Himalayan AI Tech',
  },

  description:
    'We build AI chatbots, automation systems, and AI SaaS products that convert visitors into customers 24/7.',

  keywords: [
    'AI chatbot Nepal',
    'AI automation agency',
    'AI SaaS development',
    'Next.js AI apps',
    'FastAPI automation',
  ],

  authors: [{ name: 'Himalayan AI Tech' }],
  creator: 'Himalayan AI Tech',
  applicationName: 'Himalayan AI Tech',

  category: 'technology',

  alternates: {
    canonical: 'https://www.himalayanaitech.com.np',
  },

  openGraph: {
    title: 'Himalayan AI Tech',
    description:
      'AI chatbots and automation systems that convert visitors into customers.',
    url: 'https://www.himalayanaitech.com.np',
    siteName: 'Himalayan AI Tech',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.himalayanaitech.com.np/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Himalayan AI Tech',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Himalayan AI Tech',
    description:
      'AI chatbots and automation systems that convert visitors into customers.',
    images: ['https://www.himalayanaitech.com.np/images/og.png'],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

/* ---------------- LAYOUT ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-ai antialiased">
        <ErrorBoundary>
          <Providers>
            <ServiceWorker />
            {children}
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  )
}