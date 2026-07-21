export default function BrandAwareness() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Brand Awareness</title>
      <style>{`
        .wave1 { animation: waveOut 2.4s 0s ease-out infinite; }
        .wave2 { animation: waveOut 2.4s 0.4s ease-out infinite; }
        .wave3 { animation: waveOut 2.4s 0.8s ease-out infinite; }
        .horn { animation: honk 2.4s ease-in-out infinite; transform-origin: 14px 70px; }
        .spark { animation: blink 2.4s ease-in-out infinite; }
        @keyframes waveOut {
          0%   { opacity: 0; transform: translateX(-4px); }
          40%  { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(4px); }
        }
        @keyframes honk {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(-4deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }
      `}</style>
      <g className="horn">
        <rect x="8" y="66" width="6" height="8" rx="2" fill="#7c5ce8" />
        <polygon points="14,66 14,74 40,84 40,48" fill="#9e8eef" />
        <polygon points="36,60 40,58 40,70 36,72" fill="#beb5f5" />
      </g>
      <path
        d="M40,48 Q54,48 54,62"
        fill="none"
        stroke="#beb5f5"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="wave1"
      />
      <path
        d="M40,40 Q62,40 62,62"
        fill="none"
        stroke="#9e8eef"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="wave2"
      />
      <path
        d="M40,32 Q70,32 70,62"
        fill="none"
        stroke="#ddd8fb"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="wave3"
      />
      <circle cx="58" cy="30" r="3.5" fill="#d946a8" className="spark" />
    </svg>
  );
}
