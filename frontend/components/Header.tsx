'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const navItems = [
  { label: 'Services', id: 'services' },
  { label: 'Founder', id: 'founder' },
  { label: 'Contact', id: 'contact' },
]

export function Header() {
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
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 glass-effect bg-midnight/80 backdrop-blur-xl w-full"
    >
      <div className="section-container py-4 sm:py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => scrollToSection('top')}
          className="flex items-center gap-3 sm:gap-4 cursor-pointer shrink-0"
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

        <div className="flex-1 min-w-0 overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max items-center gap-3 pl-0 pr-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ color: '#00d4ff' }}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-ai-cyan transition-colors text-sm sm:text-base font-medium whitespace-nowrap"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="btn-primary whitespace-nowrap text-xs sm:text-sm"
            >
              Book Consultation
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
