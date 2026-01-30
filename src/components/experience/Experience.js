import React from "react";
import "./experience.css";
import Image1 from "../../assets/experience-1.jpeg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Associate Software Engineer - Internship at BDB.ai",
    description: "January 2026 - Present.",
  },
];

const Experience = () => {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section_title">My Experience</h2>
      <div className="experience_container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="experience_card" key={id}>
              <img src={image} alt="experience-1" className="experience_img" />
              <h3 className="experience_title">{title}</h3>
              <p className="experience_description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Experience;
