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
        <div className="card-premium md:p-12 lg:p-16 text-center max-w-4xl mx-auto border-ai-cyan/20 hover:border-ai-cyan/50 px-4 sm:px-6">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-br from-ai-cyan to-ai-purple flex items-center justify-center text-4xl sm:text-5xl border-2 border-ai-cyan/30 glow-cyan"
          >
            👨‍💻
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gradient">Founder-Led Excellence & Accountability</h2>

          <p className="text-slate-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
            I am Jayram Lamichhane, building Himalayan AI with a commitment to engineering excellence.
          </p>

          <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base">
            No layers. No delays. Direct access to expertise. We deliver what we promise.
          </p>

          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3 justify-center text-xs sm:text-sm mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {['FastAPI', 'Next.js', 'Advanced LLMs', 'n8n', 'PostgreSQL', 'Cloud Native'].map((tech) => (
              <motion.span 
                key={tech} 
                whileHover={{ scale: 1.05 }}
                className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-ai-cyan/10 to-ai-purple/10 rounded-full border border-ai-cyan/30 text-ai-cyan font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-ai-cyan/20 flex justify-center"
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
