'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ItemDetailsPage() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/items.json')
      .then((res) => res.json())
      .then((data) => {
        const foundItem = data.find((i) => i.id.toString() === id)
        setItem(foundItem)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <p className="min-h-screen flex items-center justify-center text-lg">
        Loading item...
      </p>
    )
  }

  if (!item) {
    return (
      <p className="min-h-screen flex items-center justify-center text-lg">
        Item not found
      </p>
    )
  }

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

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            {item.title}
          </h1>
          <p className="text-slate-600 text-lg">
            Author: <span className="font-medium">{item.author}</span>
          </p>
          <p className="text-slate-600 text-lg">
            Category: <span className="font-medium">{item.category}</span>
          </p>
          <p className="text-2xl font-bold text-primary">${item.price}</p>

          <Link
            href="/items"
            className="inline-block mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            ← Back to Items
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
