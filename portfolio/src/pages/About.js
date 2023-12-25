import React from "react";
import "./About.css";

import HTML from "../assets/html.png";
import VSCode from "../assets/vscode.png";
import Figma from "../assets/figma.png";
import ReactIcon from "../assets/react.png";

import NPMlogo from "../assets/npm.png";
import GitLogo from "../assets/git.png";
import GitHublogo from "../assets/github.png";
import GMeet from "../assets/meet.png";
import Zoomlogo from "../assets/zoom.webp";
import SkypeLogo from "../assets/skype.png";
import Canva from "../assets/canva.png";
import CDT from "../assets/cdt.png";
import CSS from "../assets/css.png";
import BootStrap from "../assets/bootstrap.png";
import JavaScript from "../assets/javascript.png";
import PostMan from "../assets/postman.png";

import Mongo from "../assets/mongo.png";
import Node from "../assets/node.png";
import Express from "../assets/express.png";
const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">aBOUT mE</h2>
      <p className="paragraph about-para">
        My journey in the world of programming began in july 2023, when I
        started with ARK X talent factory. Since then, I have had the
        opportunity to work on a wide range of projects, honing my skills and
        expanding my knowledge along the way. I have worked on project
        ,  independently and as part of a team, to deliver innovative
        and user-friendly websites.
      </p>
      <button className="hire-me">
        <a
          href="https://drive.google.com/file/d/1RIQlxcFspH89xvugEeEyvgSG_ABMX3rI/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          GET MY CV
        </a>
      </button>
    </div>
    <div className="about-skills">
      <h2 className="skill-title">Front-End</h2>
      <div className="skills">
        <div className="skill">
          <img src={ReactIcon} alt="" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src={JavaScript} alt="" />
          <p>JavaScript</p>
        </div>
        
        <div className="skill">
          <img src={HTML} alt="" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <img src={CSS} alt="" />
          <p>CSS</p>
        </div>

        <div className="skill">
          <img src={BootStrap} alt="" />
          <p>Bootstrap</p>
        </div>
      </div>
      <h2 className="skill-title">Back-End</h2>
      <div className="skills">
        <div className="skill">
          <img src={Mongo} alt="" />
          <p>MongoDB</p>
        </div>
        <div className="skill">
          <img src={Node} alt="" />
          <p>Node</p>
        </div>
        <div className="skill">
          <img src={Express} alt="" />
          <p>Express</p>
        </div>
      </div>

      <h2 className="skill-title">Tools</h2>
      <div className="skills">
        <div className="skill">
          <img src={GitLogo} alt="" />
          <p>Git</p>
        </div>
        <div className="skill">
          <img src={GitHublogo} alt="" />
          <p>GitHub</p>
        </div>

        <div className="skill">
          <img src={CDT} alt="" />
          <p>Chrome Dev Tools</p>
        </div>
        <div className="skill">
          <img src={VSCode} alt="" />
          <p>VS Code</p>
        </div>

        <div className="skill">
          <img src={PostMan} alt="" />
          <p>Postman</p>
        </div>
        <div className="skill">
          <img src={NPMlogo} alt="" />
          <p>npm</p>
        </div>
      </div>
      <h2 className="skill-title">Design</h2>
      <div className="skills">
        <div className="skill">
          <img src={Canva} alt="" />
          <p>Canva</p>
        </div>
        <div className="skill">
          <img src={Figma} alt="" />
          <p>Figma</p>
        </div>
      </div>
      <h2 className="skill-title">Communication</h2>
      <div className="skills">
        <div className="skill">
          <img src={SkypeLogo} alt="" />
          <p>Skype</p>
        </div>
        <div className="skill">
          <img src={GMeet} alt="" />
          <p>Google Meet</p>
        </div>
        <div className="skill">
          <img src={Zoomlogo} alt="" />
          <p>Zoom</p>
        </div>
      </div>
      <h2 className="skill-title">Soft Skills</h2>
      <div className="skills">
        <p className="soft-skill">Remote Pair-Programming</p>
        <p className="soft-skill">Communication</p>
        <p className="soft-skill">Mentoring</p>
        <p className="soft-skill">Collaboration</p>

        <p className="soft-skill">Problem Solving</p>
        <p className="soft-skill">Time Management</p>
        <p className="soft-skill">Decision Making</p>
        <p className="soft-skill">Critical Thinking</p>
      </div>
    </div>
  </section>
);

export default About;
