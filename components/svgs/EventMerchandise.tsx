// EventMerchandise.tsx
export default function EventMerchandise() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Event Merchandise</title>
      <style>{`
        .banner    { animation: sway 3s ease-in-out infinite; transform-origin: 38px 22px; }
        .lanyard   { animation: float 3s 0.3s ease-in-out infinite; }
        .badge     { animation: float 3s 0.3s ease-in-out infinite; }
        .confetti1 { animation: drift 3s 0s ease-in-out infinite; }
        .confetti2 { animation: drift 3s 0.4s ease-in-out infinite; }
        .confetti3 { animation: drift 3s 0.8s ease-in-out infinite; }
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          50%       { transform: rotate(2deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes drift {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          50%       { transform: translateY(-5px) rotate(15deg); opacity: 1; }
        }
      `}</style>

      <g className="banner">
        <path d="M14 16 L62 16 L58 30 L18 30 Z" fill="#7c5ce8" />
        <rect
          x="26"
          y="20"
          width="24"
          height="3"
          rx="1.5"
          fill="white"
          opacity="0.8"
        />
      </g>

      <rect
        x="16"
        y="40"
        width="4"
        height="4"
        rx="1"
        fill="#d946a8"
        className="confetti1"
      />
      <circle cx="58" cy="44" r="2.5" fill="#9e8eef" className="confetti2" />
      <rect
        x="48"
        y="36"
        width="3.5"
        height="3.5"
        rx="1"
        fill="#beb5f5"
        className="confetti3"
      />

      <g className="lanyard">
        <line
          x1="38"
          y1="38"
          x2="38"
          y2="56"
          stroke="#beb5f5"
          strokeWidth="3"
        />
      </g>
      <g className="badge">
        <rect
          x="24"
          y="56"
          width="28"
          height="34"
          rx="5"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        <circle cx="38" cy="68" r="6" fill="#7c5ce8" />
        <rect x="29" y="78" width="18" height="2.5" rx="1.25" fill="#beb5f5" />
        <rect x="29" y="84" width="12" height="2.5" rx="1.25" fill="#ddd8fb" />
      </g>
    </svg>
  );
}
