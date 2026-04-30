'use client'

import { motion } from 'framer-motion'
import { Calendar, CheckCircle } from 'lucide-react'

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
      <div className="absolute inset-0 bg-gradient-ai opacity-50" />

      {/* Background blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-12 right-5 sm:top-20 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-ai-cyan/20 rounded-full blur-3xl opacity-20"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-12 left-5 sm:bottom-20 sm:left-10 w-48 h-48 sm:w-80 sm:h-80 bg-ai-purple/20 rounded-full blur-3xl opacity-20"
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="mb-3 sm:mb-4 inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="px-3 sm:px-4 py-2 bg-linear-to-r from-ai-cyan/10 to-ai-purple/10 rounded-full border border-ai-cyan/30 text-xs sm:text-sm text-ai-cyan font-semibold inline-flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                AI solutions for businesses
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gradient leading-tight max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              AI Chatbots That Turn Visitors Into Customers — 24/7 Automatically
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base sm:text-xl md:text-2xl text-slate-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Build AI agents that answer, convert, and sell for your business without human support.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.35)' }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToContact}
                className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 font-semibold w-full sm:w-auto flex items-center justify-center gap-2 transition-all"
              >
                <motion.span whileHover={{ rotate: 8 }}>
                  <Calendar className="w-5 h-5" />
                </motion.span>

                <span>Book a Demo Call</span>
              </motion.button>
            </motion.div>

            {/* ✅ ADDED TRUST LINE (10/10 CONVERSION BOOST) */}
            <p className="text-xs text-slate-400 mt-3">
              Trusted AI automation for startups & businesses
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  )
}