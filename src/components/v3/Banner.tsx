import React from "react";
import Profile from "./Profile";

export default function Banner() {



  return (
    <div
      className={`w-full h-full bg-black overflow-hidden relative flex`}
    >
      <div className="absolute md:-top-1 left-0 w-full h-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="69.5"
              height="69.5"
              patternUnits="userSpaceOnUse"
              >
              <path
                d="M 69.5 0 L 0 0 0 69.5"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1"
              />
            </pattern>

            <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="fadeMask">
              <rect width="100%" height="100%" fill="url(#fade)" />
            </mask>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            mask="url(#fadeMask)"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center w-full"  >
        <Profile />
        <div>
          <span className="md:me-3 me-2 md:text-6xl font-avenir text-3xl tracking-tight md:tracking-[-5px] font-bold bg-gradient-to-t from-[#500] to-[#FFFFFF] bg-clip-text text-transparent uppercase">Mohan</span>
          <span className="md:text-6xl font-avenir text-3xl  tracking-tight md:tracking-[-5px] font-bold bg-gradient-to-t from-[#2D2D2D] to-[#FFFFFF] bg-clip-text text-transparent uppercase">Arjunan</span>
          </div>
        <div className="md:text-xl text-sm tracking-wider bg-gradient-to-t from-[#2D2D2D] to-[#FFFFFF] bg-clip-text text-transparent uppercase">Full-Stack Development Enthusiast</div>
      </div>
    </div>
  );
}
