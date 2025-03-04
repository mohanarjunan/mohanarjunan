"use client";

import stack from "@/data/tech-stack.json";
import Image from "next/image";
// @ts-ignore
import InfiniteMarquee from 'vanilla-infinite-marquee'
import { useEffect } from "react";

export default function TechStack() {
  useEffect(() => {
    new   InfiniteMarquee ({
      element: ".marquee-container",
      speed: 80000,
      smoothEdges: true,
      direction: "left",
      gap: "15px",
      duplicateCount: 2,
      mobileSettings: {
        direction: "top",
        speed: 20000,
      },
      on: {
        beforeInit: () => {
          console.log("Not Yet Initialized");
        },

        afterInit: () => {
          console.log("Initialized");
        },
      },
    });
  }, []);

  return (
    <>
      <div className="marquee-contain2er flex flex-wrap" >
        {stack.map((data, index) => (
          <div
            key={index}
            className="w-20 h-20 relative flex  overflow-hidden "
          >
            <Image
              src={data.src}
              alt={data.desc}
              title={data.title}
              className="w-full h-full p-3 inline-flex"
              width={0}
              height={0}
            />
          </div>
        ))}
      </div>
    </>
  );
}
