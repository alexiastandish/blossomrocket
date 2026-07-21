export default function LogoDesign() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Logo Design</title>
      <style>{`
        .path  { stroke-dasharray: 90; animation: draw 2.6s ease-in-out infinite; }
        .node1 { animation: pop 2.6s 0s ease-out infinite; }
        .node2 { animation: pop 2.6s 0.8s ease-out infinite; }
        .node3 { animation: pop 2.6s 1.6s ease-out infinite; }
        .nib   { animation: move 2.6s ease-in-out infinite; }
        @keyframes draw {
          0%   { stroke-dashoffset: 90; }
          70%, 100% { stroke-dashoffset: 0; }
        }
        @keyframes pop {
          0%, 60%, 100% { transform: scale(1); }
          75%           { transform: scale(1.4); }
        }
        @keyframes move {
          0%   { transform: translate(0,0); }
          35%  { transform: translate(10px,-14px); }
          70%  { transform: translate(20px,0); }
          100% { transform: translate(0,0); }
        }
      `}</style>
      <path
        d="M18,70 Q28,40 38,56 Q48,72 58,42"
        fill="none"
        stroke="#beb5f5"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="path"
      />
      <circle cx="18" cy="70" r="3.5" fill="#7c5ce8" className="node1" />
      <circle cx="38" cy="56" r="3.5" fill="#9e8eef" className="node2" />
      <circle cx="58" cy="42" r="3.5" fill="#d946a8" className="node3" />
      <g className="nib">
        <polygon points="14,66 20,64 22,70 16,74" fill="#7c5ce8" />
      </g>
    </svg>
  );
}
