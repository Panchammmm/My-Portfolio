import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTranslation } from 'react-i18next';
import '../Education/edu.css';
import Righticon from "../../../assets/rightIcon.svg";
import PropTypes from "prop-types";

// Utility function to merge class names
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// Consolidated CardHover Component
const CHover = ({ items = [], className }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={cn("max-w-5xl", className)}>
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
                        <div className={cn("rounded-2xl h-full w-full p-4 sm:gap-[130px] overflow-hidden bg-tranparent relative z-20 flex justify-between group")}>
                            <div className="relative z-50">
                                <h3 className="lg:text-lg text-base font-bold text-[#a95bf8]">{item.year}</h3>
                                <h2 className="group-hover:text-white text-eduTitle ease-in-out duration-300 font-[600] lg:text-[22px] text-xl mt-2 mb-2">{item.title}</h2>
                                <p className="lg:text-base text-[15px] font-semibold tracking-[0.6px] text-zinc-400">{item.description}</p>
                            </div>

                            <img src={Righticon} alt="rightIcon" className="arrow-icon my-auto lg:size-7 size-6 group-hover:rotate-[70deg] ml-10"></img>
                        </div>
                        <div className="border-style"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Sample data for projects
const Exphover = () => {
    const { t } = useTranslation();
    const Exp = t('Exp', { returnObjects: true }); // Fetch translated projects

    return (
        <div className="App">
            <CHover items={Exp} />
        </div>
    );
};

// PropTypes for CHover component
CHover.propTypes = {
    items: PropTypes.array,
    className: PropTypes.string,
};

export default Exphover;