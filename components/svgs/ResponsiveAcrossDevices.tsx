export default function ResponsiveAcrossDevices() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Responsive Across Devices</title>
      <style>{`
        .desktop { animation: float 3s 0s ease-in-out infinite; }
        .tablet  { animation: float 3s 0.3s ease-in-out infinite; }
        .mobile  { animation: float 3s 0.6s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
      `}</style>

      <g className="desktop">
        <rect
          x="8"
          y="20"
          width="44"
          height="30"
          rx="3"
          fill="white"
          stroke="#beb5f5"
          strokeWidth="1.5"
        />
        <rect x="8" y="20" width="44" height="7" rx="3" fill="#7c5ce8" />
        <rect x="8" y="24" width="44" height="3" fill="#7c5ce8" />
      </g>

      <g className="tablet">
        <rect
          x="12"
          y="58"
          width="26"
          height="34"
          rx="4"
          fill="white"
          stroke="#9e8eef"
          strokeWidth="1.5"
        />
        <rect x="12" y="58" width="26" height="6" rx="4" fill="#9e8eef" />
        <rect x="12" y="60" width="26" height="3" fill="#9e8eef" />
      </g>

      <g className="mobile">
        <rect
          x="46"
          y="50"
          width="18"
          height="36"
          rx="4"
          fill="white"
          stroke="#d946a8"
          strokeWidth="1.5"
        />
        <rect x="46" y="50" width="18" height="6" rx="4" fill="#d946a8" />
        <rect x="46" y="52" width="18" height="2.5" fill="#d946a8" />
      </g>
    </svg>
  );
}
