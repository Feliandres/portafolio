import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export const Footer = () => {
    return (
        <footer className="bg-purple-900 text-white py-12 mt-16">
            <div className="container mx-auto px-4">
                {/* Sección de Redes Sociales */}
                <div className="flex justify-center gap-8 mb-8">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-gray-400 transition duration-300"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-gray-400 transition duration-300"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-gray-400 transition duration-300"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-gray-400 transition duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-gray-400 transition duration-300"
                    >
                        <IoLogoInstagram />
                    </a>
                </div>

                {/* Derechos de Autor */}
                <div className="text-center text-gray-400">
                    <p className="text-xl">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                    <p className="text-xl">
                        Designed and developed with 💙 by Felipe Pazmiño
                    </p>
                </div>
            </div>
        </footer>
    );
};
