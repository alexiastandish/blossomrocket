export default function CompanyCulture() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Company Culture</title>
      <style>{`
        .p1 { animation: bob 2.6s 0s ease-in-out infinite; }
        .p2 { animation: bob 2.6s 0.3s ease-in-out infinite; }
        .p3 { animation: bob 2.6s 0.6s ease-in-out infinite; }
        .heart { animation: beat 2.6s ease-in-out infinite; transform-origin: 38px 46px; }
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
        @keyframes beat {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.2); }
        }
      `}</style>
      <g className="p1">
        <circle cx="20" cy="72" r="6" fill="#7c5ce8" />
        <path d="M12,92 C12,82 28,82 28,92 Z" fill="#9e8eef" />
      </g>
      <g className="p2">
        <circle cx="56" cy="72" r="6" fill="#beb5f5" />
        <path d="M48,92 C48,82 64,82 64,92 Z" fill="#ddd8fb" />
      </g>
      <g className="p3">
        <circle cx="38" cy="80" r="7" fill="#9e8eef" />
        <path d="M28,100 C28,90 48,90 48,100 Z" fill="#7c5ce8" />
      </g>
      <path
        d="M38,38 C35,33 28,35 28,41 C28,47 38,54 38,54 C38,54 48,47 48,41 C48,35 41,33 38,38 Z"
        fill="#d946a8"
        className="heart"
      />
    </svg>
  );
}
