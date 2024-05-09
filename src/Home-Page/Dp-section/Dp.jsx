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
            <section className="w-[80%] mx-auto mt-10 mb-20 sm:mt-6">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(277px,1fr))] gap-y-8 items-center">
                    <div >
                        <h3 className="text-[1.5rem] text-white">Hi, It's Me</h3>
                        <h1 className="text-[4rem] font-semibold text-white leading-[1] sm:py-2 py-3">I'm <span className="text-red-400">Pancham</span></h1>
                        <p className="text-white text-[1.15rem] leading-7">
                            I'm a professional Web Developer. Our Main Goal to help & Satisficed the Local & Global Clients by
                            web development solutions
                        </p>

                        <div className="flex flex-wrap gap-5 mt-7">
                            <a href="https://www.linkedin.com/in/pancham-sardar-6a466227b/" target="_blank" rel="noopener noreferrer" className="grid place-items-center text-center text-white text-lg border border-purple-800 rounded-full p-1.5 transition duration-500 ease-in-out bg-gradient-to-r from-orange-500 to-purple-800 hover:opacity-75 hover:bg-[#244D61] hover:shadow-md">
                                <i><Linkedin /></i>
                            </a>
                            <a href="https://github.com/Panchammmm" target="_blank" rel="noopener noreferrer" className="grid place-items-center text-center text-white text-lg border border-purple-800 rounded-full p-1.5 transition duration-500 ease-in-out bg-gradient-to-r from-orange-500 to-purple-800 hover:opacity-75 hover:bg-[#244D61] hover:shadow-md">
                                <i><Github /></i>
                            </a>
                            <a href="https://www.instagram.com/pinaki_x_pancham/" target="_blank" rel="noopener noreferrer" className="grid place-items-center text-center text-white text-lg border border-purple-800 rounded-full p-1.5 transition duration-500 ease-in-out bg-gradient-to-r from-orange-500 to-purple-800 hover:opacity-75 hover:bg-[#244D61] hover:shadow-md">
                                <i><Instagram /></i>
                            </a>
                            <a href="https://www.facebook.com/your-profile-url" target="_blank" rel="noopener noreferrer" className="grid place-items-center text-center text-white text-lg border border-purple-800 rounded-full p-1.5 transition duration-500 ease-in-out bg-gradient-to-r from-orange-500 to-purple-800 hover:opacity-75 hover:bg-[#244D61] hover:shadow-md">
                                <i><Facebook /></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="images">
                            <img src={dp} alt="dp"/>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}