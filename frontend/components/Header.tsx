'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CalendarDays, Menu, X } from 'lucide-react'
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
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-midnight/80 backdrop-blur-xl border-b border-slate-800/60 w-full"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleNavClick('top')}
          className="flex items-center gap-3 cursor-pointer shrink-0"
        >
          <div className="relative w-11 h-11 sm:w-14 sm:h-14">
            <Image
              src="/images/logo.png"
              alt="Himalayan AI Tech"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ai-cyan">
              Himalayan
            </span>
            <span className="text-base font-bold text-white">
              AI Tech
            </span>
          </div>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -1 }}
                onClick={() => handleNavClick(item.id)}
                className="text-slate-300 hover:text-white transition-all text-sm font-medium"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg shadow-blue-500/10"
          >
            <CalendarDays size={18} />
            <span>Book Consultation</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden p-2 -mr-2 text-slate-300 hover:text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ✅ CLICK OUTSIDE OVERLAY */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 sm:hidden z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="sm:hidden fixed top-0 left-0 w-full bg-midnight/95 backdrop-blur-xl border-t border-slate-800/60 z-50"
        >
          <div
            className="max-w-7xl mx-auto px-3 py-4 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >

            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-slate-300 hover:text-white text-left text-base font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNavClick('contact')}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-3 rounded-lg shadow-lg shadow-blue-500/10"
            >
              <CalendarDays size={18} />
              <span>Book Consultation</span>
            </motion.button>

          </div>
        </motion.div>
      )}
    </motion.header>
  )
}