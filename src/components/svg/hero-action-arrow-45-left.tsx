import React from "react";
import { cn } from "@/lib/utils";

export default function Arrow45LeftSvg({
  className,
  styles,
}: {
  className?: string;
  styles?: React.CSSProperties;
}) {
  return (
    <svg
      className={cn("group-hover:rotate-[145deg] transition-transform duration-300", className)}
      style={styles || {}}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.85 10.28"
    >
      <g>
        <polyline
          className="fill-none stroke-white stroke-miterlimit-[10] group-hover:stroke-primary transition-[stroke] duration-300 ease-out"
          points="2.4 9.54 .61 1.71 8.54 .49"
        />
        <line
          className="fill-none stroke-white stroke-miterlimit-[10] group-hover:stroke-primary transition-[stroke] duration-300 ease-out"
          x1="12.57"
          y1="9.87"
          x2=".8"
          y2="1.81"
        />
      </g>
    </svg>
  );
}