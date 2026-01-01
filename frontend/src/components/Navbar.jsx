export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <h1 className="text-2xl font-bold text-green-400">
        Vibe Social
      </h1>

      <button className="bg-green-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-green-400 transition">
        Get Started
      </button>
    </nav>
  )
}
