import React, { useState, useEffect } from 'react';
import './nav.css';

const menuItems = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#About' },
    { name: 'Services', href: '#Services' },
    { name: 'Works', href: '#Works' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Blogs', href: '#Blogs' },
    { name: 'Contact', href: '#Contact' },
];

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isJapanese, setIsJapanese] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleLanguage = () => setIsJapanese(!isJapanese);

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
        const checkbox = document.getElementById('burger-checkbox');
        if (checkbox) {
            checkbox.checked = false;
        }
    };

    useEffect(() => {
        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setIsScrolled(currentScroll > 0);

            // Determine the active section based on the scroll position
            const sections = document.querySelectorAll('section');
            let currentSection = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (currentScroll >= sectionTop - 60) {
                    currentSection = section.getAttribute('id');
                }
            });
            setActiveSection(currentSection);

            // Scroll direction logic
            if (currentScroll <= 0) {
                document.body.classList.remove('scroll-up');
                return;
            }

            if (currentScroll > lastScroll && !document.body.classList.contains('scroll-down')) {
                document.body.classList.remove('scroll-up');
                document.body.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && document.body.classList.contains('scroll-down')) {
                document.body.classList.remove('scroll-down');
                document.body.classList.add('scroll-up');
            }
            lastScroll = currentScroll;
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav id="navbar" className={`lg:px-[7.5rem] lg:py-4 px-7 py-3 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
            <div className="mx-auto flex items-center justify-between py-3">
                <div className="inline-flex items-center space-x-2">
                    <div className="text-[#be62ff] flex tracking-wider my-auto cursor-pointer lg:text-3xl text-2xl font-[500]">
                        {"Portfolio.".split("").map((char, index) => (
                            <span key={index} className="transition-all duration-100 ease-in-out transform hover:text-white hover:-translate-y-2">
                                {char}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Desktop Navbar */}
                <div className="hidden xl:block">
                    <ul className="inline-flex space-x-10">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className={`navItem tracking-[1px] relative text-gray-300 focus:outline-none font-[500] text-[15px] ${activeSection === item.href.substring(1) ? 'active' : ''
                                        }`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Theme Toggle and Language Button */}
                <div className="hidden xl:flex items-center justify-center">
                    <button className="mx-5">
                        <label htmlFor="themeToggle" className="themeToggle st-sunMoonThemeToggleBtn">
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

                    <button type="button" onClick={toggleLanguage} className="language-btn">
                        {isJapanese ? '日本語' : 'ENG'}
                    </button>
                </div>

                {/* Mobile Navbar */}
                <div className="xl:hidden">
                    <div>
                        <input id="burger-checkbox" type="checkbox" onClick={toggleMenu} />
                        <label className="burger" htmlFor="burger-checkbox">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-20 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="px-5 pb-10 pt-6 rounded-2xl bg-gradient-to-b from-[#100b18] to-[#2a1454]">
                            <nav className="grid gap-y-4">
                                {menuItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={handleMenuItemClick}
                                        className={`-m-3 flex items-center rounded-md p-3 text-sm font-base ${activeSection === item.href.substring(1) ? 'active' : ''
                                            }`}
                                    >
                                        <span className="ml-3 text-base font-medium text-white">
                                            {item.name}
                                        </span>
                                    </a>
                                ))}
                            </nav>

                            <div className="grid place-content-start gap-4 mt-7">
                                <button className="mx-auto">
                                    <label htmlFor="themeToggle" className="themeToggle st-sunMoonThemeToggleBtn">
                                        <input type="checkbox" id="themeToggle" className="themeToggleInput" />
                                        <svg id="themeToggle" viewBox="0 0 20 20" fill="currentColor" stroke="none">
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

                                <button type="button" onClick={toggleLanguage} className="language-btn">
                                    {isJapanese ? '日本語' : 'ENG'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
