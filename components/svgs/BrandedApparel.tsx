export default function BrandedApparel() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Branded Apparel</title>
      <style>{`
        .shirt    { animation: float 3s 0s ease-in-out infinite; }
        .logo-dot { animation: pulse 3s 0.4s ease-in-out infinite; }
        .sleeve-l { animation: sway-l 3s 0s ease-in-out infinite; transform-origin: 22px 40px; }
        .sleeve-r { animation: sway-r 3s 0s ease-in-out infinite; transform-origin: 54px 40px; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.2); }
        }
        @keyframes sway-l {
          0%, 100% { transform: rotate(0deg); }
          50%       { transform: rotate(-4deg); }
        }
        @keyframes sway-r {
          0%, 100% { transform: rotate(0deg); }
          50%       { transform: rotate(4deg); }
        }
      `}</style>

      <g className="shirt">
        {/* Body */}
        <path
          d="M26 38 L26 92 L50 92 L50 38 L42 38 L38 42 L34 38 Z"
          fill="white"
          stroke="#beb5f5"
          strokeWidth="1.5"
        />
        {/* Sleeves */}
        <path
          d="M26 38 L14 46 L20 56 L26 50 Z"
          fill="white"
          stroke="#9e8eef"
          strokeWidth="1.5"
          className="sleeve-l"
        />
        <path
          d="M50 38 L62 46 L56 56 L50 50 Z"
          fill="white"
          stroke="#9e8eef"
          strokeWidth="1.5"
          className="sleeve-r"
        />
        {/* Collar */}
        <path
          d="M34 38 L38 42 L42 38"
          fill="none"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        {/* Logo */}
        <circle cx="38" cy="56" r="6" fill="#7c5ce8" className="logo-dot" />
        <rect x="32" y="68" width="12" height="2.5" rx="1.25" fill="#d946a8" />
      </g>
    </svg>
  );
}
