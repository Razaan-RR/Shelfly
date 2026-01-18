export default function HeroSection() {
  return (
    <section className="w-full h-[90vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary to-secondary text-white px-6">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 drop-shadow-lg">
        Welcome to Shelfly
      </h1>
      <p className="text-lg sm:text-2xl mb-8 drop-shadow">
        Browse, discover, and organize your favorite items effortlessly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/items"
          className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Browse Items
        </a>
        <a
          href="/login"
          className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition"
        >
          Login
        </a>
      </div>
    </section>
  )
}
