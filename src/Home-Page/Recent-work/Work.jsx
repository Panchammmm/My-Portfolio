import React, { useState, useEffect } from "react";
import './work.css';

import Project1 from "../../assets/image1.jpg";

export default function Work() {

    const [activeTab, setActiveTab] = useState(0);
    const [lineStyle, setLineStyle] = useState({});

    useEffect(() => {
        const activeButton = document.querySelector('.tab_btn.active');
        if (activeButton) {
            setLineStyle({
                width: activeButton.offsetWidth,
                height: activeButton.offsetHeight,
                left: activeButton.offsetLeft
            });
        }
    }, [activeTab]);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <section className="w-[85%] mx-auto pt-[120px] pb-[120px]">

            <h1 className="my-work text-[45px] font-[700] text-center leading-[1.2]">My Recent Works</h1>
            <p className="tracking-[0.8px] text-white text-center mt-[15px]">Offering expert web design and development services, specializing in both frontend and backend solutions.</p>

            <div className="mt-14 mx-auto">
                <div className="tab_box">
                    <button className={`tab_btn tab--1 ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>All</button>
                    <button className={`tab_btn tab--2 ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>UI</button>
                    <button className={`tab_btn tab--3 ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>Web&nbsp;App</button>
                    <button className={`tab_btn tab--4 ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>Client</button>
                    <div className="now-tab" style={lineStyle}></div>
                </div>

                <div className="mt-10">
                    <div className={`content ${activeTab === 0 ? 'active' : ''}`}>
                        <div className="flex flex-wrap justify-around gap-10">

                            <div className="image-box">
                                <img src={Project1} alt="project" className="project-image"></img>

                                <div className="project-about">
                                    <div className="pl-5 my-auto">
                                        <h1 className="text-white font-[600] text-2xl tracking-[0.2px] mb-2">Project Name</h1>
                                        <p className="text-[#ffffffc5] tracking-[0.3px]">A tiny VS Code extension ma ipsum text into a text file</p>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="project-icon size-7">
                                        <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="image-box">
                                <img src={Project1} alt="project" className="project-image"></img>

                                <div className="project-about">
                                    <div className="pl-5 my-auto">
                                        <h1 className="text-white font-[600] text-2xl tracking-[0.2px] mb-2">Project Name</h1>
                                        <p className="text-[#ffffffc5] tracking-[0.3px]">A tiny VS Code extension ma ipsum text into a text file</p>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="project-icon size-7">
                                        <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={`content ${activeTab === 1 ? 'active' : ''}`}>
                        
                    </div>

                    <div className={`content ${activeTab === 2 ? 'active' : ''}`}>
                        
                    </div>

                    <div className={`content ${activeTab === 3 ? 'active' : ''}`}>
                        
                    </div>

                </div>
            </div>
        </section>
    );
}
