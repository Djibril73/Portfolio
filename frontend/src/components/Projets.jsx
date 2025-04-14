import React from 'react';
import { motion } from 'framer-motion';
import '../Allcss/Projets.css';

import portfolioImg from '../assets/portfolio.png';
import locationImg from '../assets/location.png';
import Kebab from '../assets/kebab.png';
import congeImg from '../assets/conge.png';

const projets = [
  {
    title: 'Mon Portfolio',
    description: 'Portfolio personnel réalisé avec React, Tailwind et Framer Motion.',
    image: portfolioImg,
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: 'https://portfolio-djibril-gharbi.vercel.app/'
  },
  {
    title: 'Site de Location de Voiture',
    description: 'Application qui permet de pouvoir réserver une voiture en ligne directement depuis le Site Web, ce projet à été réalisé en React.',
    image: locationImg,
    tech: ['React', 'CSS', 'SQL'],
    link: 'https://tp-location.vercel.app/cars'
  },
  {
    title: 'Gestion de Congés',
    description: 'Application qui permet la gestion des congés pour les entreprises, elle a été réalisée en PHP Symfony.',
    image: congeImg,
    tech: ['Symfony', 'SQL', 'PHP'],
    link: 'https://github.com/Djibril73/tp_gestion_conge'
  },
  {
    title: 'Site AksarayKebab',
    description: "Site qui permet aux clients de consulter le menu, les horaires, l'emplacement également du restaurant, ce site a été réalisée en html css javascript",
    image: Kebab,
    tech: ['HTML','CSS', 'JAVASCRIPT'],
    link: 'https://www.aksaraykebab.fr'
  },
];

const Projets = () => {
  return (
    <motion.section id="projets" className="projets-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Mes Projets</h2>
      <div className="projets-grid">
        {projets.map((projet, index) => (
          <motion.a
            key={index}
            href={projet.link}
            target="_blank"
            rel="noopener noreferrer"
            className="projet-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={projet.image} alt={projet.title} />
            <div className="projet-info">
              <h3>{projet.title}</h3>
              <p>{projet.description}</p>
              <div className="tags">
                {projet.tech.map((tech, i) => (
                  <span key={i} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Projets;