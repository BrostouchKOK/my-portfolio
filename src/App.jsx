import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import About from "./components/about/About";
import AOS from "aos";
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 100,
      duration: 1500,
      easing: "ease",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Banner />
        <About />
        <Projects />
        <Resume />
        <Contacts />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
};

export default App;
