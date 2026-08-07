export default function ConsistentBrandingProducts() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        Maintain more consistent branding across products and purchases
      </title>
      <style>{`
        .tile1 { animation: sync 2.4s 0s ease-in-out infinite; }
        .tile2 { animation: sync 2.4s 0.15s ease-in-out infinite; }
        .tile3 { animation: sync 2.4s 0.3s ease-in-out infinite; }
        .tile4 { animation: sync 2.4s 0.45s ease-in-out infinite; }
        @keyframes sync {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.1); }
        }
      `}</style>
      <rect
        x="16"
        y="30"
        width="18"
        height="18"
        rx="3"
        fill="#7c5ce8"
        className="tile1"
      />
      <rect
        x="42"
        y="30"
        width="18"
        height="18"
        rx="3"
        fill="#7c5ce8"
        className="tile2"
      />
      <rect
        x="16"
        y="56"
        width="18"
        height="18"
        rx="3"
        fill="#7c5ce8"
        className="tile3"
      />
      <rect
        x="42"
        y="56"
        width="18"
        height="18"
        rx="3"
        fill="#7c5ce8"
        className="tile4"
      />
      <circle cx="25" cy="39" r="4" fill="#ddd8fb" />
      <circle cx="51" cy="39" r="4" fill="#ddd8fb" />
      <circle cx="25" cy="65" r="4" fill="#ddd8fb" />
      <circle cx="51" cy="65" r="4" fill="#ddd8fb" />
      <rect x="24" y="86" width="28" height="6" rx="3" fill="#d946a8" />
    </svg>
  );
}
