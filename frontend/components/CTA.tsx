'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'

export function CTA() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-12 sm:py-16 md:py-20">

      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/60 p-6 sm:p-10 text-center"
        >

          {/* Soft background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan/5 to-ai-purple/5 opacity-70" />

          <div className="relative z-10">

            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-4 py-2 text-ai-cyan border border-slate-800">
              <Sparkles className="w-4 h-4" />
              AI automation made simple
            </div>

            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Start automating your business today
            </motion.h2>

            {/* Subtext */}
            <motion.p
              className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join businesses already using AI chatbots to convert more customers and save time.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >

              {/* Primary CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-ai-cyan text-black font-semibold hover:opacity-90 transition"
              >
                Book Demo
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('chat')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-700 text-white hover:border-slate-500 transition"
              >
                <MessageCircle className="w-4 h-4" />
                Try Free Chatbot
              </motion.button>

            </motion.div>

            {/* ✅ URGENCY LINE (ADDED FOR CONVERSION BOOST) */}
            <p className="text-xs text-slate-400 mt-4">
              ⚡ Free demo • Setup in 24h • No technical cost
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}