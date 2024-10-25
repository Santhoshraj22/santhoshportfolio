import React from 'react';
import './Experiance.css';
import CALENDER from '../../assets/calender.png';
import EXPERIANCE from '../../assets/experiance.jpg';

const Experiance = () => {
  return (
    <div className='experiancepage' id="experienceSection">
      <div className='expname'>
        <center>
          <h1>EXPERIENCE</h1>
        </center>
      </div>

      <div className='expoutside'>
        <div className='card-container'>
          <div className="expinside">
            <div className="experience-container">
              <img src={CALENDER} className="img" alt="Calendar" />
              <div className="text-container">
                <h4>SOFTWARE DEVELOPER -</h4>
              </div>
              <div className='name'>
                <h5>JUNE-2023 - PRESENT - ABR SYSTEMS PRIVATE LIMITED</h5>
              </div>
            </div>
            <h4 className='content'>
              As a Front-End Developer, I excelled in crafting responsive and dynamic user
              interfaces using React.js, JavaScript ES6, Bootstrap, HTML5, and CSS3. My role
              involved collaborating with cross-functional teams to deliver high-quality web
              applications that enhance user experiences. I utilized Git for version control
              and REST APIs for seamless data integration, ensuring robust and efficient functionality
              across projects.
            </h4>
          </div>

          <div className="expinside">
            <div className="experience-container">
              <img src={CALENDER} className="img" alt="Calendar" />
              <div className="text-container">
                <h4>SOFTWARE TEST ENGINEER INTERN -</h4>
              </div>
              <div>
                <h5 className="margin">SEPT-2022 - MAR-2023 - ABR SYSTEMS PRIVATE LIMITED</h5>
              </div>
            </div>
            <h4 className='content'>
              As a Software Test Engineer Intern, I honed my skills in both manual and automated
              testing methodologies. I contributed to ensuring software quality through meticulous
              testing processes and collaborated effectively with development teams. My role involved
              identifying potential issues early, enhancing product reliability, and fostering seamless
              user experiences.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiance;
