import React from "react";
import Title from "../layout/Title";
import ProjectCard from "./ProjectCard";
import {
  clothes_shop,
  restaurant,
  car_rental,
  computer_shop,
} from "../../assets/index";

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
          src={clothes_shop}
          title={"Clothes Shop Website"}
          des="Trendy and affordable clothing for men, women, and kids. Shop the latest styles with easy browsing, fast shipping, and excellent customer service."
          githubLink="https://github.com/BrostouchKOK/shopping.git"
          webLink="https://t-shoppings.netlify.app/"
        />
        <ProjectCard
          src={computer_shop}
          title={"Compter and Phone Shop Website"}
          des="Explore the latest smartphones, accessories, and gadgets. Find top brands, competitive prices, and reliable service all in one place. Stay connected with cutting-edge technology."
          githubLink="https://github.com/BrostouchKOK/E-Shop.git"
          webLink="https://kbt-eshop.netlify.app/"
        />
        <ProjectCard
          src={restaurant}
          title={"Restaurant Website"}
          des="Experience delicious meals made from fresh ingredients. Cozy atmosphere, diverse menu, and excellent service — perfect for family dinners, dates, or casual hangouts."
          githubLink="https://github.com/BrostouchKOK/restaurant-frontend.git"
          webLink="https://foodtie-zone.netlify.app/"
        />
        <ProjectCard
          src={car_rental}
          title={"Car Rental Website"}
          des="Reliable and affordable car rentals for every occasion. Choose from a wide range of vehicles, enjoy flexible booking, and hit the road with confidence and ease."
          githubLink="https://github.com/BrostouchKOK/car-rental.git"
          webLink="https://t-car-rental.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
