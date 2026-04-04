'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    title: '⚡ Fast Delivery',
    description: 'Fully functional MVP in 4 days. Speed without compromising quality.',
  },
  {
    title: '✓ Proven Results',
    description: 'Real business impact. Every solution is measured and optimized for ROI.',
  },
  {
    title: '🛠️ Modern Stack',
    description: 'FastAPI, n8n, LLMs, Next.js—battle-tested, production-ready architecture.',
  },
  {
    title: '👨‍💼 Founder-Led',
    description: 'Direct access to expertise. Engineering excellence, not bureaucracy.',
  },
  {
    title: '💰 Cost-Effective',
    description: 'Premium quality at smart pricing. Scalable without unexpected costs.',
  },
  {
    title: '🤝 Full Support',
    description: 'Concept to production and beyond. Your success is our mission.',
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="section-container py-12 sm:py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 text-gradient px-4">Why Choose Himalayan AI?</h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 text-sm sm:text-base md:text-lg px-4">
          We combine speed, expertise, and proven results. Here's what sets us apart.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-premium border-l-4 border-ai-cyan/50 hover:border-ai-cyan p-4 sm:p-6"
            >
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-ai-cyan">
                {reason.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
