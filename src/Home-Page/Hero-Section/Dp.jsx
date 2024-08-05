import React from "react";
import { useTranslation, Trans } from 'react-i18next';
import './dp.css';

import HiImage from "../../assets/hi.svg";
import linkedin from "../../assets/Social-media-icons/linkedin.svg";
import github from "../../assets/Social-media-icons/github.svg";
import insta from "../../assets/Social-media-icons/instagram.svg";
import Resume from "../../assets/pancham_resume.pdf";

export default function Dp() {
    const { t } = useTranslation();

    return (
        <section id="Home" className="lg:w-[85%] w-[90%] mx-auto lg:pt-[120px] pt-[100px] lg:pb-[130px] pb-[100px]">
            <div className="absolute lg:top-1/2 lg:left-1/2 left-[52%] top-[21%] transform lg:-translate-x-[80%] lg:-translate-y-[50%] -translate-x-[0%] -translate-y-[100%] -z-20">
                <img className="icon_say-hi lg:w-[7rem] w-[5rem]" src={HiImage} alt="hi"></img>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(277px,1fr))] lg:gap-y-8 items-center">
                <div>
                    <div>
                        <h3 className="lg:text-[36px] text-[25px] text-nameColor font-[700] mb-2 lg:mt-14 mt-8">{t('IAmPancham')}</h3>
                        <h1 className="lg:text-[65px] text-[40px] font-[700] gradient-text leading-[1.2] mb-3">
                            <Trans i18nKey="WebDeveloper">
                                Web Developer + <br></br> UI Designer
                            </Trans>
                        </h1>
                    </div>

                    <div className="lg:hidden flex mb-12 justify-start">
                        <div className="images lg:w-[60%] w-[80%] mt-1 lg:mt-0">
                            <img src="https://github.com/Panchammmm/my_portfolio_images/blob/main/Portfolio_images/dp.png?raw=true" alt="dp" className="dp-img" />
                        </div>
                    </div>

                    <div>
                        <p className="text-devAbout text-[20px] leading-7 tracking-[1px] max-w-[550px] font-[300]">
                            <Trans i18nKey="PassionateAbout">
                                Passionate about crafting <span className=" text-aboutLight">exceptional</span> digital experiences. With expertise in both creative <span className=" text-aboutLight">design</span> and <span className=" text-aboutLight">technical</span> implementation, specialized in delivering top-notch <span className=" text-aboutLight">web solutions</span> for clients worldwide.
                            </Trans>
                        </p>

                        <div className="flex flex-wrap my-auto lg:mt-10 mt-9">
                            <a
                                href={Resume}
                                download
                                className="flex tracking-[0.8px] border border-[#bb5dfed7] hover:bg-[#bb5dfed7] text-[#bb5dfed7] font-bold mr-8 lg:py-3 lg:px-7 py-2 px-5 rounded-full hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse lg:active:animate-bounce gradient-border"
                            >
                                {t('Resume')}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-4 h-4 lg:w-5 lg:h-5 animate-bounce ml-1 mt-1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                                    ></path>
                                </svg>
                            </a>

                            <div className="flex lg:ml-3 lg:gap-5 gap-3 my-auto">
                                <a
                                    href="https://www.linkedin.com/in/pancham-sardar-6a466227b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shadow-2xl border border-[#bb5dfed7] lg:size-10 size-9 p-[0.7rem] flex items-center justify-center rounded-full bg-gradient-to-r from-[#bb5dfed7] hover:from-transparent to-[#2a1454] transition hover:duration-700"
                                >
                                    <img src={linkedin} alt="linkedin"></img>
                                </a>

                                <a
                                    href="https://github.com/Panchammmm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shadow-2xl border border-[#bb5dfed7] lg:size-10 size-9 p-[0.5rem] flex items-center justify-center rounded-full bg-gradient-to-r from-[#bb5dfed7] hover:from-transparent to-[#2a1454] transition hover:duration-700"
                                >
                                    <img src={github} alt="github"></img>
                                </a>

                                <a
                                    href="https://www.instagram.com/pinaki_x_pancham/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shadow-2xl border border-[#bb5dfed7] lg:size-10 size-9 p-[0.5rem] flex items-center justify-center rounded-full bg-gradient-to-r from-[#bb5dfed7] hover:from-transparent to-[#2a1454] transition hover:duration-700"
                                >
                                    <img src={insta} alt="insta"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex mb-5">
                    <div className="images mx-auto w-[60%]">
                        <img src="https://github.com/Panchammmm/my_portfolio_images/blob/main/Portfolio_images/dp.png?raw=true" alt="dp" className="dp-img" />
                    </div>
                </div>
            </div>
        </section>
    );
}
