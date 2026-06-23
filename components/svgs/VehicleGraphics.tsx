export default function VehicleGraphics() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Vehicle Graphics</title>
      <style>{`
        .van     { animation: drive 3s ease-in-out infinite; }
        .wrap    { animation: glow 3s 0.2s ease-in-out infinite; }
        .wheel-l { animation: spin 1.2s linear infinite; transform-origin: 24px 78px; }
        .wheel-r { animation: spin 1.2s linear infinite; transform-origin: 54px 78px; }
        @keyframes drive {
          0%, 100% { transform: translateX(0); }
          50%       { transform: translateX(2px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.85; }
          50%       { opacity: 1; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <g className="van">
        {/* Van body */}
        <rect
          x="10"
          y="50"
          width="56"
          height="26"
          rx="6"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        {/* Cab roofline */}
        <path
          d="M52 50 L60 50 L66 62 L66 76 L52 76 Z"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        {/* Windshield */}
        <rect x="55" y="56" width="9" height="8" rx="2" fill="#ede9fd" />

        {/* Wrap graphic */}
        <rect
          x="10"
          y="50"
          width="40"
          height="26"
          rx="6"
          fill="#7c5ce8"
          className="wrap"
        />
        <circle cx="22" cy="58" r="4" fill="white" />
        <rect
          x="30"
          y="56"
          width="16"
          height="3"
          rx="1.5"
          fill="white"
          opacity="0.85"
        />
        <rect
          x="30"
          y="62"
          width="12"
          height="2.5"
          rx="1.25"
          fill="white"
          opacity="0.6"
        />
        <rect x="14" y="68" width="18" height="5" rx="2.5" fill="#d946a8" />
      </g>

      {/* Wheels */}
      <circle cx="24" cy="78" r="7" fill="#beb5f5" />
      <circle cx="24" cy="78" r="3" fill="white" className="wheel-l" />
      <circle cx="54" cy="78" r="7" fill="#beb5f5" />
      <circle cx="54" cy="78" r="3" fill="white" className="wheel-r" />
    </svg>
  );
}
