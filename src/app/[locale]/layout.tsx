import type { Metadata } from 'next'
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Raleway } from 'next/font/google'

import { ThemeProvider } from '@/components/themes/ThemeProvider'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Konbini Code - Modern Website Development',
  description:
    'Konbini Code offers modern, responsive, and unique website development with cutting-edge UI/UX and front-end technologies.',
  keywords: [
    'Konbini Code',
    'Website Development',
    'Responsive Websites',
    'Modern Web Design',
    'UI/UX',
    'Frontend Technologies',
    'Multilingual Websites',
    'Custom Portfolios',
    'CMS Integration',
    'Innovative Web Solutions',
    'Unique Web Designs',
    'Cosmic JS',
    'Web Consulting',
    'Event Websites',
    'Corporate Websites',
    'Digital Presence',
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: 'Konbini Code - Modern Website Development',
    description:
      'Unique websites that combine simplicity, style, and the latest front-end technologies.',
    url: 'https://konbinicode.com',
    siteName: 'Konbini Code',
    images: [
      {
        url: 'https://cdn.cosmicjs.com/fe785790-711b-11ef-9f27-0d70a946df1f-openGraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Konbini Code Website Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Konbini Code - Modern Website Development',
    description:
      'Providing unique and responsive websites with innovative designs.',
    images: [
      'https://cdn.cosmicjs.com/fe785790-711b-11ef-9f27-0d70a946df1f-openGraph.jpg',
    ],
  },
  icons: {
    icon: 'https://cdn.cosmicjs.com/ad0052f0-711b-11ef-9f27-0d70a946df1f-logo.png',
  },
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()
  return (
    <html lang={locale} className="!scroll-smooth">
      <body className={`${raleway.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
