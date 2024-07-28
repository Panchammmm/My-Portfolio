import React, { useState } from "react";
import './footer.css';

import droplocation from "../../assets/pin-location.svg";
import email from "../../assets/email.svg";
import call from "../../assets/call-icon.svg";
import linkedin from "../../assets/Social-media-icons/linkedin.svg";
import github from "../../assets/Social-media-icons/github.svg";
import insta from "../../assets/Social-media-icons/instagram.svg";

export default function Footer() {
    const [activeSection, setActiveSection] = useState("");
    const year = new Date().getFullYear();

    const handleLocateClick = (e, section) => {
        e.preventDefault();
        const target = document.querySelector(`#${section}`);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setActiveSection(section);
    };

    return (
        <div className="relative w-full">
            <footer className="absolute bg-footerBg left-1/2 transform -translate-x-1/2 -top-[8rem] w-[90%] sm:w-[80%] mx-auto border-[1px] border-[#312348] text-gray-300 pt-20 lg:pb-14 pb-5 px-8 lg:px-[4rem] sm:px-10 md:px-14 rounded-[100px_100px_0_0]">
                <div className="lg:flex lg:justify-around lg:flex-wrap mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="space-y-4 lg:w-[20rem]">
                        <h4 className="text-[#9d71b8] text-xl font-semibold">Portfolio</h4>
                        <p className="text-slate-300 text-base">Passionate about crafting exceptional digital experiences. With expertise in both creative design and technical implementation.</p>

                        <div className="flex space-x-5">
                            <a
                                href="https://www.linkedin.com/in/pancham-sardar-6a466227b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center transition-opacity duration-300 ease-in-out hover:opacity-50"
                            >
                                <img src={linkedin} alt="linkedin"></img>
                            </a>

                            <a
                                href="https://github.com/Panchammmm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center transition-opacity duration-300 ease-in-out hover:opacity-50"
                            >
                                <img src={github} alt="github"></img>
                            </a>

                            <a
                                href="https://www.instagram.com/pinaki_x_pancham/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center transition-opacity duration-300 ease-in-out hover:opacity-50"
                            >
                                <img src={insta} alt="insta"></img>
                            </a>
                        </div>

                        <h5 className="text-[#bbb] text-sm pt-[0.15rem] lg:flex hidden">© {year} Pancham Sardar</h5>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[#9d71b8] text-xl font-semibold flex items-center space-x-2">
                            Get in Touch
                        </h4>

                        <div className="flex items-center space-x-2 hover:underline">
                            <img src={call} alt="call" className="w-6 h-6" />
                            <p onClick={() => window.location.href = 'tel:8670035037'} className="cursor-pointer">8670035037</p>
                        </div>

                        <div className="flex items-center space-x-2 hover:underline">
                            <img src={email} alt="email" className="w-6 h-6" />
                            <p onClick={() => window.location.href = 'mailto:sardarpancham510510@gmail.com'} className="cursor-pointer">sardarpancham510510@gmail.com</p>
                        </div>

                        <div className="flex items-center space-x-2 hover:underline">
                            <img src={droplocation} alt="location" className="w-6 h-6" />
                            <p onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Kolkata,+India", "_blank")} className="cursor-pointer">Kolkata, India</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[#9d71b8] text-xl font-semibold">General</h4>

                        <div className="flex flex-col space-y-2.5">
                            {["About", "Skills", "Works", "Education", "Blog"].map((section) => (
                                <a href={`#${section}`} className="hover:underline fbutton" key={section}
                                    onClick={(e) => handleLocateClick(e, section)}>
                                    {section.charAt(0) + section.slice(1)}

                                    <span className="button__icon-wrapper">
                                        <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="rgba(255, 255, 255, 0.6)" viewBox="0 0 14 15">
                                            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                        </svg>

                                        <svg className="button__icon-svg button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="rgba(255, 255, 255, 0.9)" viewBox="0 0 14 15">
                                            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                        </svg>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <h5 className="text-[#888] text-sm flex lg:hidden justify-center pt-16">© {year} Pancham Sardar</h5>
            </footer>
        </div>
    );
}
