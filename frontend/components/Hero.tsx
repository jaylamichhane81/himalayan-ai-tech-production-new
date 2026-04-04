'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-ai opacity-50" />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-ai-cyan/20 rounded-full blur-3xl opacity-20"
      />
      <motion.div 
        animate={{ 
          scale: [1.1, 1, 1.1],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-ai-purple/20 rounded-full blur-3xl opacity-20"
      />

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Trust Badge */}
          <motion.div
            className="mb-6 inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="px-4 py-2 bg-gradient-to-r from-ai-cyan/10 to-ai-purple/10 rounded-full border border-ai-cyan/30 text-sm text-ai-cyan font-semibold">
              ✓ Trusted by 50+ Businesses
            </div>
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gradient leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Enterprise AI Solutions <br className="hidden sm:block" />Built for Scale
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Custom AI applications, intelligent automation, and autonomous agents. 
            <span className="text-ai-cyan font-semibold"> From concept to production in days.</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 font-semibold w-full sm:w-auto"
            >
              Schedule Free Audit →
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToContact()}
              className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 font-semibold w-full sm:w-auto"
            >
              See Case Studies
            </motion.button>
          </motion.div>


          {/* Trust Indicators */}
          <motion.div
            className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-ai-cyan/10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { label: '50+', desc: 'Projects', icon: '🚀' },
              { label: '4-Days', desc: 'MVP Launch', icon: '⚡' },
              { label: '99.9%', desc: 'Uptime', icon: '✓' },
            ].map((stat) => (
              <motion.div 
                key={stat.label}
                whileHover={{ y: -4 }}
                className="p-3 sm:p-4 md:p-6 text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl mb-2">{stat.icon}</div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient">{stat.label}</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-2">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
