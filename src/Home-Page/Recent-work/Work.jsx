import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import './work.css';
import RevealBtn from "./Button/RevealBtn";
import Arrow from "../../assets/arrow.svg";

// Projects data categorized
const uiProjects = [
    { Imagesrc: "https://github.com/Panchammmm/My-Portfolio/blob/main/src/assets/Portfolio_images/fashion.png?raw=true", Name: "Anistora", Description: "UI design for fast fashion website", URL: "https://anistora.netlify.app/" },
    { Imagesrc: "https://github.com/Panchammmm/My-Portfolio/blob/main/src/assets/Portfolio_images/travel.png?raw=true", Name: "TravelHikes", Description: "UI design for international travel website", URL: "https://travelhikes.netlify.app/" },
    { Imagesrc: "https://github.com/Panchammmm/My-Portfolio/blob/main/src/assets/Portfolio_images/myPortfolio.png?raw=true", Name: "My Portfolio", Description: "Know a bit about me and my professionalism", URL: "https://Pancham_Sardar.netlify.app/" },
    { Imagesrc: "https://github.com/Panchammmm/My-Portfolio/blob/main/src/assets/Portfolio_images/GUI.png?raw=true", Name: "COMport Duplex Data Transmitter", Description: "GUI of Visual Light Communication systems", URL: "https://github.com/Panchammmm/COMPortFull-duplexDataTransmitter" },
    { Imagesrc: "https://github.com/Panchammmm/My-Portfolio/blob/main/src/assets/Portfolio_images/profile.png?raw=true", Name: "My Profile", Description: "UI design for profile card", URL: "https://panchammmm.github.io/My_Profile/" },
];

const webAppProjects = [
    { Imagesrc: "https://github.com/Panchammmm/Note-Keeper/raw/main/app-pic.png", Name: "Note Keeper", Description: "Use Note Keeper in your daily life", URL: "https://noteeskeeper.netlify.app/" },
    { Imagesrc: "https://github.com/Panchammmm/My-Portfolio/blob/main/src/assets/Portfolio_images/game.png?raw=true", Name: "Connect 4", Description: "Play Connect 4 with friends and family", URL: "https://playconnect4.netlify.app/" },
    { Imagesrc: "https://github.com/Panchammmm/My-Portfolio/blob/main/src/assets/Portfolio_images/ToDo.png?raw=true", Name: "To Do List", Description: "List up your to-do items", URL: "https://panchammmm.github.io/ToDoList-reactApp/" },
    { Imagesrc: "https://github.com/Panchammmm/My-Portfolio/blob/main/src/assets/Portfolio_images/calculator.png?raw=true", Name: "Calculator", Description: "A Web Calculator using javascript", URL: "https://panchammmm.github.io/calculation5/" },
];

const wordpressProjects = [
    { Imagesrc: "https://github.com/Panchammmm/My-Portfolio/blob/main/src/assets/Portfolio_images/back.png?raw=true", Name: "Sci-Tech_Creation", Description: "Sci-Tech_des", URL: "https://scitechcreation.com/" },
    { Imagesrc: "https://github.com/Panchammmm/My-Portfolio/blob/main/src/assets/Portfolio_images/matrix_integrated.png?raw=true", Name: "Matrix-Integrated", Description: "matrix-des", URL: "https://matrixdirect.in/" },
];

const clientProjects = [
    { Imagesrc: "https://github.com/Panchammmm/My-Portfolio/blob/main/src/assets/Portfolio_images/client.png?raw=true", Name: "YJLS Kolkata", Description: "Yume Japanese Language School official website", URL: "https://yjls-kolkata.com/" },
];

// Combining all projects for the 'all' category
const projectsData = {
    all: [...clientProjects, ...uiProjects, ...webAppProjects, ...wordpressProjects],
    ui: uiProjects,
    webApp: webAppProjects,
    wordpress: wordpressProjects,
    client: [...clientProjects, ...wordpressProjects]
};

const Work = () => {
    const { t } = useTranslation();

    const [activeTab, setActiveTab] = useState(0);
    const [lineStyle, setLineStyle] = useState({});
    const [visibleProjects, setVisibleProjects] = useState(4);
    const [showAllProjects, setShowAllProjects] = useState(false);

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
        setVisibleProjects(4); // Reset visible projects to 4 when tab changes
        setShowAllProjects(false); // Reset to 'See More' state when tab changes
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
            case 4: return 'wordpress';
            default: return 'all';
        }
    };

    return (
        <section id="Works" className="lg:w-[85%] w-[90%] mx-auto pt-[120px] pb-[120px]">
            <h1 className="my-work lg:text-[45px] text-[35px] font-[700] text-center leading-[1.2]">{t('My Recent Works')}</h1>
            <p className="sm:px-[8vw] px-[3vw] text-center tracking-[0.5px] text-des mt-[15px]">{t('work des')}</p>

            <div className="mt-14 mx-auto">
                <div className="px-3 lg:px-0">
                    <div className="tab_box">
                        <button className={`tab_btn ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>{t("All")}</button>
                        <button className={`tab_btn ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>{t("UI")}</button>
                        <button className={`tab_btn ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>{t("web app")}</button>
                        <button className={`tab_btn ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>{t("wordpress")}</button>
                        <button className={`tab_btn ${activeTab === 4 ? 'active' : ''}`} onClick={() => handleTabClick(4)}>{t("Client")}</button>
                        <div className="now-tab" style={lineStyle}></div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className={`content ${activeTab === 0 ? 'active' : ''}`}>
                        <div className="content-box">
                            {getProjects('all')}
                        </div>
                        {projectsData.all.length > 4 && (
                            <RevealBtn btnName={showAllProjects ? t("See Less") : t("See More")} onClick={handleSeeMoreClick} />
                        )}
                    </div>
                    <div className={`content ${activeTab === 1 ? 'active' : ''}`}>
                        <div className="content-box">
                            {getProjects('ui')}
                        </div>
                        {projectsData.ui.length > 4 && (
                            <RevealBtn btnName={showAllProjects ? t("See Less") : t("See More")} onClick={handleSeeMoreClick} />
                        )}
                    </div>
                    <div className={`content ${activeTab === 2 ? 'active' : ''}`}>
                        <div className="content-box">
                            {getProjects('webApp')}
                        </div>
                        {projectsData.webApp.length > 4 && (
                            <RevealBtn btnName={showAllProjects ? t("See Less") : t("See More")} onClick={handleSeeMoreClick} />
                        )}
                    </div>
                    <div className={`content ${activeTab === 3 ? 'active' : ''}`}>
                        <div className="content-box">
                            {getProjects('wordpress')}
                        </div>
                        {projectsData.wordpress.length > 4 && (
                            <RevealBtn btnName={showAllProjects ? t("See Less") : t("See More")} onClick={handleSeeMoreClick} />
                        )}
                    </div>
                    <div className={`content ${activeTab === 4 ? 'active' : ''}`}>
                        <div className="content-box">
                            {getProjects('client')}
                        </div>
                        {projectsData.client.length > 4 && (
                            <RevealBtn btnName={showAllProjects ? t("See Less") : t("See More")} onClick={handleSeeMoreClick} />
                        )}
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