'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 glass-effect bg-midnight/70 w-full"
    >
      <div className="section-container py-4 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
        >
          <motion.div 
            whileHover={{ y: -2 }}
            className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-xl bg-gradient-to-br from-ai-cyan/30 to-ai-purple/30 backdrop-blur-sm border-2 border-ai-cyan/40 hover:border-ai-cyan/70 transition-all shadow-2xl hover:shadow-3xl hover:shadow-ai-cyan/60 animate-float animate-pulse-glow"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-ai-cyan/20 to-ai-purple/20 opacity-0 hover:opacity-100 transition-opacity blur-xl" />
            <div className="absolute inset-2 rounded-lg bg-gradient-to-br from-ai-cyan/10 to-ai-purple/10 opacity-50" />
            <Image 
              src="/images/logo.png" 
              alt="Himalayan AI" 
              width={200} 
              height={200} 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 relative z-10 drop-shadow-2xl filter hover:drop-shadow-3xl transition-all image-glow-premium"
            />
          </motion.div>
          <span className="text-base sm:text-lg md:text-xl font-bold text-gradient hover:text-ai-cyan transition-colors">Himalayan AI</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 xl:gap-8">
          {[
            { label: 'Services', id: 'services' },
            { label: 'Why Us', id: 'why-us' },
            { label: 'Founder', id: 'founder' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ color: '#00d4ff' }}
              onClick={() => scrollToSection(item.id)}
              className="text-slate-300 hover:text-ai-cyan transition-colors text-sm xl:text-base font-medium"
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          className="btn-primary hidden lg:block text-xs xl:text-sm"
        >
          Book Consultation
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1 sm:gap-1.5 p-2"
        >
          <span className={`w-5 h-0.5 sm:w-6 sm:h-0.5 bg-ai-cyan transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5 sm:translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 sm:w-6 sm:h-0.5 bg-ai-cyan transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 sm:w-6 sm:h-0.5 bg-ai-cyan transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5 sm:-translate-y-2' : ''}`} />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-midnight-light/50 glass-effect"
      >
        <div className="section-container py-4 sm:py-6 flex flex-col gap-3 sm:gap-4">
          {[
            { label: 'Services', id: 'services' },
            { label: 'Why Us', id: 'why-us' },
            { label: 'Founder', id: 'founder' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ x: 4 }}
              onClick={() => scrollToSection(item.id)}
              className="text-slate-300 hover:text-ai-cyan transition-colors text-sm sm:text-base font-medium text-left py-2 px-2"
            >
              {item.label}
            </motion.button>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="btn-primary w-full text-sm sm:text-base py-3 font-semibold mt-2"
          >
            Book Consultation
          </motion.button>
        </div>
      </motion.div>
    </motion.header>
  )
}
