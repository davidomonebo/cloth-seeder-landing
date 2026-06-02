'use client'

import React, { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

/**
 * Root Layout Component
 * Provides the main structure for all pages
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="wale - Premium Luxury Fashion Brand" />
        <meta name="theme-color" content="#1a1a1a" />
        <title>wale - Premium Luxury Fashion</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
