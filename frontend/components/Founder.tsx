'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles, User } from 'lucide-react'

export function Founder() {
  return (
    <section id="founder" className="scroll-mt-24 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-2 sm:mb-4"
        >
          <div className="relative overflow-hidden rounded-full border-2 border-ai-cyan/30 glow-cyan w-28 h-28">
            <Image
              src="/images/pic.jpg"
              alt="Jayram Lamichhane"
              width={112}
              height={112}
              className="w-full h-full object-cover"
              priority={false}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-4 sm:mb-6"
        >
          <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950/80 px-4 py-2 text-ai-cyan border border-ai-cyan/20 mx-auto">
            <Sparkles className="w-5 h-5" />
            Founder-led engineering excellence
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4 sm:mb-6">
            Founder-Led Excellence & Accountability
          </h2>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-4">
            I am Jayram Lamichhane, building Himalayan AI with a commitment to engineering excellence.
          </p>
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            No layers. No delays. Direct access to expertise. We deliver what we promise.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 justify-center text-slate-300">
            <User className="w-4 h-4 text-ai-cyan" />
            Direct collaboration with the founder on every project.
          </div>
        </motion.div>
      </motion.div>      </div>    </section>
  )
}
