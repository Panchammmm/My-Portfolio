import React from "react";
import './service.css';
import ServCard from "./ServCard";

export default function Service() {
    return (
        <section id="Services" className="mx-auto pt-[120px] lg:pb-[110px] pb-[90px]">

            <div className="flex justify-center">
                <h1 className="my-service lg:text-[45px] text-[35px] font-[700] text-center leading-[1.2]">My Quality Services</h1>
            </div>
            <p className="w-[90%] lg:w-[50%] mx-auto text-center text-des tracking-[0.5px] mt-[15px] mb-4">Delivering standout web design and development, mastering both frontend and backend solutions.</p>

            <ServCard />

        </section>

    )
}