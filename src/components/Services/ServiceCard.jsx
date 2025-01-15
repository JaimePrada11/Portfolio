import React from 'react';

const ServiceCard = ({ title, icon: Icon, description }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto p-6 rounded-lg overflow-hidden shadow-lg text-white transition-transform duration-300 hover:scale-105 group">
      <div className="flex justify-center my-4">
        <Icon className="h-16 w-16 text-white" />
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        {/* Descripción con visibilidad controlada por el hover del elemento padre */}
        <p className="text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
