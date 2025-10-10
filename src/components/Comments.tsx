"use client";
import { useEffect, useRef } from "react";
import comments from "../lib/data/comments.json";
import InfiniteMarquee from "vanilla-infinite-marquee";
import { Contact, Contact2, ContactIcon, GitBranch } from "lucide-react";

export const Comments = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    let marquee: any | null = null;
    let loadedCount = 0;

    const initMarquee = () => {
      marquee = new InfiniteMarquee({
        element: container,
        speed: 100000, // ✅ Slow and steady for many images (~25 seconds per loop)
        smoothEdges: true,
        direction: "left",
        spaceBetween: "30px",
        pauseOnHover: true,
        on: {
          beforeInit: () => console.log("Not Yet Initialized"),
          afterInit: () => console.log("Initialized"),
        },
      });
    };

    initMarquee();

    return () => {
      marquee?.destroy?.();
    };
  }, []);
  return (
    <>
      {/* Lg */}
      <div className="hidden md:flex flex-col items-center gap-5 justify-center bg-surface-200 py-10 text-light-200">
        <div className="text-dark-100 text-3xl font-bold">Comments'</div>
        <div ref={containerRef} className="flex gap-3 w-2/3">
          {comments.map((comment: any, index: number) => (
            <div
              key={index}
              className="w-[550px] max-w-full min-h-[300px] flex flex-col items-center justify-center rounded-lg bg-surface-300 p-8"
            >
              <div className="flex self-start text-sm items-center gap-2 py-1 px-4 mb-3 bg-surface-200 rounded-full text-dark-200">
                <GitBranch size={15} />
                {comment.relation}
              </div>
              <div className="text-dark-100 italic text-base leading-relaxed break-words whitespace-pre-line max-w-full">
                {comment.comment}
              </div>
              <div className="flex flex-col self-end mt-3">
                <div className="text-lg text-dark-200 font-serif italic flex self-end me-2">
                  - {comment.author}
                </div>
                <span className="w-fit text-xs bg-surface-200 text-dark-200 py-1 px-4 rounded-full">
                  {comment.role} @ {comment.at}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col items-center gap-5 justify-center bg-surface-200   py-10 px-5 text-light-200">
        <div className="text-dark-100 text-3xl font-bold">Comments'</div>
        <div className="flex gap-3 w-full overflow-x-auto pb-2">
          {comments.map((comment: any, index: number) => (
            <div
              key={index}
              className="min-w-full md:w-[550px] md:max-w-full min-h-[300px] flex flex-col items-center justify-center rounded-lg bg-surface-300 p-8"
            >
              <div className="flex self-start text-sm items-center gap-2 py-1 px-4 mb-3 bg-surface-200 rounded-full text-dark-200">
                <GitBranch size={15} />
                {comment.relation}
              </div>
              <div className="text-dark-100 italic md:text-base text-sm leading-relaxed break-words whitespace-pre-line max-w-full">
                {comment.comment}
              </div>
              <div className="flex flex-col self-end mt-3">
                <div className="text-lg text-dark-200 font-serif italic flex self-end me-2">
                  - {comment.author}
                </div>
                <span className="w-fit text-xs bg-surface-200 text-dark-200 py-1 px-4 rounded-full">
                  {comment.role} @ {comment.at}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
