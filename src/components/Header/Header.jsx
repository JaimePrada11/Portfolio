import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="bg-black h-screen flex items-center justify-center">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 flex flex-col-reverse lg:flex-row">
        <div className="lg:col-span-5 lg:flex">
          <img src="https://wallpapercave.com/wp/wp10676987.jpg" alt="space" className="w-full h-auto shadow-lg rounded-lg filter blur-sm" />
        </div>
        <div className="place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Jaime Prada
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">
            <TypeAnimation
              cursor={true}
              sequence={[
                "I'm a web developer", 
                2000, 
                "I create innovative solutions", 
                2000,
                "Welcome to my portfolio", 
                2000
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </p>
          <a target="_blank"  href="https://drive.google.com/file/d/1NzQo_lahosmIBw03n1kfJqxE6YMHnF8T/view?usp=sharing" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
            CV
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
