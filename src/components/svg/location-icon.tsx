import React from 'react';
import { cn } from '@/lib/utils';

export default function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="42"
      viewBox="0 0 28 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden
    >
      <path
        d="M13.75 0C6.15 0 0 6.16 0 13.75C0 21.34 13.75 41.5601 13.75 41.5601C13.75 41.5601 27.5 21.35 27.5 13.75C27.5 6.15 21.34 0 13.75 0ZM13.75 18.99C9.66 18.99 6.33997 15.6701 6.33997 11.5801C6.33997 7.49008 9.66 4.16992 13.75 4.16992C17.84 4.16992 21.16 7.49008 21.16 11.5801C21.16 15.6701 17.84 18.99 13.75 18.99Z"
        fill="#ED5829"
      />
    </svg>
  );
}
