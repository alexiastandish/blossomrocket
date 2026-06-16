interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.16em] uppercase mb-5">
      <span className="label-line" />
      <span className="grad-text">{text}</span>
    </p>
  );
}
