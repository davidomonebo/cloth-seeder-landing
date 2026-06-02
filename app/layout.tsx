import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'wale - Premium Luxury Fashion',
  description: 'Experience the epitome of luxury with wale. Premium fashion brand with elegant designs and impeccable quality.',
  keywords: 'luxury fashion, premium clothing, wale brand, designer fashion',
  authors: [{ name: 'wale' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body>{children}</body>
    </html>
  )
}
