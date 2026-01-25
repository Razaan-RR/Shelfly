'use client'
import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'Is Shelfly free to use?',
    a: 'Yes, Shelfly offers a free plan with all the essential features to organize and manage your collections.',
  },
  {
    q: 'Can I access Shelfly on mobile?',
    a: 'Absolutely. Shelfly is fully responsive and works beautifully on all devices.',
  },
  {
    q: 'Is my data safe on Shelfly?',
    a: 'Your data is securely stored and protected with modern security standards.',
  },
  {
    q: 'Can I customize my collections?',
    a: 'Yes, you can organize, rename, and structure everything exactly the way you like.',
  },
]

export default function FAQ() {
  return (
    <section className="relative w-full py-28 sm:py-36 px-6 overflow-hidden">
      <motion.div
        className="absolute w-[300px] h-[300px] bg-primary/30 rounded-full top-[-60px] left-[-60px] blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] bg-secondary/30 rounded-full bottom-[-40px] right-[-40px] blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl">
            Everything you need to know about Shelfly in one place.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative p-6 sm:p-8 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/70 dark:bg-slate-800/70 rounded-3xl" />

              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {item.q}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  {item.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
