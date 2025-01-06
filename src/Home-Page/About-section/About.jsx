import React from "react";
import Education from "./Education/Education";
import Exp from "./Experience/Exp";

export default function About() {
    return (
        <div className="md:pt-[120px] pt-8 pb-[80px]">
            <div className="flex flex-wrap justify-between sm:px-[12%] px-3">
                <Education />
                <Exp />
            </div>
        </div>
    )
}