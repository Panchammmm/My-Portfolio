import React from "react";
import './footer.css';
import 'boxicons/css/boxicons.min.css';
import droplocation from "../../assets/pin-location.svg";
import email from "../../assets/email.svg";
import call from "../../assets/call-icon.svg";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#2c1a44] w-[80%] mx-auto text-gray-300 py-16 px-20 rounded-[100px_100px_0_0]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="space-y-4">
                    <h4 className="text-white text-xl font-semibold">Portfolio</h4>
                    <p className="text-slate-300 text-base">Passionate about crafting exceptional digital experiences. With expertise in both creative design and technical implementation.</p>

                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/in/pancham-sardar-6a466227b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ffffffa8] flex items-center justify-center hover:text-white"
                        >
                            <i className="bx bxl-linkedin text-2xl"></i>
                        </a>

                        <a
                            href="https://github.com/Panchammmm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ffffffa8] flex items-center justify-center hover:text-white"
                        >
                            <i className="bx bxl-github text-2xl"></i>
                        </a>

                        <a
                            href="https://www.instagram.com/pinaki_x_pancham/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ffffffa8] flex items-center justify-center hover:text-white"
                        >
                            <i className="bx bxl-instagram text-2xl"></i>
                        </a>
                    </div>

                    <h5 className="text-slate-200 text-sm">© {year} Pancham Sardar</h5>
                </div>

                <div className="space-y-4">
                    <h4 className="text-white text-xl font-semibold flex items-center space-x-2">
                        Get in Touch
                    </h4>

                    <div className="flex items-center space-x-2">
                        <img src={call} alt="call" className="w-6 h-6" />
                        <p onClick={() => window.location.href = 'tel:8670035037'} className="cursor-pointer">8670035037</p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <img src={email} alt="email" className="w-6 h-6" />
                        <p onClick={() => window.location.href = 'mailto:sardarpancham510510@gmail.com'} className="cursor-pointer">sardarpancham510510@gmail.com</p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <img src={droplocation} alt="location" className="w-6 h-6" />
                        <p onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Kolkata,+India", "_blank")} className="cursor-pointer">Kolkata, India</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-white text-xl font-semibold">General</h4>

                    <div className="flex flex-col space-y-2">
                        <a href="#about" className="hover:underline">About</a>
                        <a href="#skill" className="hover:underline">Skill</a>
                        <a href="#project" className="hover:underline">Project</a>
                        <a href="#education" className="hover:underline">Education</a>
                        <a href="#blog" className="hover:underline">Blog</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

