'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-ai-cyan/20 bg-gradient-to-b from-midnight to-midnight-light/30 backdrop-blur-xl py-10 sm:py-12 px-4 sm:px-6"
    >
      <div className="section-container grid gap-8 md:grid-cols-3 items-start">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Himalayan AI Tech</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Kathmandu, Nepal
            <br />
            Gokarneshwor 05
            <br />
            44600
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Email: <a href="himalayanaitech@gmail.com" className="text-ai-cyan hover:text-white">himalayanaitech@gmail.com</a>
            <br />
            <br />
            WhatsApp: <a href="https://wa.me/9779849745629" target="_blank" rel="noreferrer" className="text-ai-cyan hover:text-white">+977 9849745629</a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Fast response</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            We reply to demo requests within 24 hours. Ready to discuss your project and help you launch quickly.
          </p>
        </div>
      </div>

      <div className="section-container mt-8 text-center">
        <p className="text-xs sm:text-sm text-slate-500">
          © 2026 Himalayan AI Tech. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
