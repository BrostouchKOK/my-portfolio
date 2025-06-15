import React from "react";
import Title from "../layout/Title";
import ProjectCard from "./ProjectCard";
import {
  clothes_shop,
  restaurant,
  car_rental,
  computer_shop,
  realEstate,
  weatherApp,
  todoList,
  quizApp,
  randomPass,
  notesApp,
  ageCalculator,
  qrCodeGenerator,
  musicPlayer,
  stopWatch,
  calculatorApp,
  popupAlert,
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
          desc="My Projects"
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
        <ProjectCard
          src={realEstate}
          title={"Real Estate"}
          des="Real estate refers to land and any permanent structures on it, such as houses, buildings, or apartments. It is a valuable asset and a key part of the economy."
          githubLink="https://github.com/BrostouchKOK/real_estate.git"
          webLink="https://kbt-real-estate.netlify.app/"
        />
        <ProjectCard
          src={weatherApp}
          title={"Weather App"}
          des="A simple weather application built with HTML, CSS, and JavaScript that displays real-time weather information for any city using a weather API."
          githubLink="https://github.com/BrostouchKOK/weather-app.git"
          webLink="https://kbt-weather-app.netlify.app/"
        />
        <ProjectCard
          src={todoList}
          title={"To-do List"}
          des="A basic task management app built with HTML, CSS, and JavaScript that lets users add, delete, and mark tasks as completed to help organize daily activities."
          githubLink="https://github.com/BrostouchKOK/to-do-list.git"
          webLink="https://kbt-to-do-list.netlify.app/"
        />
        <ProjectCard
          src={quizApp}
          title={"Quiz App"}
          des="A simple quiz application built using HTML, CSS, and JavaScript that allows users to answer multiple-choice questions, view scores."
          githubLink="https://github.com/BrostouchKOK/quiz-app.git"
          webLink="https://kbt-quiz-app.netlify.app/"
        />
        <ProjectCard
          src={randomPass}
          title={"Random Password App"}
          des="A lightweight web app built with HTML, CSS, and JavaScript that generates secure, random passwords based on user-selected criteria like length, symbols, numbers, and uppercase letters."
          githubLink="https://github.com/BrostouchKOK/generate-password.git"
          webLink="https://kbt-random-password.netlify.app/"
        />
        <ProjectCard
          src={notesApp}
          title={"Notes App"}
          des="A simple notes-taking application built with HTML, CSS, and JavaScript that allows users to create, save, edit, and delete notes directly in the browser, often using localStorage for data persistence."
          githubLink="https://github.com/BrostouchKOK/notes-app.git"
          webLink="https://kbt-note-app.netlify.app/"
        />
        <ProjectCard
          src={ageCalculator}
          title={"Age Calculator"}
          des="A simple web app built using HTML, CSS, and JavaScript that calculates a person's age based on their date of birth, showing the result in years, months, and days."
          githubLink="https://github.com/BrostouchKOK/age-calculator-app.git"
          webLink="https://kbt-age-calculator.netlify.app/"
        />
        <ProjectCard
          src={qrCodeGenerator}
          title={"QR Code Generator"}
          des="A web application built with HTML, CSS, and JavaScript that generates QR codes from user input (like text or URLs), allowing users to download or share the generated code easily."
          githubLink="https://github.com/BrostouchKOK/qr-code-generator.git"
          webLink="https://kbt-qr-code-generator.netlify.app/"
        />
        <ProjectCard
          src={musicPlayer}
          title={"Music Player"}
          des="A basic music player built using HTML, CSS, and JavaScript that allows users to play, pause, skip tracks, and control volume, with a responsive user interface and real-time progress display."
          githubLink="https://github.com/BrostouchKOK/music-player.git"
          webLink="https://kbt-music-player.netlify.app/"
        />
        <ProjectCard
          src={stopWatch}
          title={"Stopwatch"}
          des="A simple stopwatch application created with HTML, CSS, and JavaScript that allows users to start, stop, and reset time tracking, often displaying minutes, seconds, and milliseconds."
          githubLink="https://github.com/BrostouchKOK/stop-watches.git"
          webLink="https://kbt-stopwatch.netlify.app/"
        />
        <ProjectCard
          src={calculatorApp}
          title={"Calculator App"}
          des="A basic calculator built with HTML, CSS, and JavaScript that performs standard arithmetic operations like addition, subtraction, multiplication, and division with a clean and responsive user interface."
          githubLink="https://github.com/BrostouchKOK/calculator-app.git"
          webLink="https://kbt-calculator-app.netlify.app/"
        />
        <ProjectCard
          src={popupAlert}
          title={"Popup Alert"}
          des="A simple web app using HTML, CSS, and JavaScript that displays popup alert messages based on user actions, such as form submissions, button clicks, or input validation."
          githubLink="https://github.com/BrostouchKOK/popup.git"
          webLink="https://kbt-popup.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
