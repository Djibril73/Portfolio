import React from 'react';
import '../Allcss/Footer.css';

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
          <img src="/src/assets/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Djibril73?tab=repositories" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/github.svg" alt="GitHub" />
        </a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/cv.svg" alt="CV" />
        </a>
      </div>
      <p>© Copyright 2025</p>
    </footer>
  );
};

export default Footer;