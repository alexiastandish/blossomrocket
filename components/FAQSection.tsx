import SectionLabel from './SectionLabel'

const faqs = [
  {
    q: 'What is a Brand System?',
    a: 'A Brand System is a centralized framework that defines how a company presents itself across websites, marketing materials, social media, merchandise, print, signage, and internal communications. It creates a single source of truth for your brand.',
  },
  {
    q: 'What is the difference between a Brand Style Guide and a Design System?',
    a: 'A Brand Style Guide defines visual identity standards — logos, colors, and typography. A Design System extends those standards into reusable components, layouts, and digital experiences that teams can use to build consistently.',
  },
  {
    q: 'Why are merchandise standards important?',
    a: 'Merchandise standards help businesses maintain consistency across apparel, promotional products, packaging, tradeshow materials, and branded experiences — ensuring every physical product reflects the brand correctly.',
  },
  {
    q: 'What is a Company Store?',
    a: 'A Company Store is a centralized storefront that provides employees, customers, and teams access to approved branded products while maintaining brand consistency. It eliminates off-brand ordering and makes the right products easy to access.',
  },
  {
    q: 'Do I need a Company Store?',
    a: 'Not every business needs a Company Store immediately. However, businesses with multiple employees, locations, departments, or recurring merchandise needs often benefit significantly from a centralized ordering system that enforces brand standards automatically.',
  },
  {
    q: 'How does Blossom Rocket differ from a traditional branding agency?',
    a: 'Most agencies stop at the brand guide. Blossom Rocket extends branding into execution — helping define approved apparel styles, embroidery standards, logo placement, print specifications, signage standards, promotional product guidelines, packaging standards, tradeshow standards, and company store infrastructure.',
  },
]

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="bg-white"
      style={{ padding: 'clamp(80px,11vw,160px) clamp(20px,5vw,60px)' }}
      aria-labelledby="faq-h"
    >
      <SectionLabel text="Frequently Asked Questions" />
      <h2
        id="faq-h"
        className="rv font-semibold leading-[1.06] tracking-[-0.02em] mb-[52px]"
        style={{ fontFamily: "'Parkinsans', sans-serif", fontSize: 'clamp(38px,5.5vw,76px)' }}
      >
        Common questions<br />
        about <em className="grad-text not-italic">Brand Systems.</em>
      </h2>

      <div className="rv d1 grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(24,24,27,0.10)]" role="list">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-[#fafaf8] p-8 md:p-9 transition-colors duration-300 hover:bg-white"
            role="listitem"
            itemScope
            itemType="https://schema.org/Question"
          >
            <div className="text-[16px] font-semibold mb-3 leading-[1.4]" itemProp="name">{faq.q}</div>
            <div
              className="text-[14px] text-[rgba(24,24,27,0.58)] leading-[1.75]"
              itemProp="acceptedAnswer"
              itemScope
              itemType="https://schema.org/Answer"
            >
              <span itemProp="text">{faq.a}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
