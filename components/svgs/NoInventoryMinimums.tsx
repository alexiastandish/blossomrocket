export default function NoInventoryMinimums() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>No Inventory or Minimum Orders</title>
      <style>{`
        .stack  { animation: fade 2.6s ease-in-out infinite; }
        .single { animation: pop 2.6s ease-out infinite; transform-origin: 48px 66px; }
        .slash  { animation: draw 2.6s ease-in-out infinite; stroke-dasharray: 40; }
        @keyframes fade {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 0.15; }
        }
        @keyframes pop {
          0%, 60%, 100% { transform: scale(1); }
          75%           { transform: scale(1.15); }
        }
        @keyframes draw {
          0%   { stroke-dashoffset: 40; }
          60%, 100% { stroke-dashoffset: 0; }
        }
      `}</style>
      <g className="stack">
        <rect x="14" y="44" width="20" height="16" rx="2" fill="#ddd8fb" />
        <rect x="14" y="60" width="20" height="16" rx="2" fill="#beb5f5" />
        <rect x="14" y="76" width="20" height="16" rx="2" fill="#9e8eef" />
      </g>
      <line
        x1="12"
        y1="44"
        x2="36"
        y2="90"
        stroke="#d946a8"
        strokeWidth="3"
        strokeLinecap="round"
        className="slash"
      />
      <rect
        x="42"
        y="56"
        width="22"
        height="20"
        rx="3"
        fill="#7c5ce8"
        className="single"
      />
      <rect x="42" y="56" width="22" height="7" fill="#ddd8fb" />
    </svg>
  );
}
