"use client";
import React, { useRef, useEffect } from "react";
import workExperience from '../lib/data/work-experiences.json'
import { Clock, Link } from "lucide-react";

export const Comments = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Only trigger when mouse is over the element
      if (e.deltaY !== 0) {
        e.preventDefault(); // prevent vertical scrolling
        el.scrollBy({
          left: e.deltaY, // use vertical delta for horizontal scroll
          behavior: "smooth",
        });
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div className="bg-surface-200 p-2 flex flex-col items-center justify-center">
      <div className="font-bold text-3xl text-dark-100 pt-8 pb-2">
        Work Experience's
      </div>
      <div
      ref={scrollRef}
      className="w-3/4 flex overflow-x-auto space-x-4 text-sm p-4"
    >
      {workExperience.map((work: any, index: number) => (
        <div
          key={index}
          className="shrink-0 w-[35.8%] flex flex-col gap-2 p-5 bg-surface-300 text-white rounded-lg cursor-pointer transition-all duration-300 border-4 border-transparent hover:border-dark-500"
        >
          <div className="flex flex-wrap justify-between items-center text-lg font-avenir font-black text-dark-100">
              {work.companyName}
              <div className="flex gap-1 justify-center items-center">
                <Clock size={15} className="text-dark-200" />
                <span className="text-dark-200 font-normal font-sans text-sm">
                {work.from} - {work.to}
              </span>
              </div>
          </div>
          <div className="flex gap-1 text-dark-100/80">
            {work.category.map((cat: string, catIndex: number) => (
              <span key={catIndex} className="px-3 py-1 bg-dark-600 rounded-full font-akshar font-bold">
                {cat}
              </span>
            ))}
          </div>
          <div className="text-dark-200 italic">
            {work.description}
          </div>
          <div className="flex justify-end cursor-pointer mt-3" title={work.toolsName}>
            {work.toolsIcon.map((tool: string, toolIndex: number) => (
              <div
                key={toolIndex}
                className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-full p-1 border-2 border-dark-200 shadow-md -mr-2 last:mr-0"
              >
                <img
                  src={tool}
                  alt={tool ?? ""}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
