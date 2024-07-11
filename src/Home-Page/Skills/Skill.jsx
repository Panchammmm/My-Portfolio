import React from 'react';
import './skill.css';

import Html from "../../assets/Skill-icons/html5.svg";
import Css from "../../assets/Skill-icons/css3.svg";
import Js from "../../assets/Skill-icons/javascript.svg";
import Tailwind from "../../assets/Skill-icons/tailwind.svg";
import ReactIcon from "../../assets/Skill-icons/react.svg";
import Mongodb from "../../assets/Skill-icons/mongoDB.svg";
import GitIcon from "../../assets/Skill-icons/git.svg";

export default function Skill() {
    const skills = [
        { name: 'HTML', icon: Html, percentage: '90%' },
        { name: 'CSS', icon: Css, percentage: '85%' },
        { name: 'JavaScript', icon: Js, percentage: '80%' },
        { name: 'Tailwind', icon: Tailwind, percentage: '75%' },
        { name: 'React', icon: ReactIcon, percentage: '85%' },
        { name: 'Git', icon: GitIcon, percentage: '70%' },
        { name: 'MongoDB', icon: Mongodb, percentage: '65%' }
    ];

    return (
        <section className="w-[85%] mx-auto pt-[120px] pb-[120px]">
            <h1 className="my-skill text-[45px] font-[700] text-center leading-[1.2]">My Skills</h1>
            <p className="w-[50%] mx-auto tracking-[0.5px] text-center text-white mt-[15px]">
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
            </p>

            <div className="flex flex-wrap justify-center mt-[30px] text-white">
                {skills.map(skill => (
                    <div key={skill.name} className="flex flex-col items-center m-4">
                        <div className="skill-card">
                            <div className="skill-logo-box">
                                <img src={skill.icon} alt={skill.name} />
                            </div>
                            <p className="skill-percentage">{skill.percentage}</p>
                        </div>
                        <p className="w-full text-[#985ed6] mt-2 text-center tracking-[0.5px] font-['Sora', sans-serif]">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
