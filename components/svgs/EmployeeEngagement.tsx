export default function EmployeeEngagement() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Employee Engagement</title>
      <style>{`
        .person1 { animation: lean 2.4s ease-in-out infinite; transform-origin: 24px 70px; }
        .person2 { animation: lean 2.4s 0.2s ease-in-out infinite reverse; transform-origin: 52px 70px; }
        .spark { animation: burst 2.4s ease-out infinite; }
        @keyframes lean {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(4deg); }
        }
        @keyframes burst {
          0%, 60%, 100% { opacity: 0; transform: scale(0.6); }
          75%           { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
      <g className="person1">
        <circle cx="22" cy="46" r="8" fill="#7c5ce8" />
        <path d="M10,80 C10,64 34,64 34,80 L34,86 L10,86 Z" fill="#9e8eef" />
        <rect x="30" y="60" width="16" height="6" rx="3" fill="#9e8eef" />
      </g>
      <g className="person2">
        <circle cx="54" cy="46" r="8" fill="#beb5f5" />
        <path d="M42,80 C42,64 66,64 66,80 L66,86 L42,86 Z" fill="#ddd8fb" />
        <rect x="30" y="60" width="16" height="6" rx="3" fill="#ddd8fb" />
      </g>
      <circle cx="38" cy="58" r="4" fill="#d946a8" className="spark" />
    </svg>
  );
}
