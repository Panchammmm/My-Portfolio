import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import './nav.css';
import ThemeBtn from "./ThemeBtn";

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
    const [activeSection, setActiveSection] = useState('Home');
    const { t, i18n } = useTranslation();
    const [isJapanese, setIsJapanese] = useState(() => localStorage.getItem('language') === 'ja');
    const menuRef = useRef(null);
    const checkboxRef = useRef(null);

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

        if (checkboxRef.current) {
            checkboxRef.current.checked = false;
        }
    };

    useEffect(() => {
        const mainHeader = document.getElementById("hide-header");

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (mainHeader) {
                mainHeader.style.top = (currentScrollPos < (window.prevScrollpos || 0)) ? "0" : "-120px";
                mainHeader.style.background = currentScrollPos === 0 ? 'transparent' : 'var(--nav_body)';
                window.prevScrollpos = currentScrollPos;
            }
        };

        window.addEventListener('scroll', handleScroll);

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && checkboxRef.current && !checkboxRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav id="hide-header" className={clsx('lg:px-[7rem] lg:py-4 px-5 py-[10px]')}>
            <div className="mx-auto flex items-center justify-between py-3">
                <div className="inline-flex items-center space-x-2">
                    <div className="text-navTittle flex tracking-wider my-auto cursor-pointer lg:text-3xl text-2xl font-[500]">
                        {"Portfolio.".split("").map((char, index) => (
                            <span key={index} className="transition-all duration-100 ease-in-out transform hover:text-slate-300 hover:-translate-y-2">
                                {char}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:block">
                    <ul className="inline-flex space-x-10">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={(e) => handleMenuItemClick(e, item.href)}
                                    className={clsx('menuItems tracking-[1px] relative text-navItm focus:outline-none font-[500] text-[15px]', { 'active': activeSection === item.href.substring(1) })}
                                >
                                    {t(item.name)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden lg:flex items-center justify-center">
                    <div className="mt-1">
                        <ThemeBtn />
                    </div>

                    <button type="button" onClick={toggleLanguage} className="language-btn">
                        {isJapanese ? 'ENG' : '日本語'}
                    </button>
                </div>

                <div className="lg:hidden">
                    <div className="flex">
                        <div className="mt-1">
                            <ThemeBtn />
                        </div>

                        <div>
                            <input id="burger-checkbox" ref={checkboxRef} type="checkbox" onClick={toggleMenu} />
                            <label className="burger" htmlFor="burger-checkbox">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div ref={menuRef} className={`absolute inset-x-0 top-[5rem] z-0 origin-top-right transform p-2 transition lg:hidden ${isMenuOpen ? 'bg-black' : ''}`}>
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
