export default function GraphicElements() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Graphic Elements</title>
      <style>{`
        .shape1 { animation: float 3s 0s ease-in-out infinite; }
        .shape2 { animation: float 3s 0.4s ease-in-out infinite; }
        .shape3 { animation: rotateShape 4s linear infinite; transform-origin: 46px 66px; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-5px); }
        }
        @keyframes rotateShape {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <circle cx="24" cy="42" r="12" fill="#ddd8fb" className="shape1" />
      <path
        d="M46,80 C36,80 32,70 38,62 C44,54 56,58 58,68 C60,76 54,80 46,80 Z"
        fill="#9e8eef"
        className="shape2"
      />
      <polygon points="46,54 56,74 36,74" fill="#d946a8" className="shape3" />
      <circle cx="58" cy="30" r="4" fill="#7c5ce8" />
    </svg>
  );
}
