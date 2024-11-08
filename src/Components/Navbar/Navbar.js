import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { FaBusinessTime } from "react-icons/fa6";
import { FaIconName } from 'react-icons/fa';
import { IoIosHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

const Header = () => {
  const [activeLink, setActiveLink] = useState('homeSection');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetActive = (to) => {
    setActiveLink(to);
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  return (
    <div className='Header'>
      <nav className='navbar'>
        {/* Menu Button (visible only on smaller screens) */}
        <div className="menu-btn" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Navbar links */}
        <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <Link
            to="homeSection"
            spy={true}
            smooth={true}
            duration={500}
            className={`nav-link home ${activeLink === 'homeSection' ? 'active' : ''}`}
            onSetActive={handleSetActive}
          >
            <IoIosHome /> Home
          </Link>
          <Link
            to="aboutSection"
            spy={true}
            smooth={true}
            duration={500}
            className={`nav-link about ${activeLink === 'aboutSection' ? 'active' : ''}`}
            onSetActive={handleSetActive}
          >
            <IoPersonSharp /> About
          </Link>
          <Link
            to="skillsSection"
            spy={true}
            smooth={true}
            duration={500}
            className={`nav-link skills ${activeLink === 'skillsSection' ? 'active' : ''}`}
            onSetActive={handleSetActive}
          >
            <FaLaptopCode /> Skills
          </Link>
          <Link
            to="experienceSection"
            spy={true}
            smooth={true}
            duration={500}
            className={`nav-link experience ${activeLink === 'experienceSection' ? 'active' : ''}`}
            onSetActive={handleSetActive}
          >
            <FaBusinessTime /> Experience
          </Link>
          <Link
            to="projectsSection"
            spy={true}
            smooth={true}
            duration={500}
            className={`nav-link projects ${activeLink === 'projectsSection' ? 'active' : ''}`}
            onSetActive={handleSetActive}
          >
            <GoProjectRoadmap /> Projects
          </Link>
          <Link
            to="contactSection"
            spy={true}
            smooth={true}
            duration={500}
            className={`nav-link contact ${activeLink === 'contactSection' ? 'active' : ''}`}
            onSetActive={handleSetActive}
          >
            <IoMdContact /> Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
