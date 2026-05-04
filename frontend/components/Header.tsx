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

    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: 'smooth',
    })
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
      className="sticky top-0 z-50 bg-[#070A12]/70 backdrop-blur-xl border-b border-white/10 w-full"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* LOGO (FIXED SIZE) */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleNavClick('top')}
          className="flex items-center gap-3 cursor-pointer"
        >
          {/* 🔥 IMPORTANT FIX: wrapper controls size */}
          <div className="relative w-16 h-16 sm:w-18 sm:h-18">
            <Image
              src="/logo.svg"
              alt="Himalayan AI Tech"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Himalayan
            </span>
            <span className="text-base font-bold text-white">
              AI Tech
            </span>
          </div>
        </motion.button>

        {/* DESKTOP NAV */}
        <div className="hidden sm:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -1 }}
                onClick={() => handleNavClick(item.id)}
                className="text-slate-300 hover:text-white text-sm font-medium transition"
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

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden p-2 text-slate-300 hover:text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* OVERLAY */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 sm:hidden z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="sm:hidden fixed top-0 left-0 w-full bg-[#070A12]/95 backdrop-blur-xl border-t border-white/10 z-50"
        >
          <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">

            <nav className="flex flex-col gap-4">
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

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-3 rounded-lg"
            >
              <CalendarDays size={18} />
              <span>Book Consultation</span>
            </button>

          </div>
        </motion.div>
      )}
    </motion.header>
  )
}