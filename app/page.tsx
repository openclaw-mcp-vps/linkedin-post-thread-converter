export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Turn LinkedIn Posts into{" "}
          <span className="text-[#58a6ff]">Twitter Threads</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste your LinkedIn post and get a perfectly structured Twitter thread — with a strong hook, clean splits, and a CTA — in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-3 font-semibold">Preview</p>
          <div className="mb-4">
            <p className="text-xs text-[#58a6ff] font-semibold mb-1">LinkedIn Input</p>
            <p className="text-sm text-[#8b949e] leading-relaxed">
              "After 10 years in marketing, I've learned that the best campaigns aren't about the product — they're about the person. Here's what changed everything for me..."
            </p>
          </div>
          <div className="border-t border-[#30363d] pt-4 space-y-3">
            <p className="text-xs text-[#58a6ff] font-semibold mb-1">Twitter Thread Output</p>
            {[
              "1/ After 10 years in marketing, I learned the best campaigns aren't about the product — they're about the person. 🧵",
              "2/ Most brands obsess over features. But buyers don't care about features. They care about how your product makes them feel.",
              "3/ The shift that changed everything: stop selling the thing. Start selling the transformation.",
              "4/ If this resonated, follow for more marketing insights. And RT tweet 1 to share with your team 👇"
            ].map((tweet, i) => (
              <div key={i} className="bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-sm text-[#c9d1d9]">
                {tweet}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited thread conversions",
              "AI-optimized hooks & CTAs",
              "Character limit enforcement",
              "One-click copy per tweet",
              "LinkedIn URL or text input"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Start for $9/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the conversion work?",
              a: "You paste your LinkedIn post text (or a URL) and our AI analyzes the content, identifies key points, and restructures it into a Twitter thread with a compelling hook, numbered tweets under 280 characters, and a strong CTA."
            },
            {
              q: "Can I edit the generated thread?",
              a: "Yes. Every tweet in the generated thread is editable before you copy it. You can tweak wording, reorder tweets, or regenerate individual sections."
            },
            {
              q: "What if I want to cancel?",
              a: "You can cancel your subscription at any time from your billing portal. No questions asked, no lock-in."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} LinkedIn Thread Converter. All rights reserved.
      </footer>
    </main>
  );
}
