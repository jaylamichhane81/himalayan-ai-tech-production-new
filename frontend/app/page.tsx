'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Founder } from '@/components/Founder'
import { Features } from '@/components/Features'
import { UseCases } from '@/components/UseCases'
import { Testimonials } from '@/components/Testimonials'
import  Chat  from '@/components/Chat'
import { CTA } from '@/components/CTA'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <motion.main 
      className="min-h-screen bg-gradient-ai"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.main>
  )
}
