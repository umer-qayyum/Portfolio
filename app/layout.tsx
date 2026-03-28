import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from './providers'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Umer - Senior Full Stack Engineer & Technical Leader',
  description: 'Architecting scalable SaaS products, leading high-performing teams, and building AI-powered solutions. 10+ years of experience, $5M+ ARR generated.',
  keywords: ['Full Stack Engineer', 'Technical Leader', 'SaaS', 'AI', 'Product Development'],
  openGraph: {
    title: 'Umer - Senior Full Stack Engineer',
    description: 'Building scalable products that matter',
    type: 'website',
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          {children}
          <FloatingWhatsApp />
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
