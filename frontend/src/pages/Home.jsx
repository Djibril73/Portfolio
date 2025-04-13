import React from 'react';
import { motion } from 'framer-motion';
import "../Allcss/Home.css"
import { Typewriter } from 'react-simple-typewriter';
import linkedin from '../assets/linkedin.svg';
import Cv from '../assets/cv.svg';
import Git from '../assets/github.svg';
import Astronaute from '../assets/astronaute.jpg';


const Home = () => {
  return (
    <motion.div
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <span className="intro-badge">
        Bienvenue sur mon Portfolio
      </span>

      <h1 className="hero-title">
        Djibril Gharbi - <br /> 
  Développeur web <br />
  <span className="tech-type">
    <Typewriter
      words={['JavaScript', 'PHP', 'React', 'Symfony', 'HTML']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</h1>

      <div className="social-icons">
        <a href={Git} target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="https://github.com/Djibril73?tab=repositories" target="_blank" rel="noopener noreferrer">
          <img src={Git} alt="GitHub" className="w-6 h-6" />
        </a>
        <a href="/Cv.pdf" target="_blank" rel="noopener noreferrer">
          <img src={Cv} alt="CV" className="w-6 h-6" />
        </a>
      </div>

      <img
        src={Astronaute}
        alt="Astronaute"
        className="astronaut-img"
      />
    
      

    </motion.div>

  );
};

export default Home;