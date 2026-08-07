export default function MatchBrandColors() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Match merchandise to brand-appropriate product colors</title>
      <style>{`
        .approved { animation: pop 2.6s 0s ease-out infinite; transform-origin: 38px 66px; }
        .reject1  { animation: fade 2.6s 0.2s ease-in-out infinite; }
        .reject2  { animation: fade 2.6s 0.4s ease-in-out infinite; }
        @keyframes pop {
          0%, 60%, 100% { transform: scale(1); }
          75%           { transform: scale(1.2); }
        }
        @keyframes fade {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 0.15; }
        }
      `}</style>
      <circle cx="18" cy="46" r="9" fill="#beb5f5" className="reject1" />
      <line x1="12" y1="40" x2="24" y2="52" stroke="#d946a8" strokeWidth="2" />
      <line x1="24" y1="40" x2="12" y2="52" stroke="#d946a8" strokeWidth="2" />
      <circle cx="58" cy="46" r="9" fill="#ddd8fb" className="reject2" />
      <line x1="52" y1="40" x2="64" y2="52" stroke="#d946a8" strokeWidth="2" />
      <line x1="64" y1="40" x2="52" y2="52" stroke="#d946a8" strokeWidth="2" />
      <circle cx="38" cy="66" r="16" fill="#7c5ce8" className="approved" />
      <path
        d="M30,66 L36,72 L48,58"
        stroke="white"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
