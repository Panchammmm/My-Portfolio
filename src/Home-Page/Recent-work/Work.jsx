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

            <div className="tabbar-container">
                <div className="tab_box">
                    <button className={`tab_btn ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>ALL</button>
                    <button className={`tab_btn ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>JLPT N5</button>
                    <button className={`tab_btn ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>JLPT N4</button>
                    <button className={`tab_btn ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>JLPT N3</button>
                    <div className="line" style={lineStyle}></div>
                </div>

                <div className="content_box">
                    <div className={`content ${activeTab === 0 ? 'active' : ''}`}>
                        <h2>CRASH COURSES</h2>
                        <p>A crash course in Japanese offers a rapid introduction to basic vocabulary, grammar, and conversation skills, providing a foundation for further learning.</p>
                    </div>
                    <div className={`content ${activeTab === 1 ? 'active' : ''}`}>
                        <h2>JLPT N5</h2>
                        <p>JLPT N5 is the introductory level of the Japanese Language Proficiency Test, assessing basic language skills in vocabulary, grammar, reading, and listening. To pass, focus on everyday vocabulary, essential grammar structures, and basic reading comprehension.</p>
                    </div>
                    <div className={`content ${activeTab === 2 ? 'active' : ''}`}>
                        <h2>JLPT N4</h2>
                        <p>The JLPT N4 tests your knowledge in understanding basic Japanese. This means that in addition to everything you learned in JLPT N5, you can: Understand about 1500 new vocabulary and about 170 new kanji.</p>
                    </div>
                    <div className={`content ${activeTab === 3 ? 'active' : ''}`}>
                        <h2>JLPT N3</h2>
                        <p>The JLPT N3 is the middle (intermediate) level of the Japanese Language Proficiency Test (JLPT). To pass the JLPT N3, you need to be able to read about 650 kanji and know about 3,750 vocabulary words.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
