'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const items = [
  {
    id: 1,
    name: 'Minimal Desk Lamp',
    desc: 'A soft light for your calm working environment.',
    price: '$39.99',
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Modern Chair',
    desc: 'Comfort meets design with this elegant chair.',
    price: '$129.00',
    image:
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Aesthetic Shelf',
    desc: 'Perfect shelf to organize your beautiful collections.',
    price: '$89.50',
    image:
      'https://images.unsplash.com/photo-1582582429416-4a9b79f6d14b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Creative Notebook',
    desc: 'Write your ideas in a clean, creative space.',
    price: '$14.99',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80',
  },
]

export default function ItemsPage() {
  return (
    <section className="relative w-full min-h-screen py-32 px-6 overflow-hidden">
      <motion.div
        className="absolute w-[300px] h-[300px] bg-primary/30 rounded-full top-[-80px] left-[-60px] blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[220px] h-[220px] bg-secondary/30 rounded-full bottom-[-60px] right-[-50px] blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-800 mb-4">
            Explore Shelfly Items
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl">
            Beautifully curated products to match your calm digital lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.95,
                rotate: i % 2 ? 2 : -2,
              }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

              <Link
                href={`/items/${item.id}`}
                className="relative z-10 block h-full"
              >
                <div className="flex flex-col justify-end h-[360px] p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-white/90 mb-2">{item.desc}</p>
                  <span className="text-lg font-semibold">{item.price}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
