'use client'

import { motion } from 'framer-motion'

export function Founder() {
  return (
    <section id="founder" className="section-container py-12 sm:py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="card-premium md:p-12 lg:p-16 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-br from-ai-cyan to-ai-purple flex items-center justify-center glow-cyan overflow-hidden"
          >
            <img 
              src="/images/pic.jpg" 
              alt="Jayram Lamichhane - Founder" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gradient">Founder-Led Excellence & Accountability</h2>

          <p className="text-slate-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
            I am Jayram Lamichhane, building Himalayan AI with a commitment to engineering excellence.
          </p>

          <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base">
            No layers. No delays. Direct access to expertise. We deliver what we promise.
          </p>

          <motion.div
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
