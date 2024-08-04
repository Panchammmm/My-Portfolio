import React, { useState } from "react";
import './contact.css';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import useWeb3Forms from "@web3forms/react";
import wapp from "../../assets/wapp.svg";
import email from "../../assets/email.svg";
import location from "../../assets/location.svg";

export default function Contact() {
    const { t } = useTranslation();
    const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm();
    const [result, setResult] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const accessKey = "4487efde-7c51-4aeb-8af3-96b3ec5a49e9";

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey,
        settings: {
            from_name: "My Portfolio",
            subject: "Portfolio Enquiry",
        },
        onSuccess: (msg, data) => {
            setIsSuccess(true);
            setResult(msg);
            reset();
        },
        onError: (msg, data) => {
            setIsSuccess(false);
            setResult(msg);
        },
    });

    return (
        <section id="Contact" className="bg-sectionBg pt-[160px] pb-[350px] flex flex-wrap justify-center gap-[8rem]">
            <div className="form-container my-auto">
                <h1 className="contact-text">{t("Let's Create Something Amazing together!")}</h1>
                <p className="tracking-[0.3px] mb-8 text-slate-200 text-base pr-3">
                    {t("contact des")}
                </p>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="name">{t("Name")}</label>
                        <input
                            required
                            className="email"
                            id="name"
                            type="text"
                            placeholder={t("full name..")}
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">{t("Email")}</label>
                        <input
                            required
                            className="email"
                            id="email"
                            type="email"
                            placeholder={t("email id..")}
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t("Message")}</label>
                        <textarea
                            required
                            id="message"
                            className="textarea"
                            placeholder={t("message here..")}
                            {...register("message", { required: true })}
                        />
                    </div>
                    <button type="submit" className="form-submit-btn">{t("Hire me!")}</button>
                </form>

                {isSubmitSuccessful && (
                    <div
                        className={`mt-3 ml-1 text-sm ${isSuccess ? 'text-[#d5baff]' : 'text-red-500'}`}
                        role="alert"
                        aria-live="polite"
                    >
                        {result || (isSuccess ? "Success. Message sent successfully" : "Something went wrong. Please try later.")}
                    </div>
                )}
            </div>

            <div className="contact-info my-auto">
                <div className="contact-item">
                    <img src={wapp} alt="whatsapp" className="contact-icon" />
                    <div className="my-auto">
                        <h3 className="contact-label">{t("Whatsapp")}</h3>
                        <a href="https://wa.me/918670035037" target="_blank" rel="noopener noreferrer">
                            <p className="contact-detail">+91 86700 35037</p>
                        </a>
                    </div>
                </div>

                <div className="contact-item">
                    <img src={email} alt="email" className="contact-icon" />
                    <div>
                        <h3 className="contact-label">{t("Email")}</h3>
                        <a href="mailto:sardarpancham510510@gmail.com" target="_blank" rel="noopener noreferrer">
                            <p className="contact-detail">sardarpancham510510@gmail.com</p>
                        </a>
                    </div>
                </div>

                <div className="contact-item">
                    <img src={location} alt="location" className="contact-icon" />
                    <div>
                        <h3 className="contact-label">{t("Based on")}</h3>
                        <a href="https://www.google.com/maps/search/?api=1&query=Kolkata,+India" target="_blank" rel="noopener noreferrer">
                            <p className="contact-detail">{t("Kolkata, India")}</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}