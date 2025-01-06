import React from "react";
import Education from "./Education/Education";
import Exp from "./Experience/Exp";

export default function About() {
    return (
        <div className="pt-[120px] pb-[80px]">
            <div className="flex flex-wrap justify-center gap-24 mx-0">
                <Education />
                <Exp />
            </div>
        </div>
    )
}