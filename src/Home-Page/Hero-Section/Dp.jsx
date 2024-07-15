import React from "react";
import './dp.css';

import dp from "../../assets/dp.png";
import HiImage from "../../assets/hi.svg";
import linkedin from "../../assets/Social-media-icons/linkedin.svg";
import github from "../../assets/Social-media-icons/github.svg";
import insta from "../../assets/Social-media-icons/instagram.svg";

export default function Dp() {
    return (
        <>
            <section id="Home" className="lg:w-[85%] mx-auto lg:pt-8 lg:pb-20 lg:mb-14">

                <div className="absolute top-1/2 left-1/2 transform -translate-x-[100%] -translate-y-[100%] -z-20">
                    <img className="icon_say-hi" src={HiImage} alt="hi"></img>
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(277px,1fr))] gap-y-8 items-center">

                    <div>
                        <div>
                            <h3 className="text-[36px] text-white font-[700] mb-2 mt-14">I am Pancham</h3>
                            <h1 className="text-[65px] font-[700] gradient-text leading-[1.2] mb-3">Web Developer + <br></br> UI Designer</h1>
                        </div>

                        <p className="text-white text-[20px] leading-7 tracking-[1px] max-w-[550px] font-[300]">
                            Passionate about crafting <span className=" text-[#ffffff55]">exceptional</span> digital experiences. With expertise in both creative <span className=" text-[#ffffff55]">design</span> and <span className=" text-[#ffffff55]">technical</span> implementation, specialized in delivering top-notch <span className=" text-[#ffffff55]">web solutions</span> for clients worldwide.
                        </p>

                        <div className="flex flex-wrap my-auto mt-10">
                            <button className="flex tracking-[0.8px] border border-[#bb5dfed7] hover:bg-[#bb5dfed7] text-[#bb5dfed7] font-bold mr-8 py-3 px-7 rounded-full hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce gradient-border">
                                Resume
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-5 h-5 animate-bounce ml-1 mt-1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                                    ></path>
                                </svg>
                            </button>

                            <div className="flex ml-3 gap-5 my-auto text-[21px]">
                                <a
                                    href="https://www.linkedin.com/in/pancham-sardar-6a466227b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#bb5dfed7] border border-[#bb5dfed7] size-10 p-[0.7rem] flex items-center justify-center rounded-full bg-gradient-to-r from-[#bb5dfed7] hover:from-transparent to-[#2a1454] transition hover:duration-700"
                                >
                                    <img src={linkedin} alt="linkedin"></img>
                                </a>

                                <a
                                    href="https://github.com/Panchammmm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#bb5dfed7] border border-[#bb5dfed7] size-10 p-[0.5rem] flex items-center justify-center rounded-full bg-gradient-to-r from-[#bb5dfed7] hover:from-transparent to-[#2a1454] transition hover:duration-700"
                                >
                                    <img src={github} alt="github"></img>
                                </a>

                                <a
                                    href="https://www.instagram.com/pinaki_x_pancham/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#bb5dfed7] border border-[#bb5dfed7] size-10 p-[0.5rem] flex items-center justify-center rounded-full bg-gradient-to-r from-[#bb5dfed7] hover:from-transparent to-[#2a1454] transition hover:duration-700"
                                >
                                    <img src={insta} alt="insta"></img>
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