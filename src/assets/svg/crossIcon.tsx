import * as React from "react";

const crossIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth="2"
      d="M17 17 1 1m16 0L1 17"
    ></path>
  </svg>
);

export default crossIcon;
