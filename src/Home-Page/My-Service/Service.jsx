import React from "react";
import './service.css';
import ServCard from "./ServCard";

import Web from "../../assets/web.gif";
import Ui from "../../assets/ui.gif";
import Backend from "../../assets/backend.gif";

export default function Service() {
    return (
        <section className="mx-auto bg-[#050709] pt-[120px] pb-[110px]">

            <div className="flex justify-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#bb5dfed7] size-14 mr-3"><path d="M14.588 0l.445.328c1.807 1.303 3.961 2.533 6.461 3.688 2.015.93 4.576 1.746 7.682 2.446 0 14.178-4.73 24.133-14.19 29.864l-.398.236C4.863 30.87 0 20.837 0 6.462c3.107-.7 5.668-1.516 7.682-2.446 2.709-1.251 5.01-2.59 6.906-4.016zm5.87 13.88a.75.75 0 00-.974.159l-5.475 6.625-3.005-2.997-.077-.067a.75.75 0 00-.983 1.13l4.172 4.16 6.525-7.895.06-.083a.75.75 0 00-.16-.973z" fill="" fill-rule="evenodd" /></svg> */}
                <h1 className="my-service text-[45px] font-[700] text-center leading-[1.2]">My Quality Services</h1>
            </div>
            <p className="tracking-[0.8px] text-white text-center mt-[15px] mb-4">Offering expert web design and development services, specializing in both frontend and backend solutions.</p>

            <ServCard />

        </section>

    )
}