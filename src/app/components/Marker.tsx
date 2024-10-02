import React from "react";

export const Marker = React.forwardRef<SVGSVGElement>(({ ...props }, ref) => (
  <svg
    ref={ref}
    width="7"
    height="8"
    viewBox="0 0 7 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.0484467 4.04843L6.04845 0.58433L6.04845 7.51253L0.0484467 4.04843Z"
      fill="white"
    />
  </svg>
));

Marker.displayName = "Marker";
export default Marker;
