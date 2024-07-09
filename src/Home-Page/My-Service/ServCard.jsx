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
            <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10")}>
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={cn("relative group block p-2 h-full w-full cursor-pointer")}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className={cn("absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl")}
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                                />
                            )}
                        </AnimatePresence>
                        <div className={cn("rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20")}>
                            <div className="relative z-50">
                                <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4")}>{item.title}</h4>
                                <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm")}>{item.description}</p>
                                {/* Additional children content can be added here */}
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
        title: "Stripe",
        description: "A technology company that builds economic infrastructure for the internet.",
    },
    {
        title: "Netflix",
        description: "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
        title: "Google",
        description: "A multinational technology company that specializes in Internet-related services and products.",
    }
];

export default function ServCard() {
    return (
        <div className="App">
            <CHover items={projects} />
        </div>
    );
}
