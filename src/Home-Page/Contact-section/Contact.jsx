import React from "react";
import './contact.css';

export default function Contact() {
    return (
        <div className="bg-black pt-[140px] pb-[130px] flex flex-wrap justify-around">

            <div className="form-container">
                <h1 className="contact-text">Let’s work together!</h1>
                <p className="tracking-[0.3px] mb-8 text-slate-200 text-base pr-3">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                <form className="form">
                    <div className="form-group">
                        <label for="email">Name</label>
                        <input required="" className="email" id="email" type="text" placeholder="full name.." />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input required="" className="email" id="email" type="text" placeholder="email id.."/>
                    </div>
                    <div className="form-group">
                        <label for="textarea">Message</label>
                        <textarea required="" id="textarea" className="textarea" placeholder="message here.."/>
                    </div>
                    <button type="submit" className="form-submit-btn">Hire me!</button>
                </form>
            </div>
            
        </div>
    )
}