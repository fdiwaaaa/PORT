import React from 'react';
import './Projects.css';
import Mongo from '../assets/canva.png'; // Importez l'image correctement
import Fb from '../assets/fb.jpg'; // Importez l'image correctement
import Ecommerce from '../assets/Ecomerce.png';
import Tictactoc from '../assets/tictactoc.jpg';
const Projects = () => {
  const projects = [
    {
      image_url: Ecommerce, 
      project_name: 'Intellhome',
      description: 'SmartHome Haven: Your hub for smart living! Explore cutting-edge devices—from lights to security systems—designed for convenience and security. Shop confidently with detailed product info and reliable service. Upgrade to a smarter home today',
      tech_stack: ['React', 'Javascript','MongoDB','Express','Node','Tailwend'],
      source_link: 'lien_vers_le_projet_1'
    },
    {
      image_url: Fb, 
      project_name: 'Facebook login',
      description: 'The Facebook login page welcomes users with a familiar and clean interface. A prominent Facebook logo sits at the top, followed by two input fields for email/phone and password. Below, a password reset option is available. The page focuses on simplicity and ease of use, providing a smooth pathway for users to access their accounts securely.',
      tech_stack: ['HTML', 'CSS'],
      source_link: 'lien_vers_le_projet_1'
    },
    {
      image_url: Tictactoc,
      project_name: 'Tictactoe',
      description: 'Enjoy the timeless fun of Tic Tac Toe! This classic game pits two players against each other in a battle of Xs and Os. Take turns marking your symbol on the grid, aiming to get three in a row horizontally, vertically, or diagonally to claim victory. Simple, addictive, and perfect for quick rounds of strategic fun.',
      tech_stack: ['Javascript', 'React','HTML','CSS'],
      source_link: 'lien_vers_le_projet_2'
    },
  
  ];

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">featuRed pRojecTs</h1>
      
      <div className="projects-container">
        {
          projects.map((project, id) => (
            <div className="project-card" key={id}>
              <i className="fa-regular fa-arrow-up-right" />
              <img src={project.image_url} alt="" />
              <div className="card-description">
                <h3>{project.project_name}</h3>
                <p>{project.description}</p>
                <div className="stacks">
                  {
                    project.tech_stack.map((stack, stackId) => (
                      <button className="tech-stack" key={stackId}>
                        {stack}
                      </button>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
