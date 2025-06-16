import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({ title, des, src, githubLink, webLink }) => {
  return (
    <div
    data-aos = "zoom-in"
      className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col
      bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900
      hover:gray-900 transition-colors duration-1000"
    >
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          src={src}
          alt={title}
          className="w-full h-60 object-cover group-hover:scale-110 
          duration-300 cursor-pointer"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-base text-designColo uppercase">{title}</h3>
            <div className="flex flex-row gap-2">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex
                    justify-center items-center text-gray-400 hover:text-designColo
                    duration-300 cursor-pointer"
                >
                  <BsGithub />
                </a>
              )}
              {webLink && (
                <a
                  href={webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex
                    justify-center items-center text-gray-400 hover:text-designColo
                    duration-300 cursor-pointer"
                >
                  <FaGlobe />
                </a>
              )}
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
