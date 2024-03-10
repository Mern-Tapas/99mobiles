import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/providers/ThemeProvider'
import Provider from '@/components/providers/SessionProviderDiv'
import { Toaster } from "@/components/ui/toaster"
import GoogleAnalytics from '@/components/GoogleAnalytics'


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
        {/* <GoogleAnalytics GA_MEASUREMENT_ID='G-CPF40XLW4B' /> */}


      </head>
      <body className={inter.className}>
        {/* <ThemeProvider attribute='class'> */}
        <Provider>
          {children}
          <Toaster />
        </Provider>
        {/* </ThemeProvider> */}


      </body>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-ND4H4ZMD"
        height="0" width="0" className='d-none' ></iframe></noscript>
    </html>
  )
}
