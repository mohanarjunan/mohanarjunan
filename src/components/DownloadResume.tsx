import { Download, DownloadCloud, DownloadIcon } from 'lucide-react'
import React from 'react'

const DownloadResume = () => {
  return (
    <a 
      href='/vercel.svg'
      download={true}
      className="z-9999 group fixed right-10 top-10 text-dark-700 flex items-center justify-center hover:gap-2 cursor-pointer bg-dark-100 shadow-md rounded-full px-3 py-2 overflow-hidden">
      <DownloadCloud size={25} />
      <span
        className="w-0 whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[144px]"
      >
        Download Resume
      </span>
    </a>


  )
}

export default DownloadResume