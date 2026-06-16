export default function DigitalMarketing() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Digital Marketing</title>
      <style>{`
        .ring1 { animation: ripple 2.4s 0s ease-out infinite; transform-origin: 38px 64px; }
        .ring2 { animation: ripple 2.4s 0.4s ease-out infinite; transform-origin: 38px 64px; }
        .ring3 { animation: ripple 2.4s 0.8s ease-out infinite; transform-origin: 38px 64px; }
        .center { animation: pulse 2.4s ease-in-out infinite; transform-origin: 38px 64px; }
        .pinkdot { animation: blink 2.4s ease-in-out infinite; }
        @keyframes ripple {
          0%   { opacity: 0; transform: scale(0.5); }
          40%  { opacity: 1; }
          100% { opacity: 0; transform: scale(1.1); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.15); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
      <circle
        cx="38"
        cy="64"
        r="28"
        fill="none"
        stroke="#ddd8fb"
        strokeWidth="2"
        className="ring1"
      />
      <circle
        cx="38"
        cy="64"
        r="20"
        fill="none"
        stroke="#beb5f5"
        strokeWidth="2"
        className="ring2"
      />
      <circle
        cx="38"
        cy="64"
        r="12"
        fill="none"
        stroke="#9e8eef"
        strokeWidth="2"
        className="ring3"
      />
      <circle cx="38" cy="64" r="5" fill="#7c5ce8" className="center" />
      <circle cx="55" cy="38" r="5" fill="#d946a8" className="pinkdot" />
      <rect x="14" y="24" width="20" height="5" rx="2" fill="#ddd8fb" />
      <rect x="14" y="24" width="14" height="5" rx="2" fill="#7c5ce8" />
    </svg>
  );
}
