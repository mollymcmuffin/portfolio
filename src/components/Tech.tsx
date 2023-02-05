import React from "react";

type Props = {
  imglink: string;
  title: string;
};

const Tech = ({ imglink, title }: Props) => {
  return (
    <div className="flex flex-col items-center h-full group">
      <img className="w-12 h-12" src={imglink} />
      <h5 className="absolute mt-12 text-center opacity-0 group-hover:opacity-100 text-slate-300">
        {title}
      </h5>
    </div>
  );
};

export default Tech;
