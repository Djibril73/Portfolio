import React from 'react';
import { motion } from 'framer-motion';
import '../Allcss/Experience.css';

const Experience = () => {
  return (
    <motion.section id="experiences"
      className="experience-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Expérience Professionnelle</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Cote-Suhhi <span>- Saint-Étienne, France</span></h3>
          <p className="experience-dates">2022 - 2025</p>
          <p className="experience-desc">
            Employé Polyvalent au sein de l’entreprise Cote Sushi, préparation des commandes à emporter,
            encaissement clients et livraison à scooter.
          </p>
        </div>

        <div className="experience-item">
          <h3>Hello Fresh <span>- Saint-Priest, Lyon</span></h3>
          <p className="experience-dates">Août 2024</p>
          <p className="experience-desc">
            Chargé de la livraison de colis alimentaires à température dirigée.
            Utilisation de véhicules frigorifiques pour garantir la chaîne du froid
            et assurer la qualité des produits jusqu’à la destination finale. Respect strict
            des délais et des procédures de sécurité alimentaire.
          </p>
        </div>

        <div className="experience-item">
          <h3>Aksaray Kebab <span>- Stage Développement Web</span></h3>
          <p className="experience-dates">2025</p>
          <p className="experience-desc">
            Stage de création d’un site vitrine en HTML, CSS et JavaScript pour un restaurant local.
          </p>
        </div>

        <div className="experience-item">
          <h3>Hygiena Santé <span>- Stage E-commerce</span></h3>
          <p className="experience-dates">2024</p>
          <p className="experience-desc">
            Stage dédié à la mise en place et la gestion d’une boutique Amazon pour une entreprise
            de santé et hygiène.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;