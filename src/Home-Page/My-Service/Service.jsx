import React from "react";
import { useTranslation } from 'react-i18next';
import './service.css';
import ServCard from "./ServCard";

export default function Service() {
    const { t } = useTranslation();

    return (
        <section id="Services" className="mx-auto pt-[120px] lg:pb-[110px] pb-[90px]">

            <div className="flex justify-center">
                <h1 className="my-service lg:text-[45px] text-[35px] font-[700] text-center leading-[1.2]">{t('MyQualityServices')}</h1>
            </div>
            <p className="w-[90%] lg:w-[45%] mx-auto text-center text-des tracking-[0.5px] mt-[15px] mb-4">{t('ServiceDescription')}</p>

            <ServCard />

        </section>
    );
}
