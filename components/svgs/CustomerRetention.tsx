export default function CustomerRetention() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Customer Retention</title>
      <style>{`
        .loop { animation: spin 4s linear infinite; transform-origin: 38px 56px; }
        .heart { animation: beat 2s ease-in-out infinite; transform-origin: 38px 56px; }
        @keyframes spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes beat {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.15); }
        }
      `}</style>
      <g className="loop">
        <path
          d="M38,30 A26,26 0 1 1 17,68"
          fill="none"
          stroke="#ddd8fb"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <polygon points="12,60 17,68 24,64" fill="#beb5f5" />
        <path
          d="M38,82 A26,26 0 1 1 59,44"
          fill="none"
          stroke="#9e8eef"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <polygon points="64,52 59,44 52,48" fill="#7c5ce8" />
      </g>
      <path
        d="M38,50 C35,45 28,47 28,53 C28,59 38,66 38,66 C38,66 48,59 48,53 C48,47 41,45 38,50 Z"
        fill="#d946a8"
        className="heart"
      />
    </svg>
  );
}
