export default function SupportMultipleDepartments() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Support Multiple Departments</title>
      <style>{`
        .node1 { animation: pulse 2.6s 0s ease-in-out infinite; }
        .node2 { animation: pulse 2.6s 0.2s ease-in-out infinite; }
        .node3 { animation: pulse 2.6s 0.4s ease-in-out infinite; }
        .branch1 { animation: fade 2.6s 0s ease-in-out infinite; }
        .branch2 { animation: fade 2.6s 0.2s ease-in-out infinite; }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.2); }
        }
        @keyframes fade {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
      `}</style>
      <circle cx="38" cy="32" r="8" fill="#7c5ce8" />
      <line
        x1="38"
        y1="40"
        x2="38"
        y2="52"
        stroke="#beb5f5"
        strokeWidth="2.5"
        className="branch1"
      />
      <line
        x1="38"
        y1="52"
        x2="20"
        y2="66"
        stroke="#beb5f5"
        strokeWidth="2.5"
        className="branch1"
      />
      <line
        x1="38"
        y1="52"
        x2="56"
        y2="66"
        stroke="#ddd8fb"
        strokeWidth="2.5"
        className="branch2"
      />
      <circle cx="20" cy="72" r="7" fill="#9e8eef" className="node1" />
      <circle cx="56" cy="72" r="7" fill="#d946a8" className="node2" />
      <circle cx="38" cy="52" r="6" fill="#9e8eef" className="node3" />
    </svg>
  );
}
