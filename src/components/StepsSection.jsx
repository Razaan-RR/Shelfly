'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Add Your Items',
    desc: 'Quickly add your favorite items and categorize them effortlessly.',
    icon: '📝',
    image:
      'https://plus.unsplash.com/premium_photo-1680011049308-daa9ea69dbcd?w=600&auto=format&fit=crop&q=60',
  },
  {
    title: 'Organize Smoothly',
    desc: 'Drag, drop, and organize your collections in a visually pleasing way.',
    icon: '📂',
    image:
      'https://images.unsplash.com/photo-1649597676617-d7afa61647c8?w=600&auto=format&fit=crop&q=60',
  },
  {
    title: 'Discover & Explore',
    desc: 'Easily browse your items or explore new ones curated for you.',
    icon: '🔍',
    image:
      'https://images.unsplash.com/photo-1533657794-ad5a8ae38c55?w=600&auto=format&fit=crop&q=60',
  },
]

export default function StepsSection() {
  return (
    <section className="relative w-full py-32 px-6 overflow-hidden bg-gradient-to-b from-[#e0f2fe] via-[#ede9fe] to-[#ecfeff]">
      {/* Animated blobs */}
      <motion.div
        className="absolute w-[300px] h-[300px] bg-primary/30 rounded-full top-[-50px] left-[-80px] blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] bg-secondary/30 rounded-full bottom-[-50px] right-[-60px] blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-20 relative z-10"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 mb-4">
          How Shelfly Flows
        </h2>
        <p className="text-slate-600 text-lg sm:text-xl">
          From adding to exploring, every step is smooth and visually
          delightful.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between items-center">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.95,
              rotate: i % 2 === 0 ? -3 : 3,
            }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: i * 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="relative w-full lg:w-1/3 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="relative w-full h-[320px] sm:h-[360px] rounded-3xl overflow-hidden shadow-2xl">
              <motion.div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${step.image})` }}
                animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-white/50 to-white/20 rounded-3xl" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {step.icon}
                </motion.div>
                <motion.h3
                  className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-slate-600 text-base sm:text-lg leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {step.desc}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
