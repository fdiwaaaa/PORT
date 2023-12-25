import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Me from '../assets/me.png';

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">hELLO. i aM FADWA </h2>
        <h3 className="tagline">Full Stack developer</h3>
        <p className="paragraph">Welcome to my portfolio! I'm a passionate Fullstack Developer driven by a constant thirst for innovation. With expertise in both front-end and back-end technologies. Let's join forces and bring your digital dreams to fruition. Get in touch, and let's embark on this exciting journey together!</p>
        <div className="hero-btns">
          <button className="hire-me">
            <a href="https://drive.google.com/file/d/1-GBCApbR7lHUh5stEWgLgqbMDLCWr0n-/view?usp=drive_link" target="_blank" rel="noreferrer">
              GET MY CV
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              LET'S TALK
            </Link>
          </button>
        </div>
      </div>
      <div className="glowing-circle">
        <div className="image">
          <img src={Me} alt="fadwa" className="hero-image" />
        </div>
      </div>
    </div>
    <div className="social-icons">
      <a href="https://github.com/fdiwaaaa" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" />
      </a>
      <a href="https://www.linkedin.com/in/fadwa-hadaoui-78b344251/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin-in" />
      </a>
    </div>
  </div>
);

export default Hero;
