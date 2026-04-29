'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'

export function CTA() {
  const scrollToDemo = () => {
    const element = document.getElementById('chat')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative card-premium p-6 sm:p-8 md:p-10 text-center overflow-hidden border-ai-cyan/30 hover:border-ai-cyan/60"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-linear-to-r from-ai-cyan/10 to-ai-purple/10 opacity-30"
        />

        <div className="relative z-10 px-4 sm:px-6 md:px-8">
          <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950/80 px-4 py-2 text-ai-cyan border border-ai-cyan/20 mx-auto w-fit">
            <Sparkles className="w-5 h-5" />
            AI automation made simple
          </div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Start automating your business today with AI
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Join hundreds of businesses already using AI chatbots to convert more customers and save time.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 font-semibold w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Book Demo
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToDemo}
              className="btn-secondary text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Try Free Chatbot
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      </div>
    </section>
  )
}
