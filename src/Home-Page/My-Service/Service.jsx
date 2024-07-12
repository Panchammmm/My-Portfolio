import React from "react";
import './service.css';
import ServCard from "./ServCard";

export default function Service() {
    return (
        <section className="mx-auto bg-[#050709] pt-[120px] pb-[110px]">

            <div className="flex justify-center">
                <h1 className="my-service text-[45px] font-[700] text-center leading-[1.2]">My Quality Services</h1>
            </div>
            <p className="w-[45%] mx-auto text-center tracking-[0.5px] text-white mt-[15px] mb-4">Offering expert web design and development services, specializing in both frontend and backend solutions.</p>

            <ServCard />

        </section>

    )
}