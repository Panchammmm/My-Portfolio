import React, { useState, useEffect } from 'react';
import './nav.css';

const menuItems = [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Works', href: '#' },
    { name: 'Skills', href: '#' },
    { name: 'Blogs', href: '#' },
    { name: 'Contact', href: '#' },
];

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isJapanese, setIsJapanese] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleLanguage = () => setIsJapanese(!isJapanese);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setIsScrolled(currentScroll > 0);

            if (currentScroll <= 0) {
                document.body.classList.remove("scroll-up");
                return;
            }

            if (currentScroll > lastScroll && !document.body.classList.contains("scroll-down")) {
                document.body.classList.remove("scroll-up");
                document.body.classList.add("scroll-down");
            } else if (
                currentScroll < lastScroll &&
                document.body.classList.contains("scroll-down")
            ) {
                document.body.classList.remove("scroll-down");
                document.body.classList.add("scroll-up");
            }
            lastScroll = currentScroll;
        };

        let lastScroll = 0;
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav id="navbar" className={`px-[7.5rem] py-4 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
            <div className="mx-auto flex items-center justify-between py-3">

                <div className="inline-flex items-center space-x-2">

                    <div className="text-[#be62ff] flex tracking-wider items-center cursor-pointer text-3xl font-[500]">
                        {"Portfolio.".split("").map((char, index) => (
                            <span key={index} className="transition-all duration-100 ease-in-out transform hover:text-white hover:-translate-y-2">
                                {char}
                            </span>
                        ))}
                    </div>
                </div>

                {/* navbar */}
                <div className="hidden xl:block">
                    <ul className="inline-flex space-x-10">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="navItem tracking-[1px] relative text-gray-300 focus:outline-none font-[500] text-[15px]"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden xl:flex items-center justify-center">
                    <button className="mx-5">
                        <label
                            htmlFor="themeToggle"
                            className="themeToggle st-sunMoonThemeToggleBtn"
                            type="checkbox"
                        >
                            <input type="checkbox" id="themeToggle" className="themeToggleInput" />
                            <svg viewBox="0 0 20 20" fill="currentColor" stroke="none">
                                <mask id="moon-mask">
                                    <rect x="0" y="0" width="20" height="20" fill="white"></rect>
                                    <circle cx="11" cy="3" r="8" fill="black"></circle>
                                </mask>
                                <circle
                                    className="sunMoon"
                                    cx="10"
                                    cy="10"
                                    r="8"
                                    mask="url(#moon-mask)"
                                ></circle>
                                <g>
                                    <circle className="sunRay sunRay1" cx="18" cy="10" r="1.5"></circle>
                                    <circle className="sunRay sunRay2" cx="14" cy="16.928" r="1.5"></circle>
                                    <circle className="sunRay sunRay3" cx="6" cy="16.928" r="1.5"></circle>
                                    <circle className="sunRay sunRay4" cx="2" cy="10" r="1.5"></circle>
                                    <circle className="sunRay sunRay5" cx="6" cy="3.1718" r="1.5"></circle>
                                    <circle className="sunRay sunRay6" cx="14" cy="3.1718" r="1.5"></circle>
                                </g>
                            </svg>
                        </label>
                    </button>

                    <button
                        type="button"
                        onClick={toggleLanguage}
                        className="language-btn"
                    >
                        {isJapanese ? '日本語' : 'ENG'}
                    </button>
                </div>

                {/* navMenu */}
                <div className="xl:hidden">
                    <div>
                        <input id="burger-checkbox" type="checkbox" onClick={toggleMenu} />
                        <label className="burger" for="burger-checkbox">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-20 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-10 pt-6 bg-gradient-to-b from-[#100b18] to-[#2a1454]">

                                <nav className="grid gap-y-4">
                                    {menuItems.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 flex items-center rounded-md p-3 text-sm font-base"
                                        >
                                            <span className="ml-3 text-base font-medium text-white">
                                                {item.name}
                                            </span>
                                        </a>
                                    ))}
                                </nav>

                                <div className="grid items-center justify-start gap-4 mt-7">
                                    <button className="mx-5">
                                        <label
                                            htmlFor="themeToggle"
                                            className="themeToggle st-sunMoonThemeToggleBtn"
                                            type="checkbox"
                                        >
                                            <input type="checkbox" id="themeToggle" className="themeToggleInput" />
                                            <svg viewBox="0 0 20 20" fill="currentColor" stroke="none">
                                                <mask id="moon-mask">
                                                    <rect x="0" y="0" width="20" height="20" fill="white"></rect>
                                                    <circle cx="11" cy="3" r="8" fill="black"></circle>
                                                </mask>
                                                <circle
                                                    className="sunMoon"
                                                    cx="10"
                                                    cy="10"
                                                    r="8"
                                                    mask="url(#moon-mask)"
                                                ></circle>
                                                <g>
                                                    <circle className="sunRay sunRay1" cx="18" cy="10" r="1.5"></circle>
                                                    <circle className="sunRay sunRay2" cx="14" cy="16.928" r="1.5"></circle>
                                                    <circle className="sunRay sunRay3" cx="6" cy="16.928" r="1.5"></circle>
                                                    <circle className="sunRay sunRay4" cx="2" cy="10" r="1.5"></circle>
                                                    <circle className="sunRay sunRay5" cx="6" cy="3.1718" r="1.5"></circle>
                                                    <circle className="sunRay sunRay6" cx="14" cy="3.1718" r="1.5"></circle>
                                                </g>
                                            </svg>
                                        </label>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={toggleLanguage}
                                        className="language-btn"
                                    >
                                        {isJapanese ? '日本語' : 'ENG'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
