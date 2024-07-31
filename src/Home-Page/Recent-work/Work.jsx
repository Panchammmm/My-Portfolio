import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import './work.css';
import RevealBtn from "./Button/RevealBtn";

import Arrow from "../../assets/arrow.svg";
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
import Myport from "../../assets/project-images/myPortfolio.png";

// Projects data categorized
const uiProjects = [
    { Imagesrc: Fashion, Name: "Anistora", Description: "UI design for fast fashion website", URL: "https://anistora.netlify.app/" },
    { Imagesrc: Travel, Name: "TravelHikes", Description: "UI design for international travel website", URL: "https://travelhikes.netlify.app/" },
    { Imagesrc: Myport, Name: "My Portfolio", Description: "Know a bit about me and my professionalism", URL: "https://Pancham_Sardar.netlify.app/" },
    { Imagesrc: Gui, Name: "COMport Duplex Data Transmitter", Description: "GUI of Visual Light Communication systems", URL: "https://github.com/Panchammmm/COMPortFull-duplexDataTransmitter" },
    { Imagesrc: Profile, Name: "My Profile", Description: "UI design for profile card", URL: "https://panchammmm.github.io/My_Profile/" },
];

const webAppProjects = [
    { Imagesrc: Calculator, Name: "Calculator", Description: "A Web Calculator using javascript", URL: "https://panchammmm.github.io/calculation5/" },
    { Imagesrc: Game, Name: "Connect 4", Description: "Play Connect 4 with friends and family", URL: "https://playconnect4.netlify.app/" },
    { Imagesrc: Keeper, Name: "Note Keeper", Description: "Use Note Keeper in your daily life", URL: "https://panchammmm.github.io/Note-Keeper-WebApp-usingReact/" },
    { Imagesrc: ToDo, Name: "To Do List", Description: "List up your to-do items", URL: "https://panchammmm.github.io/ToDoList-reactApp/" },
];

const backendProjects = [
    { Imagesrc: Back, Name: "Backend", Description: "Showcasing my backend projects", URL: "" },
];

const clientProjects = [
    { Imagesrc: Client, Name: "YJLS Kolkata", Description: "Yume Japanese Language School official website", URL: "https://yjls-kolkata.com/" },
];

// Combining all projects for the 'all' category
const projectsData = {
    all: [...uiProjects, ...webAppProjects, ...backendProjects, ...clientProjects],
    ui: uiProjects,
    webApp: webAppProjects,
    backend: backendProjects,
    client: clientProjects,
};

const Work = () => {
    const { t } = useTranslation();

    const [activeTab, setActiveTab] = useState(0);
    const [lineStyle, setLineStyle] = useState({});
    const [visibleProjects, setVisibleProjects] = useState(4); // Initialize to 4
    const [showAllProjects, setShowAllProjects] = useState(false); // State to toggle between see more and see less

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
        // setVisibleProjects(4); // Reset visible projects to 4 when tab changes
        // setShowAllProjects(false); // Reset to 'See More' state when tab changes
    };

    const handleSeeMoreClick = () => {
        if (showAllProjects) {
            setVisibleProjects(4); // Show only the first 4 projects
        } else {
            setVisibleProjects(projectsData[getCurrentTab()].length); // Reveal all projects
        }
        setShowAllProjects(!showAllProjects); // Toggle state
    };

    const getProjects = (type) => {
        const projects = projectsData[type];
        const visible = projects.slice(0, visibleProjects);
        return visible.map((project, index) => (
            <Project key={index} {...project} />
        ));
    };

    const getCurrentTab = () => {
        switch (activeTab) {
            case 0: return 'all';
            case 1: return 'ui';
            case 2: return 'webApp';
            case 3: return 'client';
            case 4: return 'backend';
            default: return 'all';
        }
    };

    return (
        <section id="Works" className="lg:w-[85%] w-[90%] mx-auto pt-[120px] pb-[120px]">
            <h1 className="my-work lg:text-[45px] text-[35px] font-[700] text-center leading-[1.2]">{t('My Recent Works')}</h1>
            <p className="lg:w-[50%] mx-auto text-center tracking-[0.5px] text-des mt-[15px]">{t('work des')}</p>

            <div className="mt-14 mx-auto">
                <div className="px-3 lg:px-0">
                    <div className="tab_box">
                        <button className={`tab_btn ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>{t("All")}</button>
                        <button className={`tab_btn ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>{t("UI")}</button>
                        <button className={`tab_btn ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>{t("web app")}</button>
                        <button className={`tab_btn ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>{t("backend")}</button>
                        <button className={`tab_btn ${activeTab === 4 ? 'active' : ''}`} onClick={() => handleTabClick(4)}>{t("Client")}</button>
                        <div className="now-tab" style={lineStyle}></div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className={`content ${activeTab === 0 ? 'active' : ''}`}>
                        <div className="content-box">
                            {getProjects('all')}
                        </div>
                        <RevealBtn btnName={showAllProjects ? t("See Less") : t("See More")} onClick={handleSeeMoreClick} />
                    </div>
                    <div className={`content ${activeTab === 1 ? 'active' : ''}`}>
                        <div className="content-box">
                            {getProjects('ui')}
                        </div>
                        <RevealBtn btnName={showAllProjects ? t("See Less") : t("See More")} onClick={handleSeeMoreClick} />
                    </div>
                    <div className={`content ${activeTab === 2 ? 'active' : ''}`}>
                        <div className="content-box">
                            {getProjects('webApp')}
                        </div>
                        <RevealBtn btnName={showAllProjects ? t("See Less") : t("See More")} onClick={handleSeeMoreClick} />
                    </div>
                    <div className={`content ${activeTab === 3 ? 'active' : ''}`}>
                        <div className="content-box">
                            {getProjects('backend')}
                        </div>
                        <RevealBtn btnName={showAllProjects ? t("See Less") : t("See More")} onClick={handleSeeMoreClick} />
                    </div>
                    <div className={`content ${activeTab === 4 ? 'active' : ''}`}>
                        <div className="content-box">
                            {getProjects('client')}
                        </div>
                        <RevealBtn btnName={showAllProjects ? t("See Less") : t("See More")} onClick={handleSeeMoreClick} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Project = ({ Imagesrc, Name, Description, URL }) => {
    const { t } = useTranslation();

    const handleClick = () => {
        window.open(URL, '_blank');
    };

    return (
        <div className="image-box">
            <img src={Imagesrc} alt="project" className="project-image" />
            <div className="project-about" onClick={handleClick}>
                <div className="pl-5 my-auto">
                    <h1 className="text-white font-[600] lg:text-2xl text-base tracking-[0.2px] mb-[0.4rem]">{t(Name)}</h1>
                    <p className="text-[#ffffffc5] tracking-[0.3px]">{t(Description)}</p>
                </div>

                <img src={Arrow} alt="arrow" className="project-icon size-8"></img>
            </div>
        </div>
    );
};

export default Work;
