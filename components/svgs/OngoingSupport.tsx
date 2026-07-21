export default function OngoingSupport() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Ongoing Support</title>
      <style>{`
        .loop { animation: spin 5s linear infinite; transform-origin: 38px 54px; }
        .orbit1 { animation: orbit 3s linear infinite; transform-origin: 38px 54px; }
        .orbit2 { animation: orbit 3s linear infinite reverse; transform-origin: 38px 54px; }
        @keyframes spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbit {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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
      <g className="orbit1">
        <circle cx="38" cy="20" r="3" fill="#d946a8" />
      </g>
      <g className="orbit2">
        <circle cx="38" cy="88" r="2.5" fill="#ddd8fb" />
      </g>
      <circle cx="38" cy="54" r="6" fill="#7c5ce8" />
    </svg>
  );
}
