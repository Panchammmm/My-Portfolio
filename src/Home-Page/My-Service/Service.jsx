import React from "react";
import { useTranslation } from 'react-i18next';
import './service.css';
import ServCard from "./ServCard";

export default function Service() {
    const { t } = useTranslation();

    return (
        <section id="Services" className="mx-auto pt-[120px] lg:pb-[110px] pb-[90px]">
            <h1 className="my-service lg:text-[45px] text-[33px] font-[700] text-center leading-[1.2]">{t('MyQualityServices')}</h1>
            <p className="sm:px-[14vw] px-[10vw] text-center text-des tracking-[0.5px] mt-[15px] mb-4">{t('ServiceDescription')}</p>

            <ServCard />
        </section>
    );
}
