import React from "react";
import socials from "@/lib/data/social.json";
import Link from "next/link";

export const QuickConnect = () => {
  return (
    <>
      <div className="flex flex-col gap-0.5">
        <div className="text-2xl font-black font-avenir">Quick Connect</div>
        <div className="flex gap-3 items-center">
          <div className="h-1 w-5 bg-surface-100"></div>
          {socials.map((social: any, index: number) => (
            <Link key={index} href={social.url} target="_blank">
              <img src={social.icon} className="w-6 gra" alt={social.name} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
