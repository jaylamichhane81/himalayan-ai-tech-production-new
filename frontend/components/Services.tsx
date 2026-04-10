'use client'

import { motion } from 'framer-motion'

const services = [
  {
    icon: '�',
    title: 'AI Chatbot Development',
    description: 'Customer support and sales chatbots that guide visitors, answer questions, and capture leads.',
    features: ['Smart conversation flows', 'Lead capture', 'Fast integration'],
  },
  {
    icon: '🌐',
    title: 'AI Website Integration',
    description: 'Modern websites with AI search, personalization, and chat-enabled user experiences.',
    features: ['Smart website widgets', 'AI-driven content', 'SEO-ready pages'],
  },
  {
    icon: '⚙️',
    title: 'Business Automation',
    description: 'Automate repeat work, sync systems, and reduce manual tasks using intelligent workflows.',
    features: ['Process automation', 'API orchestration', 'task triggers'],
  },
  {
    icon: '🧠',
    title: 'Custom AI Solutions',
    description: 'Tailored AI tools for reporting, operations, and customer experience specific to your business.',
    features: ['Custom tool design', 'Data-driven systems', 'Scalable deployment'],
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
          Four core AI services designed to increase leads, simplify operations, and deliver fast results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
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
