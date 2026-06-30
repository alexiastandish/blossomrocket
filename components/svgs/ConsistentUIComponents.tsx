export default function ConsistentUIComponents() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Consistent UI Components</title>
      <style>{`
        .btn1 { animation: float 3s 0s ease-in-out infinite; }
        .btn2 { animation: float 3s 0.3s ease-in-out infinite; }
        .input { animation: float 3s 0.6s ease-in-out infinite; }
        .checkmark { animation: pulse 2.5s 0.4s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.2); }
        }
      `}</style>

      <g className="btn1">
        <rect x="14" y="22" width="48" height="16" rx="8" fill="#7c5ce8" />
        <rect
          x="22"
          y="28"
          width="20"
          height="3"
          rx="1.5"
          fill="white"
          opacity="0.85"
        />
      </g>

      <g className="btn2">
        <rect
          x="14"
          y="48"
          width="48"
          height="16"
          rx="8"
          fill="white"
          stroke="#7c5ce8"
          strokeWidth="1.5"
        />
        <rect x="22" y="54" width="20" height="3" rx="1.5" fill="#beb5f5" />
      </g>

      <g className="input">
        <rect
          x="14"
          y="74"
          width="48"
          height="16"
          rx="6"
          fill="white"
          stroke="#beb5f5"
          strokeWidth="1.5"
        />
        <circle cx="22" cy="82" r="3" fill="#7c5ce8" className="checkmark" />
        <rect x="30" y="80" width="24" height="3" rx="1.5" fill="#ddd8fb" />
      </g>
    </svg>
  );
}
