export default function EmployeePrograms() {
  return (
    <svg
      width="100%"
      viewBox="0 0 76 112"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Employee Programs</title>
      <style>{`
        .person1 { animation: float 3s 0s ease-in-out infinite; }
        .person2 { animation: float 3s 0.3s ease-in-out infinite; }
        .person3 { animation: float 3s 0.6s ease-in-out infinite; }
        .link    { animation: pulse-line 3s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }
        @keyframes pulse-line {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
      `}</style>

      <line
        x1="24"
        y1="58"
        x2="38"
        y2="68"
        stroke="#beb5f5"
        strokeWidth="1.5"
        className="link"
      />
      <line
        x1="52"
        y1="58"
        x2="38"
        y2="68"
        stroke="#beb5f5"
        strokeWidth="1.5"
        className="link"
      />

      <g className="person1">
        <circle cx="24" cy="48" r="9" fill="#beb5f5" />
        <path d="M14 70 Q14 58 24 58 Q34 58 34 70" fill="#ddd8fb" />
      </g>

      <g className="person2">
        <circle cx="38" cy="68" r="11" fill="#7c5ce8" />
        <path d="M25 94 Q25 80 38 80 Q51 80 51 94" fill="#9e8eef" />
      </g>

      <g className="person3">
        <circle cx="52" cy="48" r="9" fill="#d946a8" />
        <path d="M42 70 Q42 58 52 58 Q62 58 62 70" fill="#f9c5ef" />
      </g>
    </svg>
  );
}
