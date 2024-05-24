import React from "react";
import { FaLinkedin as Linkedin, FaGithub as Github, FaInstagram as Instagram, FaFacebook as Facebook } from 'react-icons/fa';

import './dp.css';
import dp from "../../assets/dp.png";

export default function Dp() {
    return (
        <section className="w-[70%] mx-auto mt-10 mb-20 sm:mt-10">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(277px,1fr))] gap-y-8 items-center">
                <div>
                    <h3 className="text-[1.5rem] text-white animate-topSideAni">Hi, It's Me</h3>
                    <h1 className="text-[4rem] font-semibold text-white leading-[1] sm:py-2 py-3 animate-leftSideAni">I'm <span className="text-red-500">Pancham</span></h1>
                    <p className="animate-topSideAni text-white text-[1.15rem] leading-7">
                        A web developer passionate about crafting exceptional digital experiences. With expertise in both creative design and technical implementation, I specialize in delivering top-notch web solutions for clients worldwide.
                        <br />
                        Beyond coding, I'm fueled by my love for anime, manga, and dreams of coding in Japan. When I'm not at my desk, you can find me scaling mountains for inspiration.
                    </p>

                    <div className="flex flex-wrap gap-5 mt-7">
                        <a
                            href="https://www.linkedin.com/in/pancham-sardar-6a466227b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="animate-SocialAni delay-100 shadow-2xl text-white text-lg border border-purple-800 rounded-full p-3 bg-gradient-to-r from-orange-400 to-purple-900 hover:shadow-md hover:bg-orange-200"
                        >
                            <Linkedin className="text-white" />
                        </a>
                        <a
                            href="https://github.com/Panchammmm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="animate-SocialAni delay-200 shadow-2xl text-white text-lg border border-purple-800 rounded-full p-3 bg-gradient-to-r from-orange-400 to-purple-900 hover:shadow-md hover:bg-orange-200"
                        >
                            <Github className="text-white" />
                        </a>
                        <a
                            href="https://www.instagram.com/pinaki_x_pancham/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="animate-SocialAni delay-300 shadow-2xl text-white text-lg border border-purple-800 rounded-full p-3  bg-gradient-to-r from-orange-400 to-purple-900 hover:shadow-md hover:bg-orange-200"
                        >
                            <Instagram className="text-white" />
                        </a>
                        <a
                            href="https://www.facebook.com/your-profile-url"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="animate-SocialAni delay-400 shadow-2xl text-white text-lg border border-purple-800 rounded-full p-3 bg-gradient-to-r from-orange-400 to-purple-900 hover:shadow-md hover:bg-orange-200"
                        >
                            <Facebook className="text-white" />
                        </a>
                    </div>

                </div>
                <div>
                    <div className="images">
                        <img src={dp} alt="dp" className="animate-imageAni" />
                    </div>
                </div>
            </div>
        </section>
    );
}
