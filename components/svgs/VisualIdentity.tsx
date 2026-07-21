export default function VisualIdentity() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Visual Identity</title>
      <style>{`
        .lid   { animation: blinkEye 3.4s ease-in-out infinite; transform-origin: 38px 56px; }
        .iris  { animation: focus 3.4s ease-in-out infinite; transform-origin: 38px 56px; }
        .glint { animation: shine 3.4s ease-in-out infinite; }
        @keyframes blinkEye {
          0%, 92%, 100% { transform: scaleY(1); }
          96%           { transform: scaleY(0.1); }
        }
        @keyframes focus {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.15); }
        }
        @keyframes shine {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
      `}</style>
      <g className="lid">
        <path
          d="M12,56 C20,38 56,38 64,56 C56,74 20,74 12,56 Z"
          fill="#ddd8fb"
        />
      </g>
      <circle cx="38" cy="56" r="13" fill="#7c5ce8" className="iris" />
      <circle cx="38" cy="56" r="6" fill="#2a1a5e" />
      <circle cx="34" cy="52" r="2.5" fill="white" className="glint" />
    </svg>
  );
}
