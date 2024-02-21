import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/providers/ThemeProvider'
import Provider from '@/components/providers/SessionProviderDiv'
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sarkari Job Alert | Home Page',
  description: 'Building Soon',
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
        <meta name="google-site-verification" content="RNtnouSMQjBcgTBl-vya7Pn_ffzM2FNRPY_pvt5eix0" />
      </head>
      <body className={inter.className}>
        {/* <ThemeProvider attribute='class'> */}
          <Provider>
            {children}
            <Toaster />
          </Provider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
