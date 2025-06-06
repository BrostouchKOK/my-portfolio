import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
      className="flex justify-between gap-20"
    >
      <div>
        <div className="py-12">
          <p className="text-designColo text-sm tracking-[4px]">2010 - 2020</p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div
          className="mt-14 w-1/2 h-[800px] border-l-[6px] border-l-black 
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
    </motion.div>
  );
};

export default Experience;
