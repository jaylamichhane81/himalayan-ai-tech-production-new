'use client'

import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { useMutation } from '@tanstack/react-query'
import { WHATSAPP_NUMBER } from '../lib/constants'
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react'

interface FormState {
  name: string
  email: string
  phone: string
  budget: string
  project: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    budget: '',
    project: '',
  })

  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Valid email is required'
    }

    if (!formData.project.trim()) {
      newErrors.project = 'Project is required'
    } else if (formData.project.trim().length < 10) {
      newErrors.project = 'Minimum 10 characters required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const apiBase = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:10000')
    .trim()
    .replace(/\/+$/, '')

  const contactMutation = useMutation({
    mutationFn: async (data: FormState) => {
      const res = await fetch(`${apiBase}/contact/`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const errorText = await res.text().catch(() => '')
        throw new Error(errorText || 'Failed to send message')
      }

      return res.json()
    },

    onSuccess: () => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        budget: '',
        project: '',
      })

      setErrors({})

      setTimeout(() => {
        contactMutation.reset()
      }, 4000)
    },
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    contactMutation.reset()

    if (!validateForm()) return

    contactMutation.mutate(formData)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">

            {/* LEFT SIDE */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-transparent bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text">
  Ready to turn your ideas into intelligent automation?
</h2>

              <p className="text-slate-400 mb-8 text-base sm:text-lg max-w-2xl">
                Reach out for a free demo, custom chatbot, AI website, or automation plan.
                We focus on fast delivery and real business value.
              </p>

              <div className="rounded-3xl border border-ai-cyan/15 bg-slate-950/80 p-5 space-y-4 shadow-xl shadow-ai-cyan/10 transition-all duration-300 hover:border-ai-cyan/40 hover:shadow-lg">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-ai-cyan mt-1" />
                  <div>
                    <p className="text-white font-semibold">WhatsApp</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ai-cyan hover:text-white block"
                    >
                      +{WHATSAPP_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-ai-cyan mt-1" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a
                      href="mailto:himalayanaitech@gmail.com"
                      className="text-ai-cyan hover:text-white"
                    >
                      himalayanaitech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-ai-cyan mt-1" />
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-slate-400">
                      Gokarneshwor-5, Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-ai-cyan mt-1" />
                  <p className="text-slate-400 text-sm">
                    Free demo available. We reply within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <motion.form
              onSubmit={handleSubmit}
              className="card-premium space-y-6 rounded-3xl bg-slate-950/90 border border-slate-800/70 p-6 transition-all duration-300 hover:border-ai-cyan/40 hover:shadow-lg"
            >
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.3em] text-ai-cyan/70">Contact</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Book your AI demo and custom solution
                </h3>
                <p className="text-slate-400 text-sm sm:text-base">
                  Share your goals and we’ll follow up with a tailored plan and pricing.
                </p>
              </div>

              {/* SUCCESS */}
              {contactMutation.isSuccess && (
                <div className="space-y-2" role="status" aria-live="polite">
                  <div className="p-4 bg-ai-cyan/10 border border-ai-cyan/30 rounded-lg text-ai-cyan text-sm flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    We will connect within 24 hours.
                  </div>

                  <p className="text-xs text-slate-500 mt-2">
                    Lead ID: #{Math.random().toString(36).slice(2, 8).toUpperCase()}
                  </p>
                </div>
              )}

              {/* ERROR */}
              {contactMutation.isError && (
                <div
                  role="status"
                  aria-live="assertive"
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm flex items-center gap-2"
                >
                  <AlertTriangle className="w-4 h-4" />
                  Failed to send message. Try again.
                </div>
              )}

              {/* NAME + EMAIL */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-sm text-slate-300 font-medium">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className="w-full mt-2 px-4 py-3 bg-white/5 border border-ai-cyan/20 rounded-2xl text-white focus:border-ai-blue focus:ring-2 focus:ring-ai-cyan/20 transition"
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="text-red-400 text-xs mt-2">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm text-slate-300 font-medium">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className="w-full mt-2 px-4 py-3 bg-white/5 border border-ai-cyan/20 rounded-2xl text-white focus:border-ai-blue focus:ring-2 focus:ring-ai-cyan/20 transition"
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="text-red-400 text-xs mt-2">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* PHONE + BUDGET */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-phone" className="block text-sm text-slate-300 font-medium">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+977 98000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full mt-2 px-4 py-3 bg-white/5 border border-ai-cyan/20 rounded-2xl text-white focus:border-ai-blue focus:ring-2 focus:ring-ai-cyan/20 transition"
                  />
                </div>

                <div>
                  <label htmlFor="contact-budget" className="block text-sm text-slate-300 font-medium">
                    Budget
                  </label>
                  <input
                    id="contact-budget"
                    type="text"
                    placeholder="Estimated budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full mt-2 px-4 py-3 bg-white/5 border border-ai-cyan/20 rounded-2xl text-white focus:border-ai-blue focus:ring-2 focus:ring-ai-cyan/20 transition"
                  />
                </div>
              </div>

              {/* PROJECT */}
              <div>
                <label htmlFor="contact-project" className="block text-sm text-slate-300 font-medium">
                  Project Description *
                </label>
                <textarea
                  id="contact-project"
                  rows={5}
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  aria-invalid={errors.project ? 'true' : 'false'}
                  aria-describedby={errors.project ? 'contact-project-error' : undefined}
                  className="w-full mt-2 px-4 py-3 bg-white/5 border border-ai-cyan/20 rounded-2xl text-white resize-none focus:border-ai-blue focus:ring-2 focus:ring-ai-cyan/20 transition"
                />
                {errors.project && (
                  <p id="contact-project-error" className="text-red-400 text-xs mt-2">
                    {errors.project}
                  </p>
                )}
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full btn-primary py-3 font-semibold rounded-2xl transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {contactMutation.isPending ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-center text-xs text-slate-500">
                We respond within 24 hours.
              </p>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}