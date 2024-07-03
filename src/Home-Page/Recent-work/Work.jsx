import React, { useState, useEffect } from "react";
import './work.css';

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

                <div className="content_box bg-white mt-10">

                    <div className={`content ${activeTab === 0 ? 'active' : ''}`}>
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
