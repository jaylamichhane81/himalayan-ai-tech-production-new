'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Founder } from '@/components/Founder'
import { Features } from '@/components/Features'
import { UseCases } from '@/components/UseCases'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

// Dynamic imports for code splitting and better performance
const Chat = dynamic(() => import('@/components/Chat').then(mod => ({ default: mod.default })), {
  loading: () => (
    <div className="py-16 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ai-cyan"></div>
    </div>
  ),
  ssr: false // Disable SSR for chat component
})

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => (
    <div className="py-16 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ai-cyan"></div>
    </div>
  ),
  ssr: false
})

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => (
    <div className="py-16 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ai-cyan"></div>
    </div>
  )
})

export default function Home() {
  return (
    <motion.main 
      className="min-h-screen bg-gradient-ai"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <Header />
        <Hero />
        <Founder />
        <Features />
        <UseCases />
        <Testimonials />
        <Chat />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </motion.main>
  )
}
