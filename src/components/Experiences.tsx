"use client";
import React, { useRef, useEffect, useState } from "react";
import workExperiences from "../lib/data/work-experiences.json";
import { Axe, Clock, Link } from "lucide-react";
import { Work } from "./Work";

export const Experiences = () => {
  return (
    <div id="work-experiences" className="bg-surface-200 p-5 flex flex-col items-center justify-center">
      {/* Title */}
      <div className="font-bold text-3xl text-dark-100 p-8">
        Work Experience's
      </div>

      {/* Container */}
      <div className="md:w-3/5 w-full flex flex-col md:space-y-5 space-y-10 py-10 text-sm relative">
        {/* Tree Line */}
        <div className="absolute md:left-1/2 left-0 top-0 h-full w-[2px] bg-dark-300 transform md:-translate-x-1/2" />

        {/* Map */}
        {workExperiences.map((work: any, index: number) => (
          // Each Element
          <div
            key={index}
            className={`w-full flex md:flex-row md:gap-20 gap-4 flex-col-reverse ${
              index % 2 == 0 ? "" : "md:flex-row-reverse"
            } md:px-8 ps-8 relative`}
          >
            {/* Dot */}
            <div
              className={`hidden md:block absolute w-5 h-5 overflow-hidden bg-surface-200 rounded-full top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 ${
                index == 0 ? "p-1" : "p-1.5 "
              }`}
            >
              <div
                className={`w-full h-full bg-brand-100 rounded-full ${
                  index == 0 ? "transition-all border-2 border-white" : ""
                }`}
              ></div>
            </div>
            <div
              className={`${
                index == 0 ? "block" : "hidden"
              } animate-ping absolute w-5 h-5 overflow-hidden bg-surface-200 rounded-full top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 ${
                index == 0 ? "p-1" : "p-1.5 "
              }`}
            >
              <div
                className={`w-full h-full bg-brand-100 rounded-full ${
                  index == 0 ? "transition-all border-2 border-white" : ""
                }`}
              ></div>
            </div>

            {/* Details Block */}
            <Work index={index} work={work} />

            {/* Company Block */}
            <div
              className={`relative md:w-1/2 flex flex-col justify-center items-start ps-1 md:ps-0 ${
                index % 2 == 0 ? "md:items-start -ps-10" : "md:items-end"
              } gap-0.5`}
            >
              <div className="text-xl font-black font-avenir text-dark-100">
                {work.companyName}
              </div>
              <div className="flex gap-1 justify-center items-center">
                <Clock size={15} className="text-dark-200" />
                <span className="text-dark-200 font-normal font-sans text-sm">
                  {work.from} - {work.to}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
