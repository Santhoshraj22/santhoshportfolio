import React from 'react';
import "./About.css";
import { FaFileCode } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import ABOUTPAGE from '../../assets/aboutpage.jpg';
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>

const About = () => {
  return (
    <div className='Aboutpage' id="aboutSection">  
      <div className='aboutbox'>  
        <div className='Aboutsection'>
          <center>
            <h1> About Me </h1>
          </center>  
          {/* <img src={Me} alt="Description" className="aboutimage" /> */}
          <div className='aboutoutside'> 
            <div className="card-container">
              <div className="aboutinside">
                <h4> <FaFileCode /> SOFTWARE DEVELOPER</h4>
                <h4> 
                  I am a passionate Software Developer dedicated to crafting efficient, high-performance
                  applications that address real-world challenges. My expertise spans multiple programming 
                  languages and frameworks, allowing me to deliver clean and maintainable code. I thrive in 
                  collaborative, cross-functional teams and continuously seek opportunities to enhance my skills,
                  ensuring I remain at the forefront of technology. My goal is to drive innovation
                   and create meaningful value for users and businesses alike.
                </h4>
              </div>
              <div className="aboutinside">
                <h4> <GrTest /> SOFTWARE TEST ENGINEER</h4>
                <h4 className='h5'> 
                    As a passionate Software Test Engineer, I am devoted to delivering outstanding software
                    quality through a blend of manual and automated testing strategies. My attention
                    to detail and proactive mindset empower me to identify and address potential issues early,
                    ensuring a seamless user experience. By fostering close collaboration with development teams,
                    I contribute to building robust and reliable applications that not only meet 
                    industry standards but also exceed user expectations.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
