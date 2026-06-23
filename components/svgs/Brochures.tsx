export default function Brochures() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Brochures</title>
      <style>{`
        .panel-l { animation: fold-l 3s ease-in-out infinite; transform-origin: 38px 56px; }
        .panel-c { animation: float 3s 0.2s ease-in-out infinite; }
        .panel-r { animation: fold-r 3s ease-in-out infinite; transform-origin: 38px 56px; }
        @keyframes fold-l {
          0%, 100% { transform: rotateY(0deg); }
          50%       { transform: rotateY(-6deg); }
        }
        @keyframes fold-r {
          0%, 100% { transform: rotateY(0deg); }
          50%       { transform: rotateY(6deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
      `}</style>

      {/* Left panel */}
      <g className="panel-l">
        <rect x="10" y="24" width="20" height="64" rx="3" fill="#ddd8fb" />
        <rect x="14" y="30" width="12" height="3" rx="1.5" fill="#9e8eef" />
        <rect x="14" y="38" width="12" height="2" rx="1" fill="#beb5f5" />
        <rect x="14" y="44" width="12" height="2" rx="1" fill="#beb5f5" />
      </g>

      {/* Center panel */}
      <g className="panel-c">
        <rect
          x="28"
          y="20"
          width="20"
          height="72"
          rx="3"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        <rect x="32" y="28" width="12" height="12" rx="2" fill="#7c5ce8" />
        <rect x="32" y="44" width="12" height="2.5" rx="1.25" fill="#beb5f5" />
        <rect x="32" y="50" width="9" height="2.5" rx="1.25" fill="#ddd8fb" />
        <rect x="32" y="60" width="12" height="6" rx="3" fill="#d946a8" />
      </g>

      {/* Right panel */}
      <g className="panel-r">
        <rect x="46" y="24" width="20" height="64" rx="3" fill="#ddd8fb" />
        <rect x="50" y="30" width="12" height="3" rx="1.5" fill="#9e8eef" />
        <rect x="50" y="38" width="12" height="2" rx="1" fill="#beb5f5" />
        <rect x="50" y="44" width="12" height="2" rx="1" fill="#beb5f5" />
      </g>
    </svg>
  );
}
