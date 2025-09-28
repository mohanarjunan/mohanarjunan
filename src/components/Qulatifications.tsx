"use client";
import React, { useRef, useEffect, useState } from "react";
import educationalCredentials from '../lib/data/educational-credentials.json'
import workExperiences from '../lib/data/work-experiences.json'
import { Clock, Link, LocateIcon, LocationEditIcon, MapIcon } from "lucide-react";

export const Qualifications = () => {

  const [odd, setOdd] = useState<number>(workExperiences.length % 2 == 0 ? 0 : 1)

  return (
    <div className="bg-surface-200 p-5 h-fit pb-20 flex flex-col items-center justify-center">
      {/* Title */}
      <div className="font-bold text-3xl text-dark-100 pb-8">
        Educational Credentials
      </div>

      {/* Container */}
      <div className="md:w-3/5 w-full flex flex-col md:space-y-5 space-y-10 py-10 text-sm relative">

        {/* Tree Line */}
        <div className="absolute md:left-1/2 left-0 top-0 h-full w-[2px] bg-dark-300 transform md:-translate-x-1/2" />

        {/* Map */}
        {educationalCredentials.map((education: any, index: number) => (

          // Each Element
          <div key={index} className={`w-full flex md:flex-row flex-col-reverse md:gap-20 gap-4 md:${index % 2 == odd ? "" : "flex-row-reverse"} md:px-8 ps-8 relative`}>

            {/* Dot */}
            <div className={`hidden md:block absolute w-5 h-5 overflow-hidden bg-surface-200 rounded-full top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 p-1.5`}>
              <div className={`w-full h-full bg-brand-100 rounded-full`}/>
            </div>

            {/* Details Block */}
            <div className={`relative md:w-1/2 flex flex-col  gap-2 p-5 bg-surface-300 text-white rounded-lg cursor-pointer transition-all duration-300 border-4 group border-transparent hover:border-dark-500 `} >
              
              {/* Dot */}
            <div className={`md:hidden absolute w-5 h-5 overflow-hidden bg-surface-200 rounded-full top-1/2 transform -translate-y-1/2 -left-11 p-1.5`}>
              <div className={`w-full h-full bg-brand-100 rounded-full`}/>
            </div>

              {/* Current Hover */}
              <div className={`absolute w-5 h-5 overflow-hidden bg-surface-300 top-1/2 transform -translate-y-1/2 border-4 border-transparent z-0 group-hover:border-dark-500 group-hover:bg-brand-100 rotate-45 ${index % 2 == odd ? "-right-3" : "-left-3"} ${index == odd ? "p-1" : "p-1.5 "}`} />
              
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
            <div className={`relative md:w-1/2 flex flex-col justify-center items-start ps-1 md:ps-0 md:${index % 2 == odd ? "items-start -ps-10" : "items-end"} gap-0.5`} >
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
