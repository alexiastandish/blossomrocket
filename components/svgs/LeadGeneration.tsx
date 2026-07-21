export default function LeadGeneration() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Lead Generation</title>
      <style>{`
        .dot1 { animation: fall 2.4s 0s ease-in infinite; }
        .dot2 { animation: fall 2.4s 0.5s ease-in infinite; }
        .dot3 { animation: fall 2.4s 1s ease-in infinite; }
        .lead { animation: pop 2.4s 1.6s ease-out infinite; transform-origin: 38px 92px; }
        @keyframes fall {
          0%   { opacity: 0; transform: translateY(-6px); }
          20%  { opacity: 1; }
          70%  { opacity: 1; transform: translateY(20px); }
          100% { opacity: 0; transform: translateY(24px); }
        }
        @keyframes pop {
          0%, 60%, 100% { transform: scale(1); }
          75%            { transform: scale(1.3); }
        }
      `}</style>
      <polygon points="16,38 60,38 44,66 32,66" fill="#ddd8fb" />
      <rect x="32" y="66" width="12" height="14" fill="#beb5f5" />
      <circle cx="24" cy="30" r="4" fill="#9e8eef" className="dot1" />
      <circle cx="38" cy="26" r="4" fill="#7c5ce8" className="dot2" />
      <circle cx="52" cy="30" r="4" fill="#9e8eef" className="dot3" />
      <circle cx="38" cy="92" r="7" fill="#d946a8" className="lead" />
    </svg>
  );
}
