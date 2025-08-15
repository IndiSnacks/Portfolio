import * as React from "react";

const HeartSvg: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="11"
    fill="none"
    viewBox="0 0 12 11"
  >
    <path
      stroke="#854646"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.17 5.825 6.004 10 1.84 5.825a2.841 2.841 0 0 1 .107-4.129 2.77 2.77 0 0 1 2.124-.68c.381.041.75.162 1.082.354s.623.453.852.764c.23-.31.52-.567.852-.757a2.75 2.75 0 0 1 3.196.332c.288.255.52.567.683.917a2.84 2.84 0 0 1-.567 3.202"
    ></path>
  </svg>
);

export default HeartSvg;
