'use client'

import { motion } from 'framer-motion'

const useCases = [
  {
    icon: '🛒',
    title: 'E-commerce stores',
    description: 'Handle customer inquiries, process orders, and provide product recommendations 24/7.',
  },
  {
    icon: '🏢',
    title: 'Agencies',
    description: 'Qualify leads, schedule consultations, and provide instant responses to potential clients.',
  },
  {
    icon: '🚀',
    title: 'SaaS startups',
    description: 'Answer technical questions, guide users through onboarding, and reduce support tickets.',
  },
  {
    icon: '🏥',
    title: 'Clinics',
    description: 'Appointment booking, health inquiries, and patient follow-ups automated.',
  },
  {
    icon: '🏠',
    title: 'Real estate',
    description: 'Property inquiries, virtual tours, and lead qualification for real estate businesses.',
  },
  {
    icon: '🏫',
    title: 'Schools',
    description: 'Admissions inquiries, course information, and student support services.',
  },
  {
    icon: '🏨',
    title: 'Hotels',
    description: 'Room bookings, guest services, and reservation management.',
  },
]

export function UseCases() {
  return (
    <section className="py-8 sm:py-10 md:py-12">
      <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 sm:mb-4 text-gradient">🌐 Use Cases</h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg md:text-xl">
          AI chatbots that work for every type of business, from local shops to global enterprises.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0, 212, 255, 0.2)' }}
              className="card-premium group cursor-pointer hover:border-ai-cyan/50 p-4 sm:p-6"
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                {useCase.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{useCase.title}</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
  )
}