export default function PromotionalCampaigns() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Promotional Campaigns</title>
      <style>{`
        .lid    { animation: bounce 2.6s ease-in-out infinite; transform-origin: 38px 52px; }
        .tag    { animation: swing 2.6s ease-in-out infinite; transform-origin: 58px 34px; }
        .sparkle1 { animation: twinkle 2.6s 0s ease-in-out infinite; }
        .sparkle2 { animation: twinkle 2.6s 0.7s ease-in-out infinite; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
        @keyframes swing {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(8deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50%      { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
      <rect x="16" y="56" width="40" height="30" rx="3" fill="#9e8eef" />
      <rect
        x="16"
        y="56"
        width="40"
        height="8"
        fill="#7c5ce8"
        className="lid"
      />
      <rect x="33" y="56" width="6" height="30" fill="#ddd8fb" />
      <g className="tag">
        <rect
          x="50"
          y="26"
          width="18"
          height="14"
          rx="2"
          fill="white"
          stroke="#d946a8"
          strokeWidth="1.5"
        />
        <circle cx="55" cy="31" r="1.8" fill="#d946a8" />
        <path d="M67,20 L58,26" stroke="#d946a8" strokeWidth="1.5" />
        <text x="53" y="38" fontSize="7" fill="#d946a8" fontWeight="bold">
          %
        </text>
      </g>
      <circle cx="12" cy="40" r="2.5" fill="#beb5f5" className="sparkle1" />
      <circle cx="22" cy="30" r="2" fill="#ddd8fb" className="sparkle2" />
    </svg>
  );
}
