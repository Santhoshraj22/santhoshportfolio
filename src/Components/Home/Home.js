import React from 'react'
import Me from '../../assets/san.jpeg';
import "./Home.css"
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import HOMEPAGE from '../../assets/homepage.jpg';

const Home = () => {
  return (
    <div className='profile-container' id="homeSection">
        <img src={Me} alt="Description" className="image" />

        <div className='name'>
            <h3> Hello, </h3> 
            <h1> I'm SANTHOSH </h1>
            <h2> FRONT- END DEVELOPER </h2>
            <h4>Front-End Developer | React.js Enthusiast | JavaScript ES6, Bootstrap, HTML5, CSS3, Git, & REST API |
             Crafting Responsive, Dynamic UIs | Skilled in Modern Web Tech | Delivering Seamless User Experiences</h4>
  
             <div className='profile'>
                <a href='https://linkedin.com/in/santhoshraj2357'><FaLinkedin /></a>
                <a href='https://github.com/Santhoshraj22'><IoLogoGithub /> </a>
                <a href='https://www.instagram.com/sandzz._._/'><IoLogoInstagram /></a>
                <a href='mailto:santhoshraj2357@gmail.com' ><IoMail /> </a>

              <div>
                <a className='cv'  href='/Santhosh resume.pdf' download>
                  <button className='cvdownlode'>Download CV</button>
                </a>
                 </div>  

            </div>

        </div>
    </div>
  )
}

export default Home
