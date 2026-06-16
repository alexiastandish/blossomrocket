// components/illustrations/WebAppDesign.tsx
export default function WebAppDesign() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Web and App Design</title>
      <style>{`
        .desktop { animation: risein 0.5s 0s ease-out both; }
        .tablet  { animation: risein 0.5s 0.15s ease-out both; }
        .mobile  { animation: risein 0.5s 0.3s ease-out both; }
        @keyframes risein {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <g className="desktop">
        <rect
          x="8"
          y="22"
          width="60"
          height="38"
          rx="4"
          fill="white"
          stroke="#beb5f5"
          strokeWidth="1"
        />
        <rect x="8" y="22" width="60" height="8" rx="4" fill="#7c5ce8" />
        <rect x="8" y="26" width="60" height="4" fill="#7c5ce8" />
      </g>
      <g className="tablet">
        <rect
          x="14"
          y="66"
          width="28"
          height="36"
          rx="4"
          fill="white"
          stroke="#9e8eef"
          strokeWidth="1"
        />
        <rect x="14" y="66" width="28" height="6" rx="4" fill="#9e8eef" />
        <rect x="14" y="68" width="28" height="3" fill="#9e8eef" />
      </g>
      <g className="mobile">
        <rect
          x="48"
          y="72"
          width="18"
          height="30"
          rx="4"
          fill="white"
          stroke="#d946a8"
          strokeWidth="1"
        />
        <rect x="48" y="72" width="18" height="5" rx="4" fill="#d946a8" />
        <rect x="48" y="74" width="18" height="2" fill="#d946a8" />
      </g>
    </svg>
  );
}
