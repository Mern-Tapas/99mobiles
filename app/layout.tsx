import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/providers/ThemeProvider'
import Provider from '@/components/providers/SessionProviderDiv'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/splider/splide.min.css" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute='clas'>
          <Provider>
            {children}
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  )
}
