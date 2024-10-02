import React from "react";

export const ChevronRight = React.forwardRef<SVGSVGElement>(
  ({ ...props }, ref) => (
    <svg
      ref={ref}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);

ChevronRight.displayName = "ChevronRight";
export default ChevronRight;
