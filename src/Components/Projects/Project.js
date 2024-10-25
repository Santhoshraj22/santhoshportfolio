import React from 'react';
import "./Project.css";
import BMI from '../../assets/bmi.png';
import CURRENCY from '../../assets/currency.png';
import GITHUB from '../../assets/github.png';
import WATERLEVEL from '../../assets/waterlevel.png';
import PROJECT from '../../assets/project.jpg';

const Project = () => {
  return (
    <div className='project' id="projectsSection">
      <h1><center className='projectname'>PROJECTS</center></h1>
      <div className='projectoutside'>
        <div className='card-container'></div>

        <div className='project-container'>
          <div className='projectinside'>
            <center>
              <img src={BMI} className='projectimage' alt="BMI Calculator" />
              <b>BMI Calculator</b>
            </center>
            <p>
              Created a responsive BMI calculator in React.js for real-time height and weight input, enhancing skills in component structure and state management.
            </p>
            <a className='git-link' href="https://github.com/Santhoshraj22/BMI-calculator.git" target="_blank" rel="noopener noreferrer">
              <button className="git-button">
                <img src={GITHUB} className='gitbutton' alt="GitHub" />
                View Source
              </button>
           </a>

          </div>

          <div className='projectinside'> 
            <center>
              <img src={CURRENCY} className='projectimage' alt="Currency Converter" />
              <b>Currency Converter</b>
            </center>
            <p>
              Created a responsive Currency Converter in React.js with real-time calculations and a 
              user-friendly interface.
            </p>
            <div className='button-container'>
             <a className='git-link'href="https://github.com/Santhoshraj22/Currencyconverter.git" target="_blank" rel="noopener noreferrer">
              <button className="git-button">
                <img src={GITHUB} className='gitbutton' alt="GitHub" />
                View Source
              </button>
           </a>
            </div>

            
          </div>

          <div className='projectinside'>
          <center>
              <img src={WATERLEVEL} className='projectimage' alt="Currency Converter" />
              <b>Water Level Monitoring And Control System using Internet Of Things</b>
            </center>
            <p> 
                This project remotely monitors and controls water tank levels using a NodeMCU ESP8266,
                 ultrasonic sensor, and Blynk app to manage the pump.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
