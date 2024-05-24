import React from 'react';
import ProfileImage from '../assets/profile-image.svg';

const HeroSection = () => {
    return (
        <section className="header-container">
            <img className="profile-image" src={ProfileImage} alt="Profile" />
            <h1>Hi, I'm Pancham</h1>

            <div className="content-text">
                <h2>Building digital</h2>
                <h2>products, brands, and experiences.</h2>

                <p>
                    A Frontend Developer and Visual Designer with experience in web
                    design, brand identity, and product design.
                </p>
            </div>
            <a
                href=""
                className="btn btn-secondary group"
                target="_blank"
                rel="noopener noreferrer"
            >
                Connect With Me
                <i className="fas fa-arrow-right transform transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
        </section>
    );
};

export default HeroSection;
