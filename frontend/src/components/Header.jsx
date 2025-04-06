import React, { useState, useEffect } from 'react';
import "../Allcss/Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="header-links">
        <a href="/">Acceuil</a>
        <a href="#description">Description</a>
        <a href="#skills">Compétences</a>
        <a href="#experiences">Experiences</a>
        <a href="#projets">Projets</a>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;