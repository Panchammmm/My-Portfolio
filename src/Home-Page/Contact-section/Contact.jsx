import React from "react";
import './contact.css';

import wapp from "../../assets/wapp.svg";
import email from "../../assets/email.svg";
import location from "../../assets/location.svg";

export default function Contact() {
    return (
        <div id="Contact" className="bg-black pt-[160px] pb-[350px] flex flex-wrap justify-center gap-[8rem]">
            <div className="form-container my-auto">
                <h1 className="contact-text">Let's make something awesome together!</h1>
                <p className="tracking-[0.3px] mb-8 text-slate-200 text-base pr-3">
                    I design and code beautifully simple things and I love what I do. Just simple like that!
                </p>
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input required className="email" id="name" type="text" placeholder="full name.." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input required className="email" id="email" type="email" placeholder="email id.." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea required id="message" className="textarea" placeholder="message here.." />
                    </div>
                    <button type="submit" className="form-submit-btn">Hire me!</button>
                </form>
            </div>

            <div className="contact-info my-auto">
                <div className="contact-item">
                    <img src={wapp} alt="whatsapp" className="contact-icon" />
                    <div>
                        <h3 className="contact-label">Whatsapp</h3>
                        <a href="https://wa.me/918670035037" target="_blank" rel="noopener noreferrer">
                            <p className="contact-detail">+91 86700 35037</p>
                        </a>
                    </div>
                </div>

                <div className="contact-item">
                    <img src={email} alt="email" className="contact-icon" />
                    <div>
                        <h3 className="contact-label">Email</h3>
                        <a href="mailto:sardarpancham510510@gmail.com" target="_blank" rel="noopener noreferrer">
                            <p className="contact-detail">sardarpancham510510@gmail.com</p>
                        </a>
                    </div>
                </div>

                <div className="contact-item">
                    <img src={location} alt="location" className="contact-icon" />
                    <div>
                        <h3 className="contact-label">Based on</h3>
                        <a href="https://www.google.com/maps/search/?api=1&query=Kolkata,+India" target="_blank" rel="noopener noreferrer">
                            <p className="contact-detail">Kolkata, India</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
