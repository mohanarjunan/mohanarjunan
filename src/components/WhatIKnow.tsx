"use client";

import React, { useEffect, useRef } from "react";
import InfiniteMarquee from "vanilla-infinite-marquee";
import techStack from "../lib/data/tech-stack.json";

export const WhatIKnow = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const marquee = new InfiniteMarquee({
      element: containerRef.current,
      speed: 200000,
      smoothEdges: true,
      direction: "left",
      spaceBetween: "30px",
      on: {
        beforeInit: () => {
          console.log("Not Yet Initialized");
        },
        afterInit: () => {
          console.log("Initialized");
        },
      },
    });

    return () => {
      marquee.destroy?.();
    };
  }, []);

  return (
    <div className="flex justify-center bg-surface-300 py-10 scroll-smooth">
      <div
        ref={containerRef}
        className="tools-container w-1/2 overflow-hidden"
      >
        {techStack.map((tool: any, index: number) => (
          <div
            key={index}
            className="w-16 h-16 flex items-center justify-center"
          >
            <img
              src={tool.src}
              alt={tool.name ?? ""}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
