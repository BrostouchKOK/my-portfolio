import React from "react";
import Title from "../layout/Title";
import ProjectCard from "./ProjectCard";
import { projectOne, projectTwo, projectThree } from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title
          title="VISTI MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          desc="My Project"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
        <ProjectCard
          src={projectOne}
          title={"SOCIAL MEDIA CLONE"}
          des={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          }
        />
        <ProjectCard
          src={projectTwo}
          title={"E-commerce Website"}
          des={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          }
        />
        <ProjectCard
          src={projectThree}
          title={"Chatting App"}
          des={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          }
        />
        <ProjectCard
          src={projectOne}
          title={"SOCIAL MEDIA CLONE"}
          des={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          }
        />
        <ProjectCard
          src={projectTwo}
          title={"SOCIAL MEDIA CLONE"}
          des={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          }
        />
        <ProjectCard
          src={projectThree}
          title={"Chatting App"}
          des={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          }
        />
      </div>
    </section>
  );
};

export default Projects;
