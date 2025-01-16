import React from 'react';
import ProjectCard from './ProjectCard'; 
import { projects } from '../../local/Info'; 

const Projects = () => {
  return (
    <>
    <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 text-center uppercase">
        My Projects
      </h2>
    <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-2 p-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          number={project.id}
          name={project.title}
          image={project.image}
          description={project.description}
          technologies={project.technologies}
          github={project.github}
        />
      ))}
    </div></>
  );
};

export default Projects;
