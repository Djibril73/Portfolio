import React from 'react';
import { motion } from 'framer-motion';
import "../Allcss/Home.css"
import { Typewriter } from 'react-simple-typewriter';


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
        <a href="https://www.linkedin.com/in/djibril-gharbi-61981632b/" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="https://github.com/Djibril73?tab=repositories" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/github.svg" alt="GitHub" className="w-6 h-6" />
        </a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/cv.svg" alt="CV" className="w-6 h-6" />
        </a>
      </div>

      <img
        src="/src/assets/astronaute.jpg"
        alt="Astronaute"
        className="astronaut-img"
      />
    
      

    </motion.div>

  );
};

export default Home;