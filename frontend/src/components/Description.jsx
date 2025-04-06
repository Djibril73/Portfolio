import React from 'react';
import { motion } from 'framer-motion';
import '../Allcss/Description.css';

const Description = () => {
  return (
    <motion.section id="description" className="description-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="description-container">
        <motion.div
          className="description-image"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src="/src/assets/profile.svg" alt="Profile" />
        </motion.div>
        <div className="description-content">
          <h2>I'm <span className="highlight">Djibril</span></h2>
          <h4><em>Développeur Web Créatif & Passionné</em></h4>
          <p>
            Développeur web avec une solide connaissance des technologies front-end et back-end,
            passionné par le design et les expériences utilisateurs. J’ai une bonne maîtrise de
            React, PHP et Symfony avec une approche orientée clean code et UX.
          </p>
          <ul className="info-list">
            <li><strong>Nom :</strong> Djibril Gharbi</li>
            <li><strong>Email :</strong> djibril.gharbi.ghb@gmail.com</li>
            <li><strong>Mobile :</strong> +33 6 52 74 64 30</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Description;