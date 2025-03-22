import React from 'react';
import "./services.css";
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';

const data = [
  {
    id: 1,
    image: Image1,
    title: "Programming Language",
    description:
      "Experienced in both functional and OOP: C++, JavaScript, Java, Python.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Passionate about HTML, CSS, JS.",
  },
  {
    id: 3,
    image: Image3,
    title: "Framework & Database",
    description:
      "ReactJs, ExpressJs, MongoDb, MySQL, Bootstrap, Tailwind Css",
  },
];

const Services = () => {
  return (
   <section className="services container section" id='services'>
    <h2 className="section_title">My Expertise</h2>
    <div className="services_container grid">
      {data.map(({id,image,title,description})=>{
        return(
          <div className="services_card" key={id}>
            <img src={image} alt="" className="services_img" />
            <h3 className="services_title">{title}</h3>
            <p className="services_description">{description}</p>
          </div>
        );
      })}
    </div>
   </section>
  )
}

export default Services;