export default function RecognitionRewardPrograms() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Recognition and Reward Programs</title>
      <style>{`
        .trophy   { animation: float 3s 0s ease-in-out infinite; }
        .ribbon-l { animation: sway-l 3s ease-in-out infinite; transform-origin: 32px 78px; }
        .ribbon-r { animation: sway-r 3s ease-in-out infinite; transform-origin: 44px 78px; }
        .shine    { animation: glow 2.4s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes sway-l {
          0%, 100% { transform: rotate(0deg); }
          50%       { transform: rotate(-5deg); }
        }
        @keyframes sway-r {
          0%, 100% { transform: rotate(0deg); }
          50%       { transform: rotate(5deg); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
      `}</style>

      <g className="trophy">
        <path d="M26 28 L50 28 L47 50 Q38 56 29 50 Z" fill="#7c5ce8" />
        <path
          d="M26 32 Q16 32 16 40 Q16 46 24 46"
          fill="none"
          stroke="#9e8eef"
          strokeWidth="2.5"
        />
        <path
          d="M50 32 Q60 32 60 40 Q60 46 52 46"
          fill="none"
          stroke="#9e8eef"
          strokeWidth="2.5"
        />
        <rect
          x="31"
          y="32"
          width="4"
          height="14"
          rx="2"
          fill="white"
          opacity="0.5"
          className="shine"
        />
        <rect x="34" y="55" width="8" height="10" fill="#beb5f5" />
        <rect x="26" y="64" width="24" height="6" rx="2" fill="#ddd8fb" />
      </g>

      <path
        d="M32 70 L26 92 L32 88 L36 94 Z"
        fill="#d946a8"
        className="ribbon-l"
      />
      <path
        d="M44 70 L50 92 L44 88 L40 94 Z"
        fill="#9e8eef"
        className="ribbon-r"
      />
    </svg>
  );
}
