"use client";

import React, { useEffect, useRef } from "react";
import InfiniteMarquee from "vanilla-infinite-marquee";
import techStack from "../lib/data/tech-stack.json";

export const WhatIKnow = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let marquee: any | null = null;
    let loadedCount = 0;

    const initMarquee = () => {
      marquee = new InfiniteMarquee({
        element: container,
        speed: 150000,
        smoothEdges: true,
        direction: "left",
        spaceBetween: "30px",
        on: {
          beforeInit: () => console.log("Not Yet Initialized"),
          afterInit: () => console.log("Initialized"),
        },
      });
    };

    initMarquee();

    return () => {
      marquee?.destroy?.();
    };
  }, []);

  return (
    <div id="what-i-know" className="flex justify-center bg-surface-100 dark:bg-surface-300 py-10">
      <div
        ref={containerRef}
        className="tools-container w-2/3 overflow-hidden flex"
      >
        {techStack.map((tool: any, index: number) => (
          <div
            key={index}
            className="w-16 h-16 flex items-center justify-center"
          >
            <img
              src={tool.src}
              alt={tool.name ?? ""}
              className="w-full h-full object-contain will-change-transform backface-hidden"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
