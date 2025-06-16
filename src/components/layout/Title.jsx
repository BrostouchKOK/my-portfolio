import React from "react";

const Title = ({title,desc}) => {
  return (
    <div data-aos="zoom-in-up" className="flex flex-col gap-4 mb-14">
      <h3 className="text-sm uppercase font-light text-designColo tracking-wide">
        {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">{desc}</h1>
    </div>
  );
};

export default Title;
