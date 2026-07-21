export default function BuiltToConnect() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Built To Connect</title>
      <style>{`
        .line1 { animation: flow 2.4s 0s ease-in-out infinite; }
        .line2 { animation: flow 2.4s 0.4s ease-in-out infinite; }
        .line3 { animation: flow 2.4s 0.8s ease-in-out infinite; }
        .node-center { animation: pulse 2.4s ease-in-out infinite; transform-origin: 38px 56px; }
        .node1 { animation: fade 2.4s 0s ease-in-out infinite; }
        .node2 { animation: fade 2.4s 0.4s ease-in-out infinite; }
        .node3 { animation: fade 2.4s 0.8s ease-in-out infinite; }
        @keyframes flow {
          0%   { opacity: 0.3; }
          50%  { opacity: 1; }
          100% { opacity: 0.3; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.2); }
        }
        @keyframes fade {
          0%, 100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }
      `}</style>
      <line
        x1="38"
        y1="56"
        x2="20"
        y2="34"
        stroke="#beb5f5"
        strokeWidth="2"
        className="line1"
      />
      <line
        x1="38"
        y1="56"
        x2="58"
        y2="34"
        stroke="#9e8eef"
        strokeWidth="2"
        className="line2"
      />
      <line
        x1="38"
        y1="56"
        x2="38"
        y2="86"
        stroke="#ddd8fb"
        strokeWidth="2"
        className="line3"
      />
      <circle cx="20" cy="34" r="6" fill="#7c5ce8" className="node1" />
      <circle cx="58" cy="34" r="6" fill="#d946a8" className="node2" />
      <circle cx="38" cy="86" r="6" fill="#9e8eef" className="node3" />
      <circle cx="38" cy="56" r="8" fill="white" className="node-center" />
      <circle cx="38" cy="56" r="4" fill="#7c5ce8" />
    </svg>
  );
}
