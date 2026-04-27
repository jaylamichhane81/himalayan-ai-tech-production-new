'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Briefcase, Rocket, HeartPulse, Home, BookOpen, Building, Globe2 } from 'lucide-react'

const useCases = [
  {
    icon: ShoppingCart,
    title: 'E-commerce stores',
    description: 'Handle customer inquiries, process orders, and provide product recommendations 24/7.',
  },
  {
    icon: Briefcase,
    title: 'Agencies',
    description: 'Qualify leads, schedule consultations, and provide instant responses to potential clients.',
  },
  {
    icon: Rocket,
    title: 'SaaS startups',
    description: 'Answer technical questions, guide users through onboarding, and reduce support tickets.',
  },
  {
    icon: HeartPulse,
    title: 'Clinics',
    description: 'Appointment booking, health inquiries, and patient follow-ups automated.',
  },
  {
    icon: Home,
    title: 'Real estate',
    description: 'Property inquiries, virtual tours, and lead qualification for real estate businesses.',
  },
  {
    icon: BookOpen,
    title: 'Schools',
    description: 'Admissions inquiries, course information, and student support services.',
  },
  {
    icon: Building,
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
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 inline-flex items-center justify-center rounded-full bg-ai-cyan/10 border border-ai-cyan/20 p-3 text-ai-cyan">
            <Globe2 className="w-5 h-5" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">Use Cases</h2>
        </div>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg md:text-xl">
          AI chatbots that work for every type of business, from local shops to global enterprises.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {useCases.map((useCase, i) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0, 212, 255, 0.2)' }}
                className="card-premium group cursor-pointer hover:border-ai-cyan/50 p-4 sm:p-6"
              >
                <div className="mb-3 flex items-center justify-center rounded-2xl bg-slate-950/80 p-3 text-ai-cyan shadow-sm shadow-ai-cyan/10">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{useCase.title}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {useCase.description}
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