import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
      className="flex justify-between gap-20"
    >
      <div className="w-1/2">
        <div className="py-12">
          <p className="text-designColo text-sm tracking-[4px]">FEATURE</p>
          <h2 className="text-4xl font-bold">Development Skill</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-7">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">HTML</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-500 
              via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">95%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">CSS</p>
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-2 bgOpacity inline-flex rounded-md mt-2"
            >
              <span
                className="w-[90%] h-full bg-gradient-to-r from-blue-500 
              via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">90%</span>
              </span>
            </motion.span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">JavaScript</p>
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-2 bgOpacity inline-flex rounded-md mt-2"
            >
              <span
                className="w-[80%] h-full bg-gradient-to-r from-blue-500 
              via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">80%</span>
              </span>
            </motion.span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">
              Tailwind CSS / Bootstrap
            </p>
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-2 bgOpacity inline-flex rounded-md mt-2"
            >
              <span
                className="w-[70%] h-full bg-gradient-to-r from-blue-500 
              via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">70%</span>
              </span>
            </motion.span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">React JS</p>
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-2 bgOpacity inline-flex rounded-md mt-2"
            >
              <span
                className="w-[75%] h-full bg-gradient-to-r from-blue-500 
              via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">75%</span>
              </span>
            </motion.span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">NodeJS + Express</p>
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-2 bgOpacity inline-flex rounded-md mt-2"
            >
              <span
                className="w-[65%] h-full bg-gradient-to-r from-blue-500 
              via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">65%</span>
              </span>
            </motion.span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Mysql / MongoDB</p>
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-2 bgOpacity inline-flex rounded-md mt-2"
            >
              <span
                className="w-[50%] h-full bg-gradient-to-r from-blue-500 
              via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">50%</span>
              </span>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
