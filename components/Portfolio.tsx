"use client"

import React, { useState, useEffect} from "react";
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

const COLORS_TOP = ["#13FFAA", "#1E67C6","#CE84CF", "#DD335C"]

export const Portfolio = () => {

    const [selectedProject, setSelectedProject] = useState(projects[0])

    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
            animate(color, COLORS_TOP, {
                ease: "easeInOut",
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror"
            })
    }, [])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 50%, ${color})`

    return (
        <motion.section
            style={{
                backgroundImage
            }}
            id="portfolio"
            className="py-32 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-6xl font-bold mb-10">
                        Selected
                        <span className="text-gray-400">
                            Projects
                        </span>
                    </h2>
                    {projects.map(project => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer mb-8 group"
                        >
                            <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                            <h3 className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors ${selectedProject.id === project.id ? 'text-gray-200' : ''} duration-300`}>
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className="border-b-2 border-gray-200 my-4"></div>
                            )}
                            {selectedProject.id === project.id && (
                                <p className="text-gray-400 transition-all duration-500 ease-in-out">
                                    {project.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <Image
                    src={selectedProject.image.src}
                    alt={selectedProject.title}
                    className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                    width={800}
                    height={450}
                />

            </div>
        </motion.section>
    );
};