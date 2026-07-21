export default function StoreDesignMarketing() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Store Design & Marketing Tools</title>
      <style>{`
        .flag1 { animation: wave 2.4s 0s ease-in-out infinite; transform-origin: 22px 34px; }
        .flag2 { animation: wave 2.4s 0.3s ease-in-out infinite; transform-origin: 38px 34px; }
        .flag3 { animation: wave 2.4s 0.6s ease-in-out infinite; transform-origin: 54px 34px; }
        .badge { animation: pulse 2.4s ease-in-out infinite; transform-origin: 38px 66px; }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(6deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.1); }
        }
      `}</style>
      <polygon points="14,34 62,34 56,46 20,46" fill="#7c5ce8" />
      <polygon
        points="14,34 22,34 18,46 20,46"
        fill="#ddd8fb"
        className="flag1"
      />
      <polygon
        points="30,34 46,34 44,46 32,46"
        fill="#beb5f5"
        className="flag2"
      />
      <polygon
        points="54,34 62,34 56,46 52,46"
        fill="#9e8eef"
        className="flag3"
      />
      <rect
        x="18"
        y="46"
        width="40"
        height="34"
        fill="white"
        stroke="#7c5ce8"
        strokeWidth="1.5"
      />
      <rect x="30" y="60" width="16" height="20" fill="#ddd8fb" />
      <circle cx="56" cy="60" r="8" fill="#d946a8" className="badge" />
      <text x="52" y="64" fontSize="9" fill="white" fontWeight="700">
        %
      </text>
    </svg>
  );
}
