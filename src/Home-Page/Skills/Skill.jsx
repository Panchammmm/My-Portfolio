import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons'; // Assuming this represents Tailwind CSS

export default function Skill() {
    return (
        <section className="w-[85%] mx-auto pt-[120px] pb-[120px]">
            <h1 className="my-work text-[45px] font-[700] text-center leading-[1.2]">My Skills</h1>
            <p className="w-[50%] mx-auto tracking-[0.5px] text-center text-white mt-[15px]">
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
            </p>

            <div className="flex justify-center space-x-4 mt-[30px] text-white">
                <FontAwesomeIcon icon={faHtml5} size="3x" />
                <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                {/* <FontAwesomeIcon icon={faWind} size="3x" /> */}
                <FontAwesomeIcon icon={faJs} size="3x" />
                <FontAwesomeIcon icon={faReact} size="3x" />
                <FontAwesomeIcon icon={faGitAlt} size="3x" />
                {/* <FontAwesomeIcon icon={faSql} size="3x" /> */}
            </div>
        </section>
    );
}
