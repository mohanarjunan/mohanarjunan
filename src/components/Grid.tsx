import React from "react";

export const Grid = ({
  border,
  width,
  height,
  color,
  count,
  className,
}: {
  border: string;
  width: string;
  height: string;
  color: string;
  count: number;
  className?: string;
}) => {
  console.log({ border, width, height, color, count });

  const gen = Math.floor((count * count) / 6)
  const randoms: number[] = []

  Array.from({length: gen}).forEach((_: any, index: number) => {
    randoms.push(Math.floor(Math.random() * (count * count)))
  })

  randoms.sort()

  return (
    <table className={`border-collapse ${border} ${color} ${className}`}>
      <tbody className={`w-fit ${className}`}>
        {Array.from({ length: count }).map((_: any, rowIndex: number) => (
          <tr key={rowIndex} className={`flex flex-1`}>
            {Array.from({ length: count }).map((_: any, colIndex: number) => (
              <td
                key={colIndex}
                className={`${width} ${height} ${randoms.filter((val: number) => (val) === (rowIndex * count + colIndex + 1)).length > 0 ? "bg-slate-300/40" : ""} border-collapse ${border} ${color}`}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
