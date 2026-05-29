import Link from 'next/link'

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative min-h-[100svh] flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ padding: 'calc(68px + 60px) clamp(20px,8vw,80px) 80px' }}
      role="banner"
    >
      {/* Orbs */}
      <div className="absolute w-[600px] h-[600px] -top-[100px] -left-[100px] rounded-full pointer-events-none opacity-[0.18]"
        style={{ background: 'radial-gradient(circle,#9b5cf6,transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute w-[500px] h-[500px] -bottom-[80px] -right-[80px] rounded-full pointer-events-none opacity-[0.18]"
        style={{ background: 'radial-gradient(circle,#06b6d4,transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute w-[300px] h-[300px] top-[40%] left-[55%] rounded-full pointer-events-none opacity-[0.18]"
        style={{ background: 'radial-gradient(circle,#10b981,transparent 70%)', filter: 'blur(80px)' }} />

      <div className="anim-fade-up anim-delay-1 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full border border-[rgba(24,24,27,0.10)] text-[rgba(24,24,27,0.58)] mb-8">
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(90deg,#9b5cf6,#06b6d4)' }} />
        Brand Identity · Websites · Marketing Assets · Company Stores
      </div>

      <h1
        className="anim-fade-up anim-delay-2 relative z-10 font-semibold leading-[1.0] tracking-[-0.03em] mb-7"
        style={{ fontFamily: "'Parkinsans', sans-serif", fontSize: 'clamp(52px,9vw,110px)' }}
      >
        Build a Brand That<br />
        <em className="grad-text not-italic">Works Everywhere.</em>
      </h1>

      <p
        className="anim-fade-up anim-delay-3 relative z-10 text-[rgba(24,24,27,0.58)] leading-[1.72] mx-auto mb-12"
        style={{ fontSize: 'clamp(15px,1.8vw,19px)', maxWidth: '620px' }}
      >
        Brand Identity, Websites, Marketing Assets, Merchandise &amp; Company Stores — Connected Through One Brand System. Because great brands aren&apos;t built through disconnected projects. They&apos;re built through systems.
      </p>

      <div className="anim-fade-up anim-delay-4 flex gap-4 justify-center flex-wrap">
        <a
          href="#contact"
          className="btn-grad-overlay relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#18181b] text-white text-[14px] font-semibold tracking-[0.01em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(99,102,241,0.25)] overflow-hidden"
        >
          <span className="relative z-10">Build Your Brand System</span>
          <span className="relative z-10">→</span>
        </a>
        <a
          href="#services"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[rgba(24,24,27,0.12)] text-[#18181b] text-[14px] font-semibold transition-all duration-200 hover:border-[#9b5cf6] hover:bg-[rgba(155,92,246,0.06)] hover:-translate-y-0.5"
        >
          Explore Services ↗
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40" aria-hidden="true">
        <div className="scroll-line" />
      </div>
    </header>
  )
}
