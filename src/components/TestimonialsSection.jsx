'use client'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'Product Manager',
    text: 'Shelfly has completely transformed how I organize my digital items. Everything is smooth, fast, and enjoyable!',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Michael Lee',
    role: 'Designer',
    text: 'The minimal and clean design of Shelfly makes managing my collections a delightful experience.',
    image:
      'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww',
  },
  {
    name: 'Sara Williams',
    role: 'Developer',
    text: 'I love the smooth animations and fast access. Shelfly feels modern and really intuitive.',
    image:
      'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8fDA%3D',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-28 sm:py-36 px-6 overflow-hidden">
      <motion.div
        className="absolute w-[300px] h-[300px] bg-primary/30 rounded-full top-[-50px] left-[-50px] blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] bg-secondary/30 rounded-full bottom-[-30px] right-[-30px] blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 mb-4">
            What People Say
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl">
            Hear from users who have experienced the Shelfly difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="relative p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 rounded-3xl"
                style={{ backgroundImage: `url(${t.image})` }}
              />
              <div className="absolute inset-0 bg-white/70 dark:bg-slate-800/70 rounded-3xl" />

              <div className="relative z-10 flex flex-col items-center">
                <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg mb-4 leading-relaxed">
                  &quot;{t.text}&quot;
                </p>
                <h4 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">
                  {t.name}
                </h4>
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
