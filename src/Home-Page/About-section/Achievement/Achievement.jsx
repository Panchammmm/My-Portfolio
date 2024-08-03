import React from 'react';
import '../about.css';

const Achievement = () => {

    return (
        <section id="Achievements">
            <div className="flex justify-center lg:mb-16 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px" className="fill-[#c067ff] lg:size-14 size-12 pb-3 lg:pb-0 mr-2">
                    <path d="M28.64,4.15H71.36a2.56,2.56,0,0,1,2.56,2.56V32.42a23.92,23.92,0,1,1-47.84,0V6.71a2.56,2.56,0,0,1,2.56-2.56Zm2.82,84.5H68.54a1.92,1.92,0,0,1,1.91,1.91v3.38a1.92,1.92,0,0,1-1.91,1.91H31.46a1.91,1.91,0,0,1-1.91-1.91V90.56a1.92,1.92,0,0,1,1.91-1.91Zm3.81-5.29H64.73a1.92,1.92,0,0,1,1.91,1.91v1.09H33.36V85.27a1.92,1.92,0,0,1,1.91-1.91ZM46.14,68.88h7.72a8.88,8.88,0,0,1,8.85,8.87v3.32H37.29V77.75a8.88,8.88,0,0,1,8.85-8.87ZM76.2,9.8v5.34h8.12c.41,0,1.25,0,1.51.42a4.55,4.55,0,0,1,.31,2A21.7,21.7,0,0,1,84.87,25a22.52,22.52,0,0,1-3.77,6.65,26.39,26.39,0,0,1-5.22,4.91,26.28,26.28,0,0,1-2.53,7.76A35,35,0,0,0,85.22,35a28.07,28.07,0,0,0,4.65-8.21,27.3,27.3,0,0,0,1.6-9.22,9.09,9.09,0,0,0-1.15-4.85,6.71,6.71,0,0,0-6-2.92Zm-52.4,0H15.68a6.71,6.71,0,0,0-6,2.92,9.09,9.09,0,0,0-1.15,4.85,27.3,27.3,0,0,0,1.6,9.22A28.07,28.07,0,0,0,14.78,35a35,35,0,0,0,11.87,9.31,26.28,26.28,0,0,1-2.53-7.76,26.39,26.39,0,0,1-5.22-4.91A22.52,22.52,0,0,1,15.13,25a21.7,21.7,0,0,1-1.27-7.42,4.55,4.55,0,0,1,.31-2c.26-.41,1.1-.42,1.51-.42H23.8V9.8ZM54.6,66.62c.08-2.88.29-5.74.6-8.47a25.77,25.77,0,0,1-10.4,0c.31,2.73.52,5.59.6,8.47.24,0,.49,0,.74,0h7.72c.25,0,.5,0,.74,0ZM50.86,16.41a.95.95,0,0,0-1.72,0l-3,6.54a.93.93,0,0,1-.75.54l-7.14.88A1,1,0,0,0,37.66,26l5.27,4.92a.93.93,0,0,1,.28.88L41.84,38.9a.94.94,0,0,0,.38,1,.92.92,0,0,0,1,.06l6.3-3.49a.89.89,0,0,1,.92,0l6.3,3.49a.92.92,0,0,0,1-.06.94.94,0,0,0,.38-1l-1.37-7.08a.93.93,0,0,1,.28-.88L62.34,26a1,1,0,0,0-.54-1.65l-7.14-.88a.93.93,0,0,1-.75-.54Z" />
                </svg>
                <h1 className="title-gradi lg:text-[45px] text-[35px] font-[700] text-center leading-[1.2]">Achievements</h1>
            </div>

            <div className="achi-container">

                <div className="achi-box group">
                    <div className="achi-content">
                        JLPT N5
                        <div className="my-auto group-hover:rotate-180 duration-300 ease-in-out">
                            <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="fill-[#ddd] group-hover:fill-[#888]">
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="achi-hidden-section">Japanese Language Profficency Level N5</div>
                </div>

                <div className="achi-box group">
                    <div className="achi-content">
                        HackerRank 5stars
                        <div className="my-auto group-hover:rotate-180 duration-300 ease-in-out">
                            <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="fill-[#ddd] group-hover:fill-[#888]">
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="achi-hidden-section">Achieving 5 stars in hackerRank</div>
                </div>

            </div>
        </section>
    );
};

export default Achievement;