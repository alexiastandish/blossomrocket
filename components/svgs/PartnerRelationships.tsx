export default function PartnerRelationships() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Partner Relationships</title>
      <style>{`
        .circle1 { animation: drift 3s ease-in-out infinite; transform-origin: 28px 56px; }
        .circle2 { animation: drift 3s 0.3s ease-in-out infinite reverse; transform-origin: 48px 56px; }
        .link    { animation: pulse 3s ease-in-out infinite; }
        @keyframes drift {
          0%, 100% { transform: translateX(0); }
          50%      { transform: translateX(-2px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50%      { opacity: 1; }
        }
      `}</style>
      <circle
        cx="28"
        cy="56"
        r="18"
        fill="#9e8eef"
        opacity="0.85"
        className="circle1"
      />
      <circle
        cx="48"
        cy="56"
        r="18"
        fill="#7c5ce8"
        opacity="0.85"
        className="circle2"
      />
      <circle cx="38" cy="56" r="7" fill="#d946a8" className="link" />
    </svg>
  );
}
