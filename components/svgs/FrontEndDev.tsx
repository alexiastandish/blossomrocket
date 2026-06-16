export default function FrontendDevelopment() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Front-End Development</title>
      <style>{`
        .bracket-l { animation: slidein-l 0.6s ease-out both; }
        .bracket-r { animation: slidein-r 0.6s ease-out both; }
        .slash     { animation: fadein 0.5s 0.4s ease-out both; }
        .dotbot    { animation: bounce 2s 1s ease-in-out infinite; }
        @keyframes slidein-l {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slidein-r {
          from { opacity: 0; transform: translateX(8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadein {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
      `}</style>
      <path
        d="M22 36 L14 56 L22 76"
        fill="none"
        stroke="#7c5ce8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="bracket-l"
      />
      <path
        d="M54 36 L62 56 L54 76"
        fill="none"
        stroke="#7c5ce8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="bracket-r"
      />
      <line
        x1="44"
        y1="32"
        x2="32"
        y2="80"
        stroke="#d946a8"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="slash"
      />
      <circle cx="38" cy="90" r="4" fill="#beb5f5" className="dotbot" />
    </svg>
  );
}
