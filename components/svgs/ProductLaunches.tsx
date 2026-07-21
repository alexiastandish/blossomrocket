export default function ProductLaunches() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Product Launches</title>
      <style>{`
        .rocket { animation: launch 2.6s ease-in-out infinite; transform-origin: 38px 70px; }
        .flame  { animation: flicker 0.5s ease-in-out infinite alternate; transform-origin: 38px 92px; }
        .star1  { animation: twinkle 2.6s 0s ease-in-out infinite; }
        .star2  { animation: twinkle 2.6s 0.6s ease-in-out infinite; }
        .star3  { animation: twinkle 2.6s 1.2s ease-in-out infinite; }
        @keyframes launch {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes flicker {
          0%   { transform: scaleY(1) scaleX(1); opacity: 1; }
          100% { transform: scaleY(1.3) scaleX(0.8); opacity: 0.7; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50%      { opacity: 1; }
        }
      `}</style>
      <g className="rocket">
        <path
          d="M38,24 C50,34 50,54 50,64 L26,64 C26,54 26,34 38,24 Z"
          fill="#9e8eef"
        />
        <circle cx="38" cy="46" r="6" fill="white" />
        <circle cx="38" cy="46" r="3.5" fill="#7c5ce8" />
        <polygon points="26,58 16,70 26,68" fill="#d946a8" />
        <polygon points="50,58 60,70 50,68" fill="#d946a8" />
        <polygon points="30,64 46,64 38,74" fill="#beb5f5" />
      </g>
      <path
        d="M32,90 Q38,102 44,90 Q38,96 32,90 Z"
        fill="#d946a8"
        className="flame"
      />
      <circle cx="16" cy="34" r="2" fill="#ddd8fb" className="star1" />
      <circle cx="60" cy="28" r="2.5" fill="#beb5f5" className="star2" />
      <circle cx="52" cy="16" r="1.8" fill="#ddd8fb" className="star3" />
    </svg>
  );
}
