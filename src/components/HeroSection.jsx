'use client'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[95vh] overflow-hidden flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-[#e0f2fe] via-[#ede9fe] to-[#ecfeff]" />

      <motion.div
        initial={{ x: -100, y: -80 }}
        animate={{ x: [-100, 100, -100], y: [-80, 60, -80] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#c7d2fe] blur-3xl opacity-70"
      />

      <motion.div
        initial={{ x: 120, y: 100 }}
        animate={{ x: [120, -120, 120], y: [100, -80, 100] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[220px] h-[220px] sm:w-[360px] sm:h-[360px] rounded-full bg-[#bae6fd] blur-3xl opacity-70"
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold text-slate-800 leading-tight mb-6"
        >
          Your Items,
          <span className="block bg-gradient-to-r from-[#60a5fa] to-[#8b5cf6] bg-clip-text text-transparent">
            Beautifully Organized
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base sm:text-xl text-slate-600 mb-10"
        >
          <span className="font-bold text-slate-800">Shelfly</span> helps you collect, manage, and explore items in a calm, clean,
          and powerful workspace.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="/items"
            className="px-8 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow-lg"
          >
            Explore Items
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="/login"
            className="px-8 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg border border-slate-200"
          >
            Login
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
