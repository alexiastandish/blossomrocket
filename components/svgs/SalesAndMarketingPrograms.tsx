export default function SalesAndMarketingPrograms() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Sales & Marketing Programs</title>
      <style>{`
        .horn { animation: honk 2.4s ease-in-out infinite; transform-origin: 14px 42px; }
        .bar1 { animation: grow 2.4s 0s ease-in-out infinite; transform-origin: 44px 88px; }
        .bar2 { animation: grow 2.4s 0.3s ease-in-out infinite; transform-origin: 54px 88px; }
        .bar3 { animation: grow 2.4s 0.6s ease-in-out infinite; transform-origin: 64px 88px; }
        @keyframes honk {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(-5deg); }
        }
        @keyframes grow {
          0%, 100% { transform: scaleY(1); }
          50%      { transform: scaleY(1.25); }
        }
      `}</style>
      <g className="horn">
        <rect x="8" y="38" width="6" height="8" rx="2" fill="#7c5ce8" />
        <polygon points="14,38 14,46 36,56 36,28" fill="#9e8eef" />
        <polygon points="32,32 36,30 36,44 32,42" fill="#beb5f5" />
      </g>
      <rect
        x="40"
        y="72"
        width="8"
        height="16"
        rx="2"
        fill="#beb5f5"
        className="bar1"
      />
      <rect
        x="50"
        y="60"
        width="8"
        height="28"
        rx="2"
        fill="#9e8eef"
        className="bar2"
      />
      <rect
        x="60"
        y="46"
        width="8"
        height="42"
        rx="2"
        fill="#d946a8"
        className="bar3"
      />
    </svg>
  );
}
