import React from 'react'
import './Skills.css'
import HTML from '../../assets/html.png';
import CSS from '../../assets/css-3.png';
import JS from '../../assets/js.png';
import REACT from '../../assets/react.png';
import SELENIUM from '../../assets/selenium.png';
import GIT from '../../assets/git.png';
import GITHUB from '../../assets/github.png';
import JAVA from '../../assets/java.png';
import TESTNG from '../../assets/testng.png';
import BOOTSTRAP from '../../assets/bootstrap.png';
import SKILLS from '../../assets/skills.jpg';


const Skills = () => {
  return (
    <div className='skillpage' id="skillsSection">
       <center><h1> SKILLS </h1> </center>
         <div className='skill'> 

           <div className='icon-container'>  
               <img src={HTML}  className='html'></img>
               <img src={CSS}   className='html'></img>
               <img src={JS}    className='html'></img>
               <img src={REACT} className='html'></img>
               <img src={BOOTSTRAP}    className='html'></img>            
               
                 </div> 
                      <div className='icon-container1'> 
                      <img src={SELENIUM}  className='html'></img>
                      <img src={GIT}       className='html'></img>
                      <img src={GITHUB}    className='html'></img>
                      <img src={JAVA}      className='html'></img>
                      <img src={TESTNG}    className='html'></img>
                  </div>                                    
        </div>
    </div>
  )
}

export default Skills
