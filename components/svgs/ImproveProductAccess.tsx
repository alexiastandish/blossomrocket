export default function ImproveProductAccess() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Improve Product Access</title>
      <style>{`
        .key   { animation: turn 2.6s ease-in-out infinite; transform-origin: 26px 40px; }
        .box   { animation: open 2.6s ease-in-out infinite; }
        .lid   { animation: openLid 2.6s ease-in-out infinite; transform-origin: 38px 66px; }
        @keyframes turn {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(-20deg); }
        }
        @keyframes open {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-2px); }
        }
        @keyframes openLid {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          50%      { transform: rotate(-8deg) translateY(-3px); }
        }
      `}</style>
      <g className="box">
        <rect x="18" y="66" width="40" height="24" rx="3" fill="#9e8eef" />
        <rect
          x="18"
          y="66"
          width="40"
          height="8"
          fill="#7c5ce8"
          className="lid"
        />
      </g>
      <g className="key">
        <circle
          cx="26"
          cy="38"
          r="8"
          fill="none"
          stroke="#d946a8"
          strokeWidth="3"
        />
        <line
          x1="32"
          y1="44"
          x2="46"
          y2="58"
          stroke="#d946a8"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="40"
          y1="52"
          x2="44"
          y2="48"
          stroke="#d946a8"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
