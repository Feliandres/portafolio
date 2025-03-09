"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import profilepic from "@/assets/profilepic.png";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

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

    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <section
            className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 py-10 text-gray-200"
        >
            <div className="z-10 flex flex-col items-center text-center w-full">
                <h1 className="text-white/40 text-4xl font-black md:text-6xl lg:text-7xl">
                    Hola, soy
                </h1>
                <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-4xl md:text-6xl lg:text-7xl">
                    Felipe Pazmiño
                </h1>
                <Image
                    src={profilepic}
                    alt="profile picture"
                    width={220}
                    height={220}
                    className="rounded-full mt-4"
                />

                <TypeAnimation
                    sequence={[
                        "Analista de Datos",
                        1000,
                        "Desarrollador Fullstack",
                        1000,
                        "Desarrollador Backend",
                        1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-2xl text-center sm:text-xl md:text-3xl italic mb-4"
                />

                <div className="flex gap-6 flex-row text-3xl md:text-4xl lg:text-5xl text-white z-20 my-5">
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineGithub />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineLinkedin />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineInstagram />
                    </motion.a>
                </div>

                <motion.a
                    href="https://drive.google.com/file/d/1CuO345WrLSiuRySrQXxwBBK_tFbc470L/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="my-3 text-2xl"
                >
                    <motion.button
                        style={{ border, boxShadow }}
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        className="flex w-fit items-center gap-2 rounded-full px-8 py-2"
                    >
                        Descargar CV
                    </motion.button>
                </motion.a>
            </div>

            <div className="bg-circle-container">
                <div className="bg-circle-background"></div>
                <div className="bg-circle"></div>
            </div>
        </section>
    );
};
