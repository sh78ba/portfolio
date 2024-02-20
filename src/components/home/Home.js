import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.jpg";
import HeaderSocials from './HeaderSocials';
import Shapes from './Shapes';

const Home = () => {
  return (
   <section className="home container" id="home">
    <div className="intro">
      <img src={Me} alt="" className="home_img" />
      <h1 className="home_name">Shantanu Basumatary</h1>
      <span className="home_education">I'm a <span className='animate_edu'>Full Stack developer</span></span>
      <HeaderSocials />

      <a href="#contact" className="btn">Contact</a>
    </div>
    <Shapes />
   </section>
  )
}

export default Home;