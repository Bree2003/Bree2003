"use client"
import type { Metadata } from 'next'
import './globals.css'
import Layout from '@/components/Layout'
import { AnimatePresence, motion } from 'framer-motion'
import Transition from '@/components/Transition'
import { usePathname, useRouter } from 'next/navigation'


export const metadata: Metadata = {
  title: 'Portfolio Brisa',
  description: 'Portfolio of Brisa Sandoval',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  const router = usePathname();
  return (
    <html lang="en">
      <body>
        <Layout>
          <AnimatePresence mode='wait'>
            <motion.div key={router} className='h-full'>
            <Transition/>
            {children}
            </motion.div>
            </AnimatePresence>
          </Layout>
      </body>
    </html>
  )
}
