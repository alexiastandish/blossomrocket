export default function CorporateGiftingPrograms() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Corporate Gifting Programs</title>
      <style>{`
        .box-back  { animation: float 3s 0.3s ease-in-out infinite; }
        .box-front { animation: float 3s 0s ease-in-out infinite; }
        .bow       { animation: pulse 3s 0.6s ease-in-out infinite; transform-origin: 38px 36px; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.15); }
        }
      `}</style>

      <g className="box-back">
        <rect x="44" y="46" width="26" height="32" rx="3" fill="#ddd8fb" />
      </g>

      <g className="box-front">
        <rect
          x="8"
          y="40"
          width="40"
          height="44"
          rx="4"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        <rect
          x="8"
          y="40"
          width="40"
          height="44"
          rx="4"
          fill="#ede9fd"
          opacity="0.4"
        />
        <rect x="24" y="40" width="8" height="44" fill="#d946a8" />
        <rect x="8" y="58" width="40" height="8" fill="#d946a8" />
      </g>

      <g className="bow">
        <circle cx="28" cy="36" r="6" fill="#7c5ce8" />
        <circle cx="40" cy="36" r="6" fill="#9e8eef" />
        <circle cx="34" cy="36" r="4" fill="white" />
      </g>
    </svg>
  );
}
