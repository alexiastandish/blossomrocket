export default function SalesEnablement() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Sales Enablement</title>
      <style>{`
        .board  { animation: float 3s ease-in-out infinite; }
        .check1 { animation: pop 2.4s 0.2s ease-out infinite; transform-origin: 26px 52px; }
        .check2 { animation: pop 2.4s 0.7s ease-out infinite; transform-origin: 26px 64px; }
        .bar1 { animation: grow 2.4s 0s ease-in-out infinite; transform-origin: 44px 90px; }
        .bar2 { animation: grow 2.4s 0.3s ease-in-out infinite; transform-origin: 52px 90px; }
        .bar3 { animation: grow 2.4s 0.6s ease-in-out infinite; transform-origin: 60px 90px; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
        @keyframes pop {
          0%, 60%, 100% { transform: scale(1); opacity: 1; }
          75%           { transform: scale(1.3); opacity: 0.7; }
        }
        @keyframes grow {
          0%, 100% { transform: scaleY(1); }
          50%      { transform: scaleY(1.3); }
        }
      `}</style>
      <g className="board">
        <rect
          x="14"
          y="26"
          width="36"
          height="52"
          rx="4"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        <rect x="24" y="20" width="16" height="8" rx="3" fill="#9e8eef" />
        <circle cx="26" cy="52" r="4" fill="#ddd8fb" className="check1" />
        <path
          d="M24,52 L26,54 L29,50"
          stroke="#7c5ce8"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="26" cy="64" r="4" fill="#ddd8fb" className="check2" />
        <path
          d="M24,64 L26,66 L29,62"
          stroke="#7c5ce8"
          strokeWidth="1.5"
          fill="none"
        />
        <rect x="34" y="50" width="12" height="3" rx="1.5" fill="#beb5f5" />
        <rect x="34" y="62" width="12" height="3" rx="1.5" fill="#beb5f5" />
      </g>
      <rect
        x="40"
        y="76"
        width="8"
        height="14"
        rx="2"
        fill="#beb5f5"
        className="bar1"
      />
      <rect
        x="48"
        y="70"
        width="8"
        height="20"
        rx="2"
        fill="#9e8eef"
        className="bar2"
      />
      <rect
        x="56"
        y="60"
        width="8"
        height="30"
        rx="2"
        fill="#d946a8"
        className="bar3"
      />
    </svg>
  );
}
