import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import './edu.css';

import Arrow from "../../assets/arrow.svg";

// Utility function to merge class names
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// Consolidated CardHover Component
const CHover = ({ items = [], className }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={cn("max-w-5xl mx-auto px-8", className)}>
            <div className={cn("grid grid-cols-1 py-8")}>
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={cn("relative group block p-2 h-full w-full")}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className={cn("edu-hover-card absolute inset-0 h-full w-full bg-neutral-200 block rounded-3xl")}
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                                />
                            )}
                        </AnimatePresence>
                        <div className={cn("rounded-2xl h-full w-full p-4 overflow-hidden bg-tranparent relative z-20 flex justify-between group")}>
                            <div className="relative z-50">
                                <h3 className="lg:text-lg text-base font-bold text-[#a95bf8]">{item.year}</h3>
                                <h2 className="text-white font-[700] lg:text-[1.5rem] text-xl mt-2 mb-2">{item.title}</h2>
                                <p className="lg:text-base text-[15px] font-semibold tracking-[0.6px] text-zinc-400">{item.description}</p>
                            </div>

                            <img src={Arrow} alt="arrow" className="arrow-icon my-auto lg:size-8 size-7 group-hover:rotate-[70deg]"></img>
                        </div>
                        <div className="border-style"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Sample data for projects
const projects = [
    {
        year: `2023 - 2024`,
        title: "Web Development",
        description: "Udemy Platform",
    },
    {
        year: `2020 - 2024`,
        title: "Computer Science and Engineering",
        description: "Maulana Abul Kalam Azad University of Technology",
    },
    {
        year: `2017 - 2019`,
        title: "Higher Secondary Education",
        description: "Tangrakhali P.J.P. High School (H.S.)",
    },
    {
        year: `2016 - 2017`,
        title: "Secondary Education",
        description: "Tangrakhali P.J.P. High School (H.S.)",
    }
];

export default function CardHover() {
    return (
        <div className="App">
            <CHover items={projects} />
        </div>
    );
}