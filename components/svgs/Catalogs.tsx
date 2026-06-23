export default function Catalogs() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Catalogs</title>
      <style>{`
        .book-back  { animation: float 3s 0.3s ease-in-out infinite; }
        .book-front { animation: float 3s 0s ease-in-out infinite; }
        .page       { animation: flip 3s ease-in-out infinite; transform-origin: 38px 60px; }
        .spine-dot  { animation: pulse 3s 0.6s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes flip {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50%       { transform: scaleX(0.85); opacity: 0.7; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.2); }
        }
      `}</style>

      {/* Back book */}
      <g className="book-back">
        <rect x="14" y="22" width="44" height="60" rx="4" fill="#ddd8fb" />
      </g>

      {/* Front book */}
      <g className="book-front">
        <rect
          x="10"
          y="30"
          width="44"
          height="60"
          rx="4"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        <rect x="10" y="30" width="6" height="60" rx="2" fill="#7c5ce8" />
        <circle cx="13" cy="60" r="1.5" fill="white" className="spine-dot" />
        <rect
          x="20"
          y="38"
          width="28"
          height="20"
          rx="2"
          fill="#beb5f5"
          className="page"
        />
        <rect x="20" y="62" width="28" height="3" rx="1.5" fill="#beb5f5" />
        <rect x="20" y="69" width="20" height="3" rx="1.5" fill="#ddd8fb" />
        <rect x="20" y="76" width="22" height="6" rx="3" fill="#d946a8" />
      </g>
    </svg>
  );
}
