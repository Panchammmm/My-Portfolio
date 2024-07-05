import React, { useState, useEffect } from "react";
import './work.css';

import Project1 from "../../assets/image1.jpg";
import Client from "../../assets/project-images/client.png";
import Calculator from "../../assets/project-images/calculator.png";
import Game from "../../assets/project-images/game.png";
import Keeper from "../../assets/project-images/KeeperApp.png";
import ToDo from "../../assets/project-images/ToDo.png";
import Fashion from "../../assets/project-images/fashion.png";
import Gui from "../../assets/project-images/GUI.png";
import Travel from "../../assets/project-images/travel.png";
import Profile from "../../assets/project-images/profile.png";
import Back from "../../assets/project-images/back.png";

// Projects data categorized
const uiProjects = [
    { Imagesrc: Fashion, Name: "Anistora", Description: "UI design for fast fashion website", URL: "https://anistora.netlify.app/" },
    { Imagesrc: Travel, Name: "TravelHikes", Description: "UI design for international travel website", URL: "https://travelhikes.netlify.app/" },
    { Imagesrc: Profile, Name: "My Profile", Description: "UI design for profile card", URL: "https://panchammmm.github.io/My_Profile/" },
    { Imagesrc: Gui, Name: "COMport Duplex Data Transmitter", Description: "GUI of Visual Light Communication systems", URL: "https://github.com/Panchammmm/COMPortFull-duplexDataTransmitter" },
];

const webAppProjects = [
    { Imagesrc: Calculator, Name: "Calculator", Description: "A Web Calculator using javascript", URL: "https://panchammmm.github.io/calculation5/" },
    { Imagesrc: Game, Name: "Connect 4", Description: "Play Connect 4 with friends and family", URL: "https://playconnect4.netlify.app/" },
    { Imagesrc: Keeper, Name: "Note Keeper", Description: "Use Note Keeper in your daily life", URL: "https://panchammmm.github.io/Note-Keeper-WebApp-usingReact/" },
    { Imagesrc: ToDo, Name: "To Do List", Description: "List up your to-do items", URL: "https://panchammmm.github.io/ToDoList-reactApp/" },
];

const clientProjects = [
    { Imagesrc: Client, Name: "YJLS Kolkata", Description: "Yume Japanese Language School official website", URL: "https://yjls-kolkata.com/" },
];

const backendProjects = [
    { Imagesrc: Back, Name: "Backend", Description: "Showcasing my backend projects", URL: "" },
];

// Combining all projects for the 'all' category
const projectsData = {
    all: [...uiProjects, ...webAppProjects, ...clientProjects, ...backendProjects],
    ui: uiProjects,
    webApp: webAppProjects,
    client: clientProjects,
    backend: backendProjects,
};

const Work = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [lineStyle, setLineStyle] = useState({});

    useEffect(() => {
        const activeButton = document.querySelector('.tab_btn.active');
        if (activeButton) {
            setLineStyle({
                width: activeButton.offsetWidth,
                height: activeButton.offsetHeight,
                left: activeButton.offsetLeft,
            });
        }
    }, [activeTab]);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const getProjects = (type) => {
        return projectsData[type].map((project, index) => (
            <Project key={index} {...project} />
        ));
    };

    return (
        <section className="w-[85%] mx-auto pt-[120px] pb-[120px]">
            <h1 className="my-work text-[45px] font-[700] text-center leading-[1.2]">My Recent Works</h1>
            <p className="tracking-[0.8px] text-white text-center mt-[15px]">Offering expert web design and development services, specializing in both frontend and backend solutions.</p>

            <div className="mt-14 mx-auto">
                <div className="tab_box">
                    <button className={`tab_btn ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>All</button>
                    <button className={`tab_btn ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>UI</button>
                    <button className={`tab_btn ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>Web&nbsp;App</button>
                    <button className={`tab_btn ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>Client</button>
                    <button className={`tab_btn ${activeTab === 4 ? 'active' : ''}`} onClick={() => handleTabClick(4)}>Backend</button>
                    <div className="now-tab" style={lineStyle}></div>
                </div>

                <div className="mt-10">
                    <div className={`content ${activeTab === 0 ? 'active' : ''}`}>
                        <div className="content-box">
                            {getProjects('all')}
                        </div>
                    </div>
                    <div className={`content ${activeTab === 1 ? 'active' : ''}`}>
                        <div className="content-box">
                            {getProjects('ui')}
                        </div>
                    </div>
                    <div className={`content ${activeTab === 2 ? 'active' : ''}`}>
                        <div className="content-box">
                            {getProjects('webApp')}
                        </div>
                    </div>
                    <div className={`content ${activeTab === 3 ? 'active' : ''}`}>
                        <div className="content-box">
                            {getProjects('client')}
                        </div>
                    </div>
                    <div className={`content ${activeTab === 4 ? 'active' : ''}`}>
                        <div className="content-box">
                            {getProjects('backend')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Project = ({ Imagesrc, Name, Description, URL }) => {
    const handleClick = () => {
        window.open(URL, '_blank');
    };

    return (
        <div className="image-box" onClick={handleClick}>
            <img src={Imagesrc} alt="project" className="project-image" />
            <div className="project-about">
                <div className="pl-5 my-auto">
                    <h1 className="text-white font-[600] text-2xl tracking-[0.2px] mb-1">{Name}</h1>
                    <p className="text-[#ffffffc5] tracking-[0.3px]">{Description}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="project-icon size-8">
                    <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" />
                </svg>
            </div>
        </div>
    );
};

export default Work;