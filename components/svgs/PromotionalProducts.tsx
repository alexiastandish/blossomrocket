export default function PromotionalProducts() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Promotional Products</title>
      <style>{`
        .mug    { animation: float 3s 0s ease-in-out infinite; }
        .pen    { animation: float 3s 0.3s ease-in-out infinite; }
        .totebag { animation: float 3s 0.6s ease-in-out infinite; }
        .steam   { animation: rise 2.5s ease-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes rise {
          0%   { opacity: 0; transform: translateY(0); }
          40%  { opacity: 0.7; }
          100% { opacity: 0; transform: translateY(-8px); }
        }
      `}</style>

      <g className="totebag">
        <path d="M12 56 L16 92 L36 92 L34 56 Z" fill="#ddd8fb" />
        <path
          d="M17 56 L17 48 Q17 42 23 42 Q29 42 29 48 L29 56"
          fill="none"
          stroke="#9e8eef"
          strokeWidth="2"
        />
        <rect x="16" y="68" width="14" height="3" rx="1.5" fill="#beb5f5" />
      </g>

      <g className="mug">
        <rect
          x="40"
          y="50"
          width="22"
          height="24"
          rx="3"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        <path
          d="M62 56 Q70 56 70 62 Q70 68 62 68"
          fill="none"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        <circle cx="51" cy="62" r="4" fill="#7c5ce8" />
        <line
          x1="46"
          y1="44"
          x2="46"
          y2="48"
          stroke="#beb5f5"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="steam"
        />
        <line
          x1="51"
          y1="42"
          x2="51"
          y2="46"
          stroke="#beb5f5"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="steam"
        />
      </g>

      <g className="pen">
        <rect
          x="35"
          y="78"
          width="34"
          height="5"
          rx="2.5"
          fill="#d946a8"
          transform="rotate(-8 35 80)"
        />
        <rect
          x="62"
          y="76"
          width="8"
          height="5"
          rx="1"
          fill="#1a1a2e"
          transform="rotate(-8 62 78)"
        />
      </g>
    </svg>
  );
}
