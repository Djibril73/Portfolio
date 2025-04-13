import React from 'react';

const certifications = [
  {
    projet: "Marketplace Amazon (Hygièna Santé)",
    certifications: [
      { name: "Google - Marketing numérique" },
      { name: "OpenClassrooms - E-commerce" },
      { name: "UFC Que Choisir - RGPD" },
    ],
  },
  {
    projet: "Site web vitrine (Aksaray Kebab)",
    certifications: [
      { name: "FreeCodeCamp - Développement Web" },
      { name: "Google - Marketing numérique" },
      { name: "MOOC - Numérique Responsable" },
    ],
  },
  {
    projet: "App React - Location voiture",
    certifications: [
      { name: "FreeCodeCamp - React" },
      { name: "IBM Cloud" },
      { name: "Google Firebase" },
      { name: "MOOC - Numérique Responsable" },
    ],
  },
  {
    projet: "Agent IA orientation SISR/SLAM",
    certifications: [
      { name: "IBM SkillsBuild - IA" },
      { name: "Google Developers" },
      { name: "OpenClassrooms - Web" },
    ],
  },
  {
    projet: "App Symfony - Gestion congés",
    certifications: [
      { name: "OpenClassrooms - Symfony" },
      { name: "IBM Cloud" },
      { name: "MOOC - Numérique Responsable" },
    ],
  },
  {
    projet: "Création Github & LinkedIn",
    certifications: [
      { name: "OpenClassrooms - Git" },
      { name: "MOOC - Numérique Responsable" },
      { name: "Google - Optimisation profil" },
    ],
  },
];

const Certifications = () => {
  return (
    <section className="p-8 text-white">
      <h2 className="text-3xl font-bold mb-6">Mes Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((item, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-900 via-purple-900 to-black p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-3">{item.projet}</h3>
            <ul className="space-y-2">
              {item.certifications.map((certif, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {certif.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;