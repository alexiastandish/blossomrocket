export default function AnalyticsReporting() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Analytics & Reporting</title>
      <style>{`
        .bar1  { animation: grow 2.4s 0s ease-in-out infinite; transform-origin: 22px 84px; }
        .bar2  { animation: grow 2.4s 0.3s ease-in-out infinite; transform-origin: 34px 84px; }
        .bar3  { animation: grow 2.4s 0.6s ease-in-out infinite; transform-origin: 46px 84px; }
        .glass { animation: scan 2.8s ease-in-out infinite; }
        @keyframes grow {
          0%, 100% { transform: scaleY(1); }
          50%      { transform: scaleY(1.3); }
        }
        @keyframes scan {
          0%, 100% { transform: translate(0,0); }
          50%      { transform: translate(4px,-4px); }
        }
      `}</style>
      <rect
        x="16"
        y="64"
        width="10"
        height="20"
        rx="2"
        fill="#beb5f5"
        className="bar1"
      />
      <rect
        x="28"
        y="52"
        width="10"
        height="32"
        rx="2"
        fill="#9e8eef"
        className="bar2"
      />
      <rect
        x="40"
        y="40"
        width="10"
        height="44"
        rx="2"
        fill="#7c5ce8"
        className="bar3"
      />
      <g className="glass">
        <circle
          cx="54"
          cy="32"
          r="10"
          fill="none"
          stroke="#d946a8"
          strokeWidth="3"
        />
        <line
          x1="61"
          y1="39"
          x2="68"
          y2="46"
          stroke="#d946a8"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
