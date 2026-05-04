'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

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

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: Testimonial
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 shadow-lg shadow-black/20"
    >
      {/* Author */}
      <div className="flex items-center gap-4 mb-5">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border border-slate-700">
          <Image
            src={testimonial.image}
            alt={`${testimonial.author} profile`}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-semibold text-white text-sm sm:text-base">
            {testimonial.author}
          </p>
          <p className="text-xs sm:text-sm text-slate-400">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Quote icon */}
      <div className="flex items-center gap-2 mb-3 text-ai-cyan">
        <Quote className="w-4 h-4" />
        <Star className="w-4 h-4" />
      </div>

      {/* Text */}
      <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
        {testimonial.quote}
      </p>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            What Our Clients Say
          </h2>

          {/* Subtext */}
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-10 sm:mb-12 text-base sm:text-lg">
            Real results from businesses using our AI automation solutions.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={testimonial.author}
                testimonial={testimonial}
                delay={i * 0.15}
              />
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  )
}