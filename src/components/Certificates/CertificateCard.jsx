import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";

const CertificateCard = ({
  year,
  logo,
  company,
  title,
  backgroundImage,
  url,
  isSelected,
  onSelect,
}) => {
  const handleButtonClick = (e) => {
    e.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={onSelect}
      className={`relative w-full max-w-3xl mx-auto p-4 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ${isSelected ? "text-yellow-500 scale-105" : "text-white hover:scale-105"
        }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center rounded-lg transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: isSelected ? 1 : 0.2,
        }}
      ></div>

      <div className="relative z-10 bg-opacity-75 p-4 rounded-lg flex sm:flex-row items-center sm:items-center justify-between w-full h-full space-y-4 sm:space-y-0">
        <div className="text-lg mr-4 sm:text-xl font-bold">{year}</div>

        <div className="flex items-center justify-center w-16 h-16 rounded-full mr-0 sm:mr-5">
          <img
            className="h-12 w-12 object-contain"
            src={logo}
            alt={`${title} logo`}
          />
        </div>

        <div className="flex-1 text-center sm:text-left mx-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{company}</h2>
          <p className="text-sm sm:text-base">{title}</p>
        </div>

        <div className="flex justify-center sm:justify-end items-center">
          <button
            onClick={handleButtonClick}
            className="hover:text-yellow-500 text-white sm:px-6 md:px-8 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-bold transition-transform transform hover:scale-110"
          >
            <FaChevronCircleRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 shadow-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
