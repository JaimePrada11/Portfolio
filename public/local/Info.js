import { SiHtml5, SiCss3, SiJavascript, SiMysql, SiTailwindcss, SiPython } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaJava } from "react-icons/fa";
import CampusParking from "../../src/assets/CampusParking.png"
import DeliciasFood from "../../src/assets/DeliciasFood.png"
import StarwarsApi from "../../src/assets/StarwarsApi.png"
import mysql from "../../src/assets/mysql.png"
import python from "../../src/assets/python.jpg"

export const navbar = [
    {
        id: "0",
        title: "Home",
        url: "#Home",
    },
    {
        id: "1",
        title: "About me",
        url: "#Aboutme",
    },
    {
        id: "2",
        title: "Services",
        url: "#services",
    },
    {
        id: "3",
        title: "Projects",
        url: "#projects",
    },
    {
        id: "4",
        title: "Contact",
        url: "#contact",
        onlyMobile: true,
    }
];


export const aboutme = [
    "Focused on generating effective solutions and sustainable results in high-impact projects. Through my experience, I have developed skills in logical thinking, attention to detail, and goal orientation, which motivate me to collaborate in teams and lead with a strategic vision. I always strive to innovate and add value to each initiative to drive the development and success of the projects I work on."
];


export const values = [
    "Problem Solving",
    "Adaptability",
    "Critical thinking",
    "Attention to detail",
    "Teamwork"
];

/* export const services = [
    {
        id: 1,
        title: "Figma",
        icon: figma,
        width: 26,
        height: 36,
    },
    {
        id: 2,
        title: "Notion",
        icon: notion,
        width: 34,
        height: 36,
    },
    {
        id: 3,
        title: "Discord",
        icon: discord,
        width: 36,
        height: 28,
    },
]; */

export const projects = [
    {
        id: 1,
        title: "Campus Parking",
        description: "AI chatbot, personalized recommendations",
        technologies: [SiHtml5, SiCss3, SiJavascript],
        image: CampusParking ,
        github: "https://github.com/JaimePrada11/CampusParking",
    },
    {
        id: 2,
        title: "Star Wars",
        description: "Advanced AI chatbot, priority support, analytics dashboard",
        technologies: [SiHtml5, SiCss3, SiJavascript],
        image: StarwarsApi ,
        github: "https://github.com/AlejandroRinconPerez/Proyecto_JavaScript_RinconAlejandroPradaJaime",
    },
    {
        id: 3,
        title: "Petpulse DB",
        description: "Custom AI chatbot, advanced analytics, dedicated account",
        technologies: [SiMysql],
        image: mysql ,
        github: "https://github.com/JaimePrada11/PetpulseDB",
    },
    {
        id: 4,
        title: "educational management",
        description: "Custom AI chatbot, advanced analytics, dedicated account",
        technologies: [SiPython],
        image: python ,
        github: "https://github.com/JaimePrada11/GestionSistemaEducativo",
    },
    {
        id: 5,
        title: "Betting system",
        description: "Custom AI chatbot, advanced analytics, dedicated account",
        technologies: [SiMysql, FaJava],
        image: DeliciasFood ,
        github: "https://github.com/JaimePrada11/BurrosU2",
    },
    {
        id: 6,
        title: "Veterinary system",
        description: "Custom AI chatbot, advanced analytics, dedicated account",
        technologies: [SiMysql, FaJava],
        image: DeliciasFood ,
        github: "https://github.com/JaimePrada11/PetPulse",
    },
];

export const certifications = [
    {
        id: 1,
        title: "EFSET",
        company: "https://www.efset.org/static/iconset/apple-touch-icon.png",
        description: "English Certificate.",
        year: 2024,
        Url: "https://cert.efset.org/en/XjU93d",
    },
    {
        id: 2,
        title: "MinTic",
        company: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_Ministerio_de_las_TIC_%282022-2026%29.png",
        description: "Bootcamp Programación",
        year: 2024,
        Url: "https://cert.efset.org/en/XjU93d",
    },
    {
        id: 3,
        title: "SENA",
        company: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/2090px-Sena_Colombia_logo.svg.png",
        description: "English Certificate.",
        year: 2022,
        Url: "https://cert.efset.org/en/XjU93d",
    },

];

export const socials = [
    {
        id: 1,
        title: "Github",
        iconUrl: IoLogoGithub,
        url: "https://github.com/JaimePrada11",
    },
    {
        id: 2,
        title: "Linkedlin",
        iconUrl: FaLinkedin,
        url: "https://www.linkedin.com/in/jprada11/",
    },
];