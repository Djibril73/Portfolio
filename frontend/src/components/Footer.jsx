import React from 'react';
import '../Allcss/Footer.css';

import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import cvIcon from '../assets/cv.svg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <button className="scroll-top" onClick={scrollToTop}>
        ▲
      </button>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/djibril-gharbi-61981632b/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Djibril73?tab=repositories" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="/Cv.pdf" target="_blank" rel="noopener noreferrer">
          <img src={cvIcon} alt="CV" />
        </a>
      </div>
      <p>© Copyright 2025</p>
    </footer>
  );
};

export default Footer;