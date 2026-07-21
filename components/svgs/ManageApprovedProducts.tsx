export default function ManageApprovedProducts() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Manage Approved Products</title>
      <style>{`
        .shield { animation: float 3s ease-in-out infinite; }
        .check  { animation: draw 2.6s ease-in-out infinite; stroke-dasharray: 20; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
        @keyframes draw {
          0%   { stroke-dashoffset: 20; }
          60%, 100% { stroke-dashoffset: 0; }
        }
      `}</style>
      <g className="shield">
        <path
          d="M38,24 L60,32 L60,54 C60,72 50,82 38,88 C26,82 16,72 16,54 L16,32 Z"
          fill="#7c5ce8"
        />
        <path
          d="M38,30 L54,36 L54,54 C54,68 46,76 38,81 C30,76 22,68 22,54 L22,36 Z"
          fill="#9e8eef"
        />
      </g>
      <path
        d="M28,56 L35,64 L50,44"
        fill="none"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="check"
      />
    </svg>
  );
}
