import React from "react";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="flex justify-between gap-20">
      <div>
        <div className="py-12">
          <p className="text-designColo text-sm tracking-[4px]">1998 -2010</p>
          <h2 className="text-4xl font-bold">Education Quality</h2>
        </div>
        <div
          className="mt-14 w-full h-[700px] border-l-[6px] border-l-black 
          border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="BSc in Computer Science"
            subtitle="University of DVI (2006 - 2010)"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="AS - Science & Information"
            subtitle="SuperKing College (2001 - 2005)"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
        </div>
      </div>
      <div>
        <div className="py-12">
          <p className="text-designColo text-sm tracking-[4px]">2010 - 2020</p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div
          className="mt-14 w-full h-[800px] border-l-[6px] border-l-black 
          border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="BSc in Computer Science"
            subtitle="University of DVI (2006 - 2010)"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="AS - Science & Information"
            subtitle="SuperKing College (2001 - 2005)"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="AS - Science & Information"
            subtitle="SuperKing College (2001 - 2005)"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
