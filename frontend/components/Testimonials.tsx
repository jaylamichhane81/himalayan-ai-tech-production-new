'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageSquare, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'We launched our AI support chatbot in weeks and our customer response time dropped dramatically. The team delivered a polished, professional experience.',
    author: 'Ram Prasad Sharma',
    role: 'Founder, Hospitality Business',
    image: '/images/ram.png',
  },
  {
    quote:
      'AI recommendations helped us boost conversions and reduce churn. The platform feels premium and the integration was seamless.',
    author: 'Aruna Lamsal',
    role: 'Marketing Director, E-commerce Retailer',
    image: '/images/Aruna.png',
  },
  {
    quote:
      'Our clients now get instant answers 24/7, and our operations team can focus on higher-value work.',
    author: 'Shyam Bahadur Shahi',
    role: 'Owner, Local Services Company',
    image: '/images/shyam.png',
  },
]

type Testimonial = typeof testimonials[number]

function TestimonialCard({ testimonial, delay }: { testimonial: Testimonial; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="group bg-slate-950/90 border border-slate-800 rounded-3xl p-6 shadow-md shadow-slate-950/30 transition-transform duration-300"
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border border-slate-700">
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div>
          <p className="font-semibold text-white">{testimonial.author}</p>
          <p className="text-sm text-slate-400">{testimonial.role}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4 text-ai-cyan/80">
        <MessageSquare className="w-4 h-4" />
        <Star className="w-4 h-4" />
      </div>

      <p className="text-slate-300 leading-relaxed">{testimonial.quote}</p>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 sm:mb-4 text-gradient">
            💬 What Our Clients Say
          </h2>

          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg md:text-xl">
            Real results from businesses using our AI automation solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={testimonial.author} testimonial={testimonial} delay={i * 0.2} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}