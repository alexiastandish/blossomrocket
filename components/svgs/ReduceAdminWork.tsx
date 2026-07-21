export default function ReduceAdministrativeWork() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Reduce Administrative Work</title>
      <style>{`
        .hand  { animation: sweep 2.6s ease-in-out infinite; transform-origin: 62px 32px; }
        .item1 { animation: clear 2.6s 0.4s ease-in-out infinite; }
        .item2 { animation: clear 2.6s 0.8s ease-in-out infinite; }
        @keyframes sweep {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(-15deg); }
        }
        @keyframes clear {
          0%, 30% { opacity: 1; transform: translateX(0); }
          70%, 100% { opacity: 0; transform: translateX(10px); }
        }
      `}</style>
      <rect
        x="14"
        y="30"
        width="34"
        height="46"
        rx="4"
        fill="white"
        stroke="#7c5ce8"
        strokeWidth="1.5"
      />
      <rect x="22" y="24" width="18" height="8" rx="3" fill="#9e8eef" />
      <rect
        x="20"
        y="42"
        width="22"
        height="3"
        rx="1.5"
        fill="#beb5f5"
        className="item1"
      />
      <rect
        x="20"
        y="52"
        width="22"
        height="3"
        rx="1.5"
        fill="#ddd8fb"
        className="item2"
      />
      <rect x="20" y="62" width="14" height="3" rx="1.5" fill="#beb5f5" />
      <g className="hand">
        <circle cx="62" cy="32" r="7" fill="#d946a8" />
        <rect x="59" y="36" width="6" height="16" rx="3" fill="#d946a8" />
      </g>
    </svg>
  );
}
