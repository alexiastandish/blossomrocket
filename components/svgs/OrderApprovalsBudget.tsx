export default function OrderApprovalsBudget() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Order Approvals & Budget Controls</title>
      <style>{`
        .stamp  { animation: stampDown 2.4s ease-in-out infinite; transform-origin: 52px 40px; }
        .needle { animation: sweep 2.4s ease-in-out infinite; transform-origin: 30px 76px; }
        @keyframes stampDown {
          0%, 60%, 100% { transform: translateY(0) rotate(-8deg); opacity: 1; }
          75%           { transform: translateY(3px) rotate(-8deg); opacity: 0.7; }
        }
        @keyframes sweep {
          0%, 100% { transform: rotate(-20deg); }
          50%      { transform: rotate(20deg); }
        }
      `}</style>
      <rect
        x="14"
        y="26"
        width="32"
        height="46"
        rx="4"
        fill="white"
        stroke="#7c5ce8"
        strokeWidth="1.5"
      />
      <rect x="22" y="20" width="16" height="8" rx="3" fill="#9e8eef" />
      <rect x="20" y="38" width="20" height="3" rx="1.5" fill="#beb5f5" />
      <rect x="20" y="46" width="20" height="3" rx="1.5" fill="#beb5f5" />
      <rect x="20" y="54" width="14" height="3" rx="1.5" fill="#ddd8fb" />
      <g className="stamp">
        <circle
          cx="52"
          cy="46"
          r="12"
          fill="none"
          stroke="#d946a8"
          strokeWidth="2.5"
        />
        <path
          d="M46,46 L50,50 L58,40"
          stroke="#d946a8"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M18,76 A12,12 0 0 1 42,76"
        fill="none"
        stroke="#ddd8fb"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="30"
        y1="76"
        x2="30"
        y2="66"
        stroke="#7c5ce8"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="needle"
      />
      <circle cx="30" cy="76" r="2.5" fill="#7c5ce8" />
    </svg>
  );
}
