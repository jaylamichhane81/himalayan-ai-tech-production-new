'use client'

import { motion } from 'framer-motion'

export function Hero() {
  const scrollToDemo = () => {
    const element = document.getElementById('demo')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gradient leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            AI chatbots, intelligent websites <br className="hidden sm:block" />and automation built to sell
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Create stronger customer journeys, capture leads, and automate business tasks with AI that works for your team.
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
              onClick={scrollToDemo}
              className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 font-semibold w-full sm:w-auto"
            >
              Free Demo Chat
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 font-semibold w-full sm:w-auto"
            >
              Contact Us
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-ai-cyan/10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { label: 'Rapid MVP', desc: 'Launch in days', icon: '⚡' },
              { label: 'Live Demo', desc: 'Built into the landing page', icon: '🤖' },
              { label: 'Local support', desc: 'Kathmandu-based team', icon: '🏔️' },
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
