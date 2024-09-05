import type { Metadata } from 'next'
import './globals.css'
import { Raleway } from 'next/font/google'

import { ThemeProvider } from '@/components/themes/ThemeProvider'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Konbini Code',
  description: 'Website Development Service',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
