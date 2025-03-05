import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const stackItems = [
    { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
    { id: 2, name: "Node.js", icon: IoLogoNodejs, color: "#339933" },
    { id: 3, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { id: 4, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { id: 5, name: "Next.js", icon: TbBrandNextjs, color: "#000000" },
];

export const Stack = () => {
    return (
        <section className="py-16 glass">
            <div className="max-w-[1200px] mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl text-gray-200 font-bold mb-6">
                    My Stack
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {stackItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-center flex-col rounded-xl p-4"
                        >
                            <div className="mb-4 bg-white/10 p-6 rounded-xl">
                                {React.createElement(item.icon, {
                                    className: "w-20 h-20 md:w-32 md:h-32",
                                    style: { color: item.color }
                                })}
                            </div>
                            <p className="text-gray-400 font-semibold text-lg">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};