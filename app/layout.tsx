import type { Metadata } from 'next'
import './globals.css'
import Layout from '@/components/Layout'

export const metadata: Metadata = {
  title: 'Portfolio Brisa',
  description: 'Portfolio of Brisa Sandoval',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
          </Layout>
      </body>
    </html>
  )
}
