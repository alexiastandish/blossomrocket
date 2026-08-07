export default function ReduceRepeatedDecisions() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        Reduce repeated brand decisions across recurring merchandise orders
      </title>
      <style>{`
        .loop  { animation: spin 4s linear infinite; transform-origin: 38px 54px; }
        .check { animation: pop 2.6s ease-out infinite; transform-origin: 38px 54px; }
        @keyframes spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pop {
          0%, 60%, 100% { transform: scale(1); }
          75%           { transform: scale(1.2); }
        }
      `}</style>
      <g className="loop">
        <path
          d="M38,28 A26,26 0 1 1 15,66"
          fill="none"
          stroke="#ddd8fb"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <polygon points="10,58 15,66 22,62" fill="#beb5f5" />
        <path
          d="M38,80 A26,26 0 1 1 61,42"
          fill="none"
          stroke="#9e8eef"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <polygon points="66,50 61,42 54,46" fill="#7c5ce8" />
      </g>
      <circle cx="38" cy="54" r="10" fill="#d946a8" className="check" />
      <path
        d="M33,54 L37,58 L44,49"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
