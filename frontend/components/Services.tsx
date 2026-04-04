'use client'

import { motion } from 'framer-motion'

const services = [
  {
    icon: '🧠',
    title: 'Custom AI Applications',
    description: 'Enterprise-grade web apps with LLM integration, RAG systems, and real-time intelligence. Built for scalability and performance.',
    features: ['LLM Integration', 'Real-time Processing', '24/7 Support'],
  },
  {
    icon: '⚙️',
    title: 'Intelligent Automation',
    description: 'Visual workflow automation with n8n. Eliminate manual tasks, reduce costs, and scale operations instantly.',
    features: ['Process Automation', 'API Integration', 'Data Orchestration'],
  },
  {
    icon: '🤖',
    title: 'Autonomous AI Agents',
    description: 'Intelligent agents that reason, learn, and execute complex business logic autonomously. Maximized efficiency.',
    features: ['Autonomous Tasks', 'Intelligent Reasoning', 'Context Awareness'],
  },
]

export function Services() {
  return (
    <section id="services" className="section-container py-12 sm:py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 text-gradient px-4">Services Built for Business Growth</h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 text-sm sm:text-base md:text-lg px-4">
          Three proven AI solutions to transform your operations, reduce costs, and stay competitive.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: '0 8px 32px rgba(0, 212, 255, 0.2)' }}
              className="card-premium group cursor-pointer hover:border-ai-cyan/50 p-4 sm:p-6"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{service.title}</h3>
              <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-1 sm:space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-xs sm:text-sm text-ai-cyan flex items-center gap-2">
                    <span className="text-ai-glow">→</span> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
