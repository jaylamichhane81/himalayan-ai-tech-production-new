'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Rocket, Cpu } from 'lucide-react'

const trustPoints = [
  {
    icon: Cpu,
    title: 'Built by AI Engineers',
    description: 'Designed and developed by expert AI engineers focused on real business impact.',
  },
  {
    icon: ShieldCheck,
    title: 'Production-Ready Systems',
    description: 'We build scalable, secure, and deployable SaaS-grade AI solutions.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Get your AI chatbot or automation live in just 3–7 days.',
  },
  {
    icon: Rocket,
    title: 'Real Business Results',
    description: 'Our AI solutions are built to increase conversions, leads, and revenue.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
              Why Choose Us
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
              We don’t just build AI — we deliver systems that actually grow your business.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {trustPoints.map((item, i) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5 }}
                  className="card-premium p-5 sm:p-6 border border-slate-800 hover:border-ai-cyan/40 transition-all duration-300"
                >

                  {/* Icon */}
                  <div className="mb-4 flex items-center justify-center rounded-xl bg-slate-950/70 p-3 text-ai-cyan">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                </motion.div>
              )
            })}

          </div>

        </motion.div>

      </div>
    </section>
  )
}