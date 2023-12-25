import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        I am
        {' '}
        <br />
        ARKADIEN
        <br />
        
      </h1>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Frontend Development</p>
        <p>React</p>
        <p>Backend Development</p>
      
       
        <p>New Opportunities</p>
       
      </div>

      <hr />

      <h3>
        MINDING A PROJECT?
        <span><a href="fadwahadaoui5@gmail.com">cOnTaCt mE</a></span>
      </h3>

      <hr />

      <div className="social">
        <span><a href="https://github.com/fdiwaaaa" target="_blank" rel="noreferrer">GITHUB</a></span>
        <span>
          {' '}
          <a href="https://www.linkedin.com/in/fadwa-hadaoui-78b344251/" target="_blank" rel="noreferrer">LINKEDIN</a>
        </span>
         <span>
          {' '}
          <a href="www.linkedin.com/in/fadwa-hadaoui-78b344251" target="_blank" rel="noreferrer">TWITTER</a>
        </span>
      
      
        
      </div>
    </div>
  </div>
);

export default Contact;
