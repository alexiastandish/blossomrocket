export default function UiUxDesign() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>UI/UX Design</title>
      <style>{`
        .ring { animation: pulse 2.5s ease-in-out infinite; transform-origin: 38px 52px; }
        .cursor { animation: click 2.5s ease-in-out infinite; }
        .dot { animation: dotpop 2.5s ease-in-out infinite; transform-origin: 38px 52px; }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes click {
          0%, 60%, 100% { transform: translate(0,0); }
          70% { transform: translate(1px, 1px); }
          80% { transform: translate(0,0); }
        }
        @keyframes dotpop {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
      <circle
        cx="38"
        cy="52"
        r="24"
        fill="none"
        stroke="#7c5ce8"
        strokeWidth="2"
        strokeDasharray="5 3"
        className="ring"
      />
      <circle cx="38" cy="52" r="8" fill="#7c5ce8" className="dot" />
      <path
        d="M50 62 L50 80 L54 75 L57 82 L60 81 L57 74 L62 74 Z"
        fill="#d946a8"
        className="cursor"
      />
    </svg>
  );
}
