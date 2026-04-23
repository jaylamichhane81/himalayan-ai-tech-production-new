'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setMobileMenuOpen(false)
      return
    }

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
      <div className="section-container py-4 sm:py-5 flex justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('top')}
          className="flex items-center gap-3 sm:gap-4 cursor-pointer"
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Himalayan AI Tech"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, (max-width: 1024px) 64px, 80px"
            />
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold uppercase tracking-widest text-ai-cyan leading-tight">Himalayan</div>
            <div className="text-lg md:text-xl font-bold text-white">AI Tech</div>
          </div>
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-12 xl:gap-16">
          {[
            { label: 'Services', id: 'services' },
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
        <div className="section-container py-5 sm:py-6 flex flex-col gap-2 sm:gap-4">
          {[
            { label: 'Services', id: 'services' },
            { label: 'Founder', id: 'founder' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ x: 4 }}
              onClick={() => scrollToSection(item.id)}
              className="text-slate-300 hover:text-ai-cyan transition-colors text-sm sm:text-base font-medium text-left py-4 px-4 sm:py-3 sm:px-3"
            >
              {item.label}
            </motion.button>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="btn-primary w-full text-sm sm:text-base py-3 font-semibold mt-4 sm:mt-2"
          >
            Book Consultation
          </motion.button>
        </div>
      </motion.div>
    </motion.header>
  )
}
