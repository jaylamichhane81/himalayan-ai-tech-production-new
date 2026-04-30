'use client'

import { motion } from 'framer-motion'
import {
  Cpu,
  ClipboardList,
  Clock3,
  Globe2,
  Link2,
} from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Smart AI Chat Agents',
    description:
      'Intelligent conversational AI that understands context and provides relevant responses.',
  },
  {
    icon: ClipboardList,
    title: 'Lead Capture Automation',
    description:
      'Automatically collect and organize leads from website visitors and chat interactions.',
  },
  {
    icon: Clock3,
    title: '24/7 Customer Support',
    description:
      'Round-the-clock customer service without human intervention.',
  },
  {
    icon: Globe2,
    title: 'Multi-language AI Replies',
    description:
      'Communicate with customers in their preferred language automatically.',
  },
  {
    icon: Link2,
    title: 'CRM Integration',
    description:
      'Seamlessly connect with your existing CRM systems for better lead management.',
  },
]

export function Features() {
  return (
    <section id="services" className="scroll-mt-24 py-12 sm:py-16 md:py-20">

      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Header */}
          <div className="mb-6 text-center">

            <div className="mx-auto mb-3 inline-flex items-center justify-center rounded-full bg-ai-cyan/10 border border-ai-cyan/20 p-3 text-ai-cyan">
              <Cpu className="w-5 h-5" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
              AI Features
            </h2>

          </div>

          {/* Subtext */}
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-10 sm:mb-12 text-base sm:text-lg">
            Powerful AI capabilities that automate your customer interactions and boost conversions.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {features.map((feature, i) => {
              const Icon = feature.icon

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -6 }}
                  className="card-premium group p-5 sm:p-6 border border-slate-800 hover:border-ai-cyan/40 transition-all"
                >

                  {/* Icon */}
                  <div className="mb-4 flex items-center justify-center rounded-xl bg-slate-950/70 p-3 text-ai-cyan">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {feature.description}
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