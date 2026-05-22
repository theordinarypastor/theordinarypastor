import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'The Ordinary Pastor',
    template: '%s — The Ordinary Pastor',
  },
  description:
    'Nick Lockwood — pastor, preacher, and ordinary follower of Jesus. Writing on ministry, the Christian life, and what it means to be faithful in the small things.',
  metadataBase: new URL('https://theordinarypastor.com.au'),
  openGraph: {
    siteName: 'The Ordinary Pastor',
    locale: 'en_AU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="bg-limestone text-ink font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
