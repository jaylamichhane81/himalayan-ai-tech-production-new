'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'Services', id: 'services' },
  { label: 'Founder', id: 'founder' },
  { label: 'Contact', id: 'contact' },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const element = document.getElementById(id)
    if (!element) return

    const headerOffset = 88
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-midnight/90 backdrop-blur-xl border-b border-slate-800/60 w-full"
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => scrollToSection('top')}
          className="flex items-center gap-3 sm:gap-4 cursor-pointer shrink-0"
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
            <Image
              src="/images/logo.png"
              alt="Himalayan AI Tech"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-ai-cyan">Himalayan</span>
            <span className="text-lg font-bold text-white">AI Tech</span>
          </div>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-wrap items-center gap-8 justify-between w-full sm:w-auto">
          <nav className="flex flex-wrap items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-white hover:underline hover:underline-offset-4 decoration-ai-cyan/60 transition-all text-sm sm:text-base font-medium whitespace-nowrap"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg shadow-blue-500/10 transition-transform duration-200 whitespace-nowrap"
          >
            <Calendar size={18} />
            <span>Book Consultation</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden p-2 text-slate-300 hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="sm:hidden bg-midnight/95 backdrop-blur-xl border-t border-slate-800/60"
        >
          <div className="px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-300 hover:text-white transition-colors text-left text-base font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('contact')}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-3 rounded-lg shadow-lg shadow-blue-500/10 transition-transform duration-200"
            >
              <Calendar size={18} />
              <span>Book Consultation</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
