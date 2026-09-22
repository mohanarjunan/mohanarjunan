import React from 'react'

type ProjectProps = {
  index: number;
  work: any;
};

export const Work = ({index, work}: ProjectProps) => {
  return (
     <div className={`relative md:w-1/2 flex flex-col gap-2 p-5 bg-surface-300 text-white rounded-lg cursor-pointer transition-all duration-300 border-4 group border-transparent hover:border-dark-500 `}
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
  )
}
