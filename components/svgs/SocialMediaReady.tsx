export default function SocialMediaReady() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Social Media Ready</title>
      <style>{`
        .post1   { animation: float 3s 0s ease-in-out infinite; }
        .post2   { animation: float 3s 0.3s ease-in-out infinite; }
        .heart   { animation: pulse 2.2s ease-in-out infinite; transform-origin: 50px 86px; }
        .notif   { animation: pop 2.5s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.2); }
        }
        @keyframes pop {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.15); }
        }
      `}</style>

      <g className="post1">
        <rect x="10" y="20" width="44" height="54" rx="6" fill="#ddd8fb" />
      </g>

      <g className="post2">
        <rect
          x="18"
          y="30"
          width="44"
          height="54"
          rx="6"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        <circle cx="28" cy="40" r="5" fill="#7c5ce8" />
        <rect x="36" y="37" width="18" height="3" rx="1.5" fill="#beb5f5" />
        <rect x="36" y="43" width="12" height="2.5" rx="1.25" fill="#ddd8fb" />

        <rect x="24" y="50" width="32" height="20" rx="3" fill="#ede9fd" />
        <circle cx="34" cy="60" r="5" fill="#beb5f5" />
        <path
          d="M28 66 L36 58 L44 64 L52 56"
          fill="none"
          stroke="#9e8eef"
          strokeWidth="1.5"
        />

        <path
          d="M46 80 C46 78 48 76.5 50 78 C52 76.5 54 78 54 80 C54 82.5 50 85 50 85 C50 85 46 82.5 46 80 Z"
          fill="#d946a8"
          className="heart"
        />
        <rect x="24" y="79" width="16" height="2.5" rx="1.25" fill="#ddd8fb" />
      </g>

      <circle cx="60" cy="26" r="7" fill="#d946a8" className="notif" />
      <text
        x="60"
        y="29"
        fontFamily="system-ui"
        fontSize="9"
        fontWeight="700"
        fill="white"
        textAnchor="middle"
      >
        3
      </text>
    </svg>
  );
}
