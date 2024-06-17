import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
// import Testimonial from "./components/testimonial/Testimonial"; // Fix typo here if needed

import { initGA, logPageView } from './Analytics';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <FooterBottom />
      </div>
    </div>
  );
};

export default App;
