import React from "react";
import './service.css';

import Web from "../../assets/web.gif";
import Ui from "../../assets/ui.gif";
import Backend from "../../assets/backend.gif";

export default function Service() {
    return (
        <section className="mx-auto bg-[#050709] pt-[120px] pb-[140px]">

            <h1 className="my-service text-[45px] font-[700] text-center leading-[1.2]">My Quality Services</h1>
            <p className="tracking-[0.8px] text-white text-center mt-[15px]">Offering expert web design and development services, specializing in both frontend and backend solutions.</p>

            <div className="service-container mt-20">
                <div data-text="UI Design" style={{ "--r": -15 }} className="glass">
                    <img src={Ui} alt="Web App" className="w-full h-auto" />
                </div>
                <div data-text="Web App" style={{ "--r": 5 }} className="glass">
                    <img src={Web} alt="UI" className="w-full h-auto" />
                </div>
                <div data-text="Backend" style={{ "--r": 20 }} className="glass">
                    <img src={Backend} alt="Backend" className="w-full h-auto" />
                </div>
            </div>

        </section>

    )
}