import SectionLabel from './SectionLabel'

const steps = [
  { num: '1', label: 'Foundation', title: 'Brand Identity', desc: 'Logo systems, typography, color palettes, brand voice, and foundational brand standards.' },
  { num: '2', label: 'Framework', title: 'Brand System', desc: 'The centralized framework that defines how your brand presents itself across every touchpoint.' },
  { num: '3', label: 'Digital Layer', title: 'Design System & Asset Library', desc: 'Reusable components, layouts, and marketing templates built on your brand standards.' },
  { num: '4', label: 'Physical Layer', title: 'Approved Merchandise Standards', desc: 'Apparel guidelines, embroidery specs, logo placement rules, print and packaging standards.' },
  { num: '5', label: 'Operations', title: 'Company Store', desc: 'The operational layer that makes brand-compliant ordering accessible to every team and department.' },
  { num: '✓', label: 'Result', title: 'Consistent Brand Experience', desc: 'A brand that feels like one company — everywhere, every time, without exception.', isResult: true },
]

const whoWeWorkWith = [
  'Startups', 'Growing Businesses', 'Multi-Location Orgs', 'Professional Services',
  'Construction', 'Healthcare', 'Manufacturing', 'Franchises', 'Recruiting Teams', 'Event Marketing',
]

const resources = [
  'What Is A Brand System?',
  'Brand Style Guide vs Design System',
  'How Company Stores Improve Brand Consistency',
  'Promotional Products That Strengthen Brand Recognition',
]

export default function FrameworkSection() {
  return (
    <section
      id="framework"
      className="bg-[#fafaf8]"
      style={{ padding: 'clamp(80px,11vw,160px) clamp(20px,5vw,60px)' }}
      aria-labelledby="fw-h"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,7vw,80px)] items-start">
        {/* Left — steps */}
        <div>
          <SectionLabel text="The Blossom Rocket Framework" />
          <h2
            id="fw-h"
            className="rv font-semibold leading-[1.06] tracking-[-0.02em] mb-5"
            style={{ fontFamily: "'Parkinsans', sans-serif", fontSize: 'clamp(38px,5.5vw,76px)' }}
          >
            One Framework.<br />
            <em className="grad-text not-italic">Complete Consistency.</em>
          </h2>
          <p className="rv d1 text-[rgba(24,24,27,0.58)] leading-[1.8] mb-[52px]" style={{ fontSize: 'clamp(15px,1.4vw,18px)', maxWidth: '560px' }}>
            A single source of truth for your brand that makes future growth easier to manage.
          </p>

          <div className="rv d2">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`grid gap-6 items-start py-7 ${i < steps.length - 1 ? 'border-b border-[rgba(24,24,27,0.10)]' : ''}`}
                style={{ gridTemplateColumns: '40px 1fr' }}
              >
                <div className="flex flex-col items-center pt-1">
                  <div className="w-9 h-9 rounded-full border border-[rgba(24,24,27,0.12)] flex items-center justify-center text-[15px] font-semibold text-[rgba(24,24,27,0.58)] transition-all duration-300 hover:bg-[#9b5cf6] hover:border-[#9b5cf6] hover:text-white" style={{ fontFamily: "'Parkinsans', sans-serif" }}>
                    {step.num}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.14em] uppercase text-[rgba(24,24,27,0.58)] mb-1 font-semibold">{step.label}</div>
                  <div
                    className={`font-semibold mb-1.5 leading-[1.2] ${step.isResult ? 'grad-text' : ''}`}
                    style={{ fontFamily: "'Parkinsans', sans-serif", fontSize: '22px' }}
                  >
                    {step.title}
                  </div>
                  <div className="text-[14px] text-[rgba(24,24,27,0.58)] leading-[1.75]">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — who we work with + resources */}
        <div className="rv d3 lg:sticky" style={{ top: 'calc(68px + 20px)' }}>
          <div className="bg-white border border-[rgba(24,24,27,0.10)] rounded-3xl p-9">
            <h3
              className="font-semibold mb-5 leading-[1.2]"
              style={{ fontFamily: "'Parkinsans', sans-serif", fontSize: '26px' }}
            >
              Who We Work With
            </h3>
            <p className="text-[14px] text-[rgba(24,24,27,0.58)] leading-[1.75] mb-5">
              Blossom Rocket partners with any organization looking to create a more consistent brand experience across digital and physical channels.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-7">
              {whoWeWorkWith.map(tag => (
                <span
                  key={tag}
                  className="text-[12px] font-semibold tracking-[0.06em] px-3.5 py-1.5 rounded-full border border-[rgba(24,24,27,0.12)] text-[rgba(24,24,27,0.58)] transition-all duration-300 hover:border-[rgba(99,102,241,0.4)] hover:text-[#6366f1] hover:bg-[rgba(99,102,241,0.05)] cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-6 border-t border-[rgba(24,24,27,0.10)]">
              <p className="text-[13px] text-[rgba(24,24,27,0.58)] leading-[1.7] mb-4">
                Explore resources covering brand identity, design systems, website design, promotional products, company stores, and brand consistency strategy.
              </p>
              <div className="flex flex-col gap-2">
                {resources.map(r => (
                  <a key={r} href="#" className="text-[13px] font-medium text-[#6366f1] flex items-center gap-1.5 transition-all duration-200 hover:gap-3">
                    {r} →
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
