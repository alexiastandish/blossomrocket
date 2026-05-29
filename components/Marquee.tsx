const items = [
  { label: 'Brand Identity', color: '#9b5cf6' },
  { label: 'Website Design', color: '#6366f1' },
  { label: 'Design Systems', color: '#3b82f6' },
  { label: 'Marketing Assets', color: '#06b6d4' },
  { label: 'Promotional Products', color: '#10b981' },
  { label: 'Company Stores', color: '#f59e0b' },
  { label: 'Brand Consistency', color: '#9b5cf6' },
  { label: 'Merchandise Standards', color: '#06b6d4' },
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div
      className="overflow-hidden py-[18px] border-t border-b border-[rgba(24,24,27,0.10)] bg-white"
      aria-hidden="true"
      role="presentation"
    >
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12 text-[12px] tracking-[0.14em] uppercase text-[rgba(24,24,27,0.58)] whitespace-nowrap font-medium">
            {item.label}
            <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: item.color }} />
          </div>
        ))}
      </div>
    </div>
  )
}
