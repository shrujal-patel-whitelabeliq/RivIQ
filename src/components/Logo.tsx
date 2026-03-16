import React from "react"

export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M20 20C40 20 60 40 60 60C60 80 40 100 20 100" 
      stroke="currentColor" 
      strokeWidth="12" 
      strokeLinecap="round" 
    />
    <path 
      d="M40 10C70 10 90 35 90 60C90 85 70 110 40 110" 
      stroke="currentColor" 
      strokeWidth="12" 
      strokeLinecap="round" 
      opacity="0.6"
    />
    <path 
      d="M10 30C30 30 50 45 50 65C50 85 30 100 10 100" 
      stroke="currentColor" 
      strokeWidth="12" 
      strokeLinecap="round" 
      opacity="0.3"
    />
  </svg>
)
