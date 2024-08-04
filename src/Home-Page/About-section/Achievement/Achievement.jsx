import React from 'react';
import { useTranslation } from 'react-i18next';
import '../about.css';

const achievements = [
    {
        titleKey: "achievement.JLPTN5.title",
        descriptionKey: "achievement.JLPTN5.description"
    },
    {
        titleKey: "achievement.HackerRank5Stars.title",
        descriptionKey: "achievement.HackerRank5Stars.description"
    }
];

const Achievement = () => {
    const { t } = useTranslation();

    return (
        <div className="mb-14 lg:mb-0">
            <div className="flex justify-center mb-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" className="fill-[#c067ff] lg:size-14 size-12 mr-1 align-bottom">
                    <path d="M28.64,4.15H71.36a2.56,2.56,0,0,1,2.56,2.56V32.42a23.92,23.92,0,1,1-47.84,0V6.71a2.56,2.56,0,0,1,2.56-2.56Zm2.82,84.5H68.54a1.92,1.92,0,0,1,1.91,1.91v3.38a1.92,1.92,0,0,1-1.91,1.91H31.46a1.91,1.91,0,0,1-1.91-1.91V90.56a1.92,1.92,0,0,1,1.91-1.91Zm3.81-5.29H64.73a1.92,1.92,0,0,1,1.91,1.91v1.09H33.36V85.27a1.92,1.92,0,0,1,1.91-1.91ZM46.14,68.88h7.72a8.88,8.88,0,0,1,8.85,8.87v3.32H37.29V77.75a8.88,8.88,0,0,1,8.85-8.87ZM76.2,9.8v5.34h8.12c.41,0,1.25,0,1.51.42a4.55,4.55,0,0,1,.31,2A21.7,21.7,0,0,1,84.87,25a22.52,22.52,0,0,1-3.77,6.65,26.39,26.39,0,0,1-5.22,4.91,26.28,26.28,0,0,1-2.53,7.76A35,35,0,0,0,85.22,35a28.07,28.07,0,0,0,4.65-8.21,27.3,27.3,0,0,0,1.6-9.22,9.09,9.09,0,0,0-1.15-4.85,6.71,6.71,0,0,0-6-2.92Zm-52.4,0H15.68a6.71,6.71,0,0,0-6,2.92,9.09,9.09,0,0,0-1.15,4.85,27.3,27.3,0,0,0,1.6,9.22A28.07,28.07,0,0,0,14.78,35a35,35,0,0,0,11.87,9.31,26.28,26.28,0,0,1-2.53-7.76,26.39,26.39,0,0,1-5.22-4.91A22.52,22.52,0,0,1,15.13,25a21.7,21.7,0,0,1-1.27-7.42,4.55,4.55,0,0,1,.31-2c.26-.41,1.1-.42,1.51-.42H23.8V9.8ZM54.6,66.62c.08-2.88.29-5.74.6-8.47a25.77,25.77,0,0,1-10.4,0c.31,2.73.52,5.59.6,8.47.24,0,.49,0,.74,0h7.72c.25,0,.5,0,.74,0ZM50.86,16.41a.95.95,0,0,0-1.72,0l-3,6.54a.93.93,0,0,1-.75.54l-7.14.88A1,1,0,0,0,37.66,26l5.27,4.92a.93.93,0,0,1,.28.88L41.84,38.9a.94.94,0,0,0,.38,1,.92.92,0,0,0,1,.06l6.3-3.49a.89.89,0,0,1,.92,0l6.3,3.49a.92.92,0,0,0,1-.06.94.94,0,0,0,.38-1l-1.37-7.08a.93.93,0,0,1,.28-.88L62.34,26a1,1,0,0,0-.54-1.65l-7.14-.88a.93.93,0,0,1-.75-.54Z" />
                </svg>
                <h1 className="title-gradi lg:text-[45px] text-[35px] font-[700] text-center leading-[1.2]">
                    {t('achievement.title')}
                </h1>
            </div>

            <div className="achi-container">
                {achievements.map((achievement, index) => (
                    <div key={index} className="achi-box group">
                        <div className="achi-content">
                            {t(achievement.titleKey)}
                            <div className="plus-minus-container">
                                <span className="horizontal"></span>
                                <span className="vertical group-hover:rotate-0"></span>
                            </div>
                        </div>
                        <div className="achi-hidden-section">{t(achievement.descriptionKey)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievement;