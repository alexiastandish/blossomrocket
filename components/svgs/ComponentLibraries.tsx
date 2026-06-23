export default function ComponentLibraries() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Component Libraries</title>
      <style>{`
        .outer { animation: pulse-border 3s ease-in-out infinite; }
        .card1 { animation: float 3s 0s ease-in-out infinite; }
        .card2 { animation: float 3s 0.3s ease-in-out infinite; }
        .card3 { animation: float 3s 0.6s ease-in-out infinite; }
        .card4 { animation: float 3s 0.9s ease-in-out infinite; }
        @keyframes pulse-border {
          0%, 100% { stroke-opacity: 0.6; }
          50%       { stroke-opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
      `}</style>
      <rect
        x="10"
        y="20"
        width="56"
        height="72"
        rx="6"
        fill="none"
        stroke="#beb5f5"
        strokeWidth="1.5"
        className="outer"
      />
      <rect
        x="18"
        y="30"
        width="40"
        height="18"
        rx="4"
        fill="#7c5ce8"
        className="card1"
      />
      <rect
        x="18"
        y="54"
        width="18"
        height="18"
        rx="4"
        fill="#d946a8"
        className="card2"
      />
      <rect
        x="40"
        y="54"
        width="18"
        height="18"
        rx="4"
        fill="#beb5f5"
        className="card3"
      />
      <rect
        x="18"
        y="76"
        width="40"
        height="8"
        rx="4"
        fill="#ddd8fb"
        className="card4"
      />
    </svg>
  );
}
