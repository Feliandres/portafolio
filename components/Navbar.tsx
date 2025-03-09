"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
    { title: "Acerca de mí", path: "#about" },
    { title: "Habilidades", path: "#skills" },
    { title: "Experiencia", path: "#experience" },
    { title: "Contáctame", path: "#contact" },
];

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-md text-white font-bold text-2xl py-4">
            {/* Contenedor principal */}
            <div className="max-w-6xl mx-auto flex items-center justify-center py-4 px-4 relative">
                {/* Barra de navegación en desktop */}
                <div className="hidden md:flex w-full justify-center">
                    <ul className="flex flex-wrap gap-6 justify-center">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.path}
                                    className="hover:text-gray-300 transition-all duration-300 ease-in-out"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Botón de menú en móvil */}
                <div
                    onClick={toggleNav}
                    className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 border rounded text-white/70 border-white/70 p-2 cursor-pointer"
                >
                    {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </div>
            </div>

            {/* Menú móvil */}
            <div
                className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-md transform transition-transform duration-300 ${
                nav ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className="flex flex-col items-center justify-center space-y-8 bg-black/90 py-5 max-w-auto">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.path}
                                onClick={closeNav}
                                className="text-3xl hover:text-gray-300 transition"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};
