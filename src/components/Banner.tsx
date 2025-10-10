import React from "react";
import { GridBackDrop } from "./banner/GridBackDrop";

export const Banner = () => {
  return (
    <>
      <div className="w-full h-screen dark:bg-surface-200 border-b-[1.9px] border-b-dark-400/30 bg-surface-100 flex flex-col gap-3 justify-center items-center">
        <GridBackDrop />
        <div className="relative w-48 h-48 rounded-full dark:border-5 dark:border-dark-100 shadow">
          <img
            src={"/assets/img/profile-1.jpeg"}
            className="w-full rounded-full"
          />
          <div className="absolute right-8 bottom-1 dark:bottom-0 w-6 h-6 rounded-full border-4 border-dark-600 dark:border-dark-100 bg-green-600" />
          <div className="absolute animate-ping duration-1000 right-8 bottom-1 dark:bottom-0 w-6 h-6 rounded-full border-4 border-green-600 bg-green-600" />
        </div>
        <div className="text-5xl mt-3 font-bold font-avenir text-dark-500 dark:text-dark-100">
          Mohan Arjunan
        </div>
        <div className=" font-avenir text-dark-300 dark:text-dark-200 ">
          Full Stack Development Enthusiast / DevOps
        </div>
      </div>
    </>
  );
};
