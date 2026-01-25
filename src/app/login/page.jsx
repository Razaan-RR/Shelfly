'use client'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('demo@shelfly.com')
  const [password, setPassword] = useState('demo1234')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/items')
    } catch (err) {
      setError('Invalid email or password')
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-[#f0f9ff] to-[#e5e7eb]">
      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md space-y-4 relative overflow-hidden"
      >
        <motion.div
          className="absolute w-[200px] h-[200px] bg-indigo-400/30 rounded-full top-[-60px] left-[-60px] blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[150px] h-[150px] bg-purple-400/30 rounded-full bottom-[-50px] right-[-40px] blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />

        <h2 className="text-2xl font-bold text-center z-10 relative">
          Login to Shelfly
        </h2>

        {error && <p className="text-red-500 text-sm z-10 relative">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-xl z-10 relative"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-xl z-10 relative"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold z-10 relative"
        >
          Login
        </button>
      </motion.form>
    </section>
  )
}
