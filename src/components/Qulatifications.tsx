"use client";
import React, { useRef, useEffect } from "react";
import educationalCredentials from '../lib/data/educational-credentials.json'
import { Clock, Link, LocateIcon, LocationEditIcon, MapIcon } from "lucide-react";

export const Qualifications = () => {

  return (
    <div className="bg-surface-200 h-fit pb-20 flex flex-col items-center justify-center">
      {/* Title */}
      <div className="font-bold text-3xl text-dark-100 pb-8">
        Educational Credentials
      </div>

      {/* Container */}
      <div className="w-3/5 flex flex-col space-y-5 py-10 text-sm relative">

        {/* Tree Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-dark-300 transform -translate-x-1/2" />

        {/* Map */}
        {educationalCredentials.map((education: any, index: number) => (

          // Each Element
          <div key={index} className={`w-full flex gap-20 ${index % 2 == 0 ? "" : "flex-row-reverse"} px-8 relative`}>

            {/* Dot */}
            <div className={`absolute w-5 h-5 overflow-hidden bg-surface-200 rounded-full top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 p-1.5`}>
              <div className={`w-full h-full bg-brand-100 rounded-full`}/>
            </div>

            {/* Description Block */}
            <div className={`relative w-1/2 flex flex-col  gap-2 p-5 bg-surface-300 text-white rounded-lg cursor-pointer transition-all duration-300 border-4 group border-transparent hover:border-dark-500 `} >
              <div className={`absolute w-5 h-5 overflow-hidden bg-surface-300 top-1/2 transform -translate-y-1/2 border-4 border-transparent z-0 group-hover:border-dark-500 group-hover:bg-brand-100 rotate-45 ${index % 2 == 0 ? "-right-3" : "-left-3"} ${index == 0 ? "p-1" : "p-1.5 "}`}>
              </div>
              <div className="text-dark-200 font-bold font-avenir text-lg">
                {education.institudeName}
              </div>
              <div className="text-dark-200 flex gap-1 items-center">
                <MapIcon size={15} />
                {education.location}
              </div>
              <div className="text-dark-200 italic">
                {education.description}
              </div>
            </div>

            {/* Company Block */}
            <div className={`relative w-1/2 flex flex-col justify-center ${index % 2 == 0 ? "items-start -ps-10" : "items-end"} gap-0.5`} >
              <div className="text-xl font-black font-avenir text-dark-100">
                {education.education}
              </div>
              <div className="flex gap-1 justify-center items-center">
                <Clock size={15} className="text-dark-200" />
                <span className="text-dark-200 font-normal font-sans text-sm">
                  {education.from} - {education.to}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
