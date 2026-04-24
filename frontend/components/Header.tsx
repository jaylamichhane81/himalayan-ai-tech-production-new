'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    const headerOffset = 80
const elementPosition = element.getBoundingClientRect().top + window.scrollY
const offsetPosition = elementPosition - headerOffset

window.scrollTo({
  top: offsetPosition,
  behavior: 'smooth',
})
    setMobileMenuOpen(false)
  }

  return (
    <>
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
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-midnight-light/95 glass-effect flex flex-col p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6 mt-20">
                {[
                  { label: 'Services', id: 'services' },
                  { label: 'Founder', id: 'founder' },
                  { label: 'Contact', id: 'contact' },
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 4 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-300 hover:text-ai-cyan transition-colors text-base font-medium text-left"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary w-full text-base py-3 font-semibold mt-4"
                >
                  Book Consultation
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
