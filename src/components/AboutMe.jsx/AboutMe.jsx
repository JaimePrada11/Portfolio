import React from 'react';
import vision from '../../assets/vision.jpg';
import mision from '../../assets/mision.jpg';
import valores from '../../assets/valores.jpg';
import me from '../../assets/me.jpg';
import { aboutme, socials} from '../../local/Info';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <div>
            <div className="max-w-4xl flex items-center h-auto  flex-wrap mx-auto my-2 lg:my-4">
                <div
                    className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-gray-100/20 opacity-75 mx-6 lg:mx-0 backdrop-blur-md"
                >
                    <div className="p-4 md:p-12 text-center text-white lg:text-left">
                        <div
                            className="block lg:hidden rounded-full shadow-xl mx-auto h-48 w-48 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${me})`,
                            }}
                        ></div>
                        <h1 className="text-3xl font-bold pt-8 lg:pt-0">Jaime Prada</h1>

                        <p className="pt-8 text-4sm">
                            {aboutme}
                        </p>
                        <div className="pt-12 pb-8 flex flex-row">
                            {socials.map((social) => (
                                <a 
                                    key={social.id} 
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="mr-4"
                                >
                                    <button className="flex items-center">
                                        <social.iconUrl className="mr-2 w-9 h-9 text-yellow-500" />
                                    </button>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/5">
                    <img
                        src={me}
                        className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
                        alt="Profile"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
