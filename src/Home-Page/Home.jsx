import React, { useState, useEffect } from "react";

import Preload from "../Preloader/Preload";
import Nav from "../Components/NavBar/Nav";
import Dp from "./Hero-Section/Dp";
import Service from "./My-Service/Service";
import Work from "../Home-Page/Recent-work/Work";
import Skill from "./Skills/Skill";
import Contact from "./Contact-section/Contact";
import Footer from "../Components/Footer/Footer";
import Blog from "./Blog-section/Blog";

const ScrollToTopButton = ({ onClick }) => (
  <button className="toTopButton" onClick={onClick}>
    <svg className="svgIcon" viewBox="0 0 384 512">
      <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
    </svg>
  </button>
);

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const timer = setTimeout(() => {
      if (isMounted) {
        setShowPreloader(false);
      }
    }, 5700);

    return () => {
      isMounted = false;
    };
  }, []);

  const scrollToTop = React.useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      {showPreloader && <Preload />}
      <Nav />
      <Dp />
      <Service />
      <Work />
      <Skill />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTopButton onClick={scrollToTop} />
    </>
  );
}
