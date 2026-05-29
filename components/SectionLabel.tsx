interface SectionLabelProps {
  text: string
  light?: boolean
}

export default function SectionLabel({ text, light = false }: SectionLabelProps) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.16em] uppercase mb-5">
      <span className="label-line" />
      {light
        ? <span className="text-[rgba(255,255,255,0.5)]">{text}</span>
        : <span className="grad-text">{text}</span>
      }
    </p>
  )
}
