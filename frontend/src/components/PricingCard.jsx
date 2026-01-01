export default function PricingCard({
  title,
  price,
  description,
  features,
  popular,
}) {
  return (
    <div
      className={`rounded-2xl p-8 shadow-xl border transition
        ${
          popular
            ? "bg-[#121816] border-green-400"
            : "bg-[#0F1413] border-white/10 hover:border-green-400/40"
        }`}
    >
      {popular && (
        <span className="inline-block mb-4 text-xs bg-green-500/10 text-green-400 px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>

      <div className="text-4xl font-bold mb-6">
        {price}
        <span className="text-base font-medium text-gray-400">/month</span>
      </div>

      <ul className="space-y-3 mb-8 text-sm text-gray-300">
        {features.map((f, i) => (
          <li key={i}>✓ {f}</li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-xl font-semibold transition
          ${
            popular
              ? "bg-green-500 text-black hover:bg-green-400"
              : "border border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
          }`}
      >
        Get Started
      </button>
    </div>
  )
}
