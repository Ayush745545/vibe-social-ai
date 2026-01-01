export default function FeatureCard({ title, description, badge }) {
  return (
    <div className="bg-[#121816] rounded-2xl p-8 shadow-xl border border-white/10 hover:border-green-400/50 transition">
      
      {badge && (
        <span className="inline-block mb-4 text-xs bg-green-500/10 text-green-400 px-3 py-1 rounded-full">
          {badge}
        </span>
      )}

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
