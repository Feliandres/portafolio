import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-16">
            <div className="container mx-auto px-4">
                {/* Sección de Redes Sociales */}
                <div className="flex justify-center gap-6 mb-6 flex-wrap">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl md:text-3xl hover:text-gray-400 transition duration-300"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl md:text-3xl hover:text-gray-400 transition duration-300"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl md:text-3xl hover:text-gray-400 transition duration-300"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl md:text-3xl hover:text-gray-400 transition duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl md:text-3xl hover:text-gray-400 transition duration-300"
                    >
                        <IoLogoInstagram />
                    </a>
                </div>

                {/* Derechos de Autor */}
                <div className="text-center text-gray-400 text-sm md:text-base">
                    <p>
                        &copy; {new Date().getFullYear()} Felipe Pazmiño. Todos los derechos reservados.
                    </p>
                    <p>
                        Diseñado y desarrollado con 💙 por Felipe Pazmiño
                    </p>
                </div>
            </div>
        </footer>
    );
};