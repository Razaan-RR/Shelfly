'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineLogin } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    await signOut(auth)
    setDropdown(false)
    setOpen(false)
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <div className="flex items-center justify-between px-6 py-3 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/20 shadow-xl">
        <div className="px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-sm sm:text-base">
          Shelfly
        </div>

        <div className="hidden md:flex gap-6 items-center text-white drop-shadow font-medium text-sm">
          <Link href="/" className="flex items-center gap-1 hover:text-gray-900 transition">
            <AiOutlineHome /> Home
          </Link>
          <Link href="/items" className="flex items-center gap-1 hover:text-gray-900 transition">
            <AiOutlineShoppingCart /> Items
          </Link>

          {!user ? (
            <Link href="/login" className="flex items-center gap-1 hover:text-gray-900 transition">
              <AiOutlineLogin /> Login
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center text-white text-2xl"
              >
                <FaUserCircle />
              </button>
              {dropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl text-black flex flex-col">
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100"
                  >
                    <BiLogOut /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl">
          ☰
        </button>
      </div>

      {open && (
        <div className="mt-2 md:hidden rounded-2xl bg-black/30 backdrop-blur-xl border border-white/30 shadow-xl p-4 flex flex-col gap-4 text-white drop-shadow text-sm">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-1 hover:text-gray-900 transition">
            <AiOutlineHome /> Home
          </Link>
          <Link href="/items" onClick={() => setOpen(false)} className="flex items-center gap-1 hover:text-gray-900 transition">
            <AiOutlineShoppingCart /> Items
          </Link>

          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)} className="flex items-center gap-1 hover:text-gray-900 transition">
              <AiOutlineLogin /> Login
            </Link>
          ) : (
            <button onClick={handleLogout} className="flex items-center gap-1 hover:text-gray-900 transition">
              <BiLogOut /> Logout
            </button>
          )}
        </div>
      )}
    </nav>
  )
}
