import React from 'react';
import { motion } from 'framer-motion';
import '../Allcss/Skills.css';
import htmlIcon from '../assets/html.svg';
import tsIcon from '../assets/ts.svg';
import reactIcon from '../assets/reactt.svg';
import sqlIcon from '../assets/sql.svg';
import phpIcon from '../assets/php.svg';
import symfonyIcon from '../assets/symfony.svg';
import gitIcon from '../assets/git.svg';

const skills = [
  { name: 'HTML / CSS', icon: htmlIcon },
  { name: 'JavaScript', icon: tsIcon },
  { name: 'React', icon: reactIcon },
  { name: 'SQL', icon: sqlIcon },
  { name: 'PHP / PDO', icon: phpIcon },
  { name: 'Symfony', icon: symfonyIcon },
  { name: 'Git', icon: gitIcon },
];

const Skills = () => {
  return (
    <motion.section id="skills" className="skills-section" 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Compétences</h2>
      <p className="skills-intro">Voici la liste de mes compétences.</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;