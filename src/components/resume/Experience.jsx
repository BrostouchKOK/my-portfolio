import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
      className="flex flex-col lgl:flex-row justify-between gap-10 lgl:gap-20"
    >
      <div>
        <div data-aos="zoom-in" className="py-6 lgl:py-12 flex flex-col gap-4">
          <p className="text-designColo text-sm tracking-[4px]">2010 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div
          data-aos="zoom-in"
          className="mt-6 lgl:mt-8 w-full h-[800px] border-l-[6px] border-l-black 
          border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="GEO Operator"
            subtitle="Grab Company (Jun 2023 - Jan 2024)"
            des="Worked on geolocation data accuracy and mapping updates to support Grab’s platform performance and user experience."
          />
          <ResumeCard
            title="Frontend Trainee"
            subtitle="Kilo IT Organization (Jun 2024 - Dec 2024)"
            des="Trained in frontend development, focusing on building responsive web interfaces and improving coding skills."
          />
          <ResumeCard
            title="Computer Teacher (MS Office, C/C++)"
            subtitle="Addbook Compter Centre (Dec 2024 - Present)"
            des="Teaching MS Office and C/C++ programming to students, focusing on practical skills and programming fundamentals."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
