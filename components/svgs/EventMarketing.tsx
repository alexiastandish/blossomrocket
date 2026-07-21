export default function EventMarketing() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Event Marketing</title>
      <style>{`
        .confetti1 { animation: drift 2.8s 0s ease-in-out infinite; }
        .confetti2 { animation: drift 2.8s 0.5s ease-in-out infinite; }
        .confetti3 { animation: drift 2.8s 1s ease-in-out infinite; }
        .confetti4 { animation: drift 2.8s 1.5s ease-in-out infinite; }
        .ring     { animation: pulse 2.8s ease-in-out infinite; transform-origin: 38px 58px; }
        @keyframes drift {
          0%   { opacity: 0; transform: translateY(-4px) rotate(0deg); }
          30%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(14px) rotate(45deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.15); opacity: 0.6; }
        }
      `}</style>
      <rect
        x="16"
        y="28"
        width="44"
        height="46"
        rx="5"
        fill="white"
        stroke="#7c5ce8"
        strokeWidth="1.5"
      />
      <rect x="16" y="28" width="44" height="12" rx="5" fill="#7c5ce8" />
      <rect x="24" y="22" width="4" height="10" rx="2" fill="#9e8eef" />
      <rect x="48" y="22" width="4" height="10" rx="2" fill="#9e8eef" />
      <circle cx="38" cy="58" r="9" fill="#ddd8fb" className="ring" />
      <circle cx="38" cy="58" r="4" fill="#d946a8" />
      <rect
        x="52"
        y="12"
        width="4"
        height="4"
        fill="#d946a8"
        className="confetti1"
      />
      <circle cx="62" cy="18" r="2" fill="#9e8eef" className="confetti2" />
      <rect
        x="20"
        y="14"
        width="4"
        height="4"
        fill="#beb5f5"
        className="confetti3"
      />
      <circle cx="14" cy="22" r="2" fill="#7c5ce8" className="confetti4" />
    </svg>
  );
}
