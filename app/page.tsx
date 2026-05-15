export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Developers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Turn Interview Rejections Into{' '}
          <span className="text-[#58a6ff]">Actionable Insights</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Aggregate feedback from every technical interview, spot recurring skill gaps, and visualize your progress — so your next attempt lands the offer.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card surprises.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['Multi-company feedback log', 'Skill gap analytics', 'Progress charts', 'Pattern detection', 'Export reports'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$9</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#6e7681] text-sm mb-6">Everything you need to land the job</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited interview entries',
              'Skill gap heatmap',
              'Progress timeline',
              'Pattern & trend detection',
              'CSV / PDF export',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Who is this for?',
              a: 'Job-seeking developers, bootcamp graduates, and career switchers who want to systematically improve after technical interviews instead of guessing what went wrong.'
            },
            {
              q: 'How does the skill gap analysis work?',
              a: 'You log feedback after each interview. The app aggregates recurring themes — like "weak on system design" or "needs more DSA practice" — and surfaces patterns across all your sessions.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel with one click from your account settings. You keep access until the end of your billing period with no questions asked.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Interview Feedback Tracker. All rights reserved.
      </footer>
    </main>
  )
}
