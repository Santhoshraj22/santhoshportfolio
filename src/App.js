import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Project from './Components/Projects/Project';
import Skills from './Components/Skills/Skills';
import Experiance from './Components/Experiance/Experiance';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>  
      <Experiance/>
      <Project/>
      <Contact />
    </div>
  );
}

export default App;
 