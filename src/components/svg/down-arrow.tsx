import React from "react";
import { cn } from "@/lib/utils";

export default function DownArrow({
  className,
}: {
  className?: string;
}) {
  return (
    <svg className={cn("w-full h-full", className)} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="612.007px" height="612.007px" viewBox="0 0 612.007 612.007"
      xmlSpace="preserve">
      <path d="M596.168,130.647c-21.119-21.169-55.382-21.169-76.526,0L306.013,366.44L92.384,130.647
				c-21.144-21.169-55.382-21.169-76.525,0c-21.144,21.169-21.144,55.458,0,76.627l248.504,274.31
				c11.438,11.438,26.672,16.482,41.651,15.54c14.953,0.942,30.213-4.102,41.65-15.54l248.505-274.31
				C617.287,186.105,617.287,151.817,596.168,130.647z"/>
    </svg>

  );
}