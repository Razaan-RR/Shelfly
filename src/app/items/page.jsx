'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ItemsPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/items.json')
      .then(res => res.json())
      .then(data => {
        setItems(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

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
            Beautifully curated books fetched directly from our server.
          </p>
        </motion.div>

        {loading ? (
          <p className="text-center text-lg text-slate-600">Loading items...</p>
        ) : (
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
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/90 mb-2">{item.author}</p>
                    <span className="text-lg font-semibold">${item.price}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
