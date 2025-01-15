import React from 'react';
import ServiceCard from './ServiceCard'; // Asegúrate de ajustar la ruta del archivo
import { FaConnectdevelop } from "react-icons/fa";

const services = [
  {
    icon: FaConnectdevelop,
    title: 'Desarrollo Web',
    description: 'Creamos sitios web a medida, adaptados a tus necesidades y objetivos.'
  },
  {
    icon: FaConnectdevelop,
    title: 'Diseño Gráfico',
    description: 'Ofrecemos servicios de diseño gráfico para destacar tu marca y mensaje.'
  },
  {
    icon: FaConnectdevelop,
    title: 'Desarrollo de Software',
    description: 'Desarrollamos aplicaciones y soluciones software personalizadas.'
  }
];

const Services = () => {
  return (
    <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default Services;
