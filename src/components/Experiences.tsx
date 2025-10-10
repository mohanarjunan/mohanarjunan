"use client";
import React, { useRef, useEffect, useState } from "react";
import workExperiences from "../lib/data/work-experiences.json";
import { Axe, Clock, Link } from "lucide-react";

export const Experiences = () => {
  return (
    <div className="bg-surface-200 p-5 flex flex-col items-center justify-center">
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
            <div
              className={`relative md:w-1/2 flex flex-col gap-2 p-5 bg-surface-300 text-white rounded-lg cursor-pointer transition-all duration-300 border-4 group border-transparent hover:border-dark-500 `}
            >
              {/* Dot */}
              <div
                className={`md:hidden absolute w-5 h-5 overflow-hidden bg-surface-200 rounded-full top-1/2 transform -translate-y-1/2 -left-11.5 ${
                  index == 0 ? "p-1" : "p-1.5 "
                }`}
              >
                <div
                  className={`w-full h-full bg-brand-100 rounded-full ${
                    index == 0
                      ? "animate-ping duration-700 transition-all border-2 border-white"
                      : ""
                  }`}
                ></div>
              </div>

              {/* Currenct Hover Dot */}
              <div
                className={`absolute w-5 h-5 overflow-hidden bg-surface-300 top-1/2 transform -translate-y-1/2 border-4 border-transparent z-0 group-hover:border-dark-500 group-hover:bg-brand-100 group-hover:rounded-full rotate-45 -left-3 md:left-auto ${
                  index % 2 == 0 ? "md:!-right-3" : "md:!-left-3"
                } ${index == 0 ? "p-1" : "p-1.5 "}`}
              />

              <div>
                {/* Designation */}
                <div className="font-avenir text-lg font-bold text-dark-100">
                  {work.designation}
                </div>

                {/* Categories */}
                <div className="flex gap-1 text-dark-100/80">
                  {work.category.map((cat: string, catIndex: number) => (
                    <span
                      key={catIndex}
                      className="px-3 py-1 bg-dark-600 rounded-full font-akshar font-bold"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="text-dark-200 italic">{work.description}</div>

              {/* Tools */}
              <div
                className="flex justify-end cursor-pointer mt-3"
                title={work.toolsName}
              >
                {work.tools.map((tool: any, toolIndex: number) => (
                  <div
                    key={toolIndex}
                    className={`w-8 h-8 flex items-center justify-center rounded-full p-1.5 shadow-md -mr-2 last:mr-0 ${tool?.bg}`}
                  >
                    <img
                      src={tool.icon}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

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
