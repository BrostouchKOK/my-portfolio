import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
      className="flex flex-col lgl:flex-row justify-between gap-10 lgl:gap-20"
    >
      {/* part 1 */}
      <div>
        <div className="py-6 lgl:py-12 flex flex-col gap-4">
          <p className="text-designColo text-sm tracking-[4px]">1998 -2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div
          className="mt-6 lgl:mt-8 w-full h-[700px] border-l-[6px] border-l-black 
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
      {/* part 2 */}
      <div>
        <div className="py-6 lgl:py-12 flex flex-col gap-4">
          <p className="text-designColo text-sm tracking-[4px]">2010 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div
          className="mt-6 lgl:mt-8 w-full h-[800px] border-l-[6px] border-l-black 
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

export default Education;
