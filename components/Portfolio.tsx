"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import proj1 from "@/assets/proj1.jpg";
import proj2 from "@/assets/proj2.jpg";
import proj4 from "@/assets/proj4.jpg";
import { useMotionTemplate, useMotionValue, animate, motion } from "framer-motion";

const projects = [
    {
        id: 1,
        year: 2024,
        title: "Project",
        description: "Project 1",
        image: proj1,
    },
    {
        id: 2,
        year: 2024,
        title: "Project",
        description: "Project 2",
        image: proj2,
    },
    {
        id: 3,
        year: 2024,
        title: "Project",
        description: "Project 3",
        image: proj4,
    },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 50%, ${color})`;

    return (
        <motion.section
            style={{ backgroundImage }}
            id="portfolio"
            className="py-20 px-6 text-white"
        >
            <div className="max-w-7xl mx-auto grid gap-6 md:gap-12 lg:grid-cols-2">
                {/* Sección de Texto */}
                <div>
                    <h2 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-8">
                        Selected <span className="text-gray-400">Projects</span>
                    </h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer mb-6 group"
                        >
                            <p className="text-gray-400 text-lg mb-1">{project.year}</p>
                            <h3
                                className={`text-2xl md:text-3xl font-semibold group-hover:text-gray-400 transition-colors duration-300 ${
                                    selectedProject.id === project.id ? "text-gray-200" : ""
                                }`}
                            >
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <>
                                    <div className="border-b-2 border-gray-200 my-2"></div>
                                    <p className="text-gray-400 transition-all duration-500 ease-in-out">
                                        {project.description}
                                    </p>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Sección de Imagen (Cambia de posición en móviles) */}
                <motion.div
                    key={selectedProject.id} // Clave para animación fluida en cambios
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex justify-center"
                >
                    <Image
                        src={selectedProject.image.src}
                        alt={selectedProject.title}
                        className="rounded-xl shadow-lg"
                        width={600}
                        height={400}
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};
