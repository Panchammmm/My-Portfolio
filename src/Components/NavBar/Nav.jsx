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
        <nav id="navbar" className={clsx('lg:px-[7rem] lg:py-4 px-5 py-3', { 'bg-navBody': isScrolled, 'bg-transparent': !isScrolled })}>
            <div className="mx-auto flex items-center justify-between py-3">
                <div className="inline-flex items-center space-x-2">
                    <div className="text-[#be62ff] flex tracking-wider my-auto cursor-pointer lg:text-3xl text-2xl font-[500]">
                        {"Portfolio.".split("").map((char, index) => (
                            <span key={index} className="transition-all duration-100 ease-in-out transform hover:text-slate-300 hover:-translate-y-2">
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
                                    className={clsx('navItem tracking-[1px] relative text-navItm focus:outline-none font-[500] text-[15px]', { 'active': activeSection === item.href.substring(1) })}
                                >
                                    {t(item.name)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden xl:flex items-center justify-center">
                    <div className="mt-2">
                        <ThemeBtn />
                    </div>

                    <button type="button" onClick={toggleLanguage} className="language-btn">
                        {isJapanese ? 'ENG' : '日本語'}
                    </button>
                </div>

                <div className="xl:hidden">
                    <div className="flex">
                        <div className="mt-1">
                            <ThemeBtn />
                        </div>

                        <div>
                            <input id="burger-checkbox" type="checkbox" onClick={toggleMenu} />
                            <label className="burger" htmlFor="burger-checkbox">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>
                    </div>

                </div>
                {isMenuOpen && (
                    <div className={`absolute inset-x-0 top-[5rem] z-0 origin-top-right transform p-2 transition lg:hidden ${isScrolled ? 'bg-black' : ''}`}>
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

function ThemeBtn() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="container">
            <label className="toggle mx-4 my-auto" htmlFor="switch">
                <input
                    id="switch"
                    className="input"
                    type="checkbox"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                />
                <div className="icon icon--moon">
                    <svg height="26" width="26" fill="#333" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"></path>
                    </svg>
                </div>

                <div className="icon icon--sun">
                    <svg height="26" width="26" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                    </svg>
                </div>
            </label>
        </div>
    );
}
