import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTranslation } from 'react-i18next';

// Utility function to merge class names
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// Consolidated CardHover Component
const CHover = ({ items = [], className }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const { t } = useTranslation();

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
                        <div className={cn("rounded-2xl shadow-2xl p-5 overflow-hidden bg-servBox border border-servBorder relative z-20")}>
                            <div className="relative z-50">
                                <h4 className={cn("text-des font-bold tracking-[0.6px] mt-4")}>{t(item.title)}</h4>
                                <p className={cn("mt-5 text-zinc-500 tracking-[0.6px] leading-relaxed text-base")}>{t(item.description)}</p>
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
        description: "UI Design Description"
    },
    {
        title: "Web App",
        description: "Web App Description"
    },
    {
        title: "Backend",
        description: "Backend Description"
    }
];

export default function ServCard() {
    return (
        <div>
            <CHover items={projects} />
        </div>
    );
}
