'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'

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
      className="border-t border-ai-cyan/20 bg-linear-to-b from-midnight to-midnight-light/30 backdrop-blur-xl py-8 sm:py-10 md:py-12 px-4 sm:px-6"
    >
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex justify-center md:justify-start items-center gap-3 mb-3">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Himalayan AI Tech"
                  fill
                  className="object-contain"
                  sizes="56px"
                />
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-widest text-ai-cyan leading-tight">Himalayan</div>
                <div className="text-lg font-bold text-white">AI Tech</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              AI chatbots, intelligent websites and automation built to sell.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Services</h3>
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

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contact</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/9779849745629"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-slate-400 hover:text-ai-cyan transition-colors text-sm group"
              >
                <span className="text-green-400 group-hover:scale-110 transition-transform">📱</span>
                <span>+977 9849745629</span>
              </a>
              <a
                href="mailto:himalayanaitech@gmail.com"
                className="flex items-center justify-center md:justify-start gap-2 text-slate-400 hover:text-ai-cyan transition-colors text-sm group"
              >
                <span className="text-blue-400 group-hover:scale-110 transition-transform">✉️</span>
                <span>himalayanaitech@gmail.com</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-sm">
                <span className="text-purple-400">📍</span>
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
          viewport={{ once: true }}
          className="pt-8 border-t border-ai-cyan/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs sm:text-sm text-slate-500 text-center md:text-left">
              © 2026 Himalayan AI Tech. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
  <a
    href="https://www.facebook.com/share/1C4mEwXKDe/"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 text-slate-400 hover:text-ai-cyan transition-all duration-300 group"
  >
    <FaFacebook className="group-hover:scale-110 transition-transform" />
    <span>Facebook</span>
  </a>

  <a
    href="https://www.linkedin.com/in/jayram-lamichhane-83418a9b"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 text-slate-400 hover:text-ai-cyan transition-all duration-300 group"
  >
    <FaLinkedin className="group-hover:scale-110 transition-transform" />
    <span>LinkedIn</span>
  </a>
</div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
