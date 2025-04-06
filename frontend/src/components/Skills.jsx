import React from 'react';
import { motion } from 'framer-motion';
import '../Allcss/Skills.css';

const skills = [
  { name: 'HTML / CSS ', icon: '/src/assets/html.svg' },
  { name: 'JavaScript', icon: '/src/assets/ts.svg' },
  { name: 'React', icon: '/src/assets/reactt.svg' },
  { name: 'SQL', icon: '/src/assets/sql.svg' },
  { name: 'PHP / PDO', icon: '/src/assets/php.svg' },
  { name: 'Symfony', icon: '/src/assets/symfony.svg' },
  { name: 'Git', icon: '/src/assets/git.svg' },
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