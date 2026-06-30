export default function BuiltOnBrandStandards() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Built On Brand Standards</title>
      <style>{`
        .doc       { animation: float 3s 0s ease-in-out infinite; }
        .checkmark { animation: pulse 2.5s 0.4s ease-in-out infinite; }
        .ruler-tick1 { animation: blink 2.5s 0s ease-in-out infinite; }
        .ruler-tick2 { animation: blink 2.5s 0.3s ease-in-out infinite; }
        .ruler-tick3 { animation: blink 2.5s 0.6s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.2); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
      `}</style>

      <g className="doc">
        <rect
          x="14"
          y="20"
          width="48"
          height="62"
          rx="4"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        <rect x="14" y="20" width="48" height="12" rx="4" fill="#7c5ce8" />
        <rect
          x="22"
          y="25"
          width="20"
          height="3"
          rx="1.5"
          fill="white"
          opacity="0.85"
        />

        <line
          x1="22"
          y1="42"
          x2="22"
          y2="76"
          stroke="#beb5f5"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        <line
          x1="54"
          y1="42"
          x2="54"
          y2="76"
          stroke="#beb5f5"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        <rect
          x="22"
          y="42"
          className="ruler-tick1"
          width="2"
          height="4"
          fill="#9e8eef"
        />
        <rect
          x="36"
          y="42"
          className="ruler-tick2"
          width="2"
          height="4"
          fill="#9e8eef"
        />
        <rect
          x="52"
          y="42"
          className="ruler-tick3"
          width="2"
          height="4"
          fill="#9e8eef"
        />

        <rect x="22" y="50" width="9" height="9" rx="2" fill="#7c5ce8" />
        <rect x="33" y="50" width="9" height="9" rx="2" fill="#d946a8" />
        <rect x="44" y="50" width="9" height="9" rx="2" fill="#beb5f5" />

        <rect x="22" y="64" width="32" height="2.5" rx="1.25" fill="#ddd8fb" />
      </g>

      <circle
        cx="58"
        cy="78"
        r="9"
        fill="white"
        stroke="#7c5ce8"
        strokeWidth="1.5"
      />
      <path
        d="M54 78 L57 81 L62 75"
        fill="none"
        stroke="#7c5ce8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="checkmark"
      />
    </svg>
  );
}
