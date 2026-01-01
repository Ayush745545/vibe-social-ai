import Navbar from "@/components/Navbar"
import FeatureCard from "@/components/FeatureCard"


export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F0E] text-gray-200">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-32 px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Create Viral Content <br />
          <span className="text-green-400">with AI</span>
        </h2>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl">
          Vibe Social helps Indian creators & businesses generate
          captions, reel ideas, and content in seconds — in Hinglish,
          Hindi & English.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-green-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-green-400 transition">
            Try Free
          </button>
          <button className="border border-green-500 px-6 py-3 rounded-xl text-green-400 hover:bg-green-500 hover:text-black transition">
            See Demo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-48 px-6">
        <div className="max-w-6xl mx-auto">

          <h3 className="text-center text-3xl md:text-4xl font-bold mb-16">
            Everything You Need to <span className="text-green-400">Grow Faster</span>
          </h3>

          <div className="grid grid-cols-3 gap-8">
            
            <FeatureCard
              title="AI Captions"
              description="Generate high-quality captions in Hinglish, Hindi & English that connect with Indian audiences."
            />

            <FeatureCard
              title="Reel Ideas"
              description="Get trending reel & shorts ideas with hooks, CTAs, and formats tailored for your niche."
            />

            <FeatureCard
              title="Image Enhancer"
              badge="Video Reels Soon"
              description="Enhance images for social media. AI-powered video reel enhancement coming soon."
            />

          </div>

        </div>
      </section>
    </main>
  )
}
