import React from "react";
import CertificateCard from "./CertificateCard";
import { certifications } from '../../../public/local/Info'; 
import certificateshover from '../../assets/certificateshover.jpg';

const Certificates = () => {

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10">
      <h1 className="text-4xl text-white font-bold mb-8">
        Certificates & Events
      </h1>
      <div className="space-y-4 w-full px-4">
        {certifications.map((cert, index) => (
          <CertificateCard
            key={index}
            year={cert.year}
            logo={cert.company}
            title={cert.title}
            backgroundImage ={certificateshover}
            location={ cert.description}
            category={cert.category}
            url={cert.Url}
          />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
