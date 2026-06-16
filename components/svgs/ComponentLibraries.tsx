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
        .outer { animation: fadein 2s ease-out forwards; }
        .card1 { animation: slidedown 0.5s 0.1s ease-out both; }
        .card2 { animation: slidedown 0.5s 0.25s ease-out both; }
        .card3 { animation: slidedown 0.5s 0.35s ease-out both; }
        .card4 { animation: slidedown 0.5s 0.45s ease-out both; }
        @keyframes fadein {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes slidedown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
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
