import React from "react";
import About from "./AboutSection/About";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./AboutSkills/Skills";
import Projects from "./projects/Projects";

const HomePage = () => {
  return (
    <div>
      <About />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
};

export default HomePage;
