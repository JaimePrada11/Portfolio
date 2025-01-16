import React from "react";
import { socials } from '../../local/Info';

const Contact = () => {
  return (
    <footer
      id="contact"
      className="relative backdrop-blur-lg text-white py-4"
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-center">
        <div className="p-6 rounded-lg shadow-lg flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-6 bg-white/20 backdrop-blur-md">
          <h2 className="text-2xl font-bold">You can find me here:</h2>
          <div className="flex space-x-6">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <social.iconUrl className="w-9 h-9 text-white hover:text-yellow-500" />
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-100 mt-6">
          © 2025 Jaime Prada. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
