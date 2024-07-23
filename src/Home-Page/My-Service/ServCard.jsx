import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge class names
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// Consolidated CardHover Component
const CHover = ({ items = [], className }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={cn("max-w-5xl mx-auto px-8", className)}>
            <div className={cn("flex lg:flex-row flex-col justify-between py-10")}>
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={cn("relative flex justify-between p-2")}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className={cn("absolute inset-0 h-full w-full bg-gradient-to-r from-[#522b6e] to-[#3f106d] block rounded-2xl")}
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                                />
                            )}
                        </AnimatePresence>
                        <div className={cn("rounded-2xl shadow-2xl p-5 overflow-hidden bg-servBox border border-[#462262] relative z-20")}>
                            <div className="relative z-50">
                                <h4 className={cn("text-des font-bold tracking-[0.6px] mt-4")}>{item.title}</h4>
                                <p className={cn("mt-8 text-zinc-500 tracking-[0.6px] leading-relaxed text-base")}>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Sample data for projects
const projects = [
    {
        title: "UI Design",
        description: "Expert web design and development, focusing on intuitive user interfaces.",
    },
    {
        title: "Web App",
        description: "Streaming service with a wide range of content for internet-connected devices.",
    },
    {
        title: "Backend",
        description: "Specializes in scalable and secure Internet services and products.",
    }
];

export default function ServCard() {
    return (
        <div className="">
            <CHover items={projects} />
        </div>
    );
}
