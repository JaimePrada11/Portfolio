import React, { useState } from "react";
import CertificateCard from "./CertificateCard";
import { certifications } from "../../local/Info";
import certificateshover from "../../assets/certificateshover.jpg";

const Certificates = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className=" flex flex-col items-center py-10">
      <h1 className="text-4xl text-white font-bold mb-8">Certificates</h1>
      <div className="space-y-4 w-full px-4">
        {certifications.map((certificate, index) => (
          <CertificateCard
            key={index}
            id={index} 
            year={certificate.year}
            logo={certificate.logo}
            title={certificate.title}
            backgroundImage={certificateshover}
            company={certificate.company}
            url={certificate.Url}
            isSelected={selectedId === index}
            onSelect={() => handleSelect(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
