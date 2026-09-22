import React from "react";

type UnderDevelopmentProps = {
  releaseDate?: string;
  caption?: string;
};

export const UnderDevelopment = ({
  releaseDate,
  caption,
}: UnderDevelopmentProps) => {
  return (
    <div className={`w-full h-screen flex bg-surface-300 justify-center items-center flex-col text-gray-400`}>
      <span className="text-3xl">{caption ?? "Screen under development"}</span>
      <span className="text-lg">{releaseDate && <span>Expected: {releaseDate}</span>}</span>
    </div>
  );
};
