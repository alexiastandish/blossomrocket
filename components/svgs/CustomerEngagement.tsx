export default function CustomerEngagement() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Customer Engagement</title>
      <style>{`
        .bubble-back  { animation: float 3s 0.3s ease-in-out infinite; }
        .bubble-front { animation: float 3s 0s ease-in-out infinite; }
        .heart { animation: beat 1.8s ease-in-out infinite; transform-origin: 52px 40px; }
        .td1 { animation: bounce 1.4s 0s ease-in-out infinite; }
        .td2 { animation: bounce 1.4s 0.2s ease-in-out infinite; }
        .td3 { animation: bounce 1.4s 0.4s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
        @keyframes beat {
          0%, 100% { transform: scale(1); }
          25%      { transform: scale(1.2); }
          40%      { transform: scale(1); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }
      `}</style>
      <g className="bubble-back">
        <rect x="34" y="26" width="28" height="22" rx="8" fill="#ddd8fb" />
        <polygon points="46,48 52,48 46,56" fill="#ddd8fb" />
      </g>
      <g className="bubble-front">
        <rect
          x="12"
          y="52"
          width="34"
          height="26"
          rx="9"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        <polygon
          points="20,78 26,78 18,86"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        <circle cx="21" cy="65" r="2.5" fill="#7c5ce8" className="td1" />
        <circle cx="29" cy="65" r="2.5" fill="#9e8eef" className="td2" />
        <circle cx="37" cy="65" r="2.5" fill="#beb5f5" className="td3" />
      </g>
      <path
        d="M52,36 C49,32 43,34 43,39 C43,44 52,50 52,50 C52,50 61,44 61,39 C61,34 55,32 52,36 Z"
        fill="#d946a8"
        className="heart"
      />
    </svg>
  );
}
