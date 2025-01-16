import React, { useState } from "react";

const ServiceCard = ({ title, description, image, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-64 h-80 mx-auto overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <Icon className="text-white w-16 h-16 mb-12 transition-transform duration-300" />
        <h2 className="text-white text-xl font-semibold uppercase">
          {title}
        </h2>
      </div>

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-white transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg transform transition-transform duration-300"
        />
        <h2 className="text-lg font-semibold uppercase tracking-wider mb-2">
          {title}
        </h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
