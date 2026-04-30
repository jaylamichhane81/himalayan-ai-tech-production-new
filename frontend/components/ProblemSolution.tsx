'use client'

import { motion } from 'framer-motion'
import { XCircle, CheckCircle } from 'lucide-react'

export function ProblemSolution() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">

            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-premium p-6 md:p-8"
            >
              <div className="mb-4">
                <XCircle className="w-10 h-10 text-red-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-red-400">
                The Problem
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Businesses lose 70% of customers because they don&apos;t respond fast enough.
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="card-premium p-6 md:p-8"
            >
              <div className="mb-4">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-green-400">
                The Solution
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                AI agents that respond instantly, capture leads, and close customers automatically.
              </p>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  )
}