import React from 'react';
import "./about.css";
import AboutImg from "../../assets/avatar-2.jpg"
import  pdf from "../../assets/Shantanu-resume.pdf";

const About = () => {
  return (
   <section className="about container section" id='about'> 
    <h2 className="section_title">About Me</h2>
    <div className="about_container grid">
      <img src={AboutImg} alt="" className="about_img" />

      <div className="about_data grid">
        <div className="about_info">
          <p className="about_description">I am Shantanu Basumatary, passionate coder with strong problem-solving skills. Collaborative team player, adept at multiple languages, committed to continuous learning and innovation.
.
</p>
          <a href={pdf} className="btn">Resume</a>
        </div>
      <div className="about_skills grid">
        <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">DSA</h3>
            <span className="skills_number">80%</span>
          </div>
          <div className="skills_bar">
            <span className="skills_percentage development"></span>
          </div>
        </div>

        <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">Web Development</h3>
            <span className="skills_number">85%</span>
          </div>
          <div className="skills_bar">
            <span className="skills_percentage ui_design"></span>
          </div>
        </div>

        <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">Communication</h3>
            <span className="skills_number">80%</span>
          </div>
          <div className="skills_bar">
            <span className="skills_percentage photography"></span>
          </div>
        </div>

      </div>

      </div>
    </div>
   </section>
  )
}

export default About;