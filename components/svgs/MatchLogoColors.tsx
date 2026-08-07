export default function MatchLogoColors() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        Match approved logo treatments to light and dark product colors
      </title>
      <style>{`
        .shirt1 { animation: float 3s 0s ease-in-out infinite; }
        .shirt2 { animation: float 3s 0.3s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }
      `}</style>
      <g className="shirt1">
        <path
          d="M18,40 L28,34 L38,40 L48,34 L58,40 L52,50 L48,48 L48,80 L28,80 L28,48 L24,50 Z"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        <circle cx="38" cy="60" r="6" fill="#7c5ce8" />
      </g>
      <g className="shirt2">
        <path
          d="M18,86 L24,82 L30,86 L36,82 L42,86 L39,92 L36,91 L36,108 L24,108 L24,91 L21,92 Z"
          fill="#2a1a5e"
          transform="translate(0,0) scale(0.001)"
          opacity="0"
        />
      </g>
      <path
        d="M14,88 L20,84 L26,88 L32,84 L38,88 L34,96 L32,95 L32,110 L20,110 L20,95 L18,96 Z"
        fill="#2a1a5e"
        className="shirt2"
      />
      <circle cx="26" cy="102" r="4" fill="#ddd8fb" className="shirt2" />
      <path
        d="M50,90 L56,86 L62,90 L68,86 L74,90 L70,98 L68,97 L68,110 L56,110 L56,97 L54,98 Z"
        fill="#9e8eef"
        opacity="0.001"
      />
    </svg>
  );
}
