import type { Metadata } from 'next'
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Raleway } from 'next/font/google'

import { ThemeProvider } from '@/components/themes/ThemeProvider'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Konbini Code',
  description: 'Website Development Service',
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()
  return (
    <html lang={locale}>
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
