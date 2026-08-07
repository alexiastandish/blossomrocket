export default function CentralizeLogoFiles() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Centralize approved logo files and logo variations</title>
      <style>{`
        .item1 { animation: converge 2.6s 0s ease-in infinite; }
        .item2 { animation: converge 2.6s 0.3s ease-in infinite; }
        .item3 { animation: converge 2.6s 0.6s ease-in infinite; }
        .item4 { animation: converge 2.6s 0.9s ease-in infinite; }
        .hub   { animation: pulse 2.6s ease-in-out infinite; transform-origin: 38px 60px; }
        @keyframes converge {
          0%   { opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { opacity: 0; transform: scale(0.4); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.15); }
        }
      `}</style>
      <rect
        x="14"
        y="24"
        width="12"
        height="12"
        rx="2"
        fill="#beb5f5"
        className="item1"
      />
      <circle cx="58" cy="30" r="6" fill="#9e8eef" className="item2" />
      <polygon points="18,88 24,98 12,98" fill="#ddd8fb" className="item3" />
      <rect
        x="50"
        y="84"
        width="12"
        height="12"
        rx="6"
        fill="#9e8eef"
        className="item4"
      />
      <circle cx="38" cy="60" r="14" fill="#7c5ce8" className="hub" />
      <text
        x="38"
        y="65"
        fontSize="12"
        fill="white"
        fontWeight="700"
        textAnchor="middle"
      >
        B
      </text>
    </svg>
  );
}
