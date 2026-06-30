// BuiltForAccessibility.tsx
export default function BuiltForAccessibility() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Built For Accessibility</title>
      <style>{`
        .badge     { animation: float 3s 0s ease-in-out infinite; }
        .ring1     { animation: ripple 2.4s 0s ease-out infinite; transform-origin: 38px 50px; }
        .ring2     { animation: ripple 2.4s 0.5s ease-out infinite; transform-origin: 38px 50px; }
        .contrast  { animation: blink 2.8s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes ripple {
          0%   { opacity: 0.6; transform: scale(0.9); }
          50%  { opacity: 1; transform: scale(1); }
          100% { opacity: 0.6; transform: scale(0.9); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>

      <circle
        cx="38"
        cy="50"
        r="26"
        fill="none"
        stroke="#ddd8fb"
        strokeWidth="2"
        className="ring1"
      />
      <circle
        cx="38"
        cy="50"
        r="18"
        fill="none"
        stroke="#beb5f5"
        strokeWidth="2"
        className="ring2"
      />

      <g className="badge">
        <circle cx="38" cy="50" r="10" fill="#7c5ce8" />
        <circle cx="38" cy="44" r="3" fill="white" />
        <path d="M30 56 Q30 50 38 50 Q46 50 46 56" fill="white" />
      </g>

      <g className="contrast">
        <rect
          x="20"
          y="76"
          width="36"
          height="16"
          rx="8"
          fill="white"
          stroke="#d946a8"
          strokeWidth="1.5"
        />
        <circle cx="29" cy="84" r="4" fill="#1a1a2e" />
        <path
          d="M40 84 L44 88 L52 78"
          fill="none"
          stroke="#d946a8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
