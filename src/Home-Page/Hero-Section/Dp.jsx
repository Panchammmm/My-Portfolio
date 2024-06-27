import React from "react";
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';

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
                                    class="w-5 h-5 animate-bounce ml-1 mt-1"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                                    ></path>
                                </svg>
                            </button>

                            {/* <div className="flex gap-5 mt-7 my-auto">
                                <a href="https://www.linkedin.com/in/pancham-sardar-6a466227b/" target="_blank" rel="noopener noreferrer" className="animate-SocialAni delay-100 shadow-2xl grid place-items-center text-center text-white text-lg border border-purple-800 rounded-full p-1.5 transition duration-500 ease-in-out bg-gradient-to-r from-orange-500 to-purple-800 hover:opacity-60 hover:bg-[#244D61] hover:shadow-md">
                                    <i><Linkedin /></i>
                                </a>
                                <a href="https://github.com/Panchammmm" target="_blank" rel="noopener noreferrer" className="animate-SocialAni delay-200 shadow-2xl grid place-items-center text-center text-white text-lg border border-purple-800 rounded-full p-1.5 transition duration-500 ease-in-out bg-gradient-to-r from-orange-500 to-purple-800 hover:opacity-60 hover:bg-[#244D61] hover:shadow-md">
                                    <i><Github /></i>
                                </a>
                                <a href="https://www.instagram.com/pinaki_x_pancham/" target="_blank" rel="noopener noreferrer" className="animate-SocialAni delay-300 shadow-2xl grid place-items-center text-center text-white text-lg border border-purple-800 rounded-full p-1.5 transition duration-500 ease-in-out bg-gradient-to-r from-orange-500 to-purple-800 hover:opacity-60 hover:bg-[#244D61] hover:shadow-md">
                                    <i><Instagram /></i>
                                </a>
                                <a href="https://www.facebook.com/your-profile-url" target="_blank" rel="noopener noreferrer" className="animate-SocialAni delay-400 shadow-2xl grid place-items-center text-center text-white text-lg border border-purple-800 rounded-full p-1.5 transition duration-500 ease-in-out bg-gradient-to-r from-orange-500 to-purple-800 hover:opacity-60 hover:bg-[#244D61] hover:shadow-md">
                                    <i><Facebook /></i>
                                </a>
                            </div> */}
                        </div>
                    </div>

                    <div>
                        <div className="images">
                            <img src={dp} alt="dp" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}