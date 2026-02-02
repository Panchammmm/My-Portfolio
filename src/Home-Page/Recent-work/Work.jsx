import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./work.css";
import RevealBtn from "./Button/RevealBtn";
import Arrow from "../../assets/arrow.svg";
import Fashion from "../../assets/Portfolio_images/fashion.png";
import Travel from "../../assets/Portfolio_images/travel.png";
import MyPortfolio from "../../assets/Portfolio_images/myPortfolio.png";
import GUI from "../../assets/Portfolio_images/gui.png";
import Keeper from "../../assets/Portfolio_images/KeeperApp.png";
import Connect4 from "../../assets/Portfolio_images/connect4.png";
import Todo from "../../assets/Portfolio_images/ToDo.png";
import Calculator from "../../assets/Portfolio_images/calculator.png";
import Matrix from "../../assets/Portfolio_images/matrix_integrated.png";
import NeoSci from "../../assets/Portfolio_images/neoscitech.png";
import YJLS from "../../assets/Portfolio_images/yjls.png";
import Profile from "../../assets/Portfolio_images/profile.png";
import Lawyer from "../../assets/Portfolio_images/lawer.png";
import SHA from "../../assets/Portfolio_images/shacademia.png";

// Projects data categorized
const uiProjects = [
  {
    Imagesrc: Lawyer,
    Name: "Lawyer Website",
    Description: "Frontend & design for Lawyer Website",
    URL: "https://indian-lawyer.netlify.app/",
  },
  {
    Imagesrc: MyPortfolio,
    Name: "My Portfolio",
    Description: "Know a bit about me and my professionalism",
    URL: "https://pancham-portfolio.netlify.app/",
  },
  {
    Imagesrc: Travel,
    Name: "TravelHikes",
    Description: "UI design for international travel website",
    URL: "https://travelhikes.netlify.app/",
  },
  {
    Imagesrc: Fashion,
    Name: "Anistora",
    Description: "UI design for fast fashion website",
    URL: "https://anistora.netlify.app/",
  },
  {
    Imagesrc: GUI,
    Name: "COMport Duplex Data Transmitter",
    Description: "GUI of Visual Light Communication systems",
    URL: "https://github.com/Panchammmm/COMPortFull-duplexDataTransmitter",
  },
  {
    Imagesrc: Profile,
    Name: "My Profile",
    Description: "UI design for profile card",
    URL: "https://panchammmm.github.io/My_Profile/",
  },
];

const webAppProjects = [
  {
    Imagesrc: Keeper,
    Name: "Note Keeper",
    Description: "Use Note Keeper in your daily life",
    URL: "https://noteeskeeper.netlify.app/",
  },
  {
    Imagesrc: Connect4,
    Name: "Connect 4",
    Description: "Play Connect 4 with friends and family",
    URL: "https://playconnect4.netlify.app/",
  },
  {
    Imagesrc: Todo,
    Name: "To Do List",
    Description: "List up your to-do items",
    URL: "https://panchammmm.github.io/ToDoList-reactApp/",
  },
  {
    Imagesrc: Calculator,
    Name: "Calculator",
    Description: "A Web Calculator using javascript",
    URL: "https://panchammmm.github.io/calculation5/",
  },
];

const wordpressProjects = [
  {
    Imagesrc: Matrix,
    Name: "Matrix-Integrated",
    Description: "matrix-des",
    URL: "https://matrixdirect.in/",
  },
  {
    Imagesrc: NeoSci,
    Name: "NeoSci-Tech",
    Description: "Sci-Tech_des",
    URL: "https://neoscitech.com/",
  },
];

const clientProjects = [
  {
    Imagesrc: YJLS,
    Name: "YJLS Kolkata",
    Description: "Yume Japanese Language School official website",
    URL: "https://yjls-kolkata.in/",
  },
  {
    Imagesrc: SHA,
    Name: "S.H. Academia",
    Description: "A Examination Platform for S.H. Academia",
    URL: "https://shacademiaclasses.live/",
  },
];

const projectsData = {
  all: [
    ...clientProjects,
    ...uiProjects,
    ...webAppProjects,
    ...wordpressProjects,
  ],
  ui: uiProjects,
  webApp: webAppProjects,
  wordpress: wordpressProjects,
  client: [...clientProjects, ...wordpressProjects],
};

const Work = () => {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState(0);
  const [lineStyle, setLineStyle] = useState({});
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    const activeButton = document.querySelector(".tab_btn.active");
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
    setVisibleProjects(4);
    setShowAllProjects(false);
  };

  const handleSeeMoreClick = () => {
    const currentTab = getCurrentTab();
    const totalProjects = projectsData[currentTab].length;
    setVisibleProjects(showAllProjects ? 4 : totalProjects);
    setShowAllProjects(!showAllProjects);
  };

  const getCurrentTab = () => {
    switch (activeTab) {
      case 0:
        return "all";
      case 1:
        return "ui";
      case 2:
        return "webApp";
      case 3:
        return "wordpress";
      case 4:
        return "client";
      default:
        return "all";
    }
  };

  const getProjects = () => {
    const currentTab = getCurrentTab();
    const visible = projectsData[currentTab].slice(0, visibleProjects);
    return visible.map((project) => (
      <Project key={project.Name} {...project} />
    ));
  };

  return (
    <section
      id="Works"
      className="lg:w-[85%] w-[90%] mx-auto pt-[120px] pb-[120px]"
    >
      <h1 className="my-work lg:text-[45px] text-[35px] font-[700] text-center leading-[1.2]">
        {t("My Recent Works")}
      </h1>
      <p className="sm:px-[8vw] px-[3vw] text-center tracking-[0.5px] text-des mt-[15px]">
        {t("work des")}
      </p>

      <div className="mt-14 mx-auto">
        <div className="px-3 lg:px-0">
          <div className="tab_box">
            <button
              className={`tab_btn ${activeTab === 0 ? "active" : ""}`}
              onClick={() => handleTabClick(0)}
            >
              {t("All")}
            </button>
            <button
              className={`tab_btn ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              {t("UI")}
            </button>
            <button
              className={`tab_btn ${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              {t("web app")}
            </button>
            <button
              className={`tab_btn ${activeTab === 3 ? "active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
              {t("wordpress")}
            </button>
            <button
              className={`tab_btn ${activeTab === 4 ? "active" : ""}`}
              onClick={() => handleTabClick(4)}
            >
              {t("Client")}
            </button>
            <div className="now-tab" style={lineStyle}></div>
          </div>
        </div>

        <div className="mt-10">
          <div className="content active">
            <div className="content-box">{getProjects()}</div>
            {projectsData[getCurrentTab()].length > 4 && (
              <RevealBtn
                btnName={showAllProjects ? t("See Less") : t("See More")}
                onClick={handleSeeMoreClick}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* eslint-disable react/prop-types */
const Project = ({ Imagesrc, Name, Description, URL }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    window.open(URL, "_blank");
  };

  return (
    <div className="image-box">
      <img src={Imagesrc} alt={`${Name} project`} className="project-image" />
      <div className="project-about" onClick={handleClick}>
        <div className="pl-5 my-auto">
          <h1 className="text-white font-[600] lg:text-2xl text-base tracking-[0.2px] mb-[0.4rem]">
            {t(Name)}
          </h1>
          <p className="text-[#ffffffc5] tracking-[0.3px]">{t(Description)}</p>
        </div>
        <img src={Arrow} alt="arrow" className="project-icon size-8" />
      </div>
    </div>
  );
};

export default Work;
