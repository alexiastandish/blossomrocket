export default function DiffBand() {
  return (
    <div
      className="section bg-(--color-surface-dark-neutral) text-white grid gap-10"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      }}
      role="region"
      aria-label="The Blossom Rocket difference"
    >
      <div className="rv text-center">
        <div className="font-light leading-[1.3] tracking-[-0.01em] h3 font-display text-fg-on-dark">
          Most agencies
          <br />
          stop at the
          <br />
          brand guide.
        </div>
        <div className="text-[12px] font-medium tracking-[0.1em] uppercase text-fg-tertiary mt-3">
          Traditional approach
        </div>
      </div>
      <div className="rv d1 text-center">
        <div
          className="grad-text font-semibold leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px,6vw,80px)",
          }}
        >
          →
        </div>
        <div className="text-[12px] font-medium tracking-[0.1em] uppercase text-fg-tertiary mt-3">
          Blossom Rocket extends
          <br />
          branding into execution
        </div>
      </div>
      <div className="rv d2 text-center">
        <div className="font-light leading-[1.3] tracking-[-0.01em] h3 font-display text-fg-on-dark">
          Consistency begins
          <br />
          when the brand
          <br />
          is deployed.
        </div>
        <div className="text-[12px] font-medium tracking-[0.1em] uppercase text-fg-tertiary mt-3">
          The Blossom Rocket way
        </div>
      </div>
    </div>
  );
}
