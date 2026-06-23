export default function Signage() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Signage</title>
      <style>{`
        .post     { animation: float 3s 0s ease-in-out infinite; }
        .sign     { animation: sway 3s 0s ease-in-out infinite; transform-origin: 38px 38px; }
        .glow     { animation: pulse 3s 0.3s ease-in-out infinite; }
        .pinkdot  { animation: blink 3s 0.6s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          50%       { transform: rotate(2deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%       { opacity: 0.9; transform: scale(1.08); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>

      {/* Post */}
      <g className="post">
        <rect x="35" y="62" width="6" height="30" rx="2" fill="#beb5f5" />
        <ellipse cx="38" cy="92" rx="12" ry="3" fill="#ede9fd" />
      </g>

      {/* Sign panel */}
      <g className="sign">
        <rect x="10" y="62" width="56" height="4" fill="#9e8eef" />
        <rect
          x="12"
          y="22"
          width="52"
          height="42"
          rx="6"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        <rect
          x="12"
          y="22"
          width="52"
          height="42"
          rx="6"
          fill="#7c5ce8"
          opacity="0"
          className="glow"
        />
        <circle cx="24" cy="38" r="6" fill="#7c5ce8" />
        <rect x="34" y="33" width="22" height="4" rx="2" fill="#beb5f5" />
        <rect x="34" y="41" width="16" height="3" rx="1.5" fill="#ddd8fb" />
        <rect x="18" y="50" width="30" height="6" rx="3" fill="#d946a8" />
        <circle cx="56" cy="30" r="2.5" fill="#d946a8" className="pinkdot" />
      </g>
    </svg>
  );
}
