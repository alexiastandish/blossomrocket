export default function CustomerPrograms() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Customer Programs</title>
      <style>{`
        .card     { animation: float 3s 0s ease-in-out infinite; }
        .heart    { animation: pulse 2.2s ease-in-out infinite; transform-origin: 38px 56px; }
        .star1    { animation: twinkle 2.5s 0s ease-in-out infinite; }
        .star2    { animation: twinkle 2.5s 0.5s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.18); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50%       { opacity: 1; transform: scale(1.1); }
        }
      `}</style>

      <g className="card">
        <rect
          x="12"
          y="30"
          width="52"
          height="34"
          rx="6"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        <rect x="12" y="30" width="52" height="10" rx="6" fill="#7c5ce8" />
        <rect x="18" y="48" width="22" height="3" rx="1.5" fill="#beb5f5" />
        <rect x="18" y="55" width="16" height="2.5" rx="1.25" fill="#ddd8fb" />
        <path
          d="M50 50 C50 47 53 45 55.5 47 C58 45 61 47 61 50 C61 54 55.5 58 55.5 58 C55.5 58 50 54 50 50 Z"
          fill="#d946a8"
          className="heart"
        />
      </g>

      <path
        d="M14 80 L16 86 L22 86 L17 90 L19 96 L14 92 L9 96 L11 90 L6 86 L12 86 Z"
        fill="#beb5f5"
        className="star1"
      />
      <path
        d="M60 78 L62 84 L68 84 L63 88 L65 94 L60 90 L55 94 L57 88 L52 84 L58 84 Z"
        fill="#9e8eef"
        className="star2"
      />
    </svg>
  );
}
