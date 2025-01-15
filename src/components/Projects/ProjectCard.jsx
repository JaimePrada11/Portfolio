import React from "react";

const ProjectCard = ({ number, name, image, description, technologies, github }) => {
  return (
    <div
      className="relative w-80 h mx-auto rounded-lg overflow-hidden shadow-lg bg-blue-900 bg-opacity-50 text-white"
      style={{ minWidth: "320px" }}
    >
      <div className="absolute top-4 left-4">
        <h3 className="text-xl font-bold">{number < 10 ? `0${number}` : number}</h3>
      </div>

      <div className="h-40 w-full overflow-hidden">
        <img
          className=" object-cover w-full h-full"
          src={image}
          alt={`${name} project`}
        />
      </div>

      <div className="p-4 h-[calc(100%-160px)] flex flex-col justify-between">
        <h2 className="text-2xl font-bold text-center uppercase">{name}</h2>


        <div className="mt-4 flex justify-end gap-2">
          {technologies.map((TechIcon, index) => (
            <div
              key={index}
              className="text-yellow-500 rounded-full p-2"
            >
              <TechIcon className="h-7 w-7" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 left-4">
        <button
          onClick={() => window.open(github, "_blank")}
          className="bg-white text-red-600 rounded-full p-4 shadow-md hover:scale-105 transform transition-all"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
