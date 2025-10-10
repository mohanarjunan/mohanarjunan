"use client";
import React, { useRef, useEffect, useState } from "react";
import educationalCredentials from "../lib/data/educational-credentials.json";
import {
  Building2,
  Clock,
  GraduationCap,
  Link,
  LocateIcon,
  LocateOffIcon,
  LocationEditIcon,
  Map,
  MapIcon,
  Repeat,
  School,
  School2,
} from "lucide-react";

export const EducationalCredentials2 = () => {

  return (
    <>
      <div className="bg-surface-300 flex flex-col gap-2 md:gap-4 justify-center items-center py-8 px-2">
        <div className="text-dark-100 text-3xl font-bold">Educational Credentials</div>
        <div className="w-full md:w-3/4 text-dark-100 flex flex-col md:flex-row gap-2 md:gap-4">
          {educationalCredentials.map((edu: any, index: number) => (
            <div key={index} className="bg-surface-200 w-full px-5 py-5 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-dark-300 cursor-default">
              <div className="font-bold text-md flex gap-2 items-center justify-start">
                { edu.category === 'school' ? (
                  <span><School size={20} /></span>
                ) : (
                  <span><School2 size={20} /></span>
                )}
                <span>{edu.institudeName}</span>
              </div>
              <div className="text-dark-200 text-sm flex gap-1 items-center justify-start">
                {/* <span><Clock size={12} /></span> */}
                <span>{edu.from}</span>
                <span><Repeat size={12} /></span>
                <span>{edu.to}</span>
              </div>
              <div className="text-dark-200 flex gap-2 mt-3">
                {/* <span><GraduationCap size={18} /></span> */}
                <span>{edu.description ?? ""}</span>
              </div>
              <div className="text-dark-200 flex gap-1.5 items-center justify-start">
                <span><Map size={18} /></span>
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
