export default function Packaging() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Packaging Design</title>
      <style>{`
        .box-body { animation: float 3s 0s ease-in-out infinite; }
        .lid      { animation: lid-open 3s 0s ease-in-out infinite; transform-origin: 38px 48px; }
        .ribbon-v { animation: float 3s 0.2s ease-in-out infinite; }
        .ribbon-h { animation: float 3s 0.2s ease-in-out infinite; }
        .sparkle  { animation: pulse 3s 0.6s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes lid-open {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          50%       { transform: rotate(-4deg) translateY(-3px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 1; transform: scale(1.25); }
        }
      `}</style>

      {/* Box body */}
      <g className="box-body">
        <rect
          x="14"
          y="44"
          width="48"
          height="40"
          rx="4"
          fill="white"
          stroke="#beb5f5"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="44"
          width="48"
          height="40"
          rx="4"
          fill="#ede9fd"
          opacity="0.4"
        />
        <rect
          x="34"
          y="44"
          width="8"
          height="40"
          fill="#d946a8"
          className="ribbon-v"
        />
      </g>

      {/* Lid */}
      <g className="lid">
        <rect x="10" y="34" width="56" height="14" rx="4" fill="#7c5ce8" />
        <rect
          x="34"
          y="34"
          width="8"
          height="14"
          fill="#d946a8"
          className="ribbon-h"
        />
      </g>

      {/* Bow / sparkle accent */}
      <circle cx="38" cy="34" r="3" fill="#ffffff" className="sparkle" />
    </svg>
  );
}
