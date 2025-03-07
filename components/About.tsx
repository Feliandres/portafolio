"use client"

import React from "react";
import Image from "next/image";
import book from "@/assets/book.png";
import card from "@/assets/card.png";
import pc from "@/assets/pc.png";
import finance from "@/assets/finance.png";

export const About = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12" id="about">
            {/* Título */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8">
                About <span className="text-gray-400">Me</span>
            </h1>

            {/* Grid Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

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
                        src={card}
                        alt="Card"
                        width={100}
                        height={100}
                        className="w-20 h-20 sm:w-24 sm:h-24"
                    />
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white/80">Habilidades</h2>
                        <p className="text-sm sm:text-lg text-white/70">
                            Python, Java, C++, SQL Server, React, Excel, BI, Figma, liderazgo y trabajo en equipo.
                        </p>
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="w-full bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden p-6 flex items-center space-x-4">
                    <Image
                        src={finance}
                        alt="Finance"
                        width={100}
                        height={100}
                        className="w-20 h-20 sm:w-24 sm:h-24"
                    />
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white/80">Habilidades</h2>
                        <p className="text-sm sm:text-lg text-white/70">
                            Python, Java, C++, SQL Server, React, Excel, BI, Figma, liderazgo y trabajo en equipo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};