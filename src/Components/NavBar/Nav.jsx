import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import './nav.css';

const menuItems = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#About' },
    { name: 'Services', href: '#Services' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Works', href: '#Works' },
    { name: 'Contact', href: '#Contact' },
];

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const { t, i18n } = useTranslation();
    const [isJapanese, setIsJapanese] = useState(() => localStorage.getItem('language') === 'ja');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleLanguage = () => {
        const newLang = isJapanese ? 'en' : 'ja';
        setIsJapanese(!isJapanese);
        localStorage.setItem('language', newLang);
        i18n.changeLanguage(newLang);
    };

    const handleMenuItemClick = (e, href) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setActiveSection(href.substring(1));

        const checkbox = document.getElementById('burger-checkbox');
        if (checkbox) {
            checkbox.checked = false;
        }
    };

    useEffect(() => {
        let lastScroll = 0;
        let ticking = false;

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setIsScrolled(currentScroll > 0);

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const sections = document.querySelectorAll('section');
                    let currentSection = 'Home'; // Default to 'Home' if no section matches
                    sections.forEach(section => {
                        const sectionTop = section.offsetTop;
                        if (currentScroll >= sectionTop - 60) {
                            currentSection = section.getAttribute('id');
                        }
                    });
                    setActiveSection(currentSection);

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
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav id="navbar" className={clsx('lg:px-[7.5rem] lg:py-4 px-5 py-3', { 'bg-black': isScrolled, 'bg-transparent': !isScrolled })}>
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

                <div className="hidden xl:block">
                    <ul className="inline-flex space-x-10">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={(e) => handleMenuItemClick(e, item.href)}
                                    className={clsx('navItem tracking-[1px] relative text-gray-300 focus:outline-none font-[500] text-[15px]', { 'active': activeSection === item.href.substring(1) })}
                                >
                                    {t(item.name)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

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
                        {isJapanese ? 'ENG' : '日本語'}
                    </button>
                </div>

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
                    <div className={`absolute inset-x-0 top-[5rem] z-0 origin-top-right transform p-2 transition lg:hidden ${isScrolled ? handleMenuItemClick() : ''}`}>
                        <div className="px-6 py-10 rounded-2xl bg-gradient-to-b from-[#100b18] to-[#231341]">
                            <nav className="grid gap-y-4">
                                {menuItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => handleMenuItemClick(e, item.href)}
                                        className={clsx('-m-3 flex items-center rounded-md p-3 text-sm font-base', { 'active': activeSection === item.href.substring(1) })}
                                    >
                                        <span className="ml-3 text-base font-medium text-white">
                                            {t(item.name)}
                                        </span>
                                    </a>
                                ))}
                            </nav>

                            <div className="grid place-content-start gap-4 mt-7">
                                <button type="button" onClick={toggleLanguage} className="language-btn">
                                    {isJapanese ? 'ENG' : '日本語'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
