export default function BusinessCards() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Business Cards</title>
      <style>{`
        .card-back  { animation: float 3s 0.3s ease-in-out infinite; }
        .card-front { animation: float 3s 0s ease-in-out infinite; }
        .shine      { animation: shine-move 3s ease-in-out infinite; }
        .logo-dot   { animation: pulse 3s 0.6s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes shine-move {
          0%, 100% { opacity: 0; transform: translateX(-8px); }
          50%       { opacity: 0.5; transform: translateX(8px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.2); }
        }
      `}</style>

      {/* Back card */}
      <g className="card-back">
        <rect x="14" y="38" width="52" height="32" rx="4" fill="#ddd8fb" />
      </g>

      {/* Front card */}
      <g className="card-front">
        <rect
          x="10"
          y="48"
          width="52"
          height="32"
          rx="4"
          fill="white"
          stroke="#beb5f5"
          strokeWidth="1.5"
        />
        <circle cx="20" cy="58" r="4" fill="#7c5ce8" className="logo-dot" />
        <rect x="28" y="56" width="24" height="3" rx="1.5" fill="#7c5ce8" />
        <rect x="20" y="66" width="34" height="2.5" rx="1.25" fill="#beb5f5" />
        <rect x="20" y="71" width="22" height="2.5" rx="1.25" fill="#ddd8fb" />
        <rect
          x="10"
          y="48"
          width="14"
          height="32"
          rx="4"
          fill="white"
          opacity="0.5"
          className="shine"
        />
      </g>
    </svg>
  );
}
