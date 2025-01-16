"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
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
  SiPostgresql,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const SkillCard = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Python", icon: <SiPython /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Spring", icon: <SiSpring /> },
    { name: "Java", icon: <FaJava /> },
    { name: "NextJs", icon: <RiNextjsFill /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
  ];

  const radius = 200; 
  const skillSize = 60; 
  const skillPadding = 15; 
  const [positions, setPositions] = useState([]);

  const generatePositions = (numSkills) => {
    const positions = [];
    let attempts = 0;

    while (positions.length < numSkills && attempts < 5000) {
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * radius;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      const isOverlapping = positions.some(
        (pos) =>
          Math.hypot(pos.x - x, pos.y - y) < skillSize + skillPadding
      );

      if (!isOverlapping) {
        positions.push({ x, y });
      }

      attempts++;
    }

    if (positions.length < numSkills) {
      console.warn("No se pudieron generar suficientes posiciones únicas.");
    }

    return positions;
  };

  useEffect(() => {
    if (positions.length === 0) {
      setPositions(generatePositions(skills.length));
    }
  }, [positions, skills.length]);

  return (
    <div className="relative w-full h-[500px] flex justify-center items-center">
      {/* Fondo SVG */}
      <div className="absolute inset-0 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          className="w-full h-full max-w-full max-h-full"
          fill="none"
          stroke="rgba(128, 128, 128, 0.5)"
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
        {positions.length > 0 &&
          skills.map((skill, index) => (
            <motion.div
              key={index}
              className="absolute flex flex-col justify-center items-center text-white rounded-lg "
              style={{
                width: `${skillSize}px`,
                height: `${skillSize}px`,
              }}
              initial={{
                opacity: 0,
                x: 0,
                y: 0, 
              }}
              animate={{
                opacity: 1,
                x: positions[index]?.x || 0,
                y: positions[index]?.y || 0,
              }}
              transition={{
                duration: 1, 
                delay: index * 0.1, 
                type: "spring",
                stiffness: 100, 
                damping: 25, 
              }}
            >
              <div className="text-yellow-500 text-4xl sm:text-5xl">{skill.icon}</div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default SkillCard;
