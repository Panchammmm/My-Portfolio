import React from "react";
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';

import './dp.css';
import dp from "../../assets/dp.png";

export default function Dp() {
    return (
        <>
            <section className="w-[85%] mx-auto mt-10 mb-20 sm:mt-10">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(277px,1fr))] gap-y-8 items-center">

                    <div>
                        <div>
                            <h3 className="text-[36px] text-white font-[700] mb-2">I am Pancham</h3>
                            <h1 className="text-[65px] font-[700] gradient-text leading-[1.2] mb-3">Web Developer</h1>
                        </div>

                        <p className="text-white text-[20px] leading-7 tracking-[1px] max-w-[550px] font-[300]">
                            Passionate about crafting <span className=" text-[#ffffff55]">exceptional</span> digital experiences. With expertise in both creative <span className=" text-[#ffffff55]">design</span> and <span className=" text-[#ffffff55]">technical</span> implementation, specialized in delivering top-notch <span className=" text-[#ffffff55]">web solutions</span> for clients worldwide.
                        </p>

                        <div className="flex flex-wrap my-auto mt-10">
                            <button class="flex tracking-[0.8px] border border-[#8750f7] hover:bg-[#8750f7] text-[#8750f7] font-bold mr-8 py-3 px-7 rounded-full hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                                Resume
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    class="w-5 h-5 animate-bounce ml-1 mt-1 text-[#a080df]"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                                    ></path>
                                </svg>
                            </button>

                            <div className="flex gap-5 my-auto scale-[0.9]">
                                <a href="https://www.linkedin.com/in/pancham-sardar-6a466227b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#8750f7] border border-[#8750f7] p-2 rounded-full bg-gradient-to-r from-[#8750f7] hover:from-transparent to-[#2a1454] transition hover:duration-700">
                                    <i><Linkedin /></i>
                                </a>

                                <a href="https://github.com/Panchammmm" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8750f7] border border-[#8750f7] p-2 rounded-full bg-gradient-to-r from-[#8750f7] hover:from-transparent to-[#2a1454] transition hover:duration-700">
                                    <i><Github /></i>
                                </a>

                                <a href="https://www.instagram.com/pinaki_x_pancham/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8750f7] border border-[#8750f7] p-2 rounded-full bg-gradient-to-r from-[#8750f7] hover:from-transparent to-[#2a1454] transition hover:duration-700">
                                    <i><Instagram /></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="images mx-auto">
                            <img src={dp} alt="dp" className="dp-img" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}