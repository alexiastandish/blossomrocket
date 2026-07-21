export default function MaintainBrandConsistency() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Maintain Brand Consistency</title>
      <style>{`
        .tile1 { animation: sync 2.4s 0s ease-in-out infinite; }
        .tile2 { animation: sync 2.4s 0.15s ease-in-out infinite; }
        .tile3 { animation: sync 2.4s 0.3s ease-in-out infinite; }
        .check { animation: pop 2.4s 1s ease-out infinite; transform-origin: 58px 40px; }
        @keyframes sync {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.08); }
        }
        @keyframes pop {
          0%, 60%, 100% { transform: scale(1); }
          75%           { transform: scale(1.3); }
        }
      `}</style>
      <rect
        x="16"
        y="42"
        width="14"
        height="14"
        rx="3"
        fill="#7c5ce8"
        className="tile1"
      />
      <rect
        x="32"
        y="42"
        width="14"
        height="14"
        rx="3"
        fill="#7c5ce8"
        className="tile2"
      />
      <rect
        x="48"
        y="42"
        width="14"
        height="14"
        rx="3"
        fill="#7c5ce8"
        className="tile3"
      />
      <rect x="16" y="60" width="46" height="4" rx="2" fill="#ddd8fb" />
      <rect x="16" y="70" width="30" height="4" rx="2" fill="#beb5f5" />
      <circle cx="58" cy="40" r="8" fill="#d946a8" className="check" />
      <path
        d="M54,40 L57,43 L63,36"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
