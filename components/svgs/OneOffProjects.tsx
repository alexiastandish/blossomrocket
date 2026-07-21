export default function OneOffProjects() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>One-Off Projects</title>
      <style>{`
        .ring { animation: ripple 2.6s ease-out infinite; transform-origin: 38px 52px; }
        .pin  { animation: bounce 2.6s ease-in-out infinite; transform-origin: 38px 52px; }
        .spark { animation: twinkle 2.6s ease-in-out infinite; }
        @keyframes ripple {
          0%   { opacity: 0.8; transform: scale(0.6); }
          70%  { opacity: 0; transform: scale(1.4); }
          100% { opacity: 0; transform: scale(1.4); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50%      { opacity: 1; }
        }
      `}</style>
      <circle
        cx="38"
        cy="52"
        r="18"
        fill="none"
        stroke="#beb5f5"
        strokeWidth="2"
        className="ring"
      />
      <g className="pin">
        <path
          d="M38,26 C50,26 58,35 58,46 C58,60 38,80 38,80 C38,80 18,60 18,46 C18,35 26,26 38,26 Z"
          fill="#7c5ce8"
        />
        <circle cx="38" cy="46" r="9" fill="white" />
        <path
          d="M38,40 L40,45 L45,45 L41,48 L43,53 L38,50 L33,53 L35,48 L31,45 L36,45 Z"
          fill="#d946a8"
        />
      </g>
      <circle cx="58" cy="30" r="2.5" fill="#ddd8fb" className="spark" />
    </svg>
  );
}
