'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '🤖',
    title: 'Smart AI Chat Agents',
    description: 'Intelligent conversational AI that understands context and provides relevant responses.',
  },
  {
    icon: '📋',
    title: 'Lead Capture Automation',
    description: 'Automatically collect and organize leads from website visitors and chat interactions.',
  },
  {
    icon: '⏰',
    title: '24/7 Customer Support',
    description: 'Round-the-clock customer service without human intervention.',
  },
  {
    icon: '🌍',
    title: 'Multi-language AI replies',
    description: 'Communicate with customers in their preferred language automatically.',
  },
  {
    icon: '🔗',
    title: 'CRM Integration',
    description: 'Seamlessly connect with your existing CRM systems for better lead management.',
  },
]

export function Features() {
  return (
    <section id="services" className="py-8 sm:py-10 md:py-12">
      <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 sm:mb-4 text-gradient">✨ AI Features</h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg md:text-xl">
          Powerful AI capabilities that automate your customer interactions and boost conversions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: '0 8px 32px rgba(0, 212, 255, 0.2)' }}
              className="card-premium group cursor-pointer hover:border-ai-cyan/50 p-4 sm:p-6"
            >
              <div className="text-4xl sm:text-5xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
  )
}
