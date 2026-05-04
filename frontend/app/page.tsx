'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Founder } from '@/components/Founder'
import { Features } from '@/components/Features'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { ProblemSolution } from '@/components/ProblemSolution'
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Header />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Hero />
        </motion.div>
        
        <div className="border-t border-white/5"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Founder />
        </motion.div>
        
        <div className="border-t border-white/5"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <WhyChooseUs />
        </motion.div>
        
        <div className="border-t border-white/5"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Features />
        </motion.div>
        
        <div className="border-t border-white/5"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ProblemSolution />
        </motion.div>
        
        <div className="border-t border-white/5"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <UseCases />
        </motion.div>
        
        <div className="border-t border-white/5"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Testimonials />
        </motion.div>
        
        <div className="border-t border-white/5"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Chat />
        </motion.div>
        
        <div className="border-t border-white/5"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <CTA />
        </motion.div>
        
        <div className="border-t border-white/5"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <Contact />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Footer />
        </motion.div>
      </div>
    </motion.main>
  )
}
