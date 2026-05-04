'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, Mail, MapPin, Share, Briefcase } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/constants'

export function Footer() {
  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-ai-cyan/20 bg-linear-to-b from-midnight to-midnight-light/30 backdrop-blur-xl py-8 sm:py-10 md:py-12 px-3 sm:px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-6">

          {/* 🔥 Logo Section (UPDATED) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex justify-center md:justify-start items-center mb-4">
              <Image
                src="/logo-dark.svg"
                alt="Himalayan AI Tech"
                width={180}
                height={55}
                className="object-contain hover:opacity-80 transition duration-300"
              />
            </div>

            <p className="text-slate-400/90 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              AI chatbots, intelligent websites and automation built to sell.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Services
            </h3>

            <div className="space-y-2">
              {[
                { label: 'AI Chatbot Development', id: 'services' },
                { label: 'AI Website Integration', id: 'services' },
                { label: 'Business Automation', id: 'services' },
                { label: 'Custom AI Solutions', id: 'services' },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-slate-400 hover:text-ai-cyan transition-colors text-sm py-1"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Contact
            </h3>

            <div className="space-y-3">

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-slate-400 hover:text-ai-cyan transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
                <span>+977 9849745629</span>
              </a>

              <a
                href="mailto:himalayanaitech@gmail.com"
                className="flex items-center justify-center md:justify-start gap-2 text-slate-400 hover:text-ai-cyan transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>himalayanaitech@gmail.com</span>
              </a>

              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Gokarneshwor-5, Kathmandu, Nepal</span>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="pt-8 border-t border-ai-cyan/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">

            <p className="text-xs sm:text-sm text-slate-500 text-center md:text-left">
              © {new Date().getFullYear()} Himalayan AI Tech. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6">

              <a
                href="https://www.facebook.com/share/1C4mEwXKDe/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-ai-cyan transition-all duration-300 group"
              >
                <Share className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Facebook</span>
              </a>

              <a
                href="https://www.linkedin.com/in/jayram-lamichhane-83418a9b"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-ai-cyan transition-all duration-300 group"
              >
                <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>

            </div>
          </div>
        </motion.div>

      </div>
    </motion.footer>
  )
}