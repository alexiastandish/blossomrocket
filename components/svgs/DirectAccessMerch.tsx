export default function DirectAccessMerchandise() {
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
        .shirt  { animation: float 3s ease-in-out infinite; }
        .cursor { animation: click 2.4s ease-in-out infinite; transform-origin: 60px 82px; }
        .ring   { animation: ripple 2.4s ease-out infinite; transform-origin: 60px 82px; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
        @keyframes click {
          0%, 60%, 100% { transform: scale(1); }
          75%           { transform: scale(0.85); }
        }
        @keyframes ripple {
          0%   { opacity: 0.6; transform: scale(0.6); }
          70%  { opacity: 0; transform: scale(1.5); }
          100% { opacity: 0; transform: scale(1.5); }
        }
      `}</style>
      <g className="shirt">
        <path
          d="M22,36 L30,30 L38,36 L46,30 L54,36 L48,46 L44,44 L44,74 L28,74 L28,44 L24,46 Z"
          fill="#9e8eef"
        />
        <circle cx="36" cy="56" r="6" fill="#7c5ce8" />
      </g>
      <circle
        cx="60"
        cy="82"
        r="10"
        fill="none"
        stroke="#d946a8"
        strokeWidth="2"
        className="ring"
      />
      <g className="cursor">
        <polygon
          points="56,74 56,92 60,88 63,94 66,93 63,87 68,87"
          fill="#d946a8"
        />
      </g>
    </svg>
  );
}
