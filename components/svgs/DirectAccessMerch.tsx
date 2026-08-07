export default function DirectAccessMerch() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        Give users direct access to branded apparel and promotional products
      </title>
      <style>{`
        .hand  { animation: reach 2.6s ease-in-out infinite; transform-origin: 20px 78px; }
        .shirt { animation: hand-off 2.6s ease-in-out infinite; }
        .spark { animation: twinkle 2.6s ease-in-out infinite; }
        @keyframes reach {
          0%, 100% { transform: translateX(0); }
          50%      { transform: translateX(4px); }
        }
        @keyframes hand-off {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50%      { opacity: 1; }
        }
      `}</style>
      <g className="shirt">
        <path
          d="M28,32 L38,26 L48,32 L58,26 L64,36 L56,44 L52,42 L52,72 L28,72 L28,42 L24,44 L16,36 Z"
          fill="#9e8eef"
        />
        <circle cx="40" cy="52" r="7" fill="#7c5ce8" />
      </g>
      <g className="hand">
        <circle cx="16" cy="78" r="7" fill="#d946a8" />
        <rect x="12" y="82" width="8" height="18" rx="4" fill="#d946a8" />
      </g>
      <circle cx="60" cy="20" r="2.5" fill="#ddd8fb" className="spark" />
      <circle cx="66" cy="52" r="2" fill="#beb5f5" className="spark" />
    </svg>
  );
}
