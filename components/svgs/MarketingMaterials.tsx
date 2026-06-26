export default function MarketingMaterials() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Marketing Materials</title>
      <style>{`
        .flyer1 { animation: float 3s 0s ease-in-out infinite; }
        .flyer2 { animation: float 3s 0.25s ease-in-out infinite; }
        .flyer3 { animation: float 3s 0.5s ease-in-out infinite; }
        .pin    { animation: pulse 2.4s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.2); }
        }
      `}</style>

      <g className="flyer1">
        <rect
          x="10"
          y="36"
          width="28"
          height="36"
          rx="3"
          fill="#ddd8fb"
          transform="rotate(-6 24 54)"
        />
      </g>

      <g className="flyer2">
        <rect
          x="24"
          y="30"
          width="30"
          height="40"
          rx="3"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        <rect x="30" y="36" width="18" height="10" rx="2" fill="#7c5ce8" />
        <rect x="30" y="50" width="18" height="2.5" rx="1.25" fill="#beb5f5" />
        <rect x="30" y="56" width="12" height="2.5" rx="1.25" fill="#ddd8fb" />
        <rect x="30" y="62" width="14" height="5" rx="2.5" fill="#d946a8" />
      </g>

      <g className="flyer3">
        <rect
          x="44"
          y="40"
          width="22"
          height="30"
          rx="3"
          fill="#beb5f5"
          transform="rotate(8 55 55)"
          opacity="0.8"
        />
      </g>

      <circle cx="55" cy="28" r="3" fill="#d946a8" className="pin" />
    </svg>
  );
}
