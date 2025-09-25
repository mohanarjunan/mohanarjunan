"use client";

import React, { useEffect, useRef } from "react";
import InfiniteMarquee from "vanilla-infinite-marquee";
import techStack from "../lib/data/tech-stack.json";

export const WhatIKnow = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const images = Array.from(container.querySelectorAll("img")) as HTMLImageElement[];

    let marquee: InfiniteMarquee | null = null;
    let loadedCount = 0;

    const initMarquee = () => {
      marquee = new InfiniteMarquee({
        element: container,
        speed: 120000, // ✅ Slow and steady for many images (~25 seconds per loop)
        smoothEdges: true,
        direction: "left",
        spaceBetween: "30px",
        on: {
          beforeInit: () => console.log("Not Yet Initialized"),
          afterInit: () => console.log("Initialized"),
        },
      });
    };

    const checkAndInit = () => {
      if (loadedCount === images.length) {
        initMarquee();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.onload = () => {
          loadedCount++;
          checkAndInit();
        };
        img.onerror = () => {
          loadedCount++;
          checkAndInit();
        };
      }
    });

    checkAndInit();

    return () => {
      marquee?.destroy?.();
    };
  }, []);

  return (
    <div className="flex justify-center bg-surface-300 py-10">
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
