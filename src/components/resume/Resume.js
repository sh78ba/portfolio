import React from 'react';
import "./resume.css";
import Card from './Card';
import Data from './Data';


const Resume = () => {
   
  return (
    
    <section className="resume container" id="resume">
      <h2 className="section_title">Education</h2>
    <div className='resume_container'>

    {Data.map((val,id)=>{
              return(
                <Card key={id} icon={val.icon} title={val.title} year={val.year} school={val.school} desc={val.desc}/>
              )
          })}
  
  </div>
  </section>
  )
}
  
export default Resume;