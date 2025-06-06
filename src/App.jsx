import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contacts/Contacts";
import Contacts from "./components/contacts/Contacts";

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-xl mx-auto px-16">
        <Navbar/>
        <Banner/>
        <Features/>
        <Projects/>
        <Resume/>
        <Contacts/>
      </div>
      
    </div>
  );
};

export default App;
