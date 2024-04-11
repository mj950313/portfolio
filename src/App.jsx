import React from "react";
import { Element } from "react-scroll";
import Sidebar from "./layout/Sidebar";
import HamburgerBar from "./layout/HamburgerBar";
import About from "./page/About";
import Home from "./page/Home";
import Skill from "./page/Skill";
import Project from "./page/Project";
import Career from "./page/Career";
import Archiving from "./page/Archiving";
import Contact from "./page/Contact";

function App() {
  return (
    <div className="backgroundStyle">
      <HamburgerBar />
      <Sidebar />
      <div className="lg:mr-[370px]">
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="skill">
          <Skill />
        </Element>
        <Element name="project">
          <Project />
        </Element>
        <Element name="career">
          <Career />
        </Element>
        <Element name="archiving">
          <Archiving />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
}

export default App;
