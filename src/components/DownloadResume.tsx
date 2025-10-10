import { Download, DownloadCloud, DownloadIcon } from "lucide-react";
import React from "react";

export const DownloadResume = () => {
  return (
    <a
      href="/assets/pdf/Resume_Mohan.pdf"
      download={true}
      className="
        z-9999 group fixed right-10 top-10
        text-dark-100 bg-dark-600
        dark:text-dark-700 dark:bg-dark-100
        flex items-center justify-center hover:gap-2
        cursor-pointer shadow-md rounded-full px-3 py-2 overflow-hidden
      "
    >
      <DownloadCloud size={25} />
      <span className="
        w-0 whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[144px]
       "
      >
        Download Resume
      </span>
    </a>
  );
};
