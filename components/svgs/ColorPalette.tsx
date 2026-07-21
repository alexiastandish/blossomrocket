export default function ColorPalette() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Color Palette</title>
      <style>{`
        .sw1  { animation: rise 2.6s 0s ease-in-out infinite; transform-origin: 38px 68px; }
        .sw2  { animation: rise 2.6s 0.2s ease-in-out infinite; transform-origin: 38px 68px; }
        .sw3  { animation: rise 2.6s 0.4s ease-in-out infinite; transform-origin: 38px 68px; }
        .sw4  { animation: rise 2.6s 0.6s ease-in-out infinite; transform-origin: 38px 68px; }
        .drop { animation: pop 2.6s 1s ease-out infinite; transform-origin: 38px 32px; }
        @keyframes rise {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-5px); }
        }
        @keyframes pop {
          0%, 60%, 100% { transform: scale(1); }
          75%           { transform: scale(1.25); }
        }
      `}</style>
      <circle cx="18" cy="68" r="9" fill="#ddd8fb" className="sw1" />
      <circle cx="32" cy="72" r="9" fill="#9e8eef" className="sw2" />
      <circle cx="46" cy="72" r="9" fill="#d946a8" className="sw3" />
      <circle cx="58" cy="68" r="9" fill="#7c5ce8" className="sw4" />
      <path
        d="M38,20 C46,30 46,38 38,42 C30,38 30,30 38,20 Z"
        fill="#beb5f5"
        className="drop"
      />
    </svg>
  );
}
