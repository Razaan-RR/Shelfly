'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="relative w-full py-32 px-6 overflow-hidden bg-gradient-to-b from-[#e0f2fe] via-[#ede9fe] to-[#ecfeff]">
      <motion.div
        className="absolute w-[350px] h-[350px] bg-primary/30 rounded-full top-[-80px] left-[-100px] blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] bg-secondary/30 rounded-full bottom-[-60px] right-[-80px] blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-extrabold text-slate-800 mb-6"
        >
          Start Organizing Your World with Shelfly
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-600 text-lg sm:text-xl mb-10 max-w-2xl mx-auto"
        >
          Join thousands of users who turned chaos into clarity. Your
          collections, beautifully organized and always accessible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/signup">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg shadow-xl"
            >
              Get Started Free
            </motion.button>
          </Link>

          <Link href="/features">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold text-lg bg-white/70 backdrop-blur shadow-xl"
            >
              Explore Features
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="absolute -top-10 left-10 text-5xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          ✨
        </motion.div>

        <motion.div
          className="absolute top-20 right-12 text-5xl"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          📚
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 text-5xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          🚀
        </motion.div>
      </div>
    </section>
  )
}
