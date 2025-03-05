"use client";

import { motion } from "framer-motion";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="py-20 text-white max-w-[1200px] mx-auto px-4"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-12"
            >
                {/* Información de Contacto */}
                <div className="space-y-10">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-6xl md:text-7xl font-bold text-gray-300 leading-tight"
                    >
                        Get in <span className="text-gray-500">touch</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gray-800/50 backdrop-blur-md p-6 md:p-8 rounded-2xl space-y-6"
                    >
                        {/* Teléfono */}
                        <div className="space-y-1">
                            <p className="text-lg text-gray-300">Phone</p>
                            <a
                                href="https://wa.me/593984507476"
                                aria-label="Contact via WhatsApp"
                                className="text-xl md:text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
                            >
                                (+593) 984507476 <span className="text-gray-500">⬈</span>
                            </a>
                        </div>

                        {/* Email */}
                        <div className="space-y-1">
                            <p className="text-lg text-gray-300">Email</p>
                            <a
                                href="mailto:felipe.pazmino.26@gmail.com"
                                aria-label="Send an email"
                                className="text-xl md:text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2 break-all"
                            >
                                felipe.pazmino.26@gmail.com <span className="text-gray-500">⬈</span>
                            </a>
                        </div>

                        {/* Dirección */}
                        <div className="space-y-1">
                            <p className="text-lg text-gray-300">Address</p>
                            <address className="text-xl md:text-2xl font-semibold text-gray-300">
                                Real Audiencia, <br />
                                Quito, Ecuador
                            </address>
                        </div>
                    </motion.div>
                </div>

                {/* Mapa de Google */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5642.442873954263!2d-78.48864681010801!3d-0.11966399870425456!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1741137850561!5m2!1ses!2sec"
                        width="800"
                        height="600"
                        title="Google Maps"
                        style={{ border: 0 }}
                        loading="lazy"
                        className="w-full h-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};
