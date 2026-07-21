export default function RecruitingInitiatives() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Recruiting Initiatives</title>
      <style>{`
        .glass  { animation: scan 2.6s ease-in-out infinite; }
        .person { animation: fade 2.6s ease-in-out infinite; }
        .check  { animation: pop 2.6s 1s ease-out infinite; transform-origin: 46px 30px; }
        @keyframes scan {
          0%, 100% { transform: translate(0,0); }
          50%      { transform: translate(3px,-3px); }
        }
        @keyframes fade {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.7; }
        }
        @keyframes pop {
          0%, 60%, 100% { transform: scale(1); }
          75%           { transform: scale(1.3); }
        }
      `}</style>
      <g className="person">
        <circle cx="30" cy="46" r="9" fill="#9e8eef" />
        <path d="M16,78 C16,62 44,62 44,78 L44,84 L16,84 Z" fill="#beb5f5" />
      </g>
      <g className="glass">
        <circle
          cx="50"
          cy="60"
          r="12"
          fill="none"
          stroke="#7c5ce8"
          strokeWidth="3"
        />
        <line
          x1="59"
          y1="69"
          x2="66"
          y2="76"
          stroke="#7c5ce8"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      <circle cx="46" cy="30" r="8" fill="#d946a8" className="check" />
      <path
        d="M42,30 L45,33 L51,26"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
