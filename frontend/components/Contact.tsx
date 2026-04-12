'use client'

import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { api, endpoints, ContactResponse } from '@/lib/api'

interface FormState {
  name: string
  email: string
  phone: string
  budget: string
  project: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    budget: '',
    project: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [healthCheckLoading, setHealthCheckLoading] = useState(false)
  const [healthStatus, setHealthStatus] = useState<string | null>(null)

  const checkHealth = async () => {
    setHealthCheckLoading(true)
    setHealthStatus(null)
    try {
      const result = await api.get<{ status: string }>(endpoints.health)
      setHealthStatus('✓ Connection successful! API is responding.')
    } catch (err) {
      const errorMessage = err instanceof Error
        ? err.message
        : err && typeof err === 'object' && 'message' in err
          ? (err as { message: string }).message
          : 'Health check failed. Please try again.'
      setHealthStatus(`✗ Connection failed: ${errorMessage}`)
    } finally {
      setHealthCheckLoading(false)
    }
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Name is required')
      return false
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Valid email is required')
      return false
    }
    if (!formData.project.trim()) {
      setError('Project description is required')
      return false
    }
    if (formData.project.trim().length < 10) {
      setError('Project description must be at least 10 characters long.')
      return false
    }
    return true
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!validateForm()) return

    setLoading(true)

    try {
      await api.post<ContactResponse>(endpoints.contact, formData)

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', budget: '', project: '' })

      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      const errorMessage = err instanceof Error
        ? err.message
        : err && typeof err === 'object' && 'message' in err
          ? (err as { message: string }).message
          : 'Failed to send message. Please try again.'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '9779841000000'

  return (
    <section id="contact" className="section-container py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gradient">Let us Build Your AI Solution</h2>
            <p className="text-slate-400 mb-8 sm:mb-12 text-sm sm:text-base md:text-lg max-w-2xl">
              Reach out for a free demo, custom chatbot, AI website, or automation plan. We focus on fast delivery and real business value.
            </p>

            <div className="rounded-3xl border border-ai-cyan/15 bg-slate-950/80 p-6 space-y-4 shadow-xl shadow-ai-cyan/10">
              <div>
                <p className="text-sm text-slate-400 uppercase tracking-[0.2em] mb-2">Contact</p>
                <p className="text-white font-semibold">WhatsApp</p>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="text-ai-cyan hover:text-white block">
                  +977 9849745629
                </a>
              </div>
              <div>
                <p className="text-white font-semibold">Email</p>
                <a href="mailto:hello@himalayanaitech.com" className="text-ai-cyan hover:text-white block">himalayanaitech@gmail.com
</a>
              </div>
              <div>
                <p className="text-white font-semibold">Address</p>
                <p className="text-slate-400">Gokarneshwor-5, Kathmandu, Nepal</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Free demo available. We reply within 24 hours.</p>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="card-premium space-y-4 sm:space-y-6 border-ai-cyan/20 hover:border-ai-cyan/50 p-4 sm:p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
              >
                ⚠️ {error}
              </motion.div>
            )}

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-ai-cyan/10 border border-ai-cyan/30 rounded-lg text-ai-cyan text-sm"
              >
                ✓ Perfect! We will review your project and connect within 24 hours.
              </motion.div>
            )}

            {healthStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg text-xs border ${
                  healthStatus.startsWith('✓')
                    ? 'bg-green-500/10 border-green-500/30 text-green-400'
                    : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
                }`}
              >
                {healthStatus}
              </motion.div>
            )}

            <button
              type="button"
              onClick={checkHealth}
              disabled={healthCheckLoading}
              className="w-full px-3 py-2 text-xs bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-lg text-slate-400 hover:text-slate-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {healthCheckLoading ? '🔄 Testing connection...' : '🔗 Test API Connection'}
            </button>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value })
                  setError(null)
                }}
                placeholder="Your full name"
                disabled={loading}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-ai-cyan/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-ai-cyan focus:ring-1 focus:ring-ai-cyan/30 transition-all disabled:opacity-50 text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value })
                  setError(null)
                }}
                placeholder="you@company.com"
                disabled={loading}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-ai-cyan/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-ai-cyan focus:ring-1 focus:ring-ai-cyan/30 transition-all disabled:opacity-50 text-sm sm:text-base"
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">WhatsApp / Phone</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value })
                    setError(null)
                  }}
                  placeholder="+977 98000 00000"
                  disabled={loading}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-ai-cyan/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-ai-cyan focus:ring-1 focus:ring-ai-cyan/30 transition-all disabled:opacity-50 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Budget (optional)</label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => {
                    setFormData({ ...formData, budget: e.target.value })
                    setError(null)
                  }}
                  placeholder="Example: NPR 100k - 250k"
                  disabled={loading}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-ai-cyan/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-ai-cyan focus:ring-1 focus:ring-ai-cyan/30 transition-all disabled:opacity-50 text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Project Description *</label>
              <textarea
                value={formData.project}
                onChange={(e) => {
                  setFormData({ ...formData, project: e.target.value })
                  setError(null)
                }}
                placeholder="Describe your AI project goals and timeline..."
                rows={5}
                disabled={loading}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-ai-cyan/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-ai-cyan focus:ring-1 focus:ring-ai-cyan/30 transition-all resize-none disabled:opacity-50 text-sm sm:text-base"
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading || submitted}
              whileHover={!loading && !submitted ? { scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)' } : {}}
              whileTap={!loading && !submitted ? { scale: 0.95 } : {}}
              className="w-full btn-primary text-sm sm:text-base lg:text-lg py-3 font-semibold disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading && <span className="animate-spin">⚙️</span>}
              {loading ? 'Sending...' : submitted ? '✓ Sent Successfully!' : 'Send Project Details'}
            </motion.button>

            <p className="text-center text-xs sm:text-sm text-slate-500">
              We will respond within 24 hours. No spam, ever.
            </p>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}
