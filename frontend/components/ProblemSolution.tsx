'use client'

import { motion } from 'framer-motion'

export function ProblemSolution() {
  return (
    <section className="section-container py-12 sm:py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-premium p-6 md:p-8"
          >
            <div className="text-4xl mb-4">❌</div>
            <h3 className="text-2xl font-bold mb-4 text-red-400">The Problem</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Businesses lose 70% of customers because they don't respond fast enough.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-premium p-6 md:p-8"
          >
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">The Solution</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              AI agents that respond instantly, capture leads, and close customers automatically.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}