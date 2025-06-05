import React, { useState } from "react";
import Title from "../layout/Title";
import ResumeCard from "./ResumeCard";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillsData, setSkillsData] = useState(false);
  const [experienceData, setExprienceData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex items-center justify-center text-center">
        <Title title="CHECK MY RESUME" desc="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-3">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillsData(false);
              setExprienceData(false);
            }}
            className="resumeLi"
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillsData(true);
              setExprienceData(false);
            }}
            className="resumeLi"
          >
            Best Skills On
          </li>
          <li
            onClick={() => {
              setExprienceData(true);
              setEducationData(false);
              setSkillsData(false);
            }}
            className="resumeLi"
          >
            Experience
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillsData && <Skills />}
      {experienceData && <Experience />}
      {/* <Education/> */}
      {/* <Skills/> */}
      {/* <Experience /> */}
    </section>
  );
};

export default Resume;
