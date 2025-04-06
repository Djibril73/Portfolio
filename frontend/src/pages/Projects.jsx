import React from 'react';
import FadeInSection from '../components/FadeInSection';

const Projects = () => {
  return (
    <div className="projects-container">
      <FadeInSection>
        <h2 className="section-title">Mes Projets</h2>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <div className="project-card">Projet 1</div>
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <div className="project-card">Projet 2</div>
      </FadeInSection>
    </div>
  );
};

export default Projects;