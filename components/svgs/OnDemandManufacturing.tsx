export default function OnDemandManufacturing() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>On-Demand Manufacturing & Fulfillment</title>
      <style>{`
        .gear { animation: spin 4s linear infinite; transform-origin: 30px 40px; }
        .drip { animation: drip 2s ease-in infinite; }
        .box  { animation: fillBox 2s ease-in-out infinite; transform-origin: 46px 78px; }
        @keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }
        @keyframes drip {
          0%   { opacity: 0; transform: translateY(-4px); }
          40%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(14px); }
        }
        @keyframes fillBox {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.08); }
        }
      `}</style>
      <g className="gear">
        <circle cx="30" cy="40" r="12" fill="#9e8eef" />
        <circle cx="30" cy="40" r="5" fill="white" />
        <rect x="27" y="24" width="6" height="6" fill="#9e8eef" />
        <rect x="27" y="50" width="6" height="6" fill="#9e8eef" />
        <rect x="14" y="37" width="6" height="6" fill="#9e8eef" />
        <rect x="40" y="37" width="6" height="6" fill="#9e8eef" />
      </g>
      <rect x="42" y="52" width="6" height="14" rx="2" fill="#beb5f5" />
      <circle cx="45" cy="68" r="2.5" fill="#d946a8" className="drip" />
      <rect
        x="34"
        y="70"
        width="24"
        height="18"
        rx="3"
        fill="#7c5ce8"
        className="box"
      />
      <rect x="34" y="70" width="24" height="6" fill="#ddd8fb" />
    </svg>
  );
}
