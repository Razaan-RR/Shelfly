'use client'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Link from 'next/link'

const items = [
  {
    id: 1,
    name: 'Minimal Desk Lamp',
    desc: 'A soft light for your calm working environment. Designed with minimal aesthetics and warm illumination.',
    price: '$39.99',
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 2,
    name: 'Modern Chair',
    desc: 'Comfort meets design with this elegant chair. Built for long sessions and stylish interiors.',
    price: '$129.00',
    image:
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 3,
    name: 'Aesthetic Shelf',
    desc: 'Perfect shelf to organize your beautiful collections while keeping your space artistic.',
    price: '$89.50',
    image:
      'https://images.unsplash.com/photo-1582582429416-4a9b79f6d14b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 4,
    name: 'Creative Notebook',
    desc: 'Write your ideas in a clean, creative space that inspires productivity.',
    price: '$14.99',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=80',
  },
]

export default function ItemDetailsPage() {
  const { id } = useParams()
  const item = items.find((i) => i.id === Number(id))

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600">
        Item not found
      </div>
    )
  }

  return (
    <section className="relative w-full min-h-screen py-28 px-6 overflow-hidden">
      <motion.div
        className="absolute w-[350px] h-[350px] bg-primary/30 rounded-full top-[-100px] left-[-80px] blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] bg-secondary/30 rounded-full bottom-[-80px] right-[-70px] blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl h-[360px] sm:h-[420px] lg:h-[520px]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/20 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-800"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
            {item.name}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mb-6">
            {item.desc}
          </p>
          <div className="text-2xl font-bold text-indigo-600 mb-8">
            {item.price}
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition">
              Add to Cart
            </button>
            <Link
              href="/items"
              className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition"
            >
              Back to Items
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
