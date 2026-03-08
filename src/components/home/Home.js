import React from "react";
import "./home.css";
import HeaderSocials from "./HeaderSocials";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <h1 className="home_name">Shantanu Basumatary</h1>
        <span className="home_education">
          I'm a <span className="animate_edu">Full Stack Developer</span>
        </span>
        <HeaderSocials />

        <div className="home_buttons">
          <a href="#contact" className="btn">
            <i className="icon-contact"></i> Contact
          </a>
          <a
            href="https://blog.sbdev.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <i className="icon-notebook"></i> Visit Blog
          </a>
        </div>
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
