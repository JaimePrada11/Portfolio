import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from "../../local/Info"; // Ajusta la ruta según la nueva convención
import Carousel from './Carousel'; // Importa el componente Carousel

const Projects = () => {
  return (
    <>
      <h2 id='projects' className="text-4xl md:text-5xl font-bold text-yellow-500 text-center uppercase">
        My Projects
      </h2>
      <div className="block lg:hidden">
        <Carousel autoSlide={true} autoSlideInterval={5000}>
          {projects.map((project) => (
            <div key={project.id} className="w-full p-4">
              <ProjectCard
                number={project.id}
                name={project.title}
                image={project.image}
                description={project.description}
                technologies={project.technologies}
                github={project.github}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div  className="hidden lg:flex lg:flex-wrap lg:justify-center gap-8 p-4">
        {projects.map((project) => (
          <div key={project.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <ProjectCard
              number={project.id}
              name={project.title}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
