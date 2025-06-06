import { useState } from "react";
import Title from "../layout/Title";
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
            className={`${educationData?"border-designColo rounded-lg":"border-transparent"} resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillsData(true);
              setExprienceData(false);
            }}
            className={`${skillsData?"border-designColo rounded-lg":"border-transparent"} resumeLi`}
          >
            Best Skills On
          </li>
          <li
            onClick={() => {
              setExprienceData(true);
              setEducationData(false);
              setSkillsData(false);
            }}
            className={`${experienceData?"border-designColo rounded-lg":"border-transparent"} resumeLi`}
          >
            Experience
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillsData && <Skills />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
