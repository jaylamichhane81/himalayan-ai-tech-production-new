'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageSquare, Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'This AI chatbot reduced our support load by 80%',
    author: 'Ram Prasad Sharma',
    role: 'CEO, Tech Startup',
  },
  {
    quote: 'Our conversion rate increased by 150% after implementing AI chatbots',
    author: 'Aruna Lamsal',
    role: 'Marketing Director, E-commerce',
  },
  {
    quote: 'Customers love the instant responses, available 24/7',
    author: 'Shyam Bahadur Shahi',
    role: 'Owner, Local Business',
  },
]

const fallbackAvatar = '/images/logo.png'

type Testimonial = typeof testimonials[number]

function TestimonialCard({ testimonial, delay }: { testimonial: Testimonial; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0, 212, 255, 0.2)' }}
      className="card-premium p-6 md:p-8 text-center"
    >
      <div className="inline-flex items-center justify-center gap-2 mb-4 text-ai-cyan/80">
        <MessageSquare className="w-4 h-4" />
        <Star className="w-4 h-4" />
      </div>

      <blockquote className="text-slate-300 mb-3 italic">
        &quot;{testimonial.quote}&quot;
      </blockquote>

      <div>
        <div className="font-semibold text-white">{testimonial.author}</div>
        <div className="text-sm text-slate-400">{testimonial.role}</div>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 md:py-12">
      <div className="section-container">
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