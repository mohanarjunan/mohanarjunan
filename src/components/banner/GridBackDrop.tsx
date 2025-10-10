import React from "react";

export const GridBackDrop = () => {
  return (
    <>
      {/* Backdrop for Sinlge layer (Dark Theme) */}
      <img
        src={"/assets/img/shape/grid.svg"}
        className="w-2/4 absolute right-0 top-0 opacity-70"
      />
      <img
        src={"/assets/img/shape/grid.svg"}
        className="w-2/4 absolute right-0 bottom-0 rotate-x-180 opacity-70"
      />
      <img
        src={"/assets/img/shape/grid.svg"}
        className="w-2/4 absolute left-0 top-0 rotate-y-180 opacity-70"
      />
      <img
        src={"/assets/img/shape/grid.svg"}
        className="w-2/4 absolute left-0 bottom-0 rotate-y-180 rotate-x-180 opacity-70"
      />

      {/* Backdrop for Multi layer (Light Theme) */}
      <img
        src={"/assets/img/shape/grid.svg"}
        className="w-2/4 absolute right-0 top-0 opacity-70 dark:hidden"
      />
      <img
        src={"/assets/img/shape/grid.svg"}
        className="w-2/4 absolute right-0 bottom-0 rotate-x-180 opacity-70 dark:hidden"
      />
      <img
        src={"/assets/img/shape/grid.svg"}
        className="w-2/4 absolute left-0 top-0 rotate-y-180 opacity-70 dark:hidden"
      />
      <img
        src={"/assets/img/shape/grid.svg"}
        className="w-2/4 absolute left-0 bottom-0 rotate-y-180 rotate-x-180 opacity-70 dark:hidden"
      />

      {/* Backdrop for Multi layer (Light Theme) */}
      <img
        src={"/assets/img/shape/grid.svg"}
        className="w-2/4 absolute right-0 top-0 opacity-70 dark:hidden"
      />
      <img
        src={"/assets/img/shape/grid.svg"}
        className="w-2/4 absolute right-0 bottom-0 rotate-x-180 opacity-70 dark:hidden"
      />
      <img
        src={"/assets/img/shape/grid.svg"}
        className="w-2/4 absolute left-0 top-0 rotate-y-180 opacity-70 dark:hidden"
      />
      <img
        src={"/assets/img/shape/grid.svg"}
        className="w-2/4 absolute left-0 bottom-0 rotate-y-180 rotate-x-180 opacity-70 dark:hidden"
      />
    </>
  );
};
