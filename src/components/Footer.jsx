'use client'

import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="mt-12 w-full flex flex-col items-center justify-center px-6 py-6 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/20 shadow-xl text-white drop-shadow-lg">
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-between w-full max-w-4xl">
        <div className="text-lg font-semibold">Shelfly</div>
        <div className="flex gap-4 text-2xl">
          <a href="#" className="hover:text-gray-900 transition">
            <AiFillTwitterCircle />
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            <AiFillFacebook />
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            <AiFillInstagram />
          </a>
        </div>
      </div>

      <p className="mt-4 text-sm text-white/70">
        &copy; {new Date().getFullYear()} Shelfly. All rights reserved.
      </p>
    </footer>
  )
}
