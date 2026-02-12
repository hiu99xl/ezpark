import React from "react";
import { cn } from "@/lib/utils";

export default function MenuIconSvg({
  className,
  styles,
  fill = "none",
  ...props
}: React.SVGProps<SVGSVGElement> & {
  className?: string;
  styles?: React.CSSProperties;
  fill?: string;
}) {

  return (
    <svg
      className={cn("w-[clamp(12px,4vw,31px)] h-[clamp(12px,4vw,31px)] lg:w-[clamp(21.33px,2.0833vw,80px)] lg:h-[clamp(21.33px,2.0833vw,80px)] fill-white group-hover:fill-primary group-hover:rotate-90 transition-all duration-300", className)}
      style={styles || {}}
      viewBox="0 0 30 30"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8.36 17.12H2.25999C1.00999 17.12 0 18.13 0 19.38C0 20.63 1.00999 21.64 2.25999 21.64H8.36V27.74C8.36 28.99 9.37 30 10.62 30C11.87 30 12.88 28.99 12.88 27.74V17.13H8.37L8.36 17.12Z" />
      <path d="M12.88 8.36V2.25999C12.88 1.00999 11.87 0 10.62 0C9.37 0 8.36 1.00999 8.36 2.25999V8.36H2.25999C1.00999 8.36 0 9.37 0 10.62C0 11.87 1.00999 12.88 2.25999 12.88H12.87V8.37L12.88 8.36Z" />
      <path d="M21.54 17.12H27.64C28.89 17.12 29.9 18.13 29.9 19.38C29.9 20.63 28.89 21.64 27.64 21.64H21.54V27.74C21.54 28.99 20.53 30 19.28 30C18.03 30 17.02 28.99 17.02 27.74V21.64V17.13H21.53L21.54 17.12Z" />
      <path d="M17.0298 8.36V2.25999C17.0298 1.00999 18.0398 0 19.2898 0C20.5398 0 21.5498 1.00999 21.5498 2.25999V8.36H27.6498C28.8998 8.36 29.9098 9.37 29.9098 10.62C29.9098 11.87 28.8998 12.88 27.6498 12.88H21.5498H17.0398V8.37L17.0298 8.36Z" />
    </svg>
  );
}