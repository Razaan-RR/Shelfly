'use client'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Smart Browsing',
    desc: 'Find and explore your items quickly with a clean, distraction-free layout.',
  },
  {
    title: 'Easy Organization',
    desc: 'Group, manage and structure your collections without complexity.',
  },
  {
    title: 'Fast Access',
    desc: 'Everything you need is always just one click away.',
  },
  {
    title: 'Minimal Design',
    desc: 'Soft visuals that help you focus on what really matters.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative w-full py-28 overflow-hidden">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#c7d2fe] blur-[120px]"
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#bae6fd] blur-[120px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-24"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4">
          Experience Shelfly Flow
        </h2>
        <p className="text-slate-600 text-lg sm:text-xl">
          Not a tool. A smooth rhythm for organizing your digital world.
        </p>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col sm:flex-row items-center gap-8 mb-20 ${
              i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#93c5fd] to-[#c4b5fd] flex items-center justify-center text-slate-900 text-2xl font-bold shadow-xl"
            >
              {i + 1}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                {f.title}
              </h3>
              <p className="text-slate-600 text-base sm:text-lg">{f.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
