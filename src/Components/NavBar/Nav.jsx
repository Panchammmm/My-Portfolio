import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MoonStar, SunDim } from 'lucide-react';

const menuItems = [
    {
        name: 'Home',
        href: '#',
    },
    {
        name: 'About',
        href: '#',
    },
    {
        name: 'Skills',
        href: '#',
    },
    {
        name: 'Projects',
        href: '#',
    },
    {
        name: 'Blogs',
        href: '#',
    },
]

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const [isJapanese, setIsJapanese] = useState(true);

    const toggleLanguage = () => {
        setIsJapanese(!isJapanese);
    }

    const [isLightMode, setIsLightMode] = useState(true);

    const toggleMode = () => {
        setIsLightMode(!isLightMode);
    }

    return (
        <div className="sm:w-[85%] w-[80%] mx-auto sm:mt-6 mt-9">
            <div className="mx-auto flex items-center justify-between py-3">

                <div className="inline-flex items-center space-x-2">

                    <div className="flex tracking-wider items-center cursor-pointer text-[#9b8dff] text-3xl font-[500]">
                        <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">P</span>
                        <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">o</span>
                        <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">r</span>
                        <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">t</span>
                        <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">f</span>
                        <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">o</span>
                        <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">l</span>
                        <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">i</span>
                        <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">o</span>
                        <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">.</span>
                    </div>
                </div>

                {/* navbar */}
                <div className="hidden xl:block">
                    <ul className="inline-flex space-x-10">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="navItem tracking-wider relative text-gray-300 focus:outline-none font-[500] text-[15px]"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden xl:flex items-center justify-center">
                    <button className="animate-rightSideAni delay-75 cursor-pointer text-white px-4" onClick={toggleMode}>
                        {isLightMode ? (
                            <SunDim className="text-white" />
                        ) : (
                            <MoonStar className="text-white h-[1.3rem] w-[1.3rem]" />
                        )}
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
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer text-white" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">

                                    <div className="inline-flex items-center space-x-2">

                                        <div className="flex tracking-wider items-center cursor-pointer text-[#9b8dff] text-3xl ">
                                            <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">P</span>
                                            <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">o</span>
                                            <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">r</span>
                                            <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">t</span>
                                            <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">f</span>
                                            <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">o</span>
                                            <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">l</span>
                                            <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">i</span>
                                            <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">o</span>
                                            <span className="transition-all duration-300 ease-in-out transform hover:text-white hover:-translate-y-2">.</span>
                                        </div>
                                    </div>

                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-6">
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
                                </div>

                                <div className="grid items-center justify-start gap-4 mt-7">
                                    <button className="cursor-pointer px-4" onClick={toggleMode}>
                                        {isLightMode ? (
                                            <SunDim className="text-white" />
                                        ) : (
                                            <MoonStar className="text-white" />
                                        )}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={toggleLanguage}
                                        className="rounded-[30px] ml-2 px-4 py-2 text-sm font-medium tracking-wider text-rose-50 transition duration-500 ease-in-out bg-gradient-to-r from-orange-500 to-purple-800 hover:opacity-75"
                                    >
                                        {isJapanese ? '日本語' : 'English'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}