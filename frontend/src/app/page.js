export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F0E] text-gray-200">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold text-green-400">
          Vibe Social
        </h1>
        <button className="bg-green-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-green-400">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-24 px-6">
        <h2 className="text-5xl font-extrabold leading-tight">
          Create Viral Content <br />
          <span className="text-green-400">with AI</span>
        </h2>

        <p className="mt-6 text-lg text-gray-400 max-w-xl">
          Vibe Social helps Indian creators & businesses generate
          captions, reel ideas, and content in seconds — in Hinglish,
          Hindi & English.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-green-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-green-400">
            Try Free
          </button>
          <button className="border border-green-500 px-6 py-3 rounded-xl text-green-400 hover:bg-green-500 hover:text-black">
            See Demo
          </button>
        </div>
      </section>

    </main>
  )
}
