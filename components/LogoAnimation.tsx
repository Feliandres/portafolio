"use client"

import Image from "next/image"
import { motion} from "framer-motion"
import udemy from "@/assets/udemy.png"
import fiverr from "@/assets/fiverr.png"
import elementor from "@/assets/elementor.png"
import logitech from "@/assets/logitech.png"
import oracle from "@/assets/oracle.png"

const images = [
    { src: udemy, alt: "figma" },
    { src: fiverr, alt: "fiverr" },
    { src: elementor, alt: "elementor" },
    { src: logitech, alt: "logitech" },
    { src: oracle, alt: "oracle" },
    { src: udemy, alt: "figma" },
    { src: fiverr, alt: "fiverr" },
    { src: elementor, alt: "elementor" },
    { src: logitech, alt: "logitech" },
    { src: oracle, alt: "oracle" },
    { src: udemy, alt: "figma" },
    { src: fiverr, alt: "fiverr" },
    { src: elementor, alt: "elementor" },
    { src: logitech, alt: "logitech" },
    { src: oracle, alt: "oracle" },
    { src: udemy, alt: "figma" },
    { src: fiverr, alt: "fiverr" },
    { src: elementor, alt: "elementor" },
    { src: logitech, alt: "logitech" },
    { src: oracle, alt: "oracle" },
]

export const LogoAnimation = () => {
    return (
        <div className="py-8 bg-purple-200/10 opacity-80">
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
                <motion.div
                    className="flex gap-10 sm:gap-14 w-full pr-14"
                    animate={{
                        translateX: '-50px',
                    }}
                    transition={{
                        duration: 15, // Animación más rápida
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "loop",
                    }}
                >
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            height={30}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};