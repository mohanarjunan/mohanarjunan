import React from "react";

export default function Description() {
  return (
   <div className="w-full min-h-screen grid-border border flex justify-center">
    <div className="absolute md:w-2/4 w-5/6 h-full grid-border border-x"></div>
    <div className="absolute w-full h-full grid-border flex justify-center items-center">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex justify-center grid-border border-t">
        <div className="md:w-2/4 w-5/6 grid-border font-avenir text-5xl tracking-[-5px] font-bold bg-gradient-to-t from-[#2D2D2D] to-[#FFFFFF] bg-clip-text text-transparent uppercase text-center pt-8 pb-5">
        About Me!
        </div>
        </div>
        <div className="w-full text-left tracking-tight">
          <div className="w-full flex justify-center text-gray-400 grid-border border-t">
            <div className="md:w-2/4 w-5/6 grid-border p-2 md:p-5 text-sm md:text-xl">
            A Full-Stack Innovator and Cloud & DevOps
            Enthusiast with a passion for building scalable, robust, and
            future-ready applications. With expertise in React, Next.js, Spring
            Boot, and Flutter, I specialize in crafting clean, performant, and
            efficient software solutions.
            </div>
          </div>
          <div className="w-full flex justify-center  text-gray-400 grid-border border-y">
            <div className="md:w-2/4 w-5/6  grid-border p-2 md:p-5 text-sm md:text-xl">
            Currently working as a Software Engineer at Finsurge Pte. Ltd., I
            bring a DevOps-driven approach to development, leveraging Azure Cloud,
            Nginx, Apache, PostgreSQL, Redis, and Kafka to optimize performance
            and scalability.
            </div>
          </div>
          <div className="w-full flex justify-center text-gray-400 border-dashed border-b border-gray-50/20">
          <div className="md:w-2/4 w-5/6  grid-border p-2 md:p-5  text-sm md:text-xl">
            Beyond coding, I thrive on problem-solving and automation, ensuring
            seamless CI/CD pipelines and infrastructure management. Whether it's
            frontend development, backend architecture, or cloud infrastructure, I
            build solutions that are optimized for the present and ready for the
            future.
            </div>
          </div>
        </div>
      </div>
    </div>
  //  </div> 
  );
}
