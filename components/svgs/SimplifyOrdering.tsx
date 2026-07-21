export default function SimplifyOrdering() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Simplify Ordering</title>
      <style>{`
        .cart  { animation: roll 2.6s ease-in-out infinite; }
        .wheel1 { animation: spin 1.2s linear infinite; transform-origin: 30px 82px; }
        .wheel2 { animation: spin 1.2s linear infinite; transform-origin: 50px 82px; }
        .check { animation: pop 2.6s 1s ease-out infinite; transform-origin: 60px 40px; }
        @keyframes roll {
          0%, 100% { transform: translateX(0); }
          50%      { transform: translateX(4px); }
        }
        @keyframes spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pop {
          0%, 60%, 100% { transform: scale(1); }
          75%           { transform: scale(1.3); }
        }
      `}</style>
      <g className="cart">
        <path
          d="M16,40 L24,40 L32,68 L58,68 L64,48 L28,48"
          fill="none"
          stroke="#9e8eef"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="30" cy="82" r="4" fill="#7c5ce8" className="wheel1" />
        <circle cx="50" cy="82" r="4" fill="#7c5ce8" className="wheel2" />
      </g>
      <circle cx="58" cy="38" r="9" fill="#d946a8" className="check" />
      <path
        d="M53,38 L57,42 L64,34"
        stroke="white"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
