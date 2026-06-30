export default function DesignedToScale() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Designed To Scale</title>
      <style>{`
        .block1 { animation: grow 3s 0s ease-in-out infinite; transform-origin: 38px 92px; }
        .block2 { animation: grow 3s 0.2s ease-in-out infinite; transform-origin: 38px 92px; }
        .block3 { animation: grow 3s 0.4s ease-in-out infinite; transform-origin: 38px 92px; }
        .arrow  { animation: rise 3s ease-in-out infinite; }
        @keyframes grow {
          0%, 100% { transform: scaleY(1); }
          50%       { transform: scaleY(1.08); }
        }
        @keyframes rise {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50%       { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>

      <rect
        x="16"
        y="76"
        width="14"
        height="16"
        rx="3"
        fill="#ddd8fb"
        className="block1"
      />
      <rect
        x="32"
        y="60"
        width="14"
        height="32"
        rx="3"
        fill="#beb5f5"
        className="block2"
      />
      <rect
        x="48"
        y="40"
        width="14"
        height="52"
        rx="3"
        fill="#7c5ce8"
        className="block3"
      />

      <circle cx="23" cy="84" r="3" fill="#7c5ce8" />
      <circle cx="39" cy="76" r="4" fill="#d946a8" />
      <circle cx="55" cy="60" r="5" fill="white" />

      <g className="arrow">
        <path
          d="M14 50 L26 38 L38 46 L60 24"
          fill="none"
          stroke="#9e8eef"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="3 3"
        />
        <path
          d="M52 24 L60 24 L60 32"
          fill="none"
          stroke="#9e8eef"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
