export default function EnvironmentalGraphics() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Environmental Graphics</title>
      <style>{`
        .wall      { animation: float 3s 0s ease-in-out infinite; }
        .panel1    { animation: glow 3s 0s ease-in-out infinite; }
        .panel2    { animation: glow 3s 0.4s ease-in-out infinite; }
        .panel3    { animation: glow 3s 0.8s ease-in-out infinite; }
        .floor-dot { animation: pulse 3s 0.6s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50%       { transform: scale(1.3); opacity: 1; }
        }
      `}</style>

      {/* Wall surface */}
      <g className="wall">
        <rect x="8" y="18" width="60" height="58" rx="4" fill="#ede9fd" />

        {/* Large graphic panel */}
        <rect
          x="14"
          y="24"
          width="22"
          height="46"
          rx="3"
          fill="#7c5ce8"
          className="panel1"
        />

        {/* Mid panel */}
        <rect
          x="40"
          y="24"
          width="22"
          height="22"
          rx="3"
          fill="#beb5f5"
          className="panel2"
        />

        {/* Accent panel */}
        <rect
          x="40"
          y="50"
          width="22"
          height="20"
          rx="3"
          fill="#d946a8"
          className="panel3"
        />
      </g>

      {/* Floor line + spotlight dot */}
      <rect x="8" y="80" width="60" height="3" rx="1.5" fill="#ddd8fb" />
      <circle cx="38" cy="88" r="3" fill="#9e8eef" className="floor-dot" />
    </svg>
  );
}
