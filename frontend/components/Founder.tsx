'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles, UserCheck } from 'lucide-react'

export function Founder() {
  return (
    <section
      id="founder"
      className="scroll-mt-24 py-12 sm:py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-3 sm:mb-5"
          >
            <div className="relative overflow-hidden rounded-full border border-ai-cyan/30 glow-cyan w-24 h-24 sm:w-28 sm:h-28">
              <Image
                src="/images/pic.jpg"
                alt="Jayram Lamichhane"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >

            {/* Badge */}
            <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950/80 px-4 py-2 text-ai-cyan border border-ai-cyan/20 mx-auto text-xs sm:text-sm">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              Founder-led engineering excellence
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4 sm:mb-6 leading-tight">
              Founder-Led Excellence & Accountability
            </h2>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-4 max-w-2xl mx-auto">
              I am Jayram Lamichhane, building Himalayan AI with a commitment to engineering excellence.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base max-w-xl mx-auto">
              No layers. No delays. Direct access to expertise. We deliver what we promise.
            </p>

            {/* Footer line */}
            <div className="mt-6 inline-flex items-center gap-2 justify-center text-slate-300 text-sm sm:text-base">
              <UserCheck className="w-4 h-4 text-ai-cyan" />
              Direct collaboration with the founder on every project.
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}