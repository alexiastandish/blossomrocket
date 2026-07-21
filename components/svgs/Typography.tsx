export default function Typography() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Typography</title>
      <style>{`
        .cursor  { animation: blink 1.2s steps(1) infinite; }
        .letterA { animation: rise 2.6s 0s ease-in-out infinite; transform-origin: 30px 66px; }
        .letterB { animation: rise 2.6s 0.3s ease-in-out infinite; transform-origin: 52px 66px; }
        @keyframes blink {
          0%, 49%  { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes rise {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
      `}</style>
      <text
        x="18"
        y="72"
        fontSize="40"
        fontWeight="700"
        fill="#7c5ce8"
        className="letterA"
        style={{ fontFamily: "serif" }}
      >
        A
      </text>
      <text
        x="46"
        y="72"
        fontSize="26"
        fontWeight="700"
        fill="#9e8eef"
        className="letterB"
        style={{ fontFamily: "serif" }}
      >
        a
      </text>
      <rect
        x="65"
        y="38"
        width="3"
        height="30"
        fill="#d946a8"
        className="cursor"
      />
    </svg>
  );
}
