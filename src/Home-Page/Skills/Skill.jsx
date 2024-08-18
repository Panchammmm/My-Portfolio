import React from 'react';
import { useTranslation } from 'react-i18next';
import './skill.css';

import Html from "../../assets/Skill-icons/html5.svg";
import Css from "../../assets/Skill-icons/css3.svg";
import Js from "../../assets/Skill-icons/javascript.svg";
import Tailwind from "../../assets/Skill-icons/tailwind.svg";
import ReactIcon from "../../assets/Skill-icons/react.svg";
import Mongodb from "../../assets/Skill-icons/mongoDB.svg";
import GitIcon from "../../assets/Skill-icons/git.svg";
import LightRoom from "../../assets/Skill-icons/lightroom.svg";
import Canva from "../../assets/Skill-icons/canva.svg";

export default function Skill() {
    const { t } = useTranslation();

    const skills = [
        { name: t('HTML'), icon: Html, percentage: '95%' },
        { name: t('CSS'), icon: Css, percentage: '85%' },
        { name: t('JavaScript'), icon: Js, percentage: '70%' },
        { name: t('Tailwind'), icon: Tailwind, percentage: '80%' },
        { name: t('React'), icon: ReactIcon, percentage: '80%' },
        { name: t('Git'), icon: GitIcon, percentage: '90%' },
        { name: t('MongoDB'), icon: Mongodb, percentage: '70%' },
        { name: t('Canva'), icon: Canva, percentage: '80%' },
        { name: t('Lightroom'), icon: LightRoom, percentage: '85%' }
    ];

    return (
        <div className="bg-sectionBg">
            <section id="Skills" className="lg:w-[85%] w-[90%] mx-auto pt-[120px] pb-[120px]">
                <h1 className="my-skill lg:text-[45px] text-[35px] font-[700] text-center leading-[1.2]">{t('My Skills')}</h1>
                <p className="lg:w-[50%] mx-auto tracking-[0.5px] text-center text-des mt-[15px]">
                    {t('Skills Description')}
                </p>

                <div className="flex flex-wrap justify-center mt-[30px] text-white">
                    {skills.map(skill => (
                        <div key={skill.name} className="flex flex-col items-center m-4">
                            <div className="skill-card shadow-2xl">
                                <div className="skill-logo-box">
                                    <img src={skill.icon} alt={skill.name} />
                                </div>
                                <p className="skill-percentage">{skill.percentage}</p>
                            </div>
                            <p className="w-full text-[#a95bf8] mt-2 text-center tracking-[0.5px]">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
