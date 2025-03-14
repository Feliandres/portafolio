"use client";

import React, { useRef } from "react";
import {
    FaAngular,
    FaCss3,
    FaFileExcel,
    FaGithub,
    FaHtml5,
    FaJs,
    FaNode,
    FaPython,
    FaReact
} from "react-icons/fa";
import {
    SiMongodb,
    SiMysql,
    SiNumpy,
    SiPandas,
    SiPlotly,
    SiPrisma,
    SiRstudioide,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";
import {
    TbBrandNextjs,
    TbBrandVercel,
} from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { motion, useInView } from "framer-motion";

const skills = [
    {
        category: "Frontend",
        technologies: [
            { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
            { name: "CSS", icon: <FaCss3 className="text-blue-600" /> },
            { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-600" /> },
        ],
    },
    {
        category: "Fullstack",
        technologies: [
            { name: "Node.js", icon: <FaNode className="text-green-500" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
            { name: "GitHub", icon: <FaGithub className="text-gray-600" /> },
            { name: "Prisma", icon: <SiPrisma className="text-blue-600" /> },
            { name: "Vercel", icon: <TbBrandVercel className="text-black" /> },
        ],
    },
    {
        category: "Analisis de Datos",
        technologies: [
            { name: "Python", icon: <FaPython className="text-blue-600" /> },
            { name: "Pandas", icon: <SiPandas className="text-white" /> },
            { name: "Numpy", icon: <SiNumpy className="text-white" /> },
            { name: "Seaborn", icon: <SiPlotly className="text-white" /> },
            { name: "Excel", icon: <FaFileExcel className="text-white" /> },
            { name: "R Studio", icon: <SiRstudioide className="text-white" /> },
        ],
    },
    {
        category: "Frameworks y Lenguajes",
        technologies: [
            { name: "React", icon: <FaReact className="text-blue-600" /> },
            { name: "Next.js", icon: <TbBrandNextjs className="text-black" /> },
            { name: "Angular", icon: <FaAngular className="text-red-600" /> },
            { name: "SQL Server", icon: <DiMsqlServer className="text-red-400" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        ],
    },
];

export const Skills = () => {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: false });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            id="skills"
            className="container mx-auto px-4 py-16 sm:py-32 text-white min-h-screen"
        >
            {/* TÍTULO */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center text-gray-200"
            >
                Habilidades
            </motion.h2>

            {/* SUBTÍTULO */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center text-lg md:text-xl text-gray-400 mb-8"
            >
                He trabajado en varios proyectos frontend y fullstack. Puedes verlos{" "}
                <a href="#" className="underline text-gray-300 hover:text-white transition">aquí</a>.
            </motion.p>

            {/* CONTENEDOR DE SKILLS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto justify-center">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        className="border border-gray-700 p-6 rounded-lg bg-gray-800/40 shadow-lg shadow-gray-900 flex flex-col items-center justify-center"
                    >
                        {/* CATEGORÍA */}
                        <motion.h3
                            initial={{ scale: 0.5 }}
                            animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.4, type: "spring" }}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 mb-6 text-center"
                        >
                            {skill.category}
                        </motion.h3>

                        {/* LISTA DE TECNOLOGÍAS */}
                        <ul className="space-y-4">
                            {skill.technologies.map((tech, techIndex) => (
                                <motion.li
                                    key={techIndex}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ delay: 0.8 + techIndex * 0.1, duration: 0.4 }}
                                    className="flex items-center space-x-4 text-lg md:text-xl text-gray-300"
                                >
                                    {/* ICONO EN BLANCO O NEGRO */}
                                    <motion.span
                                        whileHover={{ scale: 1.2 }}
                                        className="text-3xl md:text-4xl lg:text-5xl"
                                        style={{ color: tech.name === "Next.js" || tech.name === "Prisma" ? "black" : "white" }}
                                    >
                                        {tech.icon}
                                    </motion.span>
                                    <span>{tech.name}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};
