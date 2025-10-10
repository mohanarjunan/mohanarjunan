import React from "react";
import quickLinks from "@/lib/data/quick-links.json";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const QuickLinks = () => {
  return (
    <>
      <div className="hidden md:flex flex-col gap-0.5">
        <div className="text-2xl font-black font-avenir">Quick Links</div>
        <div className="flex flex-col gap-0.5 ms-5 w-full">
          {quickLinks.map((quick: any, index: number) => (
            <Link
              key={index}
              href={quick.url}
              target="_blank"
              className="flex items-center gap-1 transition-all duration-300 hover:ps-2 hover:font-bold text-dark-200 hover:text-dark-100"
            >
              <span>
                <ArrowRight size={18} />
              </span>
              <span>{quick.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
