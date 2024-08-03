import React from "react";
import Education from "./Education/Education";
import Achievement from "./Achievement/Achievement";
import Experience from "./Experience/Experience";

export default function About() {
    return (
        <section id="About" className="bg-sectionBg">
            <Education />

            <div className="flex justify-around flex-wrap pt-[50px] pb-[100px]">
                <Achievement />
                <Experience />
            </div>
        </section>
    )
}