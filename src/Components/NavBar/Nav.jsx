import React, { useState, useEffect } from 'react';
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
    const checkBox = document.getElementById('burger-checkbox');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleLanguage = () => {
        setTimeout(() => {
            const newLang = isJapanese ? 'en' : 'ja';
            setIsJapanese(!isJapanese);
            localStorage.setItem('language', newLang);
            i18n.changeLanguage(newLang);
        });
    };

    const handleMenuItemClick = (e, href) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setActiveSection(href.substring(1));

        if (checkBox) {
            checkBox.checked = false;
        }
    };

    useEffect(() => {
        const mainHeader = document.getElementById("hide-header");
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (mainHeader) {
                mainHeader.style.top = (currentScrollPos < (window.prevScrollpos || 0)) ? "0" : "-480px";
                mainHeader.style.background = currentScrollPos === 0 ? 'transparent' : 'var(--nav_body)';
                mainHeader.style.filter = currentScrollPos === 0 ? 'none' : '';

                window.prevScrollpos = currentScrollPos;
            }

            sections.forEach((sec) => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 500;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach((link) => {
                        link.classList.remove('active');
                        const activeLink = document.querySelector(`nav a[href*=${id}]`);
                        if (activeLink) {
                            activeLink.classList.add('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        const handleClickOutside = (event) => {
            if (checkBox && !checkBox.contains(event.target)) {
                setIsMenuOpen(false);

                if (checkBox) {
                    checkBox.checked = false;
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav id="hide-header" className={clsx('lg:px-[7rem] lg:py-5 px-5 py-[10px]')}>
            <div className="mx-auto flex items-center justify-between py-3">
                <div className="inline-flex items-center space-x-2">
                    <div className="text-navTittle flex tracking-wider my-auto cursor-pointer lg:text-3xl text-2xl font-[500]">
                        {t("Portfolio").split("").map((char, index) => (
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
                                    id="navItems"
                                    href={item.href}
                                    onClick={(e) => handleMenuItemClick(e, item.href)}
                                    className="menuItems tracking-[1px] relative text-navItm font-[500] text-[15px]"
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
                    <div className={`absolute inset-x-0 top-[5rem] origin-top-right transform p-2 transition lg:hidden ${isMenuOpen ? 'transparent' : ''}`}>
                        <div className="px-6 py-10 rounded-2xl bg-gradient-to-b from-menuGra to-menuGrb">
                            <nav className="grid gap-y-4">
                                {menuItems.map((item) => (
                                    <a
                                        id="navItems"
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => handleMenuItemClick(e, item.href)}
                                        className="-m-3 flex items-center rounded-md p-3 text-sm font-base"
                                    >
                                        <span className="menuItems ml-3 text-base font-medium text-navItm">
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
