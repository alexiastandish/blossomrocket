import SectionLabel from './SectionLabel'

const departments = [
  { dept: 'Marketing', action: 'Creates presentations and campaign assets' },
  { dept: 'Sales', action: 'Creates one-pagers and sales collateral' },
  { dept: 'HR', action: 'Creates onboarding materials and recruiting kits' },
  { dept: 'Events', action: 'Orders promotional products and tradeshow materials' },
  { dept: 'Operations', action: 'Orders apparel and branded merchandise' },
]

const outcomes = [
  'Logos become inconsistent across materials',
  'Colors drift from team to team',
  'Merchandise looks disconnected from digital',
  'Marketing materials feel unrelated',
  'No single source of truth for the brand',
]

export default function WhySection() {
  return (
    <section
      id="why"
      className="bg-[#18181b] text-white"
      style={{ padding: 'clamp(80px,11vw,160px) clamp(20px,5vw,60px)' }}
      aria-labelledby="why-h"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,7vw,100px)] items-start">
        {/* Left */}
        <div className="rv">
          <SectionLabel text="Why Brands Become Inconsistent" light />
          <h2
            id="why-h"
            className="font-semibold leading-[1.06] tracking-[-0.02em] mb-5"
            style={{ fontFamily: "'Parkinsans', sans-serif", fontSize: 'clamp(38px,5.5vw,76px)' }}
          >
            As companies grow, teams begin creating assets{' '}
            <em className="grad-text not-italic">independently.</em>
          </h2>
          <p className="text-[rgba(255,255,255,0.45)] leading-[1.8] mb-8" style={{ fontSize: 'clamp(15px,1.4vw,18px)', maxWidth: '560px' }}>
            Over time, the brand begins to fragment. Logos become inconsistent. Colors change. Merchandise looks disconnected. Marketing materials feel unrelated.
          </p>
          <div className="flex flex-col gap-4">
            {departments.map(({ dept, action }) => (
              <div
                key={dept}
                className="flex items-start gap-4 px-6 py-5 rounded-2xl border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:border-[rgba(155,92,246,0.3)] hover:bg-[rgba(155,92,246,0.06)]"
              >
                <div>
                  <div className="text-[11px] font-bold tracking-[0.12em] uppercase mb-1 grad-text">{dept}</div>
                  <div className="text-[14px] text-[rgba(255,255,255,0.7)] leading-[1.5]">{action}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="rv d2 flex flex-col gap-4">
          <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8">
            <h3
              className="font-semibold mb-5 leading-[1.2]"
              style={{ fontFamily: "'Parkinsans', sans-serif", fontSize: '28px' }}
            >
              The result is a brand that no longer feels like one company.
            </h3>
            <div className="flex flex-col">
              {outcomes.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-[14px] text-[rgba(255,255,255,0.5)] py-3 border-b border-[rgba(255,255,255,0.06)] last:border-b-0"
                >
                  <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] text-[rgba(239,68,68,0.7)] flex-shrink-0 bg-[rgba(239,68,68,0.15)] border border-[rgba(239,68,68,0.3)]">✕</div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div
            className="p-[18px] px-6 rounded-2xl border border-[rgba(155,92,246,0.2)]"
            style={{ background: 'linear-gradient(135deg,rgba(155,92,246,0.15),rgba(6,182,212,0.1))' }}
          >
            <p className="text-[14px] text-[rgba(255,255,255,0.75)] leading-[1.7]">
              <strong className="text-white">A Brand System solves this problem</strong> by creating a single source of truth — one centralized framework that every team, department, and vendor works from.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
