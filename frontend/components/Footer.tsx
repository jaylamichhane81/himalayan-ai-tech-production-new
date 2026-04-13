'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-midnight to-midnight-light/30 backdrop-blur-xl py-10 sm:py-12 px-4 sm:px-6"
    >
      <div className="section-container text-center">
        <p className="text-xs sm:text-sm text-white">
          © 2026 Himalayan AI Tech. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
