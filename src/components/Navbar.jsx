'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineLogin,
} from 'react-icons/ai'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <div className="flex items-center justify-between px-6 py-3 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/20 shadow-xl">
        <div className="px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-sm sm:text-base">
          Shelfly
        </div>

        <div className="hidden md:flex gap-6 items-center text-white drop-shadow font-medium text-sm">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-gray-900 transition"
          >
            <AiOutlineHome /> Home
          </Link>
          <Link
            href="/items"
            className="flex items-center gap-1 hover:text-gray-900 transition"
          >
            <AiOutlineShoppingCart /> Items
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-1 hover:text-gray-900 transition"
          >
            <AiOutlineLogin /> Login
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="mt-2 md:hidden rounded-2xl bg-black/30 backdrop-blur-xl border border-white/30 shadow-xl p-4 flex flex-col gap-4 text-white drop-shadow text-sm">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1 hover:text-gray-900 transition"
          >
            <AiOutlineHome /> Home
          </Link>
          <Link
            href="/items"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1 hover:text-gray-900 transition"
          >
            <AiOutlineShoppingCart /> Items
          </Link>
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1 hover:text-gray-900 transition"
          >
            <AiOutlineLogin /> Login
          </Link>
        </div>
      )}
    </nav>
  )
}
