import React from 'react';
import ServiceCard from './ServiceCard'; // Asegúrate de ajustar la ruta del archivo
import { services } from '../../local/Info'; 

const Services = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-2 text-yellow-500">Services</h1>
      </div>
      <div className="container m-auto w-[80vw]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
