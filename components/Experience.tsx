"use client"

import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "ETAFASHION",
        role: "Pasante Business Intelligence",
        period: "2022 - 2023",
        description: "Creacion y uso de herramientas ETL's. Manejo y Admininistracion de Base de Datos SQL. Optimizacion de flujos. Envio de reporteria",
    },
    {
        company: "ETAFASHION",
        role: "Auxiliar Business Intelligence",
        period: "2023 - 2024",
        description: "Creacion y uso de herramientas ETL's. Manejo y Admininistracion de Base de Datos SQL. Optimizacion de flujos. Envio de reporteria",
    },
    {
        company: "CANTEC",
        role: "Asesor Comercial",
        period: "2024 - 2024",
        description: "Atencion y asesoramiento al cliente. Ventas de productos y Servicios. Resolucion de problemas y consultas. Cumplimiento de metas y objetivos de ventas",
    },
]

export const Experience = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            {/* Título */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-gray-200 text-5xl sm:text-6xl md:text-7xl font-bold text-center mb-12"
            >
                Experience
            </motion.h1>

            {/* Contenedor de experiencias */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-1 gap-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.3 },
                    },
                }}
            >
                {experiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-lg shadow-lg transition-transform duration-300 will-change-transform"
                        whileHover={{ boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)" }} // Solo cambia la sombra
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100">{experience.company}</h2>
                        <p className="text-xl sm:text-xl text-gray-200 italic font-semibold">{experience.role}</p>
                        <p className="text-lg text-gray-300">{experience.period}</p>
                        <p className="text-base sm:text-lg text-gray-400 mt-4">{experience.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

