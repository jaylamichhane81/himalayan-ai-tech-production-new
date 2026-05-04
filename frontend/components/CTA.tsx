'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTA() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 sm:py-20 md:py-24">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/60 p-8 sm:p-12 text-center shadow-2xl shadow-cyan-500/10"
        >

          {/* Soft background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan/5 to-ai-purple/5 opacity-70" />

          <div className="relative z-10">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-4 py-2 text-ai-cyan border border-slate-800">
              <Sparkles className="w-4 h-4" />
              AI automation made simple
            </div>

            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gradient"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Start automating your business today
            </motion.h2>

            {/* Subtext */}
            <motion.p
              className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join businesses already using AI chatbots to convert more customers and save time.
            </motion.p>

            {/* Primary CTA Only */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0, 212, 255, 0.4)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-cyan-500/30"
              >
                Book Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>

            </motion.div>

            {/* ✅ URGENCY LINE (ADDED FOR CONVERSION BOOST) */}
            <p className="text-sm text-slate-400 mt-8 font-light">
              ⚡ Free demo • Setup in 24h • No technical cost
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}