import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contacts/Contacts";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      
      <div className="max-w-screen-xl mx-auto">
        <Navbar/>
        <Banner/>
        <Features/>
        <Projects/>
        <Resume/>
        <Contacts/>
        <Footer/>
        <FooterBottom/>
      </div>
      
    </div>
  );
};

export default App;
