"use client";

import obj from "@/assets/obj1.png";
import { FiArrowRight } from "react-icons/fi";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import profilepic from "@/assets/profilepic.png";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Hero = () => {
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
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.section
            style={{ backgroundImage }}
            className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6 py-20 text-gray-200"
        >
            {/* Contenido principal */}
            <div className="z-10 flex flex-col items-center text-center">
                <span className="mb-3 inline-block rounded-full bg-gray-600/50 px-4 py-2 text-sm">
                    Open for Work
                </span>

                {/* Nombre y título */}
                <h1 className="text-white/40 text-4xl sm:text-5xl md:text-7xl font-black">
                    Hi, I am
                </h1>
                <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-4xl sm:text-5xl md:text-7xl">
                    Felipe Pazmiño
                </h1>

                {/* Imagen de perfil */}
                <Image
                    src={profilepic}
                    alt="profile picture"
                    width={180}
                    height={180}
                    className="my-4 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full"
                />

                {/* Rol y habilidades */}
                <div className="flex flex-wrap bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4 w-full max-w-sm">
                    {[obj, obj, obj].map((item, index) => (
                        <Image
                            key={index}
                            src={item}
                            alt="object"
                            width={30}
                            height={30}
                            className="rounded-2xl"
                        />
                    ))}
                    <p className="px-4 font-medium text-xl sm:text-2xl md:text-3xl">Data Analyst</p>
                </div>

                {/* Descripción */}
                <p className="my-4 max-w-xl text-lg sm:text-xl">
                    Data Analyst with extensive backend development experience, 
                    specializing in ETL tools and SQL Server to deliver actionable insights.
                </p>

                {/* Botón de descarga */}
                <motion.a
                    href="https://drive.google.com/file/d/1CuO345WrLSiuRySrQXxwBBK_tFbc470L/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="my-3"
                >
                    <motion.button
                        style={{ border, boxShadow }}
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        className="flex w-auto items-center gap-2 rounded-full px-6 py-2 sm:px-8 sm:py-3 text-lg sm:text-xl"
                    >
                        Download CV
                        <FiArrowRight />
                    </motion.button>
                </motion.a>
            </div>
        </motion.section>
    );
};
