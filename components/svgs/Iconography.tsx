export default function Iconography() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Iconography</title>
      <style>{`
        .tile1 { animation: pop 2.4s 0s ease-out infinite; transform-origin: 24px 34px; }
        .tile2 { animation: pop 2.4s 0.2s ease-out infinite; transform-origin: 52px 34px; }
        .tile3 { animation: pop 2.4s 0.4s ease-out infinite; transform-origin: 24px 62px; }
        .tile4 { animation: pop 2.4s 0.6s ease-out infinite; transform-origin: 52px 62px; }
        @keyframes pop {
          0%, 60%, 100% { transform: scale(1); }
          75%           { transform: scale(1.12); }
        }
      `}</style>
      <g className="tile1">
        <rect x="14" y="24" width="20" height="20" rx="6" fill="#ddd8fb" />
        <circle cx="24" cy="34" r="5" fill="#7c5ce8" />
      </g>
      <g className="tile2">
        <rect x="42" y="24" width="20" height="20" rx="6" fill="#beb5f5" />
        <polygon points="52,29 58,39 46,39" fill="#9e8eef" />
      </g>
      <g className="tile3">
        <rect x="14" y="52" width="20" height="20" rx="6" fill="#9e8eef" />
        <path
          d="M20,62 L24,66 L30,58"
          stroke="white"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g className="tile4">
        <rect x="42" y="52" width="20" height="20" rx="6" fill="#d946a8" />
        <path
          d="M52,58 C49,54 43,56 43,60 C43,64 52,70 52,70 C52,70 61,64 61,60 C61,56 55,54 52,58 Z"
          fill="white"
        />
      </g>
    </svg>
  );
}
