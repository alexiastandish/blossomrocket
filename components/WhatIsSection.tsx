import SectionLabel from './SectionLabel'

const touchpoints = [
  'Websites', 'Social Media', 'Marketing Campaigns', 'Sales Materials',
  'Print Collateral', 'Promotional Products', 'Apparel & Signage',
  'Tradeshow Experiences', 'Packaging', 'Company Stores',
]

export default function WhatIsSection() {
  return (
    <section
      id="whatis"
      className="bg-white"
      style={{ padding: 'clamp(80px,11vw,160px) clamp(20px,5vw,60px)' }}
      aria-labelledby="whatis-h"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,7vw,100px)] items-start">
        {/* Left */}
        <div className="rv">
          <SectionLabel text="What Is a Brand System?" />
          <h2
            id="whatis-h"
            className="rv font-semibold leading-[1.06] tracking-[-0.02em] mb-5"
            style={{ fontFamily: "'Parkinsans', sans-serif", fontSize: 'clamp(38px,5.5vw,76px)' }}
          >
            The Foundation Behind Every{' '}
            <em className="grad-text not-italic">Consistent Brand.</em>
          </h2>
          <p className="rv d1 text-[rgba(24,24,27,0.58)] leading-[1.8] mb-7" style={{ fontSize: 'clamp(15px,1.4vw,18px)', maxWidth: '560px' }}>
            A Brand System is a centralized framework that defines how a company presents itself across every customer, employee, and marketing touchpoint. It creates consistency across all channels — digital and physical.
          </p>
          <div className="rv d2 grid grid-cols-2 gap-2.5">
            {touchpoints.map(tp => (
              <div
                key={tp}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-[rgba(24,24,27,0.10)] text-[13px] font-medium transition-all duration-300 hover:border-[rgba(99,102,241,0.3)] hover:bg-[rgba(99,102,241,0.04)]"
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(90deg,#9b5cf6,#06b6d4)' }} />
                {tp}
              </div>
            ))}
          </div>
        </div>

        {/* Right — insight card */}
        <div className="rv d2">
          <div className="relative bg-[#fafaf8] border border-[rgba(24,24,27,0.10)] rounded-3xl p-9 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] grad-bg" />
            <p className="text-[17px] font-semibold leading-[1.5] mb-1">Most companies have logos.</p>
            <p className="text-[17px] font-semibold leading-[1.5] mb-2">Few companies have —</p>
            <span
              className="grad-text font-semibold leading-[1.0] block mb-4"
              style={{ fontFamily: "'Parkinsans', sans-serif", fontSize: 'clamp(36px,4.5vw,58px)' }}
            >
              systems.
            </span>
            <p className="text-[13px] text-[rgba(24,24,27,0.58)] leading-[1.7]">
              Blossom Rocket helps businesses build both — a visual identity and the scalable framework that deploys it consistently across every touchpoint your brand touches.
            </p>
            <div className="mt-6 pt-6 border-t border-[rgba(24,24,27,0.10)]">
              <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[rgba(24,24,27,0.58)] mb-3">Trusted across every brand touchpoint</p>
              <div className="flex flex-wrap gap-1.5">
                {['Brand Identity', 'Website Design', 'Design Systems', 'Company Stores'].map(t => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-[rgba(99,102,241,0.15)] font-semibold text-[#6366f1]"
                    style={{ background: 'linear-gradient(90deg,rgba(155,92,246,0.1),rgba(6,182,212,0.1))' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
