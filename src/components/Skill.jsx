"use client";

import React from "react";
import { FaJava } from "react-icons/fa";

import {
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiPython,
    SiGit,
    SiMysql,
    SiReact,
    SiSpring,
    SiTailwindcss,
    SiPostgresql 
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const Skills = () => {
    const skills = [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <SiReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Mysql", icon: <SiMysql /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Sping", icon: <SiSpring /> },
        { name: "Java", icon: <FaJava   /> },
        {name: "NextJs", icon: <RiNextjsFill/>},
        {name: "Postgresql", icon: <SiPostgresql/>}
    ];

    const radius = 200; 
    const skillSize = 80; 
    const skillPadding = 20; 

    const generatePositions = (numSkills) => {
        const positions = [];

        while (positions.length < numSkills) {
            const angle = Math.random() * 2 * Math.PI; 
            const distance = Math.random() * radius; 
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            const isOverlapping = positions.some(
                (pos) =>
                    Math.hypot(pos.x - x, pos.y - y) <
                    skillSize + skillPadding
            );

            if (!isOverlapping) {
                positions.push({ x, y });
            }
        }

        return positions;
    };

    const positions = generatePositions(skills.length);

    return (
        <div className="relative w-full h-[500px] flex justify-center items-center">
            {/* Fondo SVG */}
            <div className="absolute inset-0 z-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    className="w-full h-full"
                    fill="none"
                    stroke="#FFDD00"
                >
                    {/* Líneas diagonales */}
                    <line x1="0" y1="0" x2="500" y2="500" strokeWidth="0.5" />
                    <line x1="0" y1="500" x2="500" y2="0" strokeWidth="0.5" />
                    <line x1="50" y1="0" x2="50" y2="500" strokeWidth="0.5" />
                    <line x1="150" y1="0" x2="150" y2="500" strokeWidth="0.5" />
                    <line x1="250" y1="0" x2="250" y2="500" strokeWidth="0.5" />
                    <line x1="350" y1="0" x2="350" y2="500" strokeWidth="0.5" />
                    <line x1="450" y1="0" x2="450" y2="500" strokeWidth="0.5" />
                    <line x1="0" y1="50" x2="500" y2="50" strokeWidth="0.5" />
                    <line x1="0" y1="150" x2="500" y2="150" strokeWidth="0.5" />
                    <line x1="0" y1="250" x2="500" y2="250" strokeWidth="0.5" />
                    <line x1="0" y1="350" x2="500" y2="350" strokeWidth="0.5" />
                    <line x1="0" y1="450" x2="500" y2="450" strokeWidth="0.5" />
                    {/* Círculos concéntricos */}
                    <circle cx="250" cy="250" r="100" strokeWidth="0.5" />
                    <circle cx="250" cy="250" r="200" strokeWidth="0.5" />
                </svg>
            </div>

            {/* Contenedor de Skills */}
            <div className="absolute w-full h-full flex justify-center items-center">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="absolute flex flex-col justify-center items-center bg-gray-800/20 text-white rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                        style={{
                            width: `${skillSize}px`,
                            height: `${skillSize}px`,
                            transform: `translate(${positions[index].x}px, ${positions[index].y}px)`,
                        }}
                    >
                        <div className="text-yellow-500 text-4xl">
                            {skill.icon}
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default Skills;
