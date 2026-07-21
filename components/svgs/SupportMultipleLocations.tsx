export default function SupportMultipleLocations() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Support Multiple Locations</title>
      <style>{`
        .pin1 { animation: bounce 2.6s 0s ease-in-out infinite; transform-origin: 22px 50px; }
        .pin2 { animation: bounce 2.6s 0.3s ease-in-out infinite; transform-origin: 54px 42px; }
        .pin3 { animation: bounce 2.6s 0.6s ease-in-out infinite; transform-origin: 38px 76px; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }
      `}</style>
      <g className="pin1">
        <path
          d="M22,32 C30,32 34,38 34,44 C34,52 22,62 22,62 C22,62 10,52 10,44 C10,38 14,32 22,32 Z"
          fill="#9e8eef"
        />
        <circle cx="22" cy="44" r="4" fill="white" />
      </g>
      <g className="pin2">
        <path
          d="M54,24 C64,24 68,32 68,38 C68,48 54,60 54,60 C54,60 40,48 40,38 C40,32 44,24 54,24 Z"
          fill="#7c5ce8"
        />
        <circle cx="54" cy="38" r="4.5" fill="white" />
      </g>
      <g className="pin3">
        <path
          d="M38,58 C46,58 50,64 50,70 C50,78 38,88 38,88 C38,88 26,78 26,70 C26,64 30,58 38,58 Z"
          fill="#d946a8"
        />
        <circle cx="38" cy="70" r="4" fill="white" />
      </g>
    </svg>
  );
}
