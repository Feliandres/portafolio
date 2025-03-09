"use client"

import React from "react";
import Image from "next/image";
import book from "@/assets/book.png";
import blandas from "@/assets/blandas.png";
import pc from "@/assets/pc.png";
import hobbies from "@/assets/hobbies.png";

export const About = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12" id="about">
            {/* Título */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8">
                Acerca <span className="text-gray-400">de Mi</span>
            </h1>

            {/* Grid Responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                {/* Tarjeta 1 */}
                <div className="w-full bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden p-6 flex items-center space-x-4">
                    <Image
                        src={book}
                        alt="Book"
                        width={100}
                        height={100}
                        className="w-20 h-20 sm:w-24 sm:h-24"
                    />
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white/80">Educación</h2>
                        <p className="text-sm sm:text-lg text-white/70">
                            Estudié Desarrollo de Software en la Escuela Politécnica Nacional.
                        </p>
                    </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="w-full bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden p-6 flex items-center space-x-4">
                    <Image
                        src={pc}
                        alt="Pc"
                        width={100}
                        height={100}
                        className="w-20 h-20 sm:w-24 sm:h-24"
                    />
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white/80">Experiencia</h2>
                        <p className="text-sm sm:text-lg text-white/70">
                            Experiencia en BI, ETL, SQL Server, análisis de datos y desarrollo fullstack.
                        </p>
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="w-full bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden p-6 flex items-center space-x-4">
                    <Image
                        src={hobbies}
                        alt="Hobbies"
                        width={100}
                        height={100}
                        className="w-20 h-20 sm:w-24 sm:h-24"
                    />
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white/80">Hobbies</h2>
                        <p className="text-sm sm:text-lg text-white/70">
                            Leer, hacer deporte, aprender cursos de programación.
                        </p>
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="w-full bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden p-6 flex items-center space-x-4">
                    <Image
                        src={blandas}
                        alt="Habilidades Blandas"
                        width={100}
                        height={100}
                        className="w-20 h-20 sm:w-24 sm:h-24"
                    />
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white/80">Habilidades Blandas</h2>
                        <p className="text-sm sm:text-lg text-white/70">
                            Comunicación, proactivo, sociable, honesto, perseverante, liderazgo y trabajo en equipo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};